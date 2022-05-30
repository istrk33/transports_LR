'use strict'

/**
 * view that display informations on the movie or the tv show
 * @param {*} data 
 * @param {*} props 
 * @returns 
 */
// const functions = require("../../resources/functions");
module.exports = (data, props) => {
    var datas = data[0].typeOfTransports;
    console.log("FIRSTTTTTTTTTT UI");
    console.log(data);
    console.log(datas);
    return {
        type: "container",
        decoration: {
            color: 0xFF000000
        },
        // constraints: {
        //     minWidth: -1,
        //     minHeight: -1,
        //     maxWidth: -1,
        //     maxHeight: -1
        // },
        child: {
            type: "flex",
            mainAxisAlignment: "center",
            crossAxisAlignment: "center",
            direction: "vertical",
            fillParent: true,
            children: [
                {
                    type: "text",
                    value: "Trouvez un trajet sur La Rochelle",
                    style: {
                        color: 0xFF000000
                    }
                },
                {
                    type: "widget",
                    name: "textfield",
                    props: {
                        labelValue: "Départ",
                        iconData: "location_pin",
                    }
                },
                {
                    type: "widget",
                    name: "textfield",
                    props: {
                        labelValue: "Destination",
                        iconData: "gps_fixed",
                    }
                },
                {
                    type: "widget",
                    name: "radioButton",
                    props: {
                        iconData: datas.radioButton1,
                        number: 1
                    },
                    query: {
                        "$find": {
                            "_datastore": {
                                "$eq": "appData"
                            }
                        }
                    }
                },
                {
                    type: "widget",
                    name: "radioButton",
                    props: {
                        iconData: datas.radioButton2,
                        number: 2
                    },
                    query: {
                        "$find": {
                            "_datastore": {
                                "$eq": "appData"
                            }
                        }
                    }
                },
                {
                    type: "widget",
                    name: "radioButton",
                    props: {
                        iconData: datas.radioButton3,
                        number: 3
                    },
                    query: {
                        "$find": {
                            "_datastore": {
                                "$eq": "appData"
                            }
                        }
                    }
                }
                , {
                    type: "button",
                    text: "Chercher",
                    onPressed: {
                        action: "searchClick",
                    }
                },
            ]
        }
    }
}