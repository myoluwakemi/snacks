import React, { Component } from 'react';
import Creamydognut from '../../assests/creamydognut.jpg'
import Cake from '../../assests/picture4.jpg'
import Cupcake from '../../assests/picture5.jpg'
import Sweets from '../../assests/picture3.jpg'
import Drinks from '../../assests/picture8.jpg'
import ProductMenu from '../product-menu/product-menu'
import '../directory/directory.css'




class Directory extends Component{
    constructor(){
        super()
        this.state ={

            section:[
                {
                    title: "Cakes",
                    imgUrl: Cake,
                    id: 1,
                },
                {
                    title: "Cupcakes",
                    imgUrl: Cupcake,
                    id: 2,
                },
                {
                    title: "Sweets",
                    imgUrl: Sweets,
                    id: 3,
                },
                {
                    title: "Doughnuts",
                    imgUrl: Creamydognut,
                    id: 4,
                },
                {
                    title: "Drinks",
                    imgUrl: Drinks,
                    id: 5,

                }

            ]
        }
    }
    render(){
        return(
            <div className="directory-menu">
                {
                   
                        
                    this.state.section.map((menu)=>{
                        return <ProductMenu key={menu.id} menu={menu}/>
                    })

                }

            </div>
        )
    }
}
export default Directory