import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './app.css';
import { AppRoute } from '../../consts';
import { Header } from '../Header/Header';
import { RegistrationPage } from '../../pages/RegistrationPage/RegistrationPage';
import { AboutPage } from '../../pages/AboutPage/AboutPage';
import { NotFoundPage } from '../../pages/NotFoundPage/NotFoundPage';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={AppRoute.Registration} element={<RegistrationPage />} />
          <Route path={AppRoute.About} element={<AboutPage />} />
          <Route path={AppRoute.NotFound} element={<NotFoundPage />} />

          {/* <Route path="/catalog" element={<CatalogPage />}></Route>
          <Route path="/catalog/:id" element={<UserCardPage />}></Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
