export default function Products(){
    const products = ["Laptop", "Phone", "Modem", "Computer"];
    const productList = products.map((product)=>(<h3>{product}</h3>)
)
    return (
        <div>
            {productList}
        </div>
    )
}