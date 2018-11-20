import React, { Component } from "react";

const animals = [
  { name: "fluffy", species: "rabbit" },
  { name: "puffy", species: "cat" },
  { name: "fluffy2", species: "rabbit" },
  { name: "roofer", species: "dog" },
  { name: "hinku", species: "horse" }
];

//Checks if an animal is a rabbit.
const isRabbit = function(animal) {
  return animal.species === "rabbit";
};

//Filters all the rabbits in the animal array.
const rabbits2 = animals.filter(isRabbit);

console.log(rabbits2);

//Checks if animal is not a rabbit
const otherAnimals = function(animal) {
  return animal.species !== "rabbit";
};

//Filters all the other animals in the array.
const other = animals.filter(otherAnimals);
console.log(other);

//Finds every animal with the name "fluffy"
const etsi = animals.find(animal => {
  return animal.name === "fluffy";
});
console.log("etsi: ", etsi);

//Maps all the rabbits
const mappingRabbits = rabbits2.map(function(animal) {
  return (
    <div key={animal.name}>
      <p>name: {animal.name}</p>
      <p>species: {animal.species}</p>
    </div>
  );
});

//Maps all other animals.
const mappingOthers = other.map(function(animal) {
  return (
    <div key={animal.name}>
      <p>name: {animal.name}</p>
      <p>species: {animal.species}</p>
      <hr />
    </div>
  );
});

class Taulukko extends Component {
  render() {
    let bunny = () => {
      return (
        <div>
          <h4>Rabbits: </h4>
          {mappingRabbits}
        </div>
      );
    };

    let others = () => {
      return (
        <div>
          <h4>Other animals: </h4>
          {mappingOthers}
        </div>
      );
    };
    return (
      <div>
        <span>{bunny()}</span>
        <span>{others()}</span>
      </div>
    );
  }
}

export default Taulukko;
