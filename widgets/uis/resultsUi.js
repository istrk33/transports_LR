'use strict'

/**
 * view that display informations on the movie or the tv show
 * @param {*} data 
 * @param {*} props 
 * @returns 
 */
// const functions = require("../../resources/functions");
module.exports = (data, props) => {
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

            ]
        }
    }
}