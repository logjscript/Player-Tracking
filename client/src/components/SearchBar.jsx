import { useState, useRef } from 'react';
import { FaSearch } from 'react-icons/fa';
import { api } from '../services/api';

export const SearchBar = ({ setSearchResults, setNoSearchResults }) => {
    const [input, setInput] = useState('');
    const inputRef = useRef(null);

    const handleChange = async (value) => {
        setInput(value);
        if (!value) {
            setSearchResults([]);
            return;
        }

        try {
            const result = await api.getMatchingPlayersList(inputRef.current.value);
            console.log(result);
            if (result.ok) {
                const data = await result.json();
                setNoSearchResults(null);
                setSearchResults(data);
                console.log(data);
            }

            if (result.status === 404) {
                const message = await result.text();
                console.log(message);
                setSearchResults([]);
                setNoSearchResults(message);
            }
        } catch (error) {
           console.log(error);
        }
    }

    return (
        <div className='bg-white w-[400px] h-10 rounded-md px-4 shadow-lg flex items-center mx-auto'>
            <FaSearch className='text-blue-500'/>
            <input ref={inputRef} value={input} onChange={(e) => handleChange(e.target.value)} placeholder='Type to search...' className='bg-transparent border-none h-full text-lg ml-1 focus:outline-none'/>
        </div>
    );
}