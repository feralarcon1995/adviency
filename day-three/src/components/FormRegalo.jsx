import { useState } from 'react'
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import ListItem from '@mui/material/ListItem';
import { FaGifts } from 'react-icons/fa';


const FormRegalo = () => {

    const [gift, setGift] = useState('');
    const [giftsList, setGiftsList] = useState([]);

    const handleChange = (e) => {
        setGift(e.target.value);
    }

    const handleSubmit = (e) => {
        setGiftsList([...giftsList, gift])
        setGift('');
        e.preventDefault();
    };

    return (
        <>
            <form className="form" onSubmit={handleSubmit}>
                <OutlinedInput
                    id="outlined-adornment"
                    endAdornment={<InputAdornment position="end">
                        <Button
                            variant="contained"
                            color="error">
                            Agregar
                        </Button>
                    </InputAdornment>}
                    value={gift}
                    onChange={handleChange}
                    aria-describedby="outlined-introducir-regalo-helper-text"
                    inputProps={{
                        'aria-label': 'Introducir Regalo',
                    }}
                    sx={{ color: "#fff" }}
                    placeholder="Introducir Regalo..."
                />
            </form>

            <Stack
                spacing={1}
                direction="column"
                justifyContent="center">
                {giftsList.map((gift, index) => (
                    <ListItem className="list-item" key={index} > <FaGifts /> {gift} </ListItem>
                ))}
            </Stack>
        </>
    )
}

export default FormRegalo