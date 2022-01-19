var DataJson = require("../../../resourses/super_hero.json");

const superHeroNames = [];

class CheckingJson {
  checkSuperHeroNames() {
    for (let i = 0; i < DataJson.length; i++) {
      superHeroNames.push(DataJson[i].superhero);
    }
    return superHeroNames;
  }

  checkIfSuperHeroExist(name) {
    const superHeroNameList = this.checkSuperHeroNames();
    if (superHeroNameList.includes(name)) {
      console.log("The super hero research is: ", name);
      return true;
    } else {
      return false;
    }
  }
}

module.exports = new CheckingJson();
