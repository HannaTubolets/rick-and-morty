import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import { Loader } from 'components/Loader/Loader';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const CharacterPage = lazy(() => import('../pages/HeroPage/HeroPage'));
const Header = lazy(() => import('./Header/Header'));

// const MovieDetailsPage = lazy(() =>
//   import('../pages/MovieDetailsPage/MovieDetailsPage')
// );
// const Cast = lazy(() => import('../pages/MovieCast/MovieCast'));
// const Reviews = lazy(() => import('../pages/MovieReviews/MovieReviews'));

export const App = () => {
  return (
    <div>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<HomePage />} />
            {/* <Route path="movies" element={<MoviesPage />} /> */}
            <Route path="character/id" element={<CharacterPage />}>
              {/* <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} /> */}
            </Route>
          </Route>
          <Route path="*" element={<Navigate to="/" replace={true} />} />
        </Routes>
      </Suspense>
    </div>
  );
};
