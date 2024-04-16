import { useState } from 'react';
import { SearchBar } from '../components/SearchBar';
import { SearchedPlayer } from '../components/SearchedPlayer';
import { api } from '../services/api';

export const SearchPage = ({ setPlayerResults }) => {
    const [searchResults, setSearchResults] = useState([]);
	const [noSearchResults, setNoSearchResults] = useState(null);

    const handleClick = async (player) => {
		try {
			const response = await api.getPlayer(player.id);
			const playerData = await response.json();
			console.log(playerData);
			setPlayerResults(playerData);

		} catch (error) {
			console.log(error);
		}
	}

    return (
        <div className='h-screen'>
            <div className='mt-8'>
                <SearchBar 
					setSearchResults={setSearchResults}
					setNoSearchResults={setNoSearchResults}		    
				/>      
            </div>

			{noSearchResults && <div>{noSearchResults}</div>}

            <ul className='flex flex-col gap-4 w-[300px] mx-auto py-8'>
                {searchResults.length !== 0 && searchResults.map(player => {
                    return (
                        <li key={player.id} onClick={() => handleClick(player)}>
                            <SearchedPlayer player={player} />
                        </li>
                    );
                })}
           	</ul>
        </div>
    );
}