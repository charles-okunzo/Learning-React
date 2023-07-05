export default function Products(){
    // const products = ["Laptop", "Phone", "Modem", "Computer", "Laptop"];

    const products = [
        {id:1, name:"Laptop", price: 500},
        {id:2, name:"Phone", price: 200},
        {id:3, name:"Modem", price: 50},
        {id:4, name:"Laptop", price: 950},
    ]
    const productList = products.map((product)=>(<h3 key = {product.id}>{product.name}</h3>)
)
    return (
        <div>
            {productList}
        </div>
    )
}