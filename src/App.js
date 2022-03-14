import HomePage from './components/HomePage.jsx';
import ShoppingList from "./components/ShoppingList.jsx";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/profileSettings" element={<HomePage />} />
      <Route path="/shoppingList" element={<ShoppingList />} />
      <Route path="/recipes" element={<HomePage />} />
      <Route path="/refrigerator" element={<HomePage />} />
      <Route path="/freezer" element={<HomePage />} />
    </Routes>
  );
}

export default App;
