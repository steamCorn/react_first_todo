import React, { Component } from 'react';
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';
import './style/todoList.css';
import './style/animationItem.css';

export default class TodoList extends Component{

    constructor(props){
        super(props);
        this.state={
            listItems: []
            
        }   
    }

    addItem = (item) => {
        //let todoItem = this.state.listItems.concat(item);
        let todoItem = [...this.state.listItems, item];
        this.setState({
            listItems : todoItem
        });
        //console.log(this.state);
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
        console.log(itemFromIndex);

        copyOfItems[itemFromIndex].value = !copyOfItems[itemFromIndex].value;

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


    render(){
        console.log(this.state);
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
                
                </div>
            </div>
            
        )
    }
}