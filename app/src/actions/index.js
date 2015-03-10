var c = {
  EMPLOYMENT: {
    LOAD: "EMPLOYMENT:LOAD",
    LOAD_SUCCESS: "EMPLOYMENT:LOAD_SUCCESS",
    LOAD_FAIL: "EMPLOYMENT:LOAD_FAIL"
  },


  ROUTE: {
    TRANSITION: "ROUTE:TRANSITION"
  }
};

var methods = {

  employment: {

  //   load: function () {
  //     this.dispatch(c.EMPLOYMENT.LOAD)
  //   },

  //   loadSuccess: function (data) {
  //     this.dispatch(c.EMPLOYMENT.LOAD_SUCCESS, { data: data })
  //   },

  //   loadFail: function () {
  //     this.dispatch(c.EMPLOYMENT.LOAD_FAIL)
  //   }
  // }



  routes: {
    transition: function (path, params) {
      this.dispatch(c.ROUTE.TRANSITION, {path: path, params: params});
    }
  }
};

module.exports = {
  methods: methods,
  constants: c
};
