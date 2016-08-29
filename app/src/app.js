//main
var React           = require("react"),
    Router          = require("react-router"),
    Fluxxor         = require("fluxxor")

var Tabletop        = require('tabletop').Tabletop
window.Tabletop     = Tabletop

//fluxxor
var actions         = require("actions"),
    routes          = require("routes"),
    loadData        = require('data/load-data')
//stores
var DataStore           = require('stores/data-store'),
    DataBreakdownStore  = require('stores/data-breakdown-store'),
    DataGroupStore      = require('stores/data-group-store'),
    DatasetStore        = require('stores/dataset-store'),
    IndicatorStore      = require('stores/indicator-store'),
    IssueStore          = require('stores/issue-store'),
    RecommendationStore = require('stores/recommendation-store'),
    RouteStore          = require("stores/route-store"),
    ChartStore          = require("stores/chart-store")

// shim
require("es5-shim")

//logging
var _               = require('lodash')
var log             = require('debug')('src:app')


//TODO set with config | environment variable
// localStorage.setItem("debug", "*");

var router = Router.create({
  routes: routes,
  location: Router.HashLocation
})

// the google spreadsheet key and aws bucket (proxy)
var key = '1TigDmsj15NfHXwGvMjVBHsr86N_l023g2xpXedn3WFI' // v2
// test '1krd9Vyck1XuLIeePEe_-LTfAQYzefpneX-QE0vRWghQ' // test
//// prod v1 '1_7ciuOPRBryiqiYwOoPGwzEHbdd6pfKyPdFjp_MEYf0'

var isProxy = true


var bucket = 'tewbuffer'

var entityStoreConfig = {
  key : key,
  bucket : bucket,
  loadData : loadData, // entity store loads its data using this function
  isProxy : isProxy
}

// initialise stores
var stores = {
  routes: new RouteStore({ router: router }),
  issues: new IssueStore(_.extend({},entityStoreConfig,{ 
    sheet: 'issues'
  })),
  indicators: new IndicatorStore(_.extend({},entityStoreConfig,{
    sheet: 'indicators'
  })),
  dataBreakdowns: new DataBreakdownStore(_.extend({},entityStoreConfig,{
    sheet: 'data_breakdowns'
  })),
  dataGroups: new DataGroupStore(_.extend({},entityStoreConfig,{
    sheet: 'data_groups'
  })),
  datasets: new DatasetStore(_.extend({},entityStoreConfig,{
    sheet: 'data_sets'
  })),
  recommendations: new RecommendationStore(_.extend({},entityStoreConfig,{
    sheet: 'recommendations'
  })),
  data: new DataStore(_.extend({},entityStoreConfig,{
    sheet: 'data'
  })),
  charts: new ChartStore()
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
