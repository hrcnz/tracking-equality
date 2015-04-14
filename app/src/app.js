//main
var React           = require("react"),
    Router          = require("react-router"),
    Fluxxor         = require("fluxxor")

//fluxxor
var actions         = require("actions"),
    routes          = require("routes"),
    AgeStore        = require('stores/age-store'),
    RouteStore      = require("stores/route-store"),
    IndicatorStore  = require('stores/indicator-store'),
    EthnicityStore  = require('stores/ethnicity-store'),
    DataStore       = require('stores/data-store'),
    DisabilityStore = require('stores/disability-store'),
    SexStore        = require('stores/sex-store'),
    SOGIIStore      = require('stores/sogii-store')

//helpers
var insertCSS       = require('insert-css')
var fs              = require('fs')


//logging
var log             = require('debug')('src:app')


//TODO set with config | environment variable
localStorage.setItem("debug", "*");

//TODO handle async data load
var data = require('data')

//TODO styles
// require("./style.less");
var boostrapCSS           = fs.readFileSync(__dirname + '/../node_modules/bootstrap/dist/css/bootstrap.css')
var reactSelectExampleCSS = fs.readFileSync(__dirname + '/styles/react-select-example.css')
insertCSS(boostrapCSS)
insertCSS(reactSelectExampleCSS)

log('window HistoryLocation', window.history)

var pathname = (window.history && window.history.state) ? window.history.state.path : '/'

var router = Router.create({
  routes: routes,
  location: Router.HistoryLocation
});

var stores = {
  age: new AgeStore({ data: data.age.elements }),
  data: new DataStore({ data: data.data.elements }),
  disability: new DisabilityStore({ data: data.disability.elements }),
  ethnicity: new EthnicityStore({ data: data.ethnicity.elements }),
  indicators: new IndicatorStore({ data: data.indicators.elements }),
  route: new RouteStore({ router: router, pathname: pathname }),
  sex: new SexStore({ data: data.sex.elements }),
  sogii: new SOGIIStore({ data: data.sogii.elements })
};

var flux = new Fluxxor.Flux(stores, actions.methods);

router.run(function(Handler) {
  React.render(
    React.createElement(Handler, { flux: flux }),
    document.getElementById("app")
  );
});

//boilerplate logging
flux.on("dispatch", function(type, payload) {
  console.log("Dispatch:", type, payload);
});
