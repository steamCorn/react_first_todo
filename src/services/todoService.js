import {isOnline} from '../config';

export async function setTodos (todos){
    if(isOnline){
        setTodosToLocalStorage(todos);
    }
    else setTodosToBackend(todos);
}

export async function getTodos (){ 
    if(isOnline){
        return getTodosFromLocalStorage(); 
    }
    return await getTodosFromBackend();
}

const todoKey = 'todos';

function getTodosFromLocalStorage(){
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

async function setTodosToBackend(todos){

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({ data: todos})
    };
    // fetch('http://localhost:3001/todos', requestOptions)
    //     .then(response => { console.log(response) })
    //     .catch(error => { console.error('There was an error!', error)});
        try
        {
            const response = await fetch('http://localhost:3001/todos', requestOptions);
            console.log(response);
            if(response.ok){
                alert("Don't worry! I did it!");
                console.log('todo seted to Backend');
            }
            
        }
        catch (error){
            console.error('There was an error from SET!', error) 
            alert("Sorry! At this moment I can't save your notes =(")
        }

    ;
}


async function getTodosFromBackend(){
    try
    {
        const result = await fetch('http://localhost:3001/todos'); 
        
        const response = await result.json(); 
        console.log(response);
        if(response) {
                const {data} = response;
                return data;
                }

        return []; 
    }
    catch (error){ console.error('There was an error from GET!', error)  &&
    alert("Hmm... Looks like your list are lost somewhere")}

    
    //return [];


    // const result = await fetch('http://localhost:3001/todos')
        // .then(response => response.json())
        // .then(item => {
        //     if(item) {
        //         const {data} = item;
        //         return data;
        //     }
        //     return [];
        // })
        // .catch(error => { console.error('There was an error from GET!', error)    
    // });



    // console.log('todo came from Backend');
    // return result;  
    
    
}
