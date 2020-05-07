const todoKey = 'todos';

export function getTodos(){

    let items = localStorage.getItem(todoKey);
    if (items){
        return JSON.parse(items);
    }
    return [];
}

export function saveTodos(todos){
    localStorage.setItem(todoKey, JSON.stringify(todos));
}

export function methodPost(todos){
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({ data: todos})
    };
    fetch('http://localhost:3001/todos', requestOptions)
        .then(response => { console.log(response) })
        .catch(error => { console.error('There was an error!', error)

    });
}

export async function methodGet(){
    //let items;
    
//items = JSON.parse( JSON.stringify('todos'))
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

    return result;    
}