import React, { useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { getCategories } from './api/services/categoriesService.tsx';
import { setCategories } from './redux/categoryDataSlice.tsx';
import { useDispatch } from 'react-redux';
import { getElements } from './api/services/elementsService.tsx';
import { setElementsData } from './redux/elementsSlice.tsx';

const HomePage = lazy(() => import('./pages/Home/index.tsx'));

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [getCategoriesData, getElementsData] = await Promise.all([
          getCategories(),
          getElements({
            limit: 10,
          })
        ]);
        dispatch(setCategories(getCategoriesData));
        dispatch(setElementsData(getElementsData))
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
