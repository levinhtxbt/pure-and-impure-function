import expect from 'expect'
var deepFreeze = require('deep-freeze');

const todos = (listTodo, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...listTodo,
                {
                    id: action.id,
                    name: action.name,
                    completed: false
                }
            ];
        case 'TOGGLE_TODO':
            return listTodo.map(todo => {
                if (todo.id !== action.id){
                    return todo;
                }
                return {
                    ...todo,
                    completed: !todo.completed
                }
            })
            
        default:
            return listTodo;
    }
}

const testAddTodo = () => {
    const todoBefore = [];
    const action = {
        type: 'ADD_TODO',
        id: 0,
        name: 'Write blog'
    }    
    const todoAfter = [
        {
            id: 0,
            name: 'Write blog',
            completed: false
        }
    ]

    deepFreeze(todoBefore);
    deepFreeze(action);

    expect(
        todos(todoBefore, action)
    ).toEqual(todoAfter);

}

const testToggleTodo = () => {
    const todoBefore = [
        {
            id:0,
            name: 'Write blog',
            completed: false
        },
        {
            id:1,
            name: 'Drink beer',
            completed: false
        },
    ];
    const action = {
        type: 'TOGGLE_TODO',
        id: 1
    };
    const todoAfter = [
        {
            id:0,
            name: 'Write blog',
            completed: false
        },
        {
            id:1,
            name: 'Drink beer',
            completed: true
        },
    ];

    deepFreeze(todoBefore);
    deepFreeze(action);

    expect(
        todos(todoBefore, action)
    ).toEqual(todoAfter);
}

testAddTodo();

testToggleTodo();

console.log("All test passed!!");