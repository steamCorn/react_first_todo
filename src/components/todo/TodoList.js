import React, { Component } from 'react';
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';
import Loading from './Loading';
import '../../style/todoList.css';
import '../../style/animationItem.css';
import '../../style/loading.css';
import { setTodos, getTodos } from '../../services/todoService';

//constants for filtering items
const allItems = "allItems";
const completedItems = "completedItems";
const activeItems = "activeItems";

export default class TodoList extends Component{

    constructor(props){
        super(props);
        this.state={
            listItems: [],
            isLoading: false,
            filter: allItems    //фильтр один на три кнопки
        }   
    }

    componentDidMount = async () =>{
        let usedData = await getTodos();
        this.setState({
            listItems: usedData,
            isLoading: true
        })
    }


    addItem = (item) => {
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

    saveInLocalStorage = () => {
        setTodos(this.state.listItems);
    }

    sortingItems = (appliedFilter) => {
        
        this.setState({
            filter: appliedFilter
        });
        console.log(appliedFilter);
        
           
    };

    loadingData = () =>{
        
        this.setState({
            isLoading : !this.state.isLoading
        })
        console.log("Click BIG button", this.state.isLoading)
    }

    // loadingTodos = () => {
    //     let filteredTodos = [];   
    //     if (this.state.filter === allItems){
    //         filteredTodos = this.state.listItems;
    //     };
    //     if (this.state.filter === completedItems) {
    //         filteredTodos = this.state.listItems.filter(item => item.value )
    //     };
    //     if (this.state.filter === activeItems) {
    //         filteredTodos = this.state.listItems.filter(item => !item.value)
    //         console.log("This code wasn't writed")
    //         }


    //     if (this.state.isLoading){
    //         return <Loading/>;
    //     }
    //     return <div>
    //     {filteredTodos.map((i) => {
    //         return (
    //             <TodoItem
    //                 key={i.id}
    //                 item={i}
    //                 deleteItem={this.deleteItem}
    //                 setUpdate={this.setUpdate}
    //                 changeItemValue={this.changeItemValue}
    //             />
    //         ) 
    //     })}
    // </div>
    // }

    render(){

        //sorting for filtering elements
        
        let filteredTodos = [];   
        if (this.state.filter === allItems){
            filteredTodos = this.state.listItems;
        };
        if (this.state.filter === completedItems) {
            filteredTodos = this.state.listItems.filter(item => item.value )
        };
        if (this.state.filter === activeItems) {
            filteredTodos = this.state.listItems.filter(item => !item.value)
            console.log("This code wasn't writed")
            };




        // loading data   (НАДО УДАЛИТЬ)

        // let styleForList = "";
        // const loadingStyle = this.state.isLoading ? " loading" : "";
        // styleForList += loadingStyle;
            
        
        return(    
        <div className="todo_list-style" onSubmit = {this.addItem}>
            
            <TodoInput addItem={this.addItem}></TodoInput>
            <div className="range_buttons">
                <button  type="submit" id="button-for-all-list" 
                onClick={() => this.sortingItems(allItems)}>All list</button> 

                <button  type="submit" id="button-completed" 
                onClick={() => this.sortingItems(completedItems)} >Completed</button>

                <button  type="submit" id="button-for-unchecked-items" 
                onClick={() => this.sortingItems(activeItems)}>Active</button> 

                <button type="submit" id="save-button" onClick={this.saveInLocalStorage} >Save</button>

                <button type="submit" id="loading-button" onClick={this.loadingData}>Big fat button</button>
            </div>
            <div>
                {filteredTodos.map((i) => {
                    return (
                        <TodoItem
                            key={i.id}
                            item={i}
                            deleteItem={this.deleteItem}
                            setUpdate={this.setUpdate}
                            changeItemValue={this.changeItemValue}
                        />
                    ) 
                })}
            </div>
            
        </div>    
        )
    }
}