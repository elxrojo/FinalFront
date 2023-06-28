import {BrowserRouter} from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import OdontoProvider from './Contexts/OdontoContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <OdontoProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </OdontoProvider>
  // </React.StrictMode>,
)
