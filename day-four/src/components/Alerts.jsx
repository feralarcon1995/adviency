import { useGiftContext } from '../context/GiftContext';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert'; import React from 'react'

const Alerts = () => {

    const { handleClose, alert } = useGiftContext();

    return (
        <>
            <Snackbar open={alert} autoHideDuration={2000} onClose={handleClose}>
                <Alert onClose={handleClose} variant="filled" severity="success" sx={{ width: '100%' }}>
                    Regalo agregado, actualizado con exito!
                </Alert>
            </Snackbar>
        </>
    )
}

export default Alerts