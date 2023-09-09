import React from "react";
import "../../style/search.css"
import SearchIcon from '@mui/icons-material/Search';

function Search() {
    return(
        <div className="campSearch">
            <input type="text" />
            <SearchIcon fontSize="large" color="success"/>
        </div>
    )
}

export default Search;