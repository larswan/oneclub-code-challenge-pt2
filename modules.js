export function validateInput (inputText){
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

    const itemAdded = new CustomEvent('itemAdded', {
        detail: {li}
    })
    list.dispatchEvent(itemAdded)
}

// Moved deletion to its own function
export function deleteListItem(item){
    item.remove()
}