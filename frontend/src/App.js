import './App.css';
import data from './data';

function App() {
  return (
    <div>
      <header>
        <a href="/">sabay</a>
      </header>
      <main>
        <h1>Your Groups</h1>
        {/* {data.groups.map((group) => (
          <div>
            <img src={group.image} alt={group.name} />
          </div>
        ))} */}
      </main>
    </div>
  );
}

export default App;
