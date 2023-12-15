export function validateInput (inputText){
    console.log(inputText)
    if (inputText) {
        return inputText
    } else (window.alert("Invalid entry"))
}

export function addItem(inputText, list) {
    const li = document.createElement(`li`);
    li.innerHTML = `
        <text>${inputText}</text>
        <button class="editBtn">Edit</button>
        <button class="deleteBtn">Delete</button>
        <span class="dragBars">|||</span>
    `
    list.appendChild(li)
}