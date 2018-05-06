import {IEntity, Utils, EntityCollectionEvents, IComponent} from "../common";
import { EventEmitter } from "eventemitter3";
import * as fast from 'fast.js';

export class EntityCollection extends EventEmitter {
	public entities: IEntity[] = [];
	private _entitiesByTag: Map<string, IEntity[]> = new Map();
	private _count: number = 0;
	constructor(){
		super();
	};
	public add(...entities: IEntity[]): void {
		fast.forEach(entities, (entity: IEntity) => {
			this.entities.push(entity);

			let tag = entity["tag"];
			if (tag){
				let tagList: IEntity[] = this._entitiesByTag.get(tag);
				if (tagList){
					tagList.push(entity);
				} else {
					this._entitiesByTag.set(Utils.getComponentType(entity), [entity])
				}
			}

			this.emit(EntityCollectionEvents.ENTITY_ADDED, entity);
			this._count++;
		}, null);
	}

	public remove(entity: IEntity): void {
		// Clean the main entity cache
		Utils.cleanCache(this.entities, entity);

		let tag = entity["tag"];
		let tagList = this._entitiesByTag.get(tag);
		if (tagList){
			Utils.cleanCache(tagList, entity);
		}

		// Destroy entity components.
		entity.components.destroy();

		this._count--;

		this.emit(EntityCollectionEvents.ENTITY_REMOVED, entity);
	}

	public getAll(): IEntity[] {
		return this.entities;
	}

	public getByTag(tag: string): IEntity[]|null {
		return this._entitiesByTag.get(tag)
	}

	public getFirstByTag(tag: string): IEntity|null {
		let tagList = this._entitiesByTag.get(tag);
		return (tagList && tagList.length >= 0) ? tagList[0] : null;
	}

	public getByComponent<T>(component: any): IEntity[] {
		return this.entities.filter(entity => entity.components.contains(component));
	}

	public destroy(): void {
		// Iterate through all entities and remove them. This also calls the .destroy() function on each component.
		fast.forEach(this.entities, (entity) => {
			this.remove(entity);
		}, null);

		this.entities = [];
		this._entitiesByTag.clear();
	}
}