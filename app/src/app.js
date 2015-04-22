//main
var React           = require("react"),
    Router          = require("react-router"),
    Fluxxor         = require("fluxxor")

//fluxxor
var actions         = require("actions"),
    routes          = require("routes"),
    initStores      = require('data/initStores')
    // AgeStore        = require('stores/age-store'),
    // RouteStore      = require("stores/route-store"),
    // IndicatorStore  = require('stores/indicator-store'),
    // EthnicityStore  = require('stores/ethnicity-store'),
    // DataStore       = require('stores/data-store'),
    // DisabilityStore = require('stores/disability-store'),
    // SexStore        = require('stores/sex-store'),
    // SOGIIStore      = require('stores/sogii-store')

//helpers
var insertCSS       = require('insert-css')
var fs              = require('fs')
var initStores       = require('data/initStores')
// var tabletop        = require('tabletop').Tabletop

//logging
var log             = require('debug')('src:app')

//TODO set with config | environment variable
localStorage.setItem("debug", "*");

//TODO handle async data load
var data = require('data')

var router = Router.create({
  routes: routes,
  location: Router.HistoryLocation
});


initStores(router).then(function (stores) {
  log('STORES', stores)

})



//TODO styles
// require("./style.less");
var boostrapCSS           = fs.readFileSync(__dirname + '/../node_modules/bootstrap/dist/css/bootstrap.css')
var reactSelectExampleCSS = fs.readFileSync(__dirname + '/styles/react-select-example.css')
insertCSS(boostrapCSS)
insertCSS(reactSelectExampleCSS)



// var stores = {
//   age: new AgeStore({ data: data.age.elements }),
//   data: new DataStore({ data: data.data.elements }),
//   disability: new DisabilityStore({ data: data.disability.elements }),
//   ethnicity: new EthnicityStore({ data: data.ethnicity.elements }),
//   indicators: new IndicatorStore({ data: data.indicators.elements }),
//   route: new RouteStore({ router: router, pathname: pathname }),
//   sex: new SexStore({ data: data.sex.elements }),
//   sogii: new SOGIIStore({ data: data.sogii.elements })
// };
//
// var flux = new Fluxxor.Flux(stores, actions.methods);
//
// router.run(function(Handler) {
//   React.render(
//     React.createElement(Handler, { flux: flux }),
//     document.getElementById("app")
//   );
// });

//boilerplate logging
// flux.on("dispatch", function(type, payload) {
//   console.log("Dispatch:", type, payload);
// });
