import React, { Component } from 'react';
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';
import './style/todoList.css';
import './style/animationItem.css';

export default class TodoList extends Component{

    constructor(props){
        super(props);
        this.state={
            listItems: [],
            isLoading: false
            
        }   
    }

    UNSAFE_componentWillMount = () =>{
        localStorage.getItem('listItems') && this.setState({
            listItems: JSON.parse(localStorage.getItem('listItems')),
            isLoading: true
        })
    }

    addItem = (item) => {
        //let todoItem = this.state.listItems.concat(item);
        let todoItem = [...this.state.listItems, item];
        this.setState({
            listItems : todoItem
        });
        
    }
     

    deleteItem = (id) => {
        const filtredItems = this.state.listItems.filter(item => item.id !== id);
        
        this.setState({
            listItems: filtredItems
        });
        
    };

    changeItemValue = (id) => {
        let copyOfItems = [...this.state.listItems];

        let itemFromIndex = copyOfItems.findIndex(obj => obj.id === id);
        

        copyOfItems[itemFromIndex].value = !copyOfItems[itemFromIndex].value;
        //console.log(copyOfItems[itemFromIndex].value)

        this.setState({
            listItems: copyOfItems
        })
   
    }

    setUpdate = (text, id) => {

        const items = this.state.listItems;
        let updataItems = items.map(item => {
            
            if (item.id === id){
                item.text = text;
                console.log(item.text);
                return item;
            }
            return item;

        });
        return(
            this.setState({
                listItems: updataItems
            })
            
        )
          
    };

    saveInLocalStorage = (key, value) => {
    
       localStorage.setItem('listItems', JSON.stringify(this.state.listItems));
    
    }


    render(){
        //console.log(this.state);
        return(

            <div className="todo_list-style" onSubmit = {this.addItem}>

                <TodoInput addItem={this.addItem}></TodoInput>
                
                <div>
                
                {this.state.listItems.map((i) => {
                    return (
                        
                        <TodoItem 
                        key={i.id} 
                        item={i} 
                        deleteItem = {this.deleteItem}
                        setUpdate = {this.setUpdate} 
                        changeItemValue = {this.changeItemValue}
                        /> 
                        )
                })} 
                <button type="submit" id="save-button" onClick={this.saveInLocalStorage} >Remember this list</button>
                </div>

                

            </div>
            
        )
    }
}