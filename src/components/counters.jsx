import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {

    render() { 
        //this is object destructuring 
        //used to avoid repeatated usage of 'this.props.' in our program
        const { onReset, counters, onDelete, onIncrement } = this.props;
        
        return (
        <div>
            <button 
                onClick={onReset}
                className='btn btn-primary btn-sm m-2'>
                    Reset
            </button>


            {counters.map(counter => 
            <Counter 
                 
                //key is used internally by react cannot be accessed by us in program 
                key={counter.id}

                //we dont use seperately called value and id props of counter component
                // value={counter.value} 
                // id={counter.id}

                //we create a counter object for accessing counter component props
                counter = { counter }

                onDelete={ onDelete }

                onIncrement= { onIncrement }
            />
            )}
        </div>
        );
    }
}
 
export default Counters;