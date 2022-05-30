'use strict'

const service = require("../../services/service");


module.exports = (props, event, api) => {
    return service.new(api, { navigation: "firstUi", radioButton1: ["local_parking", "local_parking"], radioButton2: ["pedal_bike", "pedal_bike"], radioButton3: ["bus_alert", "bus_alert"] });
}