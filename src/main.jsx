import { BrowserRouter} from 'react-router-dom';
import ReactDOM from 'react-dom/client';

import './index.scss';
import App from './App';
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
