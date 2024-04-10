const getAllPlayers = 'SELECT * FROM roster';
const getPlayerByName = 'SELECT * FROM roster WHERE LOWER(fullName) = LOWER($1)';
const searchForMatchingPlayers = 'SELECT * FROM roster WHERE fullName ILIKE $1 LIMIT 7';

module.exports = {
    getAllPlayers,
    getPlayerByName,
    searchForMatchingPlayers,
};