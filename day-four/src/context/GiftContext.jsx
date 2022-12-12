import { createContext, useContext, useState, useEffect } from "react";

const GiftContext = createContext([]);

export const useGiftContext = () => useContext(GiftContext);


const GiftContextProvider = ({ children }) => {

    const giftsLS = JSON.parse(localStorage.getItem('giftsList') || '[]');

    const [giftsList, setGiftsList] = useState(giftsLS);
    const [gift, setGift] = useState('');
    const [quantity, setQuantity] = useState('');
    const [img, setImg] = useState('');
    const [des, setDes] = useState('');
    const [alert, setAlert] = useState(false);

    useEffect(() => {
        localStorage.setItem('giftsList', JSON.stringify(giftsList));
    }, [giftsList]);

    const handleChange = (e) => {
        setGift(e.target.value);
    }

    const handleImg = (e) => {
        setImg(e.target.value);
    }

    const handleDes = (e) => {
        setDes(e.target.value);
    }
    const changeQuantity = (e) => {
        setQuantity(parseInt(e.target.value));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const index = giftsList.map(r => r.name.toLowerCase().trim()).indexOf(gift.toLowerCase().trim());
        console.info(index)
        if (gift && index === -1) {
            const newGift = {
                id: giftsList.length + 1,
                img: img,
                name: gift,
                dest: des,
                uni: quantity
            }

            setGiftsList([newGift, ...giftsList])
            setImg('')
            setGift('')
            setDes('')
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
            img,
            des,
            handleClose,
            handleChange,
            handleImg,
            handleDes,
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