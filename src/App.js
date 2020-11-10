import React,{Component} from 'react'
import './App.css'
import Calc from './Calc'

class App extends Component {
  
  render(){
  return (
    <div className="calc-app container center-align valign-wrapper">
      <Calc />
    </div>
  );
  }
}

export default App;
