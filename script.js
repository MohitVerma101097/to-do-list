const addBtn = document.querySelector('#addTodoBtn')
const input = document.querySelector('#todoInput')
const list = document.querySelector('#todoList')

const apiUrl = 'https://crudcrud.com/api/c101a604aeae417eaef095d22ac289c0'

const fetchData = async() => {
try {
    const request = await fetch(apiUrl);
    result = request.json()
    return result
} catch (error) {
    console.error(error)
}
}

window.onload = fetchData;
addBtn.addEventListener("click", async () => {
    const toDoText = input.value.trim(); 

    if (toDoText) { 
        const todo = { text: toDoText }; 

        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: { 
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(todo),
            });
            
        } catch (error) {
            console.error(error); 
        }
        fetch
    }
});
