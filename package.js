Package.describe({
  summary: "A logger for Meteor inspired by log4j and commons-logging."
});

Npm.depends({
  "coffee-script": "1.6.3",
  "underscore": "1.5.2",
  "moment": "2.4.0",
  "cli-color": "0.2.3"

});

Package.on_use(function (api, where) {

  api.use(["coffeescript", 'underscore'], ["client", "server"]);

  api.add_files(["src/microevent.coffee", 'src/browserOutput.coffee'], 'client');
  api.add_files(['src/consoleOutput.coffee'], 'server');
  api.add_files(["src/logger.coffee"], ["client", 'server']);

  if (api.export) //compat with pre-0.6.5
    api.export("Pince", ["server", "client"]);
    api.export("Logger", ["server", "client"]);
    api.export("MicroEvent", ["client"]);
});
