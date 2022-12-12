import { useGiftContext } from '../context/GiftContext';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { FaTrashAlt } from 'react-icons/fa';

const GiftsContainer = () => {

    const { giftsList, handleDelete, handleClear } = useGiftContext();

    return (
        <>
            <section
                className="list">
                {giftsList.map((gift, index) => (
                    <article className="list-item" key={index} >
                        <img src={gift.img} alt={gift.name} />
                        <div>
                            <h2>{gift.name}</h2>
                            <p>Cantidad: {gift.uni}</p>
                            <p>Para: <span>{gift.dest}</span></p>

                            <Button
                                variant="contained"
                                color="error"
                                onClick={() => handleDelete(index)}>
                                <FaTrashAlt />
                            </Button>
                        </div>

                    </article>

                ))}

                {giftsList.length == 0
                    ? <h2>Aun no hay regalos, ingresa alguno.</h2>
                    :
                    <Button
                        variant="contained"
                        color="error"
                        className="btn-dl"
                        onClick={() => handleClear()}>
                        Limpiar lista|
                    </Button>}
            </section>
        </>
    )
}

export default GiftsContainer