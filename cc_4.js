//step 2
let inventory = [
    {sku:"P-1",name:"Polo",category:"Clothes",price:"60",inventory:"50"},
    {sku:"C-2",name:"Cleats",category:"Sports",price:"100",inventory:"20"},
    {sku:"D-3",name:"Dunks",category:"Shoes",price:"160",inventory:"15"},
    {sku:"N-4",name:"Nintendo",category:"Electronic",price:"500",inventory:"25"},
    {sku:"G-5",name:"Guitar",category:"Music",price:"200",inventory:"25"},
];
// step 3
discount = 0;
for (let  product of inventory){
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
//step 4
let extraDiscount;

if (customerType === "Student") { extraDiscount = 0.05;} 
else if (customerType === "Senior") {extraDiscount = 0.07;} 
else {extraDiscount = 0;}

console.log(extraDiscount);
//step 5
let subtotal = 0;

for (let product of products){ 
    if (inventory > 0) 
    {subtotal += product.price; 
    product.inventory--;}}

    let finalTotal = subtotal * (1 - extraDiscount);
    console.log(`Customer ${i} (${customerType}): $${finalTotal.toFixed(2)}`);

console.log("Remaining inventory:", products);
//step 6

let sampleProduct = inventory[0];  
for (let key in sampleProduct) {
    console.log(`${key}: ${sampleProduct[key]}`)};
let sampleProduct2 = inventory[1];  
for (let key in sampleProduct) {
    console.log(`${key}: ${sampleProduct[key]}`)};
    let sampleProduct3 = inventory[2];  
for (let key in sampleProduct) {
    console.log(`${key}: ${sampleProduct[key]}`)};


}