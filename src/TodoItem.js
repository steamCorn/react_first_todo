import React, {Component} from 'react';
import './style/todoItem.css';
import './style/checkbox.css';
import './style/animationItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';



export default class TodoItem extends Component{
    onDeleteClick = (e) => {
        
      this.props.deleteItem(this.props.item.id);  

    };

    onChange = (e) => {
        console.log(e.target.value);
        console.log(this.props.item.id);
        this.props.setUpdate(e.target.value, this.props.item.id);
    
    };
    

    render(){
        

        return(
            <div>
                
                <div className="items-style"> 
                       {/* 
                    <input type="checkbox" className="item-checkbox" id={this.props.item.id}></input>
                    <label htmlFor={this.props.item.id}></label>
                     */}

                    <label >

                    <input type="checkbox" className="item-checkbox" ></input>


                    </label>



                     
                    <p className="item-text"> 
                        
                       {/*
                        <input type="text"
                        id={this.props.item.id} 
                        value= {this.props.item.text} 
                        onChange ={this.onChange} ></input>  
*/}

                        <span>{this.props.item.text}</span> 



                        <span>
                            
                                <FontAwesomeIcon icon={faTrash} 
                                id="button-delete" onClick = {this.onDeleteClick}/>
                            
                        </span>
                        
                        {/*
                         
                        */}


                    </p> 

                    {/*
                    <div contentEditable={true}>111</div>
                    */}
                        
                </div>

               
            </div>
        )
    }
}