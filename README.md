# Bahagi

Bahagi is a type-based EntityComponentSystem, written in TypeScript. 
It's purpose is to provide a stable core framework which implements the _composition over inheritance_ pattern.

Bahagi is Filipino for "Component".

## Installation

```
npm install bahagi --save
```

## Concept
### Entity
The simplest form of an entity is an object with a single key, an identifier to identify the entity. Ultimately, it is an Object that holds components.
In this implementation, an EntityCollection is provided to manage entities. The EntityCollection assumes anything is an entity
if it has a key of 'components' which is of type ComponentCollection.

### Component
A single chunk of data for an entity. Components can be used to add additional functionality to entities. The entity alone is simply an object which has no function.
By adding components, you add functionality to the entity. By following the _inheritance over composition_ pattern, your components are chunks of data and identifies a 
specific function on the entity.

In this implementation, any _type_ can be added as a component. From a _class_, a _number_, a _boolean_ or anything else. The _ComponentCollection_ will track and cache components by their type for fast look-up in the _Systems_.
This makes components very flexible and makes it easy to integrate other libraries. If you're using PIXI.js for example, you can use the PIXI.Sprite class
as a component on an entity and handle drawing through that component. Logic on the PIXI.Sprite (Such as transformation updates), will be handled through a specific system (Or series of systems).


### System
Contains logic which acts on entities, using the components on the entity to identify the components which need logic applied.
Typically, the system is built against a specific type of component and is responsible for applying logic to that specific component type.

## Usage

### Basic
Using the ComponentCollection:
```typescript
let components = new ComponentCollection();
let stringComponent: string = "My string Comp!";
components.add(stringComponent);
console.log(components.getByType(String));
// ^ Will return an array with 1 item, the value of our stringComponent
```

Simple entity example:
```typescript
let myEntity = {
	components: new ComponentCollection()
};
myEntity.components.add(1);
myEntity.components.add(2);
myEntity.components.add(3, 4, 5); // Or you can do it like this
console.log(myEntity.components.getByType(String)); // Returns null
console.log(myEntity.components.getByType(Number)); // Return an array with length of 5: [1, 2, 3, 4, 5]
```

EntityCollection example:
```typescript
let entityCollection: EntityCollection = new EntityCollection();
entityCollection.add(myEntity);
console.log(entityCollection.getByComponent(String)); // Returns an empty array
console.log(entityCollection.getByComponent(Number)); // Returns an array where each item is an entity that has the provided component
```

Tagging Entities and Components:
```typescript
let myTaggedComponent = {
	tag: "myThing"
};
myEntity.components.add(myTaggedComponent);
console.log(myEntity.components.getByTag("myThing")); // Returns an array with all components tagged "myThing"
```

Simple CountingSystem example:
```typescript
class CountingSystem extends AbstractSystem {
	constructor(collection: EntityCollection){
		super(collection);

		setInterval(() => {
			let entitiesWithNumber = collection.getByComponent(Number);

			entitiesWithNumber.forEach((entity: IEntity) => {
				let numberComponents = entity.components.getByType<Number>(Number);
				numberComponents.forEach((num: number, idx) => {
					numberComponents[idx]++;
				});

				console.log("Numbers!", numberComponents); // Increases the count by 1 each second for every component
			})
		}, 1000)
	}
}

new CountingSystem(entityCollection);
```