let inventory = [
    {sku:"P-1",name:"Polo",category:"Clothes",price:"60",inventory:"50"},
    {sku:"C-2",name:"Cleats",category:"Sports",price:"100",inventory:"20"},
    {sku:"D-3",name:"Dunks",category:"Shoes",price:"160",inventory:"15"},
    {sku:"N-4",name:"Nintendo",category:"Electronic",price:"500",inventory:"25"},
    {sku:"G-5",name:"Guitar",category:"Music",price:"200",inventory:"25"},
];

discount = 0;
for (let  product of products){
    switch (product.category){
        case "electronics":
            discount = .2
        break;
        case "apparel":
            discount = .15
        break;
        case "household":
        case "groceries":
            discount = .10
        break
        default: 
            discount = 0;
            break;
    }
    let promoPrice = product.price * (1-discount);
    product.promoPrice = promoPrice;

}
console.log(products)




