import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FallbackScreen } from './Layout/FallbackScreen';
import { MainLayout } from '@/Layout';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Auth = lazy(() => import('./pages/Auth'));
const Register = lazy(() => import('./pages/Register'));
const NotFound = lazy(() => import('./pages/404'));
const Users = lazy(() => import('./pages/Users'));
const Estimations = lazy(() => import('./pages/Estimations'));
const CRUD = lazy(() => import('./pages/EstimationsCRUD'));
const Guess = lazy(() => import('./pages/Guess'));
const CRUD = lazy(() => import('./pages/GuessCRUD'));

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Suspense fallback={<FallbackScreen />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/users" element={<Users />} />
            <Route path="/estimations" element={<Estimations />} />
            <Route path="/crud" element={<CRUD />} />
            <Route path="/register" element={<Register />} />
            <Route path="/users" element={<Users />} />
            <Route path="/guess" element={<Guess />} />
            <Route path="/users" element={<Users />} />
            <Route path="/guess" element={<Guess />} />
            <Route path="/crud" element={<CRUD />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
