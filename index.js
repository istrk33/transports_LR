'use strict'
// Widgets

module.exports = async () => {
  return {
    widgets: {
      // root
      app: require('./widgets/app'),
      main: require('./widgets/main'),
      // uis
      firstUi: require('./widgets/uis/first'),
      
      // components
      textfield: require('./widgets/components/textfield'),
      radioButton: require('./widgets/components/radio'),
      
    },
    listeners: {
      //  init
      onEnvStart: require('./listeners/init/onEnvStart'),
      onUserFirstJoin: require('./listeners/init/onUserFirstJoin'),
      // clicks
      searchClick: require('./listeners/clicks/searchClick'),
      radioClick: require('./listeners/clicks/radioButtonClick'),
      // increment: require('./listeners/increment'),
      // decrement: require('./listeners/decrement'),
      // newCounter: require("./listeners/newCounter"),
      // deleteCounter: require("./listeners/deleteCounter"),
    },
    rootWidget: 'main'
  }
}