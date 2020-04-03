import React, {Component} from 'react';
import './style/todoItem.css';

export default class TodoItem extends Component{
    onDeleteClick = (e) => {
        
      this.props.deleteItem(this.props.item.id);    
    };

    

    render(){
        

        return(
            <div>
                
                    <div className="items-style" > 
                        <div>
                            <input type="checkbox"></input>
                            {this.props.item.text}
                        </div> 
                        
                        <button id="button-delete" onClick = {this.onDeleteClick}>X</button>
                    </div>
                
            </div>
        )
    }
}