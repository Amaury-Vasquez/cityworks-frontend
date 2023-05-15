import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FallbackScreen } from './Layout/FallbackScreen';
import { MainLayout } from '@/Layout';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Auth = lazy(() => import('./pages/Auth'));
const NotFound = lazy(() => import('./pages/404'));
const Entity = lazy(() => import('./entities/resident/index')); {/**Eliminar linea */}

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Suspense fallback={<FallbackScreen />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/auth" element={<Auth />} />
            <Route path='/entity' element={<Entity />} />  {/**Eliminar linea */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
