import logo from './logo.svg';
import './App.css';
import Categories from './ch17/Components/Categories';
import ItemList from './ch17/ItemList';
import { useCallback, useState } from 'react';

function App() {
  const[category, setCategory] = useState('food')
const onSelect = useCallback(category => setCategory(category), [])
  return (
    <div>
    <Categories category={category} onSelect={onSelect}/>
    <ItemList category={category}/>
    </div>
  );
}

export default App;
