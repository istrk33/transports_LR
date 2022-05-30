'use strict'

/**
 * updating current movie/tvshow and the dictionnary of movies/tvshows
 * @param {*} data 
 * @param {*} _props 
 * @param {*} event 
 * @returns 
 */
const service = require("../../services/service");
// const functions = require("../../resources/functions");
module.exports = async (_props, event, api) => {
    // travelType
    var datastore = await service.getDatastore(api, "appData");
    var datas = datastore.data.data[0].typeOfTransports;
    switch (_props.clicked) {
        case 1:
            var clicked = datas["radioButton" + _props.clicked];
            var newD = [clicked[0], "travelType"];
            datas["radioButton" + _props.clicked] = newD;

            var rd2 = datas["radioButton2"];
            var newDrd2 = [rd2[0], rd2[0]];
            datas["radioButton2"] = newDrd2;

            var rd3 = datas["radioButton3"];
            var newDrd3 = [rd3[0], rd3[0]];
            datas["radioButton3"] = newDrd3;
            break;
        case 2:
            var rd1 = datas["radioButton1"];
            var newDrd1 = [rd1[0], rd1[0]];
            datas["radioButton1"] = newDrd1;

            var clicked = datas["radioButton" + _props.clicked];
            var newD = [clicked[0], "travelType"];
            datas["radioButton" + _props.clicked] = newD;

            var rd3 = datas["radioButton3"];
            var newDrd3 = [rd3[0], rd3[0]];
            datas["radioButton3"] = newDrd3;
            break;
        case 3:
            var rd1 = datas["radioButton1"];
            var newDrd1 = [rd1[0], rd1[0]];
            datas["radioButton1"] = newDrd1;

            var rd2 = datas["radioButton2"];
            var newDrd2 = [rd2[0], rd2[0]];
            datas["radioButton2"] = newDrd2;

            var clicked = datas["radioButton" + _props.clicked];
            var newD = [clicked[0], "travelType"];
            datas["radioButton" + _props.clicked] = newD;
            break;
    }
    var id = datastore.data.data[0]._id;
    await service.put(api, id, { typeOfTransports: datas });
}