import React from "react";
import "../../style/search.css"
import SearchIcon from '@mui/icons-material/Search';

function Search() {
    function searchKeyEnter(event) {
        const inputValue = event.target.value;
        if (inputValue.length === 3) {
            console.log('3');
        } else if (inputValue.length > 3) {
            console.log('>3')
        }

    }
    return(
        <div className="campSearch">
            <input type="text" onChange={searchKeyEnter}/>
            <SearchIcon fontSize="large" color="success"/>
        </div>
    )
}

export default Search;