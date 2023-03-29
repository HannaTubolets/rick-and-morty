import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import { Loader } from 'components/Loader/Loader';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const CharacterPage = lazy(() => import('../pages/HeroPage/HeroPage'));
const Header = lazy(() => import('./Header/Header'));

export const App = () => {
  return (
    <div>
      <Suspense fallback={<Loader />}>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/character/:id" element={<CharacterPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </div>
  );
};
