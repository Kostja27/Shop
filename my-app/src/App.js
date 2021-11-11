import './App.scss';
import React from 'react';
import axios from 'axios';
import Card from './Card/Card';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data:[{name:""},{name:""}],
      text:""
    };
    this.TextInput=React.createRef();
  }
  componentDidMount() {
    axios.get("https://618c300cded7fb0017bb9478.mockapi.io/shop/product").then(response=>{this.setState({data:response.data.products})})
  }
  NewЕextInput=()=>{
    let Newtext= this.TextInput.current.value;
    this.setState({text:Newtext})
  }
  render(){
  return (
    <div className="wrapper">
      <div className="Filter">
        <input className="Button" onChange={this.NewЕextInput} ref={this.TextInput} value={this.state.text} ></input>
      </div>
      <Card data={this.state.data} text={this.state.text}/>
    </div>
  );
  }
}

export default App;
