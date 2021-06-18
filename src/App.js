import './App.css';
import Info from './Info';
import { useState } from 'react';

function App() {
  const [visible, setVisible] = useState(true);

  return (
    <div className="App">
      <div>
        <button onClick={() => setVisible(!visible)}>
          {visible ? '숨기기' : '보이기'}
        </button>
        <hr />
      </div>
      <div>{visible && <Info />}</div>
    </div>
  );
}

export default App;
