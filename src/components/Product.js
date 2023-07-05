export default function Products(){
    // const products = ["Laptop", "Phone", "Modem", "Computer", "Laptop"];

    const products = [
        {id:1, name:"Laptop", price: 500},
        {id:2, name:"Phone", price: 200},
        {id:3, name:"Modem", price: 50},
        {id:4, name:"Laptop", price: 950},
    ]

    const fruits = ["Mango", "Watermelon", "Banana", "Pineapple"]
    const productList = products.map((product)=>(<h3 key = {product.id}>{product.name}</h3>))
    const fruitList = fruits.map((fruit, index)=>(<h3 key={index}>{fruit}</h3>))
    return (
        <div>
            {productList} -----xxx------
            {fruitList}
        </div>
    )
}