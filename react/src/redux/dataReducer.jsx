import produce from "immer";

export const InitialState={
    productList:[
    {qr:132,
     productName:"number cake",
     description:"based on cookies and whipped cream",
     price:250,
     productPic:"./IMG_2346.jpg"},
    {qr:265,
     productName:"cake pops",
     description:"for 12th girl birthday",
     price:90,
     productPic:"./IMG_2348.jpg"},
    {qr:123,
     productName:"peanut butter balls",
     description:"tastey and easy desert",
     price:150,
     productPic:"./IMG_2349.jpg"},
    {qr:129,
     productName:"birthday cake",
     description:"butter cream and design",
     price:180,
     productPic:"./IMG_2351.jpg"},
    {qr:193,
     productName:"chockolate pie",
     description:"chockolate pie for birthday",
     price:120,
     productPic:"./הבר מצווה של מנחם (64).jpg",
    },
    {qr:163,
     productName:"cake pops",
     description:"for 13th boys birthday",
     price:90,
     productPic:"./הבר מצווה של מנחם (61).jpg"},
    {qr:543,
     productName:"small chockolate pies",
     description:"for 13th boys birthday",
     price:100,
     productPic:"./הבר מצווה של מנחם (46).jpg"},
    {qr:873,
     productName:"designed cake",
     description:"vanila flavor with butter cream ant toppings",
     price:150,
     productPic:"./DSCF1009.jpg"},
    {qr:433,
     productName:"....",
     description:"....",
     price:150,
     productPic:"./IMG_2346.jpg"},
    {qr:93,
     productName:"....",
     description:"....",
     price:150,
     productPic:"./IMG_2346.jpg"},
    {qr:703,
     productName:"....",
     description:"....",
     price:150,
     productPic:"./IMG_2346.jpg"},
    ],
    userList:[
    {gmail:"ltcs640@gmail.com",
     userName:"leah",
     password:"ltc05832",
     dateofbirth:4/8/2002,
     points:0
    },
    {gmail:"4solomon@gmail.com",
     userName:"eli",
     password:"none714714",
     dateofbirth:31/1/1979,
     points:0
    },
    {gmail:"4rache@gmail.com",
     userName:"rache",
     password:"4rachels",
     dateofbirth:20/6/1997,
     points:0
    },
    {gmail:"4aharin@gmail.com",
     userName:"aharon",
     password:"nishnash",
     dateofbirth:26/12/1999,
     points:0
    },
    {gmail:"4tamars@gmail.com",
     userName:"tamar",
     password:"4ts05832",
     dateofbirth:26/7/2004,
     points:0
    },
    {gmail:"manager",
     userName:"tamar",
     password:"12345678",
     dateofbirth:26/7/2004,
     points:0
    },
    ],
    cartList:[],
    manager:{userName:"tamar",password:12345678},
    gmail:"4chavis3@gmail.com",
    dateofbirth:13/10/2005,
    curentUser:""
}
//to change 
export const datareducer=produce((state,action)=>{
    switch(action.type){
        case "ADDPRODUCT":
            state.productList.push(action.payload)
        case "ADDTOCART":
            debugger
            state.cartList.push(action.payload)
            console.log( state.cartList);
             break;
        case "CUR":
            state.curentUser=action.payload
            break;
        case "DELETEITEMFROMCART":
            state.cartList=state.cartList.filter(p=>p.qr!==action.payload)
            break;
        case "ADDITEMTOCART":
            state.cartList.push(action.payload)
            console.log(state.cartList)
        case "DELETEITEM":
            state.productList=state.productList.filter(p=>p.qr!==action.payload)
            break;         
        default:
            break;
    }
},InitialState)