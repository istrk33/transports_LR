'use strict'

/**
 * updating current movie/tvshow and the dictionnary of movies/tvshows
 * @param {*} data 
 * @param {*} _props 
 * @param {*} event 
 * @returns 
 */
// const service = require("../../services/userDataService");
// const functions = require("../../resources/functions");
module.exports = async (_props, event, api) => {
    // ETAPES
    // recupérer les coordonnées des adresses entrées

    // si véhicules (parc relais) :
    //      pour disponibilé : https://api.agglo-larochelle.fr/production/opendata/api/records/1.0/search/dataset=parking___places_disponibles_en_temps_reel
    //      trouver tarifs
    // si velo (yelo) :
    //      pour disponibilités par station avec coord gps : https://api.agglo-larochelle.fr/production/opendata/api/records/1.0/search/dataset=yelo___disponibilite_des_velos_en_libre_service&facet=station_nom
    // si bus
    //      regarder station la plus proche
    //      afficher l'horaire de passage vers la station la plus proche
    
}