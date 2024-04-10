import { apiBaseUrl, sportsApiBaseUrl } from "./apiConfig"

export const api = {
    getPlayer(playerId) {
        return fetch(`${sportsApiBaseUrl}/athletes/${playerId}?/lang=en%C2%AEion=us`);
    },

    getAllPlayers() {
        return fetch(`${apiBaseUrl}`);
    },

    getMatchingPlayersList(search) {
        console.log(apiBaseUrl);
        return fetch(`${apiBaseUrl}/search/${search}`);
    }
}