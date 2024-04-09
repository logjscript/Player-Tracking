const getPlayers = 'SELECT * FROM roster';
const getPlayerByName = 'SELECT * FROM roster WHERE LOWER(fullName) = LOWER($1)';

module.exports = {
    getPlayers,
    getPlayerByName
};