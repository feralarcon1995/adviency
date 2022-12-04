
import Box from '@mui/material/Box';
import SantaCool from './assets/santacool.png';
import Snowman from './assets/snowman.png';
import FormRegalo from './components/FormRegalo.jsx';
import './App.css'


function App() {





  return (
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

          </Box>

        </Box>
      </Box>

    </div>
  )
}

export default App
