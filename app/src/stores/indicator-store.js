var Fluxxor = require("fluxxor");
var actions = require("actions");


var IndicatorStore = Fluxxor.createStore({
  initialize: function(options) {
    this._data = options.data
    this.data = options.data

    this.bindActions(
      // actions.constants.EMPLOYMENT.LOAD, this.handleLoad,
      // actions.constants.EMPLOYMENT.LOAD_SUCCESS, this.handleLoadSuccess,
      // actions.constants.EMPLOYMENT.LOAD_FAIL, this.handleLoadFail
    );
  },

  getData: function () {
    return this.data
  }


});

module.exports = RouteStore;
