import React, { Component } from "react";
import { items } from "./Data";
import './Gallery.css'
import FilteredBtn from "./FilteredBtn";
import SearchForm from "./SearchForm";
import Card from "./Card"

class Gallery extends Component {
  constructor() {
    super();
    this.state = {
      items: items,
      filteredObject: items,
    };
  }
  //function that searches any letter press
  onSearchChange = (event)=>{
    const filteredSnacks = this.state.items.filter((snack) =>{
      return snack.category
      .toLowerCase()
      .includes(event.target.value.toLowerCase())

    })
    this.setState({
      filteredObject: filteredSnacks,
    })
    console.log(filteredSnacks)
  }
  //this changes the state on each button clicked
  onFilterItems = (item) =>{
    const btn = item.target.innerHTML.toLowerCase();
    const filteredSnacks = (btn==="all")? items: (this.state.items.filter((snack)=>{
      return btn.startsWith(snack.category.toLowerCase())
    }));
    this.setState({
      filteredObject: filteredSnacks,
    })
    console.log(filteredSnacks)
  }
 
 
  render() {
    const snacks = this.state.filteredObject.map((snack) =>{
      return <Card key={snack.id} items={snack}/>
    })
  
    return (
      <div className="store" id="gallery">
        <h1>
          Our <span>Store</span>
        </h1>
        <FilteredBtn filterClick={this.onFilterItems}/>
        <SearchForm searchChange={this.onSearchChange}/>
        <div className="storeItems">
          <div className="row">
          {snacks}
          </div>
        </div>

      </div>
    );
  }
}
export default Gallery;
