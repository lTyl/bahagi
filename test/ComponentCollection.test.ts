import { ComponentCollection } from "../src/collections";

import * as mocha from 'mocha';
import * as chai from 'chai';

const expect = chai.expect;
describe('ComponentCollection tests', () => {
	it('should add a single component and retrieve it' , () => {
		let components: ComponentCollection = new ComponentCollection();
		let stringComponent: string = "A component value";

		components.add(stringComponent);

		expect(components.getFirstByType(String)).to.equal(stringComponent);
		expect(components.getCount()).to.equal(1);
	});

	it('should add a single component and then remove it' , () => {
		let components: ComponentCollection = new ComponentCollection();
		let stringComponent: string = "A component value";

		components.add(stringComponent);

		// Expect component to be added
		expect(components.getFirstByType(String)).to.equal(stringComponent);

		components.remove(stringComponent);

		expect(components.getFirstByType(String)).to.equal(undefined);
	});

	it('should get all components', () => {
		let components: ComponentCollection = new ComponentCollection();
		let stringComponent: string = "A component value";
		let stringComponent2: string = "A component value 2";

		components.add(stringComponent);
		components.add(stringComponent2);

		expect(components.getAll()).length(2);
	});

	it('should add two components of different types and retrieve them', () => {
		let components: ComponentCollection = new ComponentCollection();
		let stringComponent: string = "A component value";
		let numberComponent: number = 5;

		components.add(stringComponent);
		components.add(numberComponent);

		expect(components.getByType<String>(String)[0]).to.equal(stringComponent);
		expect(components.getByType<Number>(Number)[0]).to.equal(numberComponent);
	});

	it('should add component with a tag and retrieve it', () => {
		let components: ComponentCollection = new ComponentCollection();
		let myComponent = {
			tag: "hello"
		};
		let notTagged = {};

		components.add(myComponent);
		components.add(notTagged);

		expect(components.getByTag("hello")).length(1);
		expect(components.getByType<Object>(Object)).length(2);
	});

	it('should add two components with a tag and retrieve the first', () => {
		let components: ComponentCollection = new ComponentCollection();
		let myComponent = {
			tag: "hello"
		};
		let myComponent2 = {
			tag: "hello"
		};

		components.add(myComponent);
		components.add(myComponent2);

		expect(components.getByTag("hello")).length(2);
		expect(components.getFirstByTag("hello")).to.equal(myComponent);
	});

	it('should return array of components matching type T', () => {
		let components: ComponentCollection = new ComponentCollection();
		let comp1: number = 5;
		let comp2: number = 10;

		components.add(comp1);
		components.add(comp2);

		expect(components.contains<String>(String)).to.be.undefined;
		expect(components.contains<Number>(Number)).length(2);
	});

});
