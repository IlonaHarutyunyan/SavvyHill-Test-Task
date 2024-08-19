import { useEffect } from 'react';
import './App.css';
import { getCategories } from './api/services/categoriesService.tsx';
import { setCategories } from './redux/categoryDataSlice.tsx';
import { HomePage } from './pages/Home/index.tsx';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch()

  const fetchCategories = async () => {
    try {
      const getCategoriesData = await getCategories();
      dispatch(setCategories(getCategoriesData));
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  fetchCategories();
  useEffect(() => {
    fetchCategories()
  }, [])

  return (
      <div className="App">
        <HomePage/>
      </div>
  );
}

export default App;
