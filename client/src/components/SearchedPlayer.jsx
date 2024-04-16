
export const SearchedPlayer = ({ player }) => {
    return (
        <div className="flex flex-col text-right">
            <h3 className="font-bold text-xl">{player.fullname}</h3>
            <div>Position: {player.position}</div>
            <div>Team: {player.team}</div>
        </div>
    )
}