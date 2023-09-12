import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import data from './data';

function App() {
  return (
    <BrowserRouter>
      <div>
        <header>
          <a href="/">sabay</a>
        </header>
        <main>
          <h1>Your Groups</h1>

          <div className="groups">
            {data.groups.map((group) => (
              <div className="group" key={group.id}>
                <img src={group.image} alt={group.name} />
                <div className={group}>
                  <p>{group.name}</p>
                  <p>{group.description}</p>
                </div>
              </div>
            ))}
          </div>
          <Routes>
            <Route path="/" element={<HomeScreen />}></Route>
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
