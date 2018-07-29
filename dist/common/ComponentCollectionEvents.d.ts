/**
 * These are the events that the ComponentCollection emits.
 *
 * 1. componentAdded = Emitted when a new component has been added. It has one argument, which is the new components.
 * 2. componentRemoved = Emitted when a component has been removed. It has one argument, which is the component removed.
 */
export declare enum ComponentCollectionEvents {
    "COMPONENT_ADDED" = "componentAdded",
    "COMPONENT_REMOVED" = "componentRemoved"
}
