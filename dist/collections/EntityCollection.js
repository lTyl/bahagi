"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("../common");
const eventemitter3_1 = require("eventemitter3");
const fast = require("fast.js");
/**
 * The EntityCollection class is responsible for managing our entities. In this implementation, the EntityCollection considers
 * any entity that has a "components" key with the ComponentCollection type to be valid.
 */
class EntityCollection extends eventemitter3_1.EventEmitter {
    constructor() {
        super();
        /**
         * Contains all of our currently tracked entities.
         * @type {any[]}
         */
        this.entities = [];
        /**
         * Contains all entities which have been tagged (They have a property called "tag" with string type)
         * @type {Map<any, any>}
         * @private
         */
        this._entitiesByTag = new Map();
        /**
         * The total number of entities currently in this collection.
         * @type {number}
         * @private
         */
        this._count = 0;
    }
    ;
    /**
     * Adds a new entity (Or entities) to the cache for tracking. When added, the EntityCollection will sort the entity appropriately.
     * @param {IEntity} entities
     */
    add(...entities) {
        fast.forEach(entities, (entity) => {
            this.entities.push(entity);
            let tag = entity["tag"];
            if (tag) {
                let tagList = this._entitiesByTag.get(tag);
                if (tagList) {
                    tagList.push(entity);
                }
                else {
                    this._entitiesByTag.set(tag, [entity]);
                }
            }
            this.emit(common_1.EntityCollectionEvents.ENTITY_ADDED, entity);
            this._count++;
        }, null);
    }
    /**
     * Called to remove an entity from the EntityCollection. This will also call the "destroy()" method on the ComponentCollection
     * @param {IEntity} entity
     */
    remove(entity) {
        // Clean the main entity cache
        common_1.Utils.cleanCache(this.entities, entity);
        let tag = entity["tag"];
        let tagList = this._entitiesByTag.get(tag);
        if (tagList) {
            common_1.Utils.cleanCache(tagList, entity);
        }
        // Destroy entity components.
        entity.components.destroy();
        this._count--;
        this.emit(common_1.EntityCollectionEvents.ENTITY_REMOVED, entity);
    }
    /**
     * Returns an array of all tracked entities
     * @returns {IEntity[]}
     */
    getAll() {
        return this.entities;
    }
    /**
     * Returns an array of entities which matches the provided tag
     * @param {string} tag
     * @returns {IEntity[] | null}
     */
    getByTag(tag) {
        return this._entitiesByTag.get(tag);
    }
    /**
     * Returns the first entity in an array which matches the provided tag
     * @param {string} tag
     * @returns {IEntity | null}
     */
    getFirstByTag(tag) {
        let tagList = this._entitiesByTag.get(tag);
        return (tagList && tagList.length >= 0) ? tagList[0] : null;
    }
    /**
     * Returns an array of entities which contains the component of type <T>
     * @param component
     * @returns {IEntity[]}
     */
    getByComponent(component) {
        return fast.filter(this.entities, (entity => entity.components.contains(component)));
    }
    /**
     * Returns a flattened array of _all_ components matching type <T> This method is useful when you are working with
     * systems. Instead of traversing with nested lists to find the components you want, you can invoke this and receive
     * a list of components that match the type you are seeking.
     * @param component
     * @returns {IComponent<any>[]}
     */
    getAllComponentsWithType(component) {
        let componentMap = fast.map(this.entities, (entity) => {
            return entity.components.contains(component);
        });
        return common_1.Utils.flatten(componentMap);
    }
    /**
     * Returns the total amount of entities in this collection.
     * @returns {number}
     */
    getCount() {
        return this._count;
    }
    /**
     * When invoked, this will call `EntityCollection.remove()` on each entity
     */
    destroy() {
        // Iterate through all entities and remove them. This also calls the .destroy() function for each ComponentCollection.
        fast.forEach(this.entities, (entity) => {
            this.remove(entity);
        }, null);
        this.entities = null;
        this._entitiesByTag.clear();
        this._entitiesByTag = null;
    }
}
exports.EntityCollection = EntityCollection;
//# sourceMappingURL=EntityCollection.js.map