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
        }
        viewPeeps() {
          this.models.peeps.forEach((peep) => {
            const divEl = document.createElement("div");
            divEl.innerHTML = peep.body;
            this.mainDivEl.appendChild(divEl);
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
