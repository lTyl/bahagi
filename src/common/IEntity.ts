import { ComponentCollection } from "../collections";

export interface IEntity {
	components: ComponentCollection,
	tag?: string
}