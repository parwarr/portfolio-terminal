import { Route, Routes } from 'react-router-dom';
import './App.css';
import InputField from './Components/InputField/InputField';

function App() {
  return (
    <>
      <Routes>
        <Route index path='/' element={<InputField />} />
        <Route path='gui' element={<div>GUI</div>} />
      </Routes>
    </>
  );
}

export default App;
