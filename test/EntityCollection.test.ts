import { EntityCollection, ComponentCollection } from "../src/collections";

import * as mocha from 'mocha';
import * as chai from 'chai';

const expect = chai.expect;
describe('EntityCollection tests', () => {
	it('should add an entity and retrieve it' , () => {
		let myEntity = {
			components: new ComponentCollection()
		};
		let collection = new EntityCollection();

		collection.add(myEntity);

		expect(collection.getAll()).length(1);
		expect(collection.getAll()[0]).to.equal(myEntity);
		expect(collection.getCount()).to.equal(1);
	});

	it('should add an entity and then remove it' , () => {
		let myEntity = {
			components: new ComponentCollection()
		};
		let collection = new EntityCollection();

		collection.add(myEntity);

		expect(collection.getAll()).length(1);
		expect(collection.getAll()[0]).to.equal(myEntity);

		collection.remove(myEntity);
		expect(collection.getAll()).length(0);
	});

	it('should add an entity with a tag and retrieve it by tag' , () => {
		let myEntity = {
			components: new ComponentCollection(),
			tag: "hello"
		};
		let collection = new EntityCollection();

		collection.add(myEntity);

		expect(collection.getByTag("hello")).length(1);
		expect(collection.getByTag("hello")[0]).to.equal(myEntity);
		expect(collection.getFirstByTag("hello")).to.equal(myEntity);
	});

	it('should retrieve all entities that have component T', () => {
		let myEntity = {
			components: new ComponentCollection(),
		};
		myEntity.components.add(1);

		let myEntity2 = {
			components: new ComponentCollection(),
		};
		myEntity2.components.add("1");

		let myEntity3 = {
			components: new ComponentCollection(),
		};
		myEntity3.components.add([]);

		let collection = new EntityCollection();

		collection.add(myEntity);
		collection.add(myEntity2);
		collection.add(myEntity3);

		expect(collection.getByComponent<Number>(Number)).length(1);
		expect(collection.getByComponent<Number>(Number)[0]).to.equal(myEntity);

		expect(collection.getByComponent<String>(String)).length(1);
		expect(collection.getByComponent<String>(String)[0]).to.equal(myEntity2);

		expect(collection.getByComponent<Array<any>>(Array)).length(1);
		expect(collection.getByComponent<Array<any>>(Array)[0]).to.equal(myEntity3);
	});

	it('should retrieve all components from al entities that have component T', () => {
		let myEntity = {
			components: new ComponentCollection(),
		};
		myEntity.components.add(1);

		let myEntity2 = {
			components: new ComponentCollection(),
		};
		myEntity2.components.add(2);

		let collection = new EntityCollection();

		collection.add(myEntity);
		collection.add(myEntity2);
		expect(collection.getAllComponentsWithType<Number>(Number)).length(2);
	});

});
