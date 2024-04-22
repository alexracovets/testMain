import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import store from './store/store';

import Default from './layout/Default';
import MainPage from './Pages/MainPage/MainPage';
import AboutPage from './Pages/AboutPage/AboutPage';
import ContactPage from './Pages/ContactPage/ContactPage';
import ServicesPage from './Pages/ServicesPage/ServicesPage';
import IndustriesPage from './Pages/IndustriesPage/IndustriesPage';

import './index.scss';
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Default />}>
          <Route index element={<MainPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="industries" element={<IndustriesPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </Provider>
  </BrowserRouter>,
)
