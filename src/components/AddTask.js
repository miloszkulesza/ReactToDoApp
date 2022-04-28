import React, { Component } from 'react';
import './AddTask.css';

class AddTask extends Component {
    state = {  
        text: '',
        important: false,
        date: new Date().toISOString().slice(0, 10)
    } 

    createNewItem = this.props.createNewItem;

    minDate = new Date().toISOString().slice(0, 10);

    handleChange = (e) => {
        const name = e.target.name;
        const type = e.target.type;
        const value = type === 'checkbox' ? e.target.checked : e.target.value;
    
        this.setState({
            [name]: value
        });
    }

    handleClick = () => {
        const newItem = {
            text: this.state.text,
            important: this.state.important,
            date: this.state.date
        }

        this.createNewItem(newItem);
        this.setState({
            text: '',
            important: false,
            date: new Date().toISOString().slice(0, 10)
        });
    }

    render() { 
        let maxDate = this.minDate.slice(0, 4) * 1 + 1;
        maxDate = maxDate + this.minDate.slice(4, 10);

        return (
            <div className="form">
                <input  type="text"
                        placeholder="Dodaj zadanie"
                        value={this.state.text}
                        name="text"
                        onChange={this.handleChange} />
                
                <input  type="checkbox"
                        checked={this.state.important}
                        id="important"
                        name="important"
                        onChange={this.handleChange} />
                <label  htmlFor="important">Ważne</label>

                <br />

                <label  htmlFor="date">Do kiedy zrobić</label>
                <input  type="date"
                        id="date"
                        name="date"
                        value={this.state.date}
                        onChange={this.handleChange}
                        min={this.minDate}
                        max={maxDate} />
                <br />
                
                <button onClick={this.handleClick}>Dodaj</button>
            </div>
        );
    }
}
 
export default AddTask;