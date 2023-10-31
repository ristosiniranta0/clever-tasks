/*
Filename: ComplexProgram.js
Content: A complex program that simulates a virtual city with various functionalities.

*/

// City class
class City {
  constructor(name, population, mayor) {
    this.name = name;
    this.population = population;
    this.mayor = mayor;
    this.buildings = [];
  }

  addBuilding(building) {
    this.buildings.push(building);
  }

  removeBuilding(building) {
    const index = this.buildings.indexOf(building);
    if (index > -1) {
      this.buildings.splice(index, 1);
    }
  }

  getCityInfo() {
    console.log(`City Name: ${this.name}`);
    console.log(`Population: ${this.population}`);
    console.log(`Mayor: ${this.mayor}`);
    console.log('Buildings:');
    this.buildings.forEach((building) => {
      console.log(building.getBuildingInfo());
    });
  }
}

// Building class
class Building {
  constructor(name, address, floors) {
    this.name = name;
    this.address = address;
    this.floors = floors;
  }

  getBuildingInfo() {
    return `Name: ${this.name}, Address: ${this.address}, Floors: ${this.floors}`;
  }
}

// Create a new city
const myCity = new City('My City', 100000, 'John Doe');

// Create buildings
const building1 = new Building('Main Tower', '123 Main St', 10);
const building2 = new Building('Shopping Mall', '456 Broadway', 5);

// Add buildings to the city
myCity.addBuilding(building1);
myCity.addBuilding(building2);

// Print city information
myCity.getCityInfo();

// Perform other city operations...
// ... (Write your own complex code here)
...

// Output:
// City Name: My City
// Population: 100000
// Mayor: John Doe
// Buildings:
// Name: Main Tower, Address: 123 Main St, Floors: 10
// Name: Shopping Mall, Address: 456 Broadway, Floors: 5

// Continue with more complex code for the virtual city simulation...