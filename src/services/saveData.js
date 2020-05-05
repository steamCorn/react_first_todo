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

