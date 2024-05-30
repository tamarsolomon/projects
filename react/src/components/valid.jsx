export const validEmail = (email) => {
    if (!email)
        return 'שדה חובה'

    else return ''
}

export const validPassword = (name) => {
    if (!name)
        return 'שדה חובה'
    else return ''
}

export const validqr = (qr) => {
    if (!qr)
        return 'שדה חובה'
    if (qr < 1)
        return 'its to small'
    else return ''
}
export const validprice = (price) => {
    if(!price)
        return 'שדה חובה'
    if (price < 50)
        return 'its too cheep'
    else return ''
}
export const validproductName = (productName) => {
    if (!productName)
        return 'שדה חובה'
    if(!/^[A-Za-z]/i.test(productName))
     return "רק אותיות"

    else return ''
}

export const validdescription = (description) => {
    if (!description)
        return 'שדה חובה'
    if(!/^[A-Za-z]/i.test(description))
        return "רק אותיות"
    else return ''
}
