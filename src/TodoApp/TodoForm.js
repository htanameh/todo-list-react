import React, { Component } from 'react';

class TodoForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            newTaskInput : ""
        }
    }

    handleTaskInputChange = (event) => {
        this.setState({
            newTaskInput : event.target.value,
        })
    }

    handleAddButtonClick = () => {
        var inputValue = this.state.newTaskInput.trim();
        // Checking if the input is valid
        if (inputValue === undefined || inputValue === null || inputValue.length === 0) {
            alert("Item cannot be empty");
            return;
        }
        this.props.addTodo(inputValue);
    }

    render() { 
        return ( 
            <p>
                <label htmlFor="new-task">Add Item</label>
                <input id="new-task" type="text" onChange={this.handleTaskInputChange}/>
                <button onClick={this.handleAddButtonClick}>Add</button>
            </p>
         );
    }
}
 
export default TodoForm;