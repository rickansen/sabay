import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './screens/Login';

function App() {
  return (
    <BrowserRouter>
      <div>
        <main>
          <Routes>
            <Route path="/" element={<Login />}></Route>
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
