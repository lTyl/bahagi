import { IComponent, ComponentCollectionEvents, Utils } from "../common";
import { EventEmitter } from "eventemitter3";
import * as fast from 'fast.js'

export class ComponentCollection extends EventEmitter {
	private _allComponents: IComponent<any>[] = [];
	private _componentsByType: Map<string, IComponent<any>[]> = new Map();
	private _componentsByTag: Map<string, IComponent<any>[]> = new Map();
	private _count: number = 0;

	constructor(){super();}

	public add(...components: any[]): void {
		fast.forEach(components, (component: any) =>{
			// Add to all component list
			this._allComponents.push(component);

			let componentType = Utils.getComponentType(component);

			// Check to see if a component of <T> already exists
			let typeList: IComponent<any>[]|null = this._componentsByType.get(componentType);
			if (typeList){
				// Component exists, add to the IComponent<T>[] array
				typeList.push(component);
			} else {
				// Component does not exist. Set it and create a new array with the component.
				this._componentsByType.set(componentType, [component]);
			}

			// If component has a "tag" property set, add it to our tag sorted lists
			if (component["tag"]){
				let tagList: IComponent<any>[]|null = this._componentsByTag.get(component["tag"]);
				if (tagList){
					// Component exists, add to the IComponent<T>[] array
					tagList.push(component);
				} else {
					// Component does not exist. Set it and create a new array with the component.
					this._componentsByTag.set(component["tag"], [component]);
				}
			}

			// Increase total component count
			this._count++;

			// Dispatch added signal
			this.emit(ComponentCollectionEvents.COMPONENT_ADDED, component);
		}, null)
	}

	public remove(component: any): void {
		// Get the component 'type' and the typeList, if possible
		let type = Utils.getComponentType(component);
		let typeList = this._componentsByType.get(type);

		// Get the component tag and tagList, if possible.
		let tag = component["tag"] || null;
		let tagList = this._componentsByTag.get(tag);

		// Clean up all component caches...
		Utils.cleanCache(this._allComponents, component);
		if (type && typeList){
			// Purge the type list of this component
			Utils.cleanCache(typeList, component);
		}

		if (tag && tagList){
			// Purge the tag list of this component
			Utils.cleanCache(tagList, component);
		}

		this._count--;

		this.emit(ComponentCollectionEvents.COMPONENT_REMOVED, component);
	}

	public getAll(): IComponent<any>[] {
		return this._allComponents
	}

	public getByType<T>(component: IComponent<T>): IComponent<T>[]|null|any {
		return this._componentsByType.get(Utils.getConstructorType(component));
	}

	public getFirstByType<T>(component: IComponent<T>): IComponent<T>|null {
		let typeList = this._componentsByType.get(Utils.getConstructorType(component));
		return (typeList && typeList.length >= 0) ? typeList[0] : null;
	}

	public getByTag(tag: string): IComponent<any>[]|null{
		return this._componentsByTag.get(tag);
	}

	public getFirstByTag(tag: string): IComponent<any>|null {
		let tagList = this._componentsByTag.get(tag);
		return (tagList && tagList.length >= 0) ? tagList[0] : null;
	}

	public contains<T>(component: IComponent<T>): IComponent<T>[]|null {
		return this._componentsByType.get(Utils.getConstructorType(component));
	}

	public destroy(): void {
		fast.forEach(this._allComponents, (component: IComponent<any>) => {
			this.remove(component);
		}, null);
		this._allComponents = [];
		this._componentsByType.clear();
		this._componentsByTag.clear();
	}

}