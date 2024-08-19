import React, { useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { getCategories } from './api/services/categoriesService.tsx';
import { setCategories } from './redux/categoryDataSlice.tsx';
import { useDispatch } from 'react-redux';

const HomePage = lazy(() => import('./pages/Home/index.tsx'));

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [getCategoriesData] = await Promise.all([
          getCategories(),
        ]);
        dispatch(setCategories(getCategoriesData));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [dispatch]);

  return (
    <div className="App">
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
