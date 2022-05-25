'use strict'

const { default: axios } = require("axios");

module.exports = {
    get(api, dataId) {
        return axios.get(`${api.url}/app/datastores/appData/data/${dataId}`, options(api));
    },
    put(api, data) {
        return axios.put(`${api.url}/app/datastores/appData/data/${data._id}`, counter, options(api));
    },
    new(api, data) {
        return axios.post(`${api.url}/app/datastores/appData/data`, { "typeOfTransports": data }, options(api));
    },
    delete(api, dataId) {
        return axios.delete(`${api.url}/app/datastores/appData/data/${dataId}`, options(api));
    },
    createDatastore(api) {
        return axios.post(`${api.url}/app/datastores`, { "name": "appData" }, options(api));
    },
    getDatastore(api, name) {
        return axios.post(`${api.url}/app/query`, { "$find": { "_datastore": { "$eq": name } } }, { headers: { Authorization: `Bearer ${api.token}` } }).catch((e => { }));
    },
}

function options(api) {
    return { headers: headers(api) }
}

function headers(api) {
    return { Authorization: `Bearer ${api.token}` }
}
