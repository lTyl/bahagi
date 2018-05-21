import { IEntity, IComponent } from "../common";
import { EventEmitter } from "eventemitter3";
/**
 * The EntityCollection class is responsible for managing our entities. In this implementation, the EntityCollection considers
 * any entity that has a "components" key with the ComponentCollection type to be valid.
 */
export declare class EntityCollection extends EventEmitter {
    /**
     * Contains all of our currently tracked entities.
     * @type {any[]}
     */
    entities: IEntity[];
    /**
     * Contains all entities which have been tagged (They have a property called "tag" with string type)
     * @type {Map<any, any>}
     * @private
     */
    private _entitiesByTag;
    /**
     * The total number of entities currently in this collection.
     * @type {number}
     * @private
     */
    private _count;
    constructor();
    /**
     * Adds a new entity (Or entities) to the cache for tracking. When added, the EntityCollection will sort the entity appropriately.
     * @param {IEntity} entities
     */
    add(...entities: IEntity[]): void;
    /**
     * Called to remove an entity from the EntityCollection. This will also call the "destroy()" method on the ComponentCollection
     * @param {IEntity} entity
     */
    remove(entity: IEntity): void;
    /**
     * Returns an array of all tracked entities
     * @returns {IEntity[]}
     */
    getAll(): IEntity[];
    /**
     * Returns an array of entities which matches the provided tag
     * @param {string} tag
     * @returns {IEntity[] | null}
     */
    getByTag(tag: string): IEntity[] | null;
    /**
     * Returns the entity that matches the provided entity instance. Uses lazy match.
     * @param instance The instance of the entity to find
     * @returns {any}
     */
    getByInstance(instance: any): any;
    /**
     * Returns the first entity in an array which matches the provided tag
     * @param {string} tag
     * @returns {IEntity | null}
     */
    getFirstByTag(tag: string): IEntity | null;
    /**
     * Returns an array of entities which contains the component of type <T>
     * @param component
     * @returns {IEntity[]}
     */
    getByComponent<T>(component: any): IEntity[];
    /**
     * Returns a flattened array of _all_ components matching type <T> This method is useful when you are working with
     * systems. Instead of traversing with nested lists to find the components you want, you can invoke this and receive
     * a list of components that match the type you are seeking.
     * @param component
     * @returns {IComponent<any>[]}
     */
    getAllComponentsWithType<T>(component: any): IComponent<any>[];
    /**
     * Returns the total amount of entities in this collection.
     * @returns {number}
     */
    getCount(): number;
    /**
     * When invoked, this will call `EntityCollection.remove()` on each entity
     */
    destroy(): void;
}
