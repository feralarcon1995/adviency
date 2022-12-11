import { createContext, useContext, useState } from "react";

const GiftContext = createContext([]);

export const useGiftContext = () => useContext(GiftContext);


const GiftContextProvider = ({ children }) => {

    const [giftsList, setGiftsList] = useState([{ id: 0, name: 'Caramelos', uni: 3 }, { id: 1, name: 'Medias', uni: 6 }, { id: 2, name: 'Vitel Tone', uni: 2 }]);
    const [gift, setGift] = useState('');
    const [quantity, setQuantity] = useState('');
    const [alert, setAlert] = useState(false);

    const handleChange = (e) => {
        setGift(e.target.value);
    }

    const changeQuantity = (e) => {
        setQuantity(parseInt(e.target.value));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const lastId = giftsList.length > 0 ? giftsList[giftsList.length - 1].id + 1 : 0;
        const index = giftsList.map(gift => gift.name.toLowerCase().trim()).indexOf(gift.toLowerCase().trim());

        if (gift && index === -1) {
            let newGift = { id: lastId, name: giftsList, uni: quantity }
            setGiftsList([...giftsList, newGift])
            console.log(giftsList)
            setGift('')
            setQuantity('')
        } else {
            giftsList[index].uni += quantity,
                setGift(''),
                setQuantity('')
        }

        setAlert(true)
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setAlert(false);
    };

    const handleDelete = (id) => {
        setGiftsList(giftsList.filter((gift) => id !== gift.id));
    }

    const handleClear = () => {
        confirm('¿Desea borrar la lista de regalos?') ? setGiftsList([])
            : <></>;
    }

    return (
        <GiftContext.Provider value={{
            alert,
            giftsList,
            gift,
            quantity,
            handleClose,
            handleChange,
            changeQuantity,
            handleSubmit,
            handleDelete,
            handleClear
        }}>
            {children}
        </GiftContext.Provider>
    )
}

export default GiftContextProvider;