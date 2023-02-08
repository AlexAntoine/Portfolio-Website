import './Default.css'
import Fourth from './component/Fourth';
import Third from './component/Third';
import Second from './component/Second';
import Main from './component/Main';
import { Fragment } from 'react';


function App() {
  return (
    <Fragment>
      <Main/>
      <Second/>
      <Third/>
      <Fourth/>
    </Fragment>
    
  );
}

export default App;
