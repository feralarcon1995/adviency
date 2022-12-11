import { useState, useContext } from 'react';
import { useGiftContext } from '../context/GiftContext';


const GiftCount = () => {

    const { quantity, changeQuantity, addProduct, carrito, setCarrito } = useGiftContext();

    const [count, setCount] = useState(initial);

    setItemCount(count);

    const aumentar = () => {
        if (count >= product?.stock) {
            console.log('ya no sumo mas')
        }
        else {
            setCount(count + 1);
            changeQuantity(quantity + 1);

        }
    }
    const decrementar = () => {
        if (count <= 0) {
            console.log('no hago nada')
        }
        else {
            setCount(count - 1);
            changeQuantity(quantity - 1);
        }
    }

    const onAddToCart = () => {

        const cartId = carrito?.map(product => product.id)

        if (cartId?.includes(product.id)) {
            const updateCart = carrito?.map(i => {
                if (i.id === product.id) {

                    let oldQuantity = i.quantity
                    return {
                        ...i,
                        quantity: count + oldQuantity
                    }
                } else {
                    return i
                }
            })
            setCarrito(updateCart)
        } else {
            const newProduct = {
                ...product,
                quantity: count,
            };

            carrito
                ? addProduct([...carrito, newProduct])
                : addProduct([newProduct]);
        }


        onAdd();
    };
    return (
        <div>GiftCount</div>
    )
}

export default GiftCount