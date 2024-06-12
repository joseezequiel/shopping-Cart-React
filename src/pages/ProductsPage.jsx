import { useContext } from "react"
import { CardComponent } from "../components/CardComponent"
import { ProductContext } from "../context/ProductContext"
import { CartContext } from "../context/CartContext"


export const ProductsPage = () => {
    const { products } = useContext(ProductContext)
    const { addProduct, removeProduct } = useContext(CartContext)

    return (
        <>
            <h1>Productos</h1>
            <hr />
            {products.map(products => (
                <CardComponent
                    key={products.id}
                    id={products.id}
                    image={products.image}
                    title={products.title}
                    description={products.description}
                    price={products.price}
                    handlerAdd={() => addProduct(products)}
                    handlerRemove={() => removeProduct(products.id)}
                />
            ))}
        </>
    )
}
