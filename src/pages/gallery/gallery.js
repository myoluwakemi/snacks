import React, {Component} from "react";
import {connect} from "react-redux";
import {SetSearchField} from "../../redux/filter-search/search.action";
import {data} from "./store-data";
import PreviewCollection from "../../components/previewCollection/previewCollection";
import SearchForm from "../../components/SearchForm";
import FilteredBtn from "../../components/FilteredBtn";
import Conditional from "../../components/Conditional";

class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collection: data,
            clickableItem: ""

        };
    }

    onSearchChange = (event) => {
        const filteredItem = this.state.collection.filter((item) => item.items.some((subItem) => {
            return subItem.name.toLowerCase().includes(event.target.value.toLowerCase())
        }))

        this.setState({
            filteredObject: filteredItem
        })
        console.log(filteredItem)
    };


    onClickableItem = (category) => {
        const btn = category.target.innerHTML.toLowerCase();
        const filterdCategory =
            btn === "all"
                ? this.state.collection
                : this.state.collection.filter((product) => {
                    return btn.startsWith(product.title.toLowerCase());
                });
        this.setState({
            clickableItem: filterdCategory,
        });
        console.log(filterdCategory)

    };

    /* componentDidMount() {
       Object.assign(this.props.filteredObject, this.state.collection);
     }*/


    render() {
        const {collection} = this.state;
        const {filteredObject, onSearchChange} = this.props;
        console.log(filteredObject);
        const filteredItem = collection.filter((item) =>
            item.items.some((subItem) => {
                return subItem.name
                    .toLowerCase()
                    .includes(filteredObject.toLowerCase());
            })
        );

        return (
            <div className="gallery pad">
                <FilteredBtn onClickableItem={this.onClickableItem}/>
                <SearchForm onSearchChange={onSearchChange}/>
                <Conditional>
                    {filteredItem.map(({id, ...otherItems}) => {
                        return <PreviewCollection key={id} {...otherItems} />;
                    })}

                </Conditional>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    filteredObject: state.search.filteredObject,
});
const mapDispatchToProps = (dispatch) => ({
    onSearchChange: (event) => dispatch(SetSearchField(event.target.value)),

});

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);
