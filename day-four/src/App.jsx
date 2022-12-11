import GiftContextProvider from './context/GiftContext';
import './App.css'
import Box from '@mui/material/Box';
import SantaCool from './assets/santacool.png';
import Snowman from './assets/snowman.png';
import FormRegalo from './components/FormRegalo.jsx';
import GiftsContainer from './components/GiftsContainer';
import Alerts from './components/Alerts';

function App() {

  return (
    <GiftContextProvider>
      <div className='bg-navidad'>
        <img alt="santa cool" src={SantaCool} className='img-santa' />
        <img alt="muñeco de nieve" src={Snowman} className='img-munieco' />

        <Box className='bg-gift'>
          <Box>
            <h1 className='title'>
              Regalos:
            </h1>
            <Box mb={1}>
              <FormRegalo />
              <GiftsContainer/>
              <Alerts/>
            </Box>
          </Box>
        </Box>

      </div>
    </GiftContextProvider>

  )
}

export default App
