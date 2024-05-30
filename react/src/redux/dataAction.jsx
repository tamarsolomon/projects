
export const addProduct=(product)=>{
    return {type:"ADDPRODUCT",payload:product}
}

export const addtocart=(product)=>{
    return {type:"ADDTOCART",payload:product}
}
export const deleteitem=(product)=>{
    return {type:"DELETEITEM",payload:product}
}

export const deleteitemfromcart=(product)=>{
    return {type:"DELETEITEMFROMCART",payload:product}
}

export const additemtocart=(product)=>{
    return {type:"ADDITEMTOCART",payload:product}
}

export const cur=(user)=>{
    return {type:"CUR",payload:user}
}


