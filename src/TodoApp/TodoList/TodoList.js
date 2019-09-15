import React, { Component } from 'react';
import TodoListItem from './TodoListItem';

class TodoList extends Component {
    render() {
        return (
            <>
                <h3>Todo</h3>
                <ul id="incomplete-tasks">
                    {this.props.listItems.filter(item => item.status === 'notCompleted').map(item => {
                        return (
                            <TodoListItem
                                key={item.name}
                                itemName={item.name}
                                edit={this.props.editTodoTask}
                                delete={this.props.deleteTodo}
                                changeStatus={this.props.changeTodoStatus}
                                status={false}
                            />
                        )
                    })}
                </ul>

                <h3>Completed</h3>
                <ul id="completed-tasks">
                    {this.props.listItems.filter(item => item.status === 'completed').map(item => {
                        return (
                            <TodoListItem 
                                key={item.name}
                                itemName={item.name} 
                                edit={this.props.editTodoTask}
                                delete={this.props.deleteTodo}
                                changeStatus={this.props.changeTodoStatus}
                                status={true}
                            />
                        )
                    })}
                </ul>
            </>
        );
    }
}

export default TodoList;