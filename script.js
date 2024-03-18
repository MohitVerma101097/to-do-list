const addBtn = document.querySelector('#addTodoBtn')
const input = document.querySelector('#todoInput')
const list = document.querySelector('#todoList')

const fetchData = async() => {
try {
    const request = await fetch('https://crudcrud.com/api/c101a604aeae417eaef095d22ac289c0');
    result = request.json()
    return result
} catch (error) {
    console.error(error)
}
}

window.onload = fetchData;

addBtn.addEventListener("click", async ()=>{
    const toDoText = input.ariaValueMax.trim()

    if(text){
        const todo = {text: toDoText}
    }

    try {
        await fetchData(), {
            
        }
        
    } catch (error) {
        
    }
})