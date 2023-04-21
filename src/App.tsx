import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainLayout } from '@/Layout';
import { Home } from './pages';

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
