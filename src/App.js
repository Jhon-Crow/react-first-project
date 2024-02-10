import React, {useState} from 'react';
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";

function App() {
    const [likes, setLikes] = useState(5);
    const [value, setValue] = useState('inp txt ') //значение, передать новое значение

    // function increment() {
    //    setLikes(likes + 1)
    // }
    //
    // function decrement() {
    //     setLikes(likes - 1)
    // }

  return (
    <div className="App">
        <ClassCounter/>
      {/*  <h1>{likes}</h1>*/}
      {/*  <h1>{value}</h1>*/}
      {/*  <input*/}
      {/*      type='text'*/}
      {/*      value={value}*/}
      {/*      onChange={event => setValue(event.target.value)} //связали состояние со значением в интуте*/}
      {/*  />*/}
      {/*<button onClick={increment}>Increm</button>*/}
      {/*<button onClick={decrement}>Deccrem</button>*/}
    </div>
  );
}

export default App;
