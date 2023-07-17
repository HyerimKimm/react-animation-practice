import { useState } from 'react';
import './App.css';
import Component from './component/Component';
import { styled } from 'styled-components';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  `

function App() {
  const [state, setState] = useState(false)

  const setTimer = () => {
    setInterval(()=>{
      state?setState(false):setState(true);
    },3000)
  } 

  return (
    <AppContainer>
      <Component/>
    </AppContainer>
  );
}

export default App;
