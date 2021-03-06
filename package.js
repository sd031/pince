Package.describe({
  summary: "A logger for Meteor inspired by log4j and commons-logging.",
  version: "0.0.6",
  name: "jag:pince",
  git: "https://github.com/mad-eye/pince.git",
});

Npm.depends({
  "cli-color": "0.2.3"

});

Package.onUse(function (api, where) {
  api.versionsFrom('0.9.0');

  api.use('coffeescript');
  api.use('momentjs:moment');

  api.addFiles(['src/microevent.coffee'], 'client');
  api.addFiles(['src/console.coffee', 'src/logger.coffee']);

  api.export("Pince");
  api.export("Logger");
  api.export("MicroEvent", "client");
});
