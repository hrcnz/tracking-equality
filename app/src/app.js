var React 					= require("react"),
    Router 					= require("react-router"),
    Fluxxor 				= require("fluxxor")

var actions 				= require("actions"),
    routes 					= require("routes"),
    RouteStore 			= require("stores/route-store"),
    IndicatorStore	= require('stores/indicator-store'),
    EthnicityStore  = require('stores/ethnicity-store')

var log 						= require('debug')('src:app')


//TODO set with config | environment variable
localStorage.setItem("debug", "*");

//TODO handle async data load
var data = require('data')

//TODO styles
// require("./style.less");

var router = Router.create({
	routes: routes,
	location: Router.HistoryLocation
});

var stores = {
  ethnicity: new EthnicityStore({ data: data.ethnicity.elements }),
  indicators: new IndicatorStore({ data: data.indicators.elements }),
  route: new RouteStore({router: router})
};

var flux = new Fluxxor.Flux(stores, actions.methods);

router.run(function(Handler) {
  React.render(
    React.createElement(Handler, { flux: flux }),
    document.getElementById("app")
  );
});


flux.on("dispatch", function(type, payload) {
  console.log("Dispatch:", type, payload);
});