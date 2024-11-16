import { create } from 'zustand'; // función que se utilizará para crear el Store

const Store = create((set) => ({ // se importa create es la función utilizada para crear el store
    cart: [], // Se define el estado inicial del Store que en este caso es un array vacío
    // Se definen dos funciones
    addToCart: (product) => set((state) => ({ // Esta  función toma product como argumento y lo agrega al carrito, utiliza 'set' para actualizar el estado
        cart: [...state.cart, product], 
    })),
    removeFromCart: (id) => set((state) => ({ // Esta función toma un 'productId' como argumento y elimina el producto correspondiente del carrito
        cart: state.cart.filter((item) => item.id !== id), // utiliza 'filter' para crear un nuevo array que excluye el producto con el Id especificado 
    })),
}));

export default Store;