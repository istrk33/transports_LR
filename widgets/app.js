'use strict'

/**
 * 
 * @param {*} data 
 * @returns 
 */
function getCurrentPage(navigation) {
  switch (navigation) {
    case "firstUi":
      return {
        type: "widget",
        name: "firstUi",
        query: {
          "$find": {
            "_datastore": {
              "$eq": "appData"
            }
          }
        }
      };
    case "resultsView":
      return {
        type: "widget",
        name: "resultsView",
        query: {
          "$find": {
            "_datastore": {
              "$eq": "appData"
            }
          }
        }
      };
    case "singleResultView":
      return {
        type: "widget",
        name: "singleResultView",
        query: {
          "$find": {
            "_datastore": {
              "$eq": "appData"
            }
          }
        }
      };
    default:
      return {
        type: "text",
        value: "Something went wrong"
      };
  }
}

/**
 * 
 * @param {*} data 
 * @param {*} _props 
 * @returns 
 */
module.exports = async (data, _props) => {
  console.log(data);
  var nav = (data.length == 0) ? "firstUi" : (data[0].navigation === undefined) ? data[0].typeOfTransports.navigation : data[0].navigation;
  var page = getCurrentPage(nav);
  return page;
}
