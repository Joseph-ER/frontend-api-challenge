class Views{
  constructor(models, api){
    this.models = models;
    this.api = api;
    this.mainDivEl = document.querySelector("#main-container");
  }
  
  viewPeeps(){
    this.models.peeps.forEach(peep=>{
      const divEl = document.createElement("div");
      divEl.innerHTML = peep.body;
      this.mainDivEl.appendChild(divEl);
    })
  }

  getPeepsFromApi(){
    this.api.fetchPeeps((response)=>{
      this.models.addPeepsFromApi(response);
      this.viewPeeps();
    });
  }
}

module.exports = Views;