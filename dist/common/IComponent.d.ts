/**
 * Interface for a component containing both mandatory and optional properties.
 */
export interface IComponent<T> {
    new (...args: any[]): T;
    active?: boolean;
    tag?: string;
    update?: void;
    destroy?: void;
}
