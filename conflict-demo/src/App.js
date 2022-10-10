import {useState} from 'react';
import './App.css';

function App() {
  [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
      <div class="container">
            <ul>
              <li style={{ '--i': 6 }} onMouseOver={()=>{count+1}}>{count}</li>          
            </ul>
          </div>
      </header>
    </div>
  );
}

export default App;
