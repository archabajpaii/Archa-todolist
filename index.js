let inputField=document.getElementById("task-input");
let addButton=document.getElementById("Add-task");
let taskList = document.getElementById("task-list");
let task=[]


function AddTask(event){
    event.preventDefault()  
    let todoValue=inputField.value;
    if(todoValue){
        task.push(todoValue)
   
        inputField.value=" "
        renderTasks();
        
    }
    else{
        alert("Please enter a task before adding")
    }
}
function renderTasks() {
    taskList.innerHTML = ""; // Clear the current list before rendering
    
    task.forEach((taskItem, index) => {
        let li = document.createElement("li"); // Create a new list item
        li.innerHTML = `
    <div class="task-item">
        <div class="task">
            <input type="checkbox"/>
            <p>${taskItem}</p>
        </div>
        <div class="icons">
            <img src="edit-text.png" onClick="editTask(${index})"/>
            <img src="delete-button.png" onClick="deleteTask(${index})"/>
        </div>  
    </div>
        `;
        taskList.append(li); // Add the new list item to the task list
    });
}
function deleteTask(index){
    task.splice(index,1);
    renderTasks();
}
function editTask(index){
    let updatedTask=prompt("Edit your task:",task[index])
    if(updatedTask!==null && updatedTask.trim()!==""){
        task[index]=updatedTask
        renderTasks();
    }
}
