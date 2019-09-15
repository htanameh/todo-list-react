import React, { Component } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList/TodoList';

class TodoApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todoList : [],
        };
    }

    addTodo = (inputValue) => {
        // Checking if the input is already present
        var isTodoPresent = this.state.todoList.find((item) => item.name === inputValue);
        if (isTodoPresent !== undefined) {
            alert("Item already present");
            return;
        }
        //Add the new item to todoList
        var todoObject = { name : inputValue , status : 'notCompleted'}
        this.setState({
            todoList : [...this.state.todoList, todoObject]
        }); 
    }

    deleteTodo = (taskName) => {
        // Removing the task from the list
        var filterdList = this.state.todoList.filter(item => item.name !== taskName);
        this.setState({
            todoList : filterdList,
        });
    }

    markTodoAsCompleteOrInComplete = (taskName) => {
        var newTodoList = this.state.todoList.map(item => {
            if(item.name === taskName){
                if(item.status === 'completed'){
                    // Changing status to not completed
                    return {
                        ...item,
                        status : 'notCompleted'
                    }
                }
                if(item.status === 'notCompleted'){
                    // Changing status to completed
                    return {
                        ...item,
                        status : 'completed'
                    }
                }
            }
            return item;
        });
        this.setState({
            todoList : newTodoList,
        });
    }

    editTodoTask = (oldTaskName, newTaskName) => {
        // Checking if the new task name is already present
        var isTodoPresent = this.state.todoList.find((item) => item.name === newTaskName);
        if (isTodoPresent !== undefined) {
            alert("Item already present");
            return;
        }
        //Change the item in todoList
        var newTodoList = this.state.todoList.map(item => {
            if(item.name === oldTaskName){
                // Changing the name to the new task name
                return {
                    ...item,
                    name: newTaskName,
                }
            }
            return item;
        });
        this.setState({
            todoList: newTodoList,
        }); 
    }

    render() {
        return (
            <div className="container">
                <TodoForm addTodo={this.addTodo} />
                <TodoList 
                    listItems={this.state.todoList} 
                    deleteTodo={this.deleteTodo} 
                    editTodoTask={this.editTodoTask}
                    changeTodoStatus={this.markTodoAsCompleteOrInComplete}
                />
            </div>
        );
    }
}

export default TodoApp;