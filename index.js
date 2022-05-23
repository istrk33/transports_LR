'use strict'
// Widgets

module.exports = async () => {
  return {
    widgets: {
      // root
      app: require('./widgets/app'),
      main: require('./widgets/main'),
      // uis

      // components

    },
    listeners: {
      //  init
      onEnvStart: require('./listeners/onEnvStart'),
      onUserFirstJoin: require('./listeners/onUserFirstJoin'),
      // clicks
      increment: require('./listeners/increment'),
      decrement: require('./listeners/decrement'),
      newCounter: require("./listeners/newCounter"),
      deleteCounter: require("./listeners/deleteCounter"),
    },
    rootWidget: 'main'
  }
}