const routes = require("next-routes")();
// routes.add("/properties", "properties/propertypage");
// routes.add("/properties/address", "properties/fullproperty");
routes.add("/signup/index", "signup/index");
routes.add("/signup/developer", "signup/developer");
routes.add("/signup/other", "signup/other");
routes.add("/welcome", "/signup/welcome");
module.exports = routes;