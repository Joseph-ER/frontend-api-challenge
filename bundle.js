(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // api.js
  var require_api = __commonJS({
    "api.js"(exports, module) {
      var Api2 = class {
        constructor() {
        }
        fetchPeeps(callback) {
          fetch("https://chitter-backend-api-v2.herokuapp.com/peeps").then((response) => response.json()).then((data) => {
            callback(data);
          });
        }
        createUser(username, password) {
          fetch("https://chitter-backend-api-v2.herokuapp.com/users", {
            method: "POST",
            "Content-Type": "application/json",
            user: { handle: JSON.stringify(username), password: JSON.stringify(password) }
          }).then((response) => {
            response.json();
            console.log(response);
          }).then((data) => {
            console.log("success:", data);
          });
        }
        newPeep(body, timePosted) {
          fetch("https://chitter-backend-api-v2.herokuapp.com/peeps", {
            method: "POST",
            "content-type": "application/json",
            body: JSON.stringify(body)
          }).then((response) => {
            response.json();
            console.log(response);
          }).then((data) => {
            console.log("success:", data);
          });
        }
      };
      module.exports = Api2;
    }
  });

  // models.js
  var require_models = __commonJS({
    "models.js"(exports, module) {
      var Model = class {
        constructor() {
          this.peeps = [];
        }
        addPeep(peep) {
          this.peeps.push(peep);
        }
        addPeepsFromApi(peeps) {
          peeps.forEach((peep) => {
            this.addPeep(peep);
          });
        }
      };
      module.exports = Model;
    }
  });

  // views.js
  var require_views = __commonJS({
    "views.js"(exports, module) {
      var Views2 = class {
        constructor(models2, api2) {
          this.models = models2;
          this.api = api2;
          this.mainDivEl = document.querySelector("#main-container");
          this.newPeepButton = document.querySelector("#new-peep-button").addEventListener("click", () => {
            console.log(document.querySelector("#peep-content").value);
            this.api.newPeep(document.querySelector("#peep-content").value, Date.now());
          });
          this.newUserButton = document.querySelector("#new-user-button").addEventListener("click", () => {
            let username = document.querySelector("#username-field").value;
            let password = document.querySelector("#password-field").value;
            console.log(username, password);
            this.api.createUser(username, password);
          });
        }
        viewPeeps() {
          this.models.peeps.forEach((peep) => {
            const peepEl = document.createElement("div");
            const userEl = document.createElement("div");
            const timeEl = document.createElement("div");
            peepEl.innerText = peep.body;
            userEl.innerText = peep.user.handle;
            timeEl.innerText = peep.created_at;
            this.mainDivEl.appendChild(peepEl);
            this.mainDivEl.appendChild(userEl);
            this.mainDivEl.appendChild(timeEl);
            const brEl = document.createElement("p");
            brEl.innerText = "------------";
            this.mainDivEl.appendChild(brEl);
          });
        }
        getPeepsFromApi() {
          this.api.fetchPeeps((response) => {
            this.models.addPeepsFromApi(response);
            this.viewPeeps();
          });
        }
      };
      module.exports = Views2;
    }
  });

  // index.js
  var Api = require_api();
  var Models = require_models();
  var Views = require_views();
  var api = new Api();
  var models = new Models();
  var views = new Views(models, api);
  views.getPeepsFromApi();
})();
