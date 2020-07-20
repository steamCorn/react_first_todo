import {isOnline} from '../config';

export function setTodos (todos){
    if(isOnline){
        setTodosToLocalStorage(todos);
    }
    else setTodosToBackend(todos);
}

export async function getTodos (){ 
    if(isOnline){
        return getTodosToLocalStorage(); 
    }
    return await getTodosToBackend();
}

const todoKey = 'todos';

function getTodosToLocalStorage(){
    console.log('todo came from Local Storage');
    let items = localStorage.getItem(todoKey);
    if (items){
        return JSON.parse(items);
    }
    return [];
}

function setTodosToLocalStorage(todos){
    localStorage.setItem(todoKey, JSON.stringify(todos));
    console.log('todo seted to Local Storage')
}

function setTodosToBackend(todos){
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({ data: todos})
    };
    fetch('http://localhost:3001/todos', requestOptions)
        .then(response => { console.log(response) })
        .catch(error => { console.error('There was an error!', error)
    });
    console.log('todo seted to Backend');
}
//to -> from
async function getTodosToBackend(){
    try
    {
        
    }
    catch{}

    const result = await fetch('http://localhost:3001/todos')
        .then(response => response.json())
        .then(item => {
            if(item) {
                const {data} = item;
                return data;
            }
            return [];
        })
        .catch(error => { console.error('There was an error from GET!', error)    
    });
    console.log('todo came from Backend');
    return result;    
}
