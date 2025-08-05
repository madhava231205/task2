function addtask(){
    document.getElementById('display').style.display='block';
    const addtask = document.getElementById('task').value;
     const tasklist = document.getElementById('tasklist')
    const listItem = document.createElement('li');
    listItem.innerHTML =
        `<strong>
            ${addtask}
        </strong> `;
        const deletebutton = createButton('X', 'remove', () => listItem.remove());
        listItem.appendChild(deletebutton);

    tasklist.appendChild(listItem);
    if(!addtask){
        alert("enter the task");
    }

}
function createButton(text, status, onClick) {
    const button = document.createElement('button');
    button.type = 'button';
    button.innerText = text;
    button.className = status;
    button.onclick = onClick;

    return button;

}
