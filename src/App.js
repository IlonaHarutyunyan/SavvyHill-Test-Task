import { useEffect } from 'react';
import './App.css';
import { getCategories } from './api/services/categoriesService.tsx';
import { setCategories } from './redux/categoryDataSlice.tsx';
import { HomePage } from './pages/Home/index.tsx';
import { useDispatch } from 'react-redux';
import { getElements } from './api/services/elementsService.tsx';

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
  const fetchElements = async () => {
    try {
      const getElementsData = await getElements({
        limit: 10,
        page: 1,
        category_ids: 2,
      });
      console.log(getElementsData)
      // dispatch(setCategories(getCategoriesData));
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  useEffect(() => {
    fetchElements()
    fetchCategories()
  }, [])

  return (
      <div className="App">
        <HomePage/>
      </div>
  );
}

export default App;
