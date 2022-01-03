var Data = require("../../resourses/data.json");

// console.log(Data);
//
// console.log(Data.squadName);
// console.log(Data.homeTown);
// console.log(Data.formed);
// console.log(Data.secretBase);
// console.log(Data.active);
// console.log(Data.members[0]);

// console.log(Data.members[0].name);
// console.log(Data.members[0].age);
// console.log(Data.members[0].secretIdentity);
// console.log(Data.members[0].powers);

// console.log(Data.members[0].name);
// console.log(Data.members[1].name);
// console.log(Data.members[2].name);

Data.members.forEach(function (superHero) {
  console.log(superHero.name);
});

console.log("________Names super Hero_________");

Data.members.forEach((person) => console.log(person.name));

Data.members.forEach((person) => person.name);

console.log("_______Powers super hero________");

Data.members.forEach((hero) => hero.powers.forEach((x) => console.log(x)));
