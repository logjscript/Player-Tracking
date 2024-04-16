import { useState } from 'react';
import { SearchPage } from './pages/SearchPage';


export const App = () => {
	const [playerResults, setPlayerResults] = useState(null);

    return (
		<SearchPage setPlayerResults={setPlayerResults} />
    );
};

