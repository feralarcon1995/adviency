
import { useGiftContext } from '../context/GiftContext';
import OutlinedInput from '@mui/material/OutlinedInput';
import Button from '@mui/material/Button';


const FormRegalo = () => {

    const { gift, quantity, changeQuantity, img, des, handleDes, handleImg, handleSubmit, handleChange } = useGiftContext();


    return (

        <form className="form" onSubmit={handleSubmit}>
            <OutlinedInput
                id="outlined"
                value={img}
                onChange={handleImg}
                aria-describedby="outlined-introducir-regalo-helper-text"
                inputProps={{
                    'aria-label': 'Link de imagen',
                }}

                sx={{ color: "#fff", width: "100%" }}
                placeholder="Link de imagen del regalo..."
                required
            />
            <OutlinedInput
                id="outlined"
                value={gift}
                onChange={handleChange}
                aria-describedby="outlined-introducir-regalo-helper-text"
                inputProps={{
                    'aria-label': 'Nombre...',
                }}

                sx={{ color: "#fff", width: "100%" }}
                placeholder="Nombre del regalo ..."
                required
            />
            <OutlinedInput
                id="outlined"
                value={des}
                onChange={handleDes}
                aria-describedby="outlined-introducir-regalo-helper-text"
                inputProps={{
                    'aria-label': 'Para quien es el regalo?',
                }}

                sx={{ color: "#fff", width: "100%" }}
                placeholder="Para quien es el regalo?"
                required
            />

            <OutlinedInput
                id="outlined-adornment"
                type="number"
                value={quantity}
                onChange={changeQuantity}
                min={1}
                max={50}
                aria-describedby="outlined-introducir-regalo-helper-text"
                inputProps={{
                    'aria-label': 'Introduce la cantidad',
                }}
                sx={{ color: "#fff", width: "100%" }}
                placeholder="Cantidad de regalos"
                required
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