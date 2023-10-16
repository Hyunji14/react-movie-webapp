import Button from './Button';
import styles from './css/App.module.css';
import { useState, useEffect } from 'react';

function Hello1() {
  useEffect(() => {
    console.log('created! :)');
    //cleanup function
    return () => console.log('destroyed :(');
  }, []);
  return <h1>Hello</h1>;
}

function Hello2() {
  function byeFun() {
    console.log('Bye :(');
  }
  function hiFn() {
    console.log('hi! :)');
    //cleanup function
    return byeFun;
  }
  useEffect(hiFn, []);
  return <h1>Hello</h1>;
}

function Hello() {
  useEffect(() => {
    console.log('hi! :)');
    return () => console.log('Bye :(');
  }, []);

  // 위 아래 같은 코드
  // 보통 위에처럼 사용함
  useEffect(function () {
    console.log('hi! :)');
    return function () {
      console.log('Bye :(');
    };
  }, []);

  return <h1>Hello</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? 'hide' : 'show'}</button>
    </div>
  );
}

export default App;
