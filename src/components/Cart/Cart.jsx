import Store from "../../Store/Store"; // Se importa el hook de Zustand para acceder al estado del carrito

export default function Cart() {
    const cart = Store((state) => state.cart); // Obtener estado del carrito
    const removeFromCart = Store((state) => state.removeFromCart); // Función para eliminar productos del carrito desde el store

    // Calcular el total del carrito
    const total = cart.reduce((acc, item) => acc + item.price, 0); // La constante "total" utiliza 'reduce' para sumar los precios y toma el elemento 'item' para sumar cada producto

    return (
        <div className="container mx-auto max-w-[1170px]">
            <h2 className="text-[30px] font-bold">Carrito</h2>
            {cart.length === 0 ? ( // Verifica si el carrito está vacío
                <p>No hay productos en el carrito.</p>
            ) : (
                <>
                    <ul> 
                        {cart.map((item) => ( // Itera sobre el array 'cart' utilizando map() para renderizar cada producto
                            <li key={item.id} className="flex justify-between my-2 items-center">
                                <img src={item.img} alt={item.name} className="w-16 h-16 object-cover mr-4" /> {/* Imagen del producto */}
                                <span>{item.name}</span>
                                <span>$ {item.price}</span>
                                <button onClick={() => removeFromCart(item.id)} className="text-red-500">Eliminar</button> {/* Botón para eliminar el producto del carrito */}
                            </li>
                        ))}
                    </ul>
                    <div className="mt-4 font-bold">
                        <span>Total: $ {total.toFixed(2)}</span> {/* Muestra el total con dos decimales 'toFixed(2)'*/}
                    </div>
                </>
            )}
        </div>
    );
}
