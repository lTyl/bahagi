"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("../common");
const eventemitter3_1 = require("eventemitter3");
const fast = require("fast.js");
/**
 * The ComponentCollection class provides an interface for managing our components. It's purpose is to track multiple
 * caches of components and to expose public methods for retrieving or manipulating those components. By default, the
 * ComponentCollection maintains the following caches:
 *
 * 1. allComponents: Array[] = This is simply an array containing all components in this collection
 * 2. componentsByType: Map<string, IComponent> = This is a Map storing an array of IComponents with the key being the common 'type' for that component.
 * 3. componentsByTag: Map<string, IComponent> = This is a Map storing an array of IComponents with the key being a property on the component called "tag".
 *
 * By breaking down our cache into multiple list, we gain a slight performance boost when doing reads when our component collection has _many_
 * components.
 */
class ComponentCollection extends eventemitter3_1.EventEmitter {
    constructor() {
        super();
        /**
         * Private cache of all components
         */
        this._allComponents = [];
        /**
         * Private cache of all components sorted by their type
         */
        this._componentsByType = new Map();
        /**
         * Private cache of all components sorted by their tag
         */
        this._componentsByTag = new Map();
        /**
         * The total amount of components that exist in this collection.
         */
        this._count = 0;
    }
    /**
     * Called when you want to add a new component to the ComponentCollection
     * @param components A single or multple components you wish to add.
     */
    add(...components) {
        fast.forEach(components, (component) => {
            // Add to all component list
            this._allComponents.push(component);
            let componentType = common_1.Utils.getComponentType(component);
            // Check to see if a component of <T> already exists
            let typeList = this._componentsByType.get(componentType);
            if (typeList) {
                // Component exists, add to the IComponent<T>[] array
                typeList.push(component);
            }
            else {
                // Component does not exist. Set it and create a new array with the component.
                this._componentsByType.set(componentType, [component]);
            }
            // If component has a "tag" property set, add it to our tag sorted lists
            if (component["tag"]) {
                let tagList = this._componentsByTag.get(component["tag"]);
                if (tagList) {
                    // Component exists, add to the IComponent<T>[] array
                    tagList.push(component);
                }
                else {
                    // Component does not exist. Set it and create a new array with the component.
                    this._componentsByTag.set(component["tag"], [component]);
                }
            }
            // Increase total component count
            this._count++;
            // Dispatch added signal
            this.emit(common_1.ComponentCollectionEvents.COMPONENT_ADDED, component);
        }, null);
    }
    /**
     * Used to remove a component from the component collection. Note, this can be slow so it is suggested you use it sparingly.
     * Instead, build in an 'active' state into your components and have your systems respect it.
     * @param component The component to remove
     */
    remove(component) {
        // Get the component 'type' and the typeList, if possible
        let type = common_1.Utils.getComponentType(component);
        let typeList = this._componentsByType.get(type);
        // Get the component tag and tagList, if possible.
        let tag = component["tag"] || null;
        let tagList = this._componentsByTag.get(tag);
        // Clean up all component caches...
        common_1.Utils.cleanCache(this._allComponents, component);
        if (type && typeList) {
            // Purge the type list of this component
            common_1.Utils.cleanCache(typeList, component);
        }
        if (tag && tagList) {
            // Purge the tag list of this component
            common_1.Utils.cleanCache(tagList, component);
        }
        this._count--;
        if (component["destroy"]) {
            component.destroy();
        }
        this.emit(common_1.ComponentCollectionEvents.COMPONENT_REMOVED, component);
    }
    /**
     * Returns _all_ components currently in the component collection
     */
    getAll() {
        return this._allComponents;
    }
    /**
     * Returns an array of components of the given type.
     * @param {IComponent<T>} component
     * @returns {IComponent<T>[] | any | null}
     */
    getByType(component) {
        return this._componentsByType.get(common_1.Utils.getConstructorType(component));
    }
    /**
     * Returns the _first_ element in an array by the given type.
     * @param {IComponent<T>} component
     * @returns {IComponent<T> | null}
     */
    getFirstByType(component) {
        let typeList = this._componentsByType.get(common_1.Utils.getConstructorType(component));
        return (typeList && typeList.length >= 0) ? typeList[0] : null;
    }
    /**
     * Return an array of components by the provided tag
     * @param {string} tag
     * @returns {IComponent<any>[] | null}
     */
    getByTag(tag) {
        return this._componentsByTag.get(tag);
    }
    /**
     * Returns the first element in an array by the provided tag
     * @param {string} tag
     * @returns {IComponent<any> | null}
     */
    getFirstByTag(tag) {
        let tagList = this._componentsByTag.get(tag);
        return (tagList && tagList.length >= 0) ? tagList[0] : null;
    }
    /**
     * Returns an array of components matching the provided type.
     * @param {IComponent<T>} component
     * @returns {IComponent<T>[] | null}
     */
    contains(component) {
        return this._componentsByType.get(common_1.Utils.getConstructorType(component));
    }
    /**
     * Returns the total amount of components in the collection
     * @returns {number}
     */
    getCount() {
        return this._count;
    }
    /**
     * When you want to clean-up a collection, invoke this method. This will clean all caches
     */
    destroy() {
        // The reason we iterate through all components is because the remove() method calls the destroy() method on a
        // component, if it exists. This way, you can set-up clean-up code specific to the component.
        fast.forEach(this._allComponents, (component) => {
            this.remove(component);
        }, null);
        this._allComponents = null;
        this._componentsByType.clear();
        this._componentsByTag.clear();
        this._componentsByType = null;
        this._componentsByTag = null;
    }
}
exports.ComponentCollection = ComponentCollection;
//# sourceMappingURL=ComponentCollection.js.map