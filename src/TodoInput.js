import React, {Component} from 'react';
import './style/todoInput.css';

export default class TodoInput extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            text: ''
        }
    }
    
    onClick = (e) =>{
        e.preventDefault(); //чтоб не переходить на новую страницу

        let newItem = {
            text: this.state.text,
            id: Date.now().toString(),
            value: false
        };

        if(newItem.text === '') return false;
        this.props.addItem(newItem); //даёт путь для использования функции родителя
        
        this.setState({text: ''})
    
    };

    hendlerInput = (e) =>{
        this.setState({
            text: e.target.value
        })
    }


    render() {
        
        return(

            <form className = "input-style">

                <input type="text" id="input" placeholder="Add a item.."
                    autoComplete="on"
                    onChange={this.hendlerInput}  
                    value={this.state.text} autoFocus/>


                <button type="submit" id="add-button" 
                    onClick={this.onClick}>Add in the list</button>

            </form>
 
        )
    }
}