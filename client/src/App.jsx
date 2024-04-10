import { useState } from 'react';
import { SearchBar } from './components/SearchBar';
import { api } from './services/api';

export const App = () => {
    const [searchResults, setSearchResults] = useState([]);
	const [noSearchResults, setNoSearchResults] = useState(null);
	const [playerResults, setPlayerResults] = useState(null);

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

            <ul className=''>
                {searchResults.length !== 0 && searchResults.map(player => {
                    return (
                        <li key={player.id} onClick={() => handleClick(player)}>
                            {player.fullname}
                        </li>
                    );
                })}
           	</ul>
        </div>
    );
};

