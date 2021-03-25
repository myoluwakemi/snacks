import Creamydognut from '../../assests/creamydognut.jpg'
import Candy from '../../assests/candy.jpg'
import Three from '../../assests/picture3.jpg'
import Four from '../../assests/picture4.jpg'
import five from '../../assests/picture5.jpg'
import Six from '../../assests/picture6.jpg'
import Seven from '../../assests/picture7.jpg'
import Eight from '../../assests/picture8.jpg'
import Nine from '../../assests/picture9.jpg'
import Ten from '../../assests/picture10.jpg'
import Eleven from '../../assests/picture11.jpg'
import Twelve from '../../assests/picture12.jpg'
import Thirteen from '../../assests/picture13.jpg'
import fourteen from '../../assests/picture14.jpg'
import Fifteen from '../../assests/picture15.jpg'
import Sixten from '../../assests/picture16.jpg'
import Seventeen from '../../assests/number17.jpg'
import Eighteen from '../../assests/picture18.jpg'


export const data = [
    { 
        id: 1,
        title: "Cakes",
        routeName: 'cake',
        items:[
            {
                id: 1,
                picture: Four,
                name: "weddingCakes",
                price: "$10"
            },
            {
                id: 2,
                picture: Thirteen,
                name: "chocolate gateux",
                price: "$10"
            },
            {
                id: 3,
                picture: Fifteen,
                name: "chocolate drip",
                price: "$10"
            },
        ]
    },
    {
        id: 2,
        title: "Cupcakes",
        routeName: 'cupcake',
        items:[
           
            {
                id: 4,
                picture: five,
                name: "choco-vanilla",
                price: "$5"
            },
            {
                id: 5,
                picture: Six,
                name: "vanilla with double-cream",
                price: "$5"
            },
            {
                id: 6,
                picture: Ten,
                name: "choco with jelly-topping",
                price: "$5"
            },
            {
                id: 7,
                picture: Eighteen,
                name: "red-velvetCupcake",
                price: "$3"
            },

        ]

    },

    {
        id: 3,
        title: "Sweets",
        routeName: 'sweet',
        items:[ 
            {
                id: 8,
                picture: Three,
                name: "bright-savour",
                price: "$3"
            },
            {
                id: 9,
                picture: Candy,
                name: "chocolate-candy",
                price: "$3"
            },
            {
                id: 10,
                picture: Twelve,
                name: "fruity sweets",
                price: "$3"
            },
            {
                id: 11,
                picture: Seventeen,
                name: "M&M",
                price: "$3"
            },
           



        ] 
    },
    {
        id: 4,
        title: "Doughnuts",
        routeName: 'doughnut',
        items:[
            { 
                id: 12,
                picture:Creamydognut,
                name: "creamy doughnuts",
                price : '$5'
        
            },
            {
                id: 13,
                picture: Seven,
                name: "box of goodness",
                price: "$5"
            },
            {
                id: 14,
                picture: Sixten,
                name: "flavoured",
                price: "$5"
            },
           
            
    ]
    },
    {
        id: 5,
        title: "Drinks",
        routeName: 'drink',
        items:[
            {
                id: 15,
                picture: Eight,
                name: "strawberry",
                price: "$3"
            },
            {
                id: 16,
                picture: Nine,
                name: "coffee",
                price: "$3"
            },
            
            {
                id: 17,
                picture: Eleven,
                name: "creamy Smoothie",
                price: "$3"
            },
           
           
            {
                id: 18,
                picture: fourteen,
                name: "wine",
                price: "$3"
            },
        

        ]
    }


]