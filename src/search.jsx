import * as React from 'react';
import SearchIcon from '@mui/icons-material/Search';

export default function SearchBar() {
    return (
        <>
            <div className='container'>
                <input className='bar' type="text" />
                <SearchIcon></SearchIcon>
                </div>
        </>
    )
}