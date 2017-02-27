Package.describe({
  summary: "Foo bar",
  version:"1.0.0",
  name: "foo:bar",
  documentation:null
});

Npm.depends({});

Package.onUse(function(api) {
  api.versionsFrom("1.4.3.1");

  api.imply([]);

  api.use([
    'meteor'
  ]);

  // PACKAGES FOR SERVER
  api.use([], {weak:true});
  // UNORDERED DEPENDENCIES (to solve
  api.use([], {unordered:true});

  api.addAssets(['worker.js'],'client');

  //EXPORT VARIABLES
  api.export([]);

});

Package.onTest(function (api) {


});
