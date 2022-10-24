
import React, { Component } from 'react'; // imrc
import './AddTask.css'

class AddTask extends Component {
    minDate = new Date().toISOString().slice(0, 10);// wycinamy 10 elem z daty
    state = {
        text: '',
        checked: false,
        date: this.minDate, 
      } 

      handleText = (e) => {
        this.setState({
            text: e.target.value
        })
      }

      handleCheckbox = (e) => {
        this.setState({
            checked: e.target.checked
        })
      }

      handleDate = (e) => {
        this.setState({
            date: e.target.value
        })
      }

      handleClick = () => {
        console.log('dodaj');
        
        const {text, checked, date} = this.state;
        if(text.length > 2) {
            const add = this.props.add(text, checked, date);
            if(add) {
                this.setState({
                    text: '',
                    checked: false,
                    date: this.minDate,
                })
            } 
        } else {
            console.log("Za krotka nazwa zadania!");
        };        
      }

    render() { 
        let maxDate = this.minDate.slice(0, 4) * 1 + 1; // wyciecie stringa * jeden daje liczbe
        //console.log(maxDate)
        maxDate = maxDate + "-12-31";
        
        return (
            <div className="form">
                <input type="text" placeholder='dodaj zadanie' value={this.state.text} onChange={this.handleText}/>
                <input type="checkbox" checked={this.state.checked} id="important" onChange={this.handleCheckbox}/>
                <label htmlFor="important">Priorytet</label><br />
                <label htmlFor="date">Do kiedy zrobic</label>
                <input type="date" value={this.state.date} min={this.minDate} max={maxDate} onChange={this.handleDate}/>
                <button className="btn" onClick={this.handleClick}>
                    Dodaj
                    </button>
                <hr />
            </div>
        );
    }
}
 
export default AddTask;