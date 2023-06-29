import {BrowserRouter} from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Toaster } from 'sonner'
import OdontoProvider from './Contexts/OdontoContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <OdontoProvider>
    <BrowserRouter>
      <App />
      <Toaster position="bottom-left" richColors expand={true} />
    </BrowserRouter>
  </OdontoProvider>
  // </React.StrictMode>,
)
