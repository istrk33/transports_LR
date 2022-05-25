'use strict'

const service = require("../../services/service");


module.exports = (props, event, api) => {
    return service.new(api, { navigation: "firstUi", radioButton1: "car_rental", radioButton2: "pedal_bike", radioButton3: "bus_alert" });
}