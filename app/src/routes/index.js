var React         = require("react"),
    Router        = require("react-router"),
    Route         = Router.Route,
    DefaultRoute  = Router.DefaultRoute;

var Home          = require('components/main');

var routes = (
  <Route handler={Home} name="home" path="/">
    // <Route handler={RecipeAdder} name="add-recipe" path="/recipe/add" />

    // <Route handler={EmptyView} path="/recipe/:id">
    //   <Route handler={RecipeEditor} name="edit-recipe" path="edit" />
    //   <DefaultRoute handler={Recipe} name="recipe" />
    // </Route>

    // <DefaultRoute handler={RecipeList} />
  </Route>
);

module.exports = routes;
