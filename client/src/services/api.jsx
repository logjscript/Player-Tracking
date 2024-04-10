import { apiBaseUrl } from "./apiConfig"

export const api = {
    getPlayer(playerName) {
        return fetch(`${apiBaseUrl}/${playerName}`);
    },

    getAllPlayers() {
        return fetch(`${apiBaseUrl}`);
    },

    getMatchingPlayersList(search) {
        console.log(apiBaseUrl);
        return fetch(`${apiBaseUrl}/search/${search}`);
    }
}