class Views{
  constructor(models, api){
    this.models = models;
    this.api = api;
    this.mainDivEl = document.querySelector("#main-container");
    this.newPeepButton = document.querySelector('#new-peep-button').addEventListener('click', () => {
      console.log(document.querySelector('#peep-content').value);
      this.api.newPeep(document.querySelector('#peep-content').value, Date.now());
      // this.models.addPeep(document.querySelector('#peep-content').value);
    });
  }
  
  viewPeeps(){
    this.models.peeps.forEach(peep=>{
      const divEl = document.createElement("div");
      divEl.innerHTML = peep.body;
      this.mainDivEl.appendChild(divEl);
      const brEl = document.createElement("p");
      brEl.innerText="------------"
      this.mainDivEl.appendChild(brEl);
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