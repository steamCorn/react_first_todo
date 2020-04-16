import React, {Component} from 'react';
import './style/todoItem.css';
import './style/checkbox.css';
import './style/animationItem.css';
import './style/animationForDelete.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';


export default class TodoItem extends Component{

    constructor(props){
        super(props);
        this.state = {
            isDeleting: false
        }
    }


    onDeleteClick = (e) => {
        this.setState({
            isDeleting: true
        }) 

        setTimeout(() => {
            this.props.deleteItem(this.props.item.id);
          }, 600);
          
      
    };

    onChange = (e) => {
        console.log(e.target.value);
        console.log(this.props.item.id);
        this.props.setUpdate(e.target.value, this.props.item.id);
    
    };

    render(){
    let baseDivStyle = "items-style zoomIn";
    const style = this.state.isDeleting ? " flipOutX zoomOut" : "" ;
    baseDivStyle += style;

        return(
            <div>
                <div className={baseDivStyle}> 
                    
                    <label>

                    <input type="checkbox" className="item-checkbox" ></input>

                    </label>
             
                    <p className="item-text"> 
   
                        <span>{this.props.item.text}</span> 

                        <span>
                            
                            <FontAwesomeIcon icon={faTrash} 
                            id="button-delete" 
                            onClick = {this.onDeleteClick}/>
                            
                        </span>
                    </p> 
                </div>
            </div>
        )
    }
}