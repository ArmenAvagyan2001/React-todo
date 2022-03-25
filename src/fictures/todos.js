export function TodosReducers (state, action) {
    if(action.type === "add"){
        return [
                ...state,
                {
                    id: Math.random(),
                    text: action.payload.text,
                    isCompleted: false
                }
            ]
        
    }else if(action.type === "delete") {
        return state.filter((todo) => todo.id !== action.payload.id)
    }else if(action.type === "check"){
        return state.map((todo) => {
            if(todo.id === action.payload.item.id){
                return action.payload.item
            }else{
                return todo
            }
        })
    }else if (action.type === "clear") {
        return state.filter((todo) => !todo.isCompleted);
    }
    return state;
}

export const initialTodos = [
        {
            "id": Math.random(),
            "text": "Learn JS",
            "isCompleted": false
        },
        {
            "id": Math.random(),
            "text": "Learn CSS",
            "isCompleted": false
        },
        {
            "id": Math.random(),
            "text": "Learn HTML",
            "isCompleted": false
        }
    ];
    
    localStorage.setItem("object", JSON.stringify(initialTodos));
    const todos = localStorage.getItem("object");
    //export const initialTodos = JSON.parse(todos);

    


