const pool = require('./db');
const queries = require('./queries');

const getAllPlayers = (req, res) => {
    pool.query(queries.getAllPlayers, (error, results) => {
        if (error) {
            console.log(error);
            throw error;
        }
        res.status(200).json(results.rows);
    })
}

const getPlayerByName = async (req, res) => {
    const playerName = req.params.playerName;

    pool.query(queries.getPlayerByName, [playerName], async (error, results) => {
        if (error) throw error;

        if (results.rows.length === 0) {
            return res.status(404).send('Player not found');
        } else {
            return res.status(200).json(results.rows);
        }
    })
}

const searchForMatchingPlayers = async (req, res) => {
    const stringToMatch = req.params.query;
    console.log(stringToMatch);

    pool.query(queries.searchForMatchingPlayers, [`%${stringToMatch}%`], async(error, results) => {
        if (results.rows.length === 0 || error) {
            return res.status(404).send('No players match your search');
        } else {
            return res.status(200).json(results.rows);
        }
    })
}

module.exports = {
    getAllPlayers,
    getPlayerByName,
    searchForMatchingPlayers,
};