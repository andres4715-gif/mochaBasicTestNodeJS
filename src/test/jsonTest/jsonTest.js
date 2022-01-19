var Data = require("../../../resourses/data.json");

// Getting data from Json file.

// Getting the squadName:
const squadName = Data.squadName;
console.log(squadName);

// Getting the homeTown:
const homeTown = Data.homeTown;
console.log(homeTown);

// Getting formed;
const formed = Data.formed;
console.log(formed);

// Getting secretBase;
const secretBase = Data.secretBase;
console.log(secretBase);

// Getting active
const active = Data.active;
console.log(active);

console.log("====================ARRAYS===================\n");

// Getting Members names in array;
console.log(">>>>>> super Hero Names >>>>>>>\n");

let superHeroNames = [];
for (let i = 0; i < Data.members.length; i++) {
  superHeroNames.push(Data.members[i].name);
}
console.log(superHeroNames);

console.log("===========================================\n");

// Getting super hero Age
console.log(">>>>>> super Hero Age >>>>>>>\n");

let superHeroAge = [];
for (let i = 0; i < Data.members.length; i++) {
  superHeroAge.push(Data.members[i].age);
}
console.log(superHeroAge);

console.log("===========================================\n");

// Getting super hero secretIdentity
console.log(">>>>>> super Hero secretIdentity >>>>>>>\n");

let secretIdentity = [];
for (let i = 0; i < Data.members.length; i++) {
  secretIdentity.push(Data.members[i].secretIdentity);
}
console.log(secretIdentity);

console.log("===========================================\n");

// Getting super hero powers
console.log(">>>>>> super Hero powers >>>>>>>\n");

let powers = [];
for (let i = 0; i < Data.members.length; i++) {
  powers.push(...Data.members[i].powers);
}
console.log(powers);

console.log("===========================================\n");
