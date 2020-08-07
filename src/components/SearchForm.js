import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function SearchForm({searchChange}){
    return(
        <div>
             <form >
          <button  type="button" className="searchbtn" >
            <FontAwesomeIcon icon={faSearch} />
          </button>
          <input 
          type="text" 
          id="text" 
          placeholder="item.." 
          onChange={searchChange}
           />
        </form>
            

        </div>
    )
}
export default SearchForm


