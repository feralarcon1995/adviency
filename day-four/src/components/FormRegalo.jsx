
import { useGiftContext } from '../context/GiftContext';
import OutlinedInput from '@mui/material/OutlinedInput';
import Button from '@mui/material/Button';


const FormRegalo = () => {

    const { gift, quantity, changeQuantity, handleSubmit, handleChange } = useGiftContext();


    return (

        <form className="form" onSubmit={handleSubmit}>
            <OutlinedInput
                id="outlined"
                value={gift}
                onChange={handleChange}
                aria-describedby="outlined-introducir-regalo-helper-text"
                inputProps={{
                    'aria-label': 'Introducir Regalo',
                }}

                sx={{ color: "#fff", width: "50%" }}
                placeholder="Introducir Regalo..."
            />

            <OutlinedInput
                id="outlined-adornment"
                type="number"
                defaultValue={quantity}
                onChange={changeQuantity}
                min={1}
                max={50}
                aria-describedby="outlined-introducir-regalo-helper-text"
                inputProps={{
                    'aria-label': 'Introduce la cantidad',
                }}
                sx={{ color: "#fff", width: "10%" }}
                placeholder="U"
            />
            <Button
                variant="contained"
                color="error"
                type="submit">
                Agregar
            </Button>
        </form>

    )
}

export default FormRegalo