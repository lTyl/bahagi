/**
 * This are events that the EntityCollection class emits
 *
 * 1. entityAdded = Emitted when a new entity has been added. It has one argument, which is the new entity
 * 2. entityRemoved = Emitted when an entity has been removed. It has one argument, which is the entity removed.
 */
export declare enum EntityCollectionEvents {
    "ENTITY_ADDED" = "entityAdded",
    "ENTITY_REMOVED" = "entityRemoved",
}
