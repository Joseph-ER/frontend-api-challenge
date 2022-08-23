class Model{
  constructor(){
    this.peeps = [];
  }

  addPeep(peep){
  this.peeps.push(peep);
  }

  addPeepsFromApi(peeps){
    peeps.forEach(peep=> {
      this.addPeep(peep);
    });
  }


}

module.exports = Model;