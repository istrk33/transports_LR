# rapport nouvelle appli
1. radio manque unntype de color dans la doc
2. faire listeners pour radio button
2. faire listeners pour confirmer la recherche
3. widget de vue pour les resultats sous forme de liste
4. widget de vue pour les détails d'un résultats

# a faire
1. 2 textfield avec source et destination
2. requetes sur l'api http://www.mapquestapi.com/directions/v2/route?key=gn6V7WJQQGjNiT0tKhPyApAA5gVMF09S&from=bordeaux&to=la+rochelle
avec source destination des 2 textfield
3. recuperer les coordonnées gps, temps, distance et consommation en fuel ?
4. requete sur api la rochelle pour avoir parking, station vélo ou station bus la plus proche
> voiture : regarder uniquement pour la destination
> velo : regarder station pour le début et la destination
> bus : regarder arrêt de bus pour le début et la destination
> les 3 cumulés : voiture -> parc relais, bus en suite velo !!!

-> faire un datastore  pour stocker uniquement les variables, pas besoin de collections
        -> source 
        -> destination
        -> choix velo
        -> choix bus
        -> choix voiture
        -> les trois en meme temps

{
    type:"button',
    text:"button"
}