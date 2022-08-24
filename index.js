const Api = require('./api');
const Models = require('./models');
const Views = require('./views');

const api = new Api();
const models = new Models();
const views = new Views(models, api);

views.getPeepsFromApi();
