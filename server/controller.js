const pool = require('./db');
const queries = require('./queries');

const getPlayers = (req, res) => {
    pool.query(queries.getPlayers, (error, results) => {
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

module.exports = {
    getPlayers,
    getPlayerByName,
};