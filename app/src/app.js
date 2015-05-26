if (process.env.NODE_ENV === "development") {
  //
  // window.LiveReloadOptions = { host: 'localhost' }
  // console.log('test')
  // require('livereload-js')
}

//main
var React           = require("react"),
    Router          = require("react-router"),
    Fluxxor         = require("fluxxor")

//fluxxor
var actions         = require("actions"),
    routes          = require("routes"),
    initStores      = require('data/initStores'),
    loadData        = require('data/load-data')
//stores
var DataStore           = require('stores/data-store'),
    DataBreakdownStore  = require('stores/data-breakdown-store'),
    DataGroupStore      = require('stores/data-group-store'),
    DatasetStore        = require('stores/dataset-store'),
    DataTypeStore       = require('stores/data-type-store'),
    IndicatorStore      = require('stores/indicator-store'),
    IssueStore          = require('stores/issue-store'),
    RecommendationStore = require('stores/recommendation-store'),
    RouteStore          = require("stores/route-store")

//helpers
var insertCSS       = require('insert-css')
var fs              = require('fs')

//logging
var log             = require('debug')('src:app')


//TODO set with config | environment variable
localStorage.setItem("debug", "*");

var router = Router.create({
  routes: routes,
  location: Router.HashLocation
})

// the google spreadhseet key
var key = '1nmW8b_2HDgMzvuyllWCSV2hc8uUpyNrTT0WAC_7MnhE'

// initialise stores
var stores = {
  routes: new RouteStore({ router: router }),
  data: new DataStore({ key: key, sheet: 'data', loadData: loadData  }),
  dataBreakdowns: new DataBreakdownStore({ key: key, sheet: 'data_breakdowns', loadData: loadData  }),
  dataGroups: new DataGroupStore({ key: key, sheet: 'data_groups', loadData: loadData  }),
  datasets: new DatasetStore({ key: key, sheet: 'data_sets', loadData: loadData  }),
  dataTypes: new DataTypeStore({ key: key, sheet: 'data_types', loadData: loadData   }),
  indicators: new IndicatorStore({ key: key, sheet: 'indicators', loadData: loadData  }),
  issues: new IssueStore({ key: key, sheet: 'issues', loadData: loadData }),
  recommendations: new RecommendationStore({ key: key, sheet: 'recommendations', loadData: loadData })
}

log('init flux...')
var flux = new Fluxxor.Flux(stores, actions.methods);
log('flux initialised')

router.run(
  function(Handler) {
    log('rendering app...')
    React.render(
      React.createElement(Handler, { flux: flux }),
      document.getElementById("app")
    );
  }
);

log('styles')
//TODO styles
// require("./style.less");
var boostrapCSS           = fs.readFileSync(__dirname + '/../node_modules/bootstrap/dist/css/bootstrap.css')
//insertCSS(reactSelectExampleCSS)
insertCSS(boostrapCSS)



// boilerplate logging
flux.on("dispatch", function(type, payload) {
  console.log("Dispatch:", type, payload);
});
