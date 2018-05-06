import {IEntity, Utils, EntityCollectionEvents, IComponent} from "../common";
import { EventEmitter } from "eventemitter3";
import * as fast from 'fast.js';
/**
 * The EntityCollection class is responsible for managing our entities. In this implementation, the EntityCollection considers
 * any entity that has a "components" key with the ComponentCollection type to be valid.
 */
export class EntityCollection extends EventEmitter {
	/**
	 * Contains all of our currently tracked entities.
	 * @type {any[]}
	 */
	public entities: IEntity[] = [];
	/**
	 * Contains all entities which have been tagged (They have a property called "tag" with string type)
	 * @type {Map<any, any>}
	 * @private
	 */
	private _entitiesByTag: Map<string, IEntity[]> = new Map();
	/**
	 * The total number of entities currently in this collection.
	 * @type {number}
	 * @private
	 */
	private _count: number = 0;
	constructor(){
		super();
	};
	/**
	 * Adds a new entity (Or entities) to the cache for tracking. When added, the EntityCollection will sort the entity appropriately.
	 * @param {IEntity} entities
	 */
	public add(...entities: IEntity[]): void {
		fast.forEach(entities, (entity: IEntity) => {
			this.entities.push(entity);

			let tag = entity["tag"];
			if (tag){
				let tagList: IEntity[] = this._entitiesByTag.get(tag);
				if (tagList){
					tagList.push(entity);
				} else {
					this._entitiesByTag.set(tag, [entity])
				}
			}

			this.emit(EntityCollectionEvents.ENTITY_ADDED, entity);
			this._count++;
		}, null);
	}
	/**
	 * Called to remove an entity from the EntityCollection. This will also call the "destroy()" method on the ComponentCollection
	 * @param {IEntity} entity
	 */
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
	/**
	 * Returns an array of all tracked entities
	 * @returns {IEntity[]}
	 */
	public getAll(): IEntity[] {
		return this.entities;
	}
	/**
	 * Returns an array of entities which matches the provided tag
	 * @param {string} tag
	 * @returns {IEntity[] | null}
	 */
	public getByTag(tag: string): IEntity[]|null {
		return this._entitiesByTag.get(tag)
	}
	/**
	 * Returns the first entity in an array which matches the provided tag
	 * @param {string} tag
	 * @returns {IEntity | null}
	 */
	public getFirstByTag(tag: string): IEntity|null {
		let tagList = this._entitiesByTag.get(tag);
		return (tagList && tagList.length >= 0) ? tagList[0] : null;
	}
	/**
	 * Returns an array of entities which contains the component of type <T>
	 * @param component
	 * @returns {IEntity[]}
	 */
	public getByComponent<T>(component: any): IEntity[] {
		return fast.filter(this.entities, (entity => entity.components.contains(component)));
	}
	/**
	 * Returns a flattened array of _all_ components matching type <T> This method is useful when you are working with
	 * systems. Instead of traversing with nested lists to find the components you want, you can invoke this and receive
	 * a list of components that match the type you are seeking.
	 * @param component
	 * @returns {IComponent<any>[]}
	 */
	public getAllComponentsWithType<T>(component: any): IComponent<any>[] {
		let componentMap = fast.map(this.entities, (entity) => {
			return entity.components.contains(component);
		});
		return Utils.flatten(componentMap)
	}
	/**
	 * Returns the total amount of entities in this collection.
	 * @returns {number}
	 */
	public getCount(){
		return this._count;
	}
	/**
	 * When invoked, this will call `EntityCollection.remove()` on each entity
	 */
	public destroy(): void {
		// Iterate through all entities and remove them. This also calls the .destroy() function for each ComponentCollection.
		fast.forEach(this.entities, (entity) => {
			this.remove(entity);
		}, null);

		this.entities = null;
		this._entitiesByTag.clear();

		this._entitiesByTag = null;
	}
}