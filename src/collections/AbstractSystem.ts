import { EntityCollection } from "./";
import { IEntity, EntityCollectionEvents } from "../common";
import { EventEmitter } from "eventemitter3";
/**
 * The AbstractSystem class is a _mostly_ stubbed out class to provide a simple foundation for building out your systems.
 * The default behaviour of this abstract class is to accept an EntityCollection as the first parameter in the constructor
 * and then setup event listeners for the ENTITY_ADDED and ENTITY_REMOVED events. From there, it calls out stubbed functions
 * depending on the event received: onEntityAdded for when an entity is added and onEntityRemoved for when an entity is removed.
 * Further, the destroy() method in the AbstractSystem is used to clean-up the registered listeners on the EntityCollection.
 *
 * The AbstractSystem is intentionally bare, since the logic for your systems will be dependent on both your game and the function
 * of the system.
 */
export abstract class AbstractSystem extends EventEmitter {
	/**
	 * Stores the EntityCollection this system is watching.
	 */
	private _collection: EntityCollection;
	constructor(entities: EntityCollection){
		super();
		this._collection = entities;

		this._collection.on(EntityCollectionEvents.ENTITY_ADDED, this.onEntityAdded);
		this._collection.on(EntityCollectionEvents.ENTITY_REMOVED, this.onEntityRemoved);
	}
	/**
	 * STUBBED: Extend this method with your logic for when new entities are added to the collection
	 * @param {IEntity} entity The new entity that was added to the collection.
	 */
	public onEntityAdded = (entity: IEntity) => {};
	/**
	 * STUBBED: Extend this method with your logic for when an entity has been removed from the collection
	 * @param {IEntity} entity The entity that has been removed from the collection.
	 */
	public onEntityRemoved = (entity: IEntity) => {};
	/**
	 * STUBBED: Call this method when you need to update the system or the components this system is responsible for.
	 * Example usage: Call your MySystem.update(delta) in your main loop, then have your MySystem call Component<T>.update(delta)
	 * on each component.
	 * @param {number} delta Optional: The delay from last frame to current frame.
	 */
	public update(delta?: number){};
	/**
	 * STUBBED: Call this to clean up event listeners.
	 */
	public destroy(): void{
		this._collection.off(EntityCollectionEvents.ENTITY_ADDED, this.onEntityAdded);
		this._collection.off(EntityCollectionEvents.ENTITY_REMOVED, this.onEntityRemoved);
	};
}