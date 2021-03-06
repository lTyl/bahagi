/**
 * Interface for a component containing both mandatory and optional properties.
 */
export interface IComponent<T> {
    constructor?(...args: any[]): T;
    active?: any;
    tag?: any;
    update?: any;
    destroy?: any;
}
