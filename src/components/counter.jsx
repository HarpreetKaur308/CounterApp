import React, { Component } from 'react';

class Counter extends Component {


    //we have removed all the local state used in the code below(this.state)
    //we will get the required values from this.props.counter
    // state = { 
    //     //all the data our component needs
    //     value: this.props.counter.value,
    //     //tags: ['tag1','tag2','tag3'],
    //  };


    //for rendering tags
    //  renderTags() {
    //     if (this.state.tags.length === 0) return <p>There are no tags!</p>;

    //     return  (
    //         <ul>
    //             {this.state.tags.map(tag => <li key= { tag }>{ tag }</li>)} 
    //         </ul>
    //     );
    //     //key inside ul tag is used to identify each element of the list uniquely 
    //     //which is essential for react virtual dom to identify the changes quickly 
    //  }


    
    //handling increment through props.onIncrement() 
    // handleIncrement = () => {
    //     this.setState({ value: this.state.value + 1 });
    // }



    render() { 
        
        return (
        <div>
            {/* using bootstrap and dynamically changing the properties
             */}
            <span className={this.getBadgeClasses()}>
                {this.formatCount()}
            </span>  
            <button 
                onClick={ () => this.props.onIncrement(this.props.counter) }
                className="btn btn-secondary btn-sm">
                    Increment
            </button>
            <button 
                onClick = {() => { this.props.onDelete(this.props.counter.id) } } 
                className='btn btn-danger btn-sm m-2'>
                    Delete
            </button>

            {/* handling tags as list */}
            {/* <div>
                { this.state.tags.length === 0 && 'Please create a new tag!'}
                {this.renderTags()} 
            </div> */}


        </div> 
        )
        
    }

    getBadgeClasses() {
        let classes = "badge m-2 text-bg-";
        classes += (this.props.counter.value === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { value } = this.props.counter;
        return value === 0 ? 'Zero' : value;
    }
}
 
export default Counter;