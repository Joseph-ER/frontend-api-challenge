class Views {
  constructor (models, api) {
    this.models = models
    this.api = api
    this.mainDivEl = document.querySelector('#main-container')

    this.newPeepButton = document.querySelector('#new-peep-button').addEventListener('click', () => {
      console.log(document.querySelector('#peep-content').value)
      this.api.newPeep(document.querySelector('#peep-content').value, Date.now())
      // this.models.addPeep(document.querySelector('#peep-content').value);
    })

      this.newUserButton = document.querySelector('#new-user-button').addEventListener('click',() => {
        let username = document.querySelector('#username-field').value;
        let password = document.querySelector('#password-field').value;
        console.log(username, password);
        this.api.createUser(username, password);
      })
  }

  viewPeeps () {
    this.models.peeps.forEach(peep => {
      const peepEl = document.createElement('div')
      const userEl = document.createElement('div')
      const timeEl = document.createElement('div')
      peepEl.innerText = peep.body
      userEl.innerText = peep.user.handle
      timeEl.innerText = peep.created_at
      this.mainDivEl.appendChild(peepEl)
      this.mainDivEl.appendChild(userEl)
      this.mainDivEl.appendChild(timeEl)
      const brEl = document.createElement('p')
      brEl.innerText = '------------'
      this.mainDivEl.appendChild(brEl)
    })
  }

  getPeepsFromApi () {
    this.api.fetchPeeps((response) => {
      this.models.addPeepsFromApi(response)
      this.viewPeeps()
    })
  }
}

module.exports = Views
