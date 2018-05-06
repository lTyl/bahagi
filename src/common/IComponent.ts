export interface IComponent<T> {
	new (...args: any[]): T;
	active?: boolean;
	tag?: string;
	update?: void;
	destroy?: void;
}