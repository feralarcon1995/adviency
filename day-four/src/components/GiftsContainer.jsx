import { useGiftContext } from '../context/GiftContext';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { FaTrashAlt } from 'react-icons/fa';

const GiftsContainer = () => {

    const { giftsList,handleDelete } = useGiftContext();

    return (
        <div>
            <Stack
                spacing={1}
                direction="column"
                justifyContent="center">
                {giftsList.map((gift, index) => (
                    <li className="list-item" key={index} >
                        {gift.name} <span>x{gift.uni}</span>
                        <Button
                            variant="contained"
                            color="error"
                            onClick={() => handleDelete(index)}>
                            <FaTrashAlt />
                        </Button>
                    </li>

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
            </Stack>
        </div>
    )
}

export default GiftsContainer