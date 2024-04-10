import { useState } from 'react';
import { SearchBar } from './components/SearchBar';

export const App = () => {
    const [searchResults, setSearchResults] = useState([]);
	const [noSearchResults, setNoSearchResults] = useState(null);

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
                        <li key={player.id}>
                            {player.fullname}
                        </li>
                    );
                })}
           	</ul>
        </div>
    );
};

