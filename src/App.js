import './App.css';
import NavBar from './components/navbar';
import React, { Component } from 'react';
import Counters from './components/counters';

class App extends Component {
  state = { 
    counters: [
        {id: 1,value: 0},
        {id: 2,value: 0},
        {id: 3,value: 0},
        {id: 4,value: 0},
    ]
 };

 //performing 1st lifecycle hook of mounting phase
 constructor() {

    super();
    console.log('App constructor');
 }

 //performing 2nd lifecycle hook of mounting phase
 componentDidMount() {
    
 }
 
 handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].value++;
    this.setState({ counters });

 };

 handleReset = () => {
    const counters = this.state.counters.map(c => {
        c.value = 0;
        return c;
    })
    this.setState({counters})
    //setState() method can only be called when a component is rendered 
    //and placed in the DOM
 }

 handleDelete = counterId => {
    const counters = this.state.counters.filter(c => 
        c.id !== counterId);
    this.setState({ counters })
}

//third lifecycle hook of mounting phase.returns a react element 
//that is present in the virtual dom, which then react gets 
//and renders in the actual dom
  render() { 
    return (
      <React.Fragment>
        <NavBar totalCounters = { this.state.counters.filter(c => c.value > 0).length} />
          <main className='container'>
            <Counters 
              counters= { this.state.counters}
              onReset={ this.handleReset } 
              onIncrement = { this.handleIncrement }
              onDelete = { this.handleDelete } 
            />
          </main>
      </React.Fragment>
    );
  }
}
 
export default App;

