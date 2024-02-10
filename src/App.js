import React, {useState} from 'react';
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import './styles/app.css'
import PostItem from "./components/PostItem";

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
        <PostItem/>





    </div>
  );
}

export default App;
