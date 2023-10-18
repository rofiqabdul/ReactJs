import React, {Component} from "react";
import List from "./List";

class ToDoList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            toDoItem: '',
            items: [],
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState(({
            items: [...this.state.items, this.state.toDoItem],
            toDoItem: '',
        }))
    }

    handleChange = (event) => {
        this.setState({
            toDoItem: event.target.value
        });
    }

    handleReset = (event) => {
        event.preventDefault();
        this.setState({
            toDoItem: '',
            items: [],
        })
    }
    
    render() {
        console.log(this.state.items)
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input value={this.state.toDoItem} onChange={this.handleChange} />
                        <button>Add</button>
                        <button onClick={this.handleReset}>Reset</button>
                </form>

                <List items={this.state.items} />
            </div>
        );
    }
}

export default ToDoList;