var Fluxxor = require("fluxxor");
var actions = require("actions");
var filter  = require('lodash.filter');
var where   = require('lodash.where');


var IndicatorStore = Fluxxor.createStore({
  initialize: function(options) {
    this.data = options.data

    this.bindActions(
      // actions.constants.EMPLOYMENT.LOAD, this.handleLoad,
      // actions.constants.EMPLOYMENT.LOAD_SUCCESS, this.handleLoadSuccess,
      // actions.constants.EMPLOYMENT.LOAD_FAIL, this.handleLoadFail
    );
  },

  query: function (params) {
    //TODO more query methods
    return  this.data
  }


});

module.exports = IndicatorStore;
