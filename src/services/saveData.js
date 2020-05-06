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

export function methodPost(){
    const requestOptions = {
        method: 'POST',
        body: JSON.stringify({ data: 'todos'})
    };
    fetch('http://localhost:3000/todos', requestOptions)
        .then(response => response.json())
        .catch(error => { console.error('There was an error!', error)

    });
}

// export function methodGet(){
//     const requestOptions = {
//         method: 'GET',
//         body: JSON.stringify({ title: 'React GET Request Example'})
//     };
//     fetch('http://localhost:3000/todos', requestOptions)
//         .then(response => response.json())
//         .catch(error => { console.error('There was an error!', error)

//     });
// }