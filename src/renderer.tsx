
import { App } from './components/App';
import './assets/css/main.scss';

import { createRoot } from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom';



const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <BrowserRouter>
        <ChakraProvider>
            <App />
        </ChakraProvider>
    </BrowserRouter>
   
);