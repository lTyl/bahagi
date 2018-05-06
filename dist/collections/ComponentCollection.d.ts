import { IComponent } from "../common";
import { EventEmitter } from "eventemitter3";
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
export declare class ComponentCollection extends EventEmitter {
    /**
     * Private cache of all components
     */
    private _allComponents;
    /**
     * Private cache of all components sorted by their type
     */
    private _componentsByType;
    /**
     * Private cache of all components sorted by their tag
     */
    private _componentsByTag;
    /**
     * The total amount of components that exist in this collection.
     */
    private _count;
    constructor();
    /**
     * Called when you want to add a new component to the ComponentCollection
     * @param components A single or multple components you wish to add.
     */
    add(...components: any[]): void;
    /**
     * Used to remove a component from the component collection. Note, this can be slow so it is suggested you use it sparingly.
     * Instead, build in an 'active' state into your components and have your systems respect it.
     * @param component The component to remove
     */
    remove(component: any): void;
    /**
     * Returns _all_ components currently in the component collection
     */
    getAll(): IComponent<any>[];
    /**
     * Returns an array of components of the given type.
     * @param {IComponent<T>} component
     * @returns {IComponent<T>[] | any | null}
     */
    getByType<T>(component: IComponent<T>): IComponent<T>[] | null | any;
    /**
     * Returns the _first_ element in an array by the given type.
     * @param {IComponent<T>} component
     * @returns {IComponent<T> | null}
     */
    getFirstByType<T>(component: IComponent<T>): IComponent<T> | null;
    /**
     * Return an array of components by the provided tag
     * @param {string} tag
     * @returns {IComponent<any>[] | null}
     */
    getByTag(tag: string): IComponent<any>[] | null;
    /**
     * Returns the first element in an array by the provided tag
     * @param {string} tag
     * @returns {IComponent<any> | null}
     */
    getFirstByTag(tag: string): IComponent<any> | null;
    /**
     * Returns an array of components matching the provided type.
     * @param {IComponent<T>} component
     * @returns {IComponent<T>[] | null}
     */
    contains<T>(component: IComponent<T>): IComponent<T>[] | null;
    /**
     * Returns the total amount of components in the collection
     * @returns {number}
     */
    getCount(): number;
    /**
     * When you want to clean-up a collection, invoke this method. This will clean all caches
     */
    destroy(): void;
}
