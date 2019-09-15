import React, { Component } from 'react';

class TodoListItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            isEditMode : false,
            editedName : "",
        }
    }

    handleEditClick = () => {
        if(this.state.isEditMode === false){
            this.setState({
                isEditMode : true,
                editedName : this.props.itemName,
            });
        }else{
            var editedName = this.state.editedName.trim();
            // Checking if any change in value
            if(editedName === this.props.itemName){
                this.setState({
                    isEditMode : false,
                    editedName : "",
                });
                return ;
            }
            // Checking if the input is valid
            if(editedName === undefined || editedName === null || editedName.length === 0){
                alert("Item cannot be empty");
                this.setState({
                    isEditMode : false,
                    editedName : "",
                });
                return;
            }
            // Calling the edit function in TodoApp to change the name
            this.props.edit(this.props.itemName,editedName);
            this.setState({
                isEditMode : false,
                editedName : "",
            });
        }
    }

    handleEditNameChange = (event) => {
        this.setState({
            editedName : event.target.value,
        })
    }

    handleCheckboxChange = () => {
        this.props.changeStatus(this.props.itemName);
    }

    handleDeleteClick = () => {
        this.props.delete(this.props.itemName);
    }

    render() {
        return (
            <li className={this.state.isEditMode ? "editMode" : ""}>
                <input type="checkBox" defaultChecked={this.props.status} onChange={this.handleCheckboxChange}/>
                <label>{this.props.itemName}</label>
                <input type="text" value={this.state.editedName} onChange={this.handleEditNameChange} />
                <button className="edit" onClick={this.handleEditClick}>
                    {this.state.isEditMode ? "Save" : "Edit"}
                </button>
                <button className="delete" onClick={this.handleDeleteClick}>
                    Delete
                </button>
            </li>
        );
    }
}

export default TodoListItem;