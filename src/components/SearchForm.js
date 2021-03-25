import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import '../components/SearchForm.css'

function SearchForm({onSearchChange}){
    return(
        <div>
             <form >
          <button  type="button" className="searchbtn" >
            <FontAwesomeIcon icon={faSearch} />
          </button>
          <input 
          className="searchtext"
          type="text" 
          id="text" 
          placeholder="item.." 
          onChange={onSearchChange}
           />
        </form>
            

        </div>
    )
}
export default SearchForm


