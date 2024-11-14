import { Link } from "react-router-dom";
import useStore from "../Store/Store"; // Importación del Hook de zustand

export default function Item({ id, name, price, img }) {
    const addToCart = useStore((state) => state.addToCart); // Acá se utiliza el Hook para acceder a la función de addToCart
    const handleAddToCart = () => { // Esta función se ejecuta cuando el usuario hace clic en el botón. La función crea un objeto 'product' que contiene la información del producto y llama a  la función 'addToCart'
        const product = { id, name, price, img }; 
        addToCart(product);
    };

    return (
        <div className="flex flex-col items-center my-[10px] mx-[10px]">
            <Link to={`/products/${id}`}>
                <img src={img} alt="Imagen Productos" />
            </Link>
            <Link to={`/products/${id}`} className="text-[22px] font-bold my-[15px] tracking-[3px] uppercase text-[#2d3a4b] hover:text-[rgb(255,225,21)]">
                {name}
            </Link>
            <h4 className="text-[18px] font-bold mb-[20px]">$ {price}</h4>
            <button onClick={handleAddToCart} className="bg-[#171e27] text-[#ffffff] text-[16px] px-[10px] py-[5px] hover:bg-[#172625]">
                Agregar al Carrito {/* Este botón llama a la función 'handleAddToCart' */}
            </button>
        </div>
    );
}