// PARTE VISIBLE DEL CARRITO
import Store from "../Store/Store"; // Se importa el hook de Zustand para acceder al estado del carrito

export default function Cart() {
    const cart = Store((state) => state.cart); //Obtener estado del carrito
    const removeFromCart = Store((state) => state.removeFromCart); // Función para eliminar productos del carrito desde el store

    return (
        <div className="container mx-auto max-w-[1170px]">
            <h2 className="text-[30px] font-bold">Carrito</h2>
            {cart.length === 0 ? ( // Acá se verifica si es carrito está vacío, en caso de  que sí, se puesta el mensaje que sale abajo
                <p>No hay productos en el carrito.</p>
            ) : (
                <ul> 
                    {cart.map((item) => ( // Si hay productos, se itera sobre el array 'cart' utlizando map() para renderizar cada producto
                        <li key={item.id} className="flex justify-between my-2">
                            <span>{item.name}</span>
                            <span>$ {item.price}</span>
                            <button onClick={() => removeFromCart(item.id)} className="text-red-500">Eliminar</button> {/* Al hacer click al botón, llama a la función 'removeFromCart para eliminar el producto del carrito*/}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
