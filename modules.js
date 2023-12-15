export function validateInput (inputText){
    if (inputText) {
        return inputText
    } else (window.alert("Invalid entry"))
}

export function addItem(inputText, list) {
    const li = document.createElement(`li`);
    li.innerHTML = `
        <text>${inputText}</text>
        <button class="deleteBtn">Delete</button>
        <span class="dragBars">|||</span>
    `
    list.appendChild(li)
    
    // Trigger an event when a new li is added
    const itemAdded = new CustomEvent('itemAdded', {
        detail: {li}
    })
    list.dispatchEvent(itemAdded)
}

export function deleteListItem(item){
    item.remove()
}

export function editText(li){
    const textElement = li.querySelector('text');
    const prevText = textElement.innerText;

    // Create a new input element with previous text
    const inputElement = document.createElement('input');
    inputElement.type = 'text';
    inputElement.value = prevText;

    // Replace the text element with the input element
    textElement.replaceWith(inputElement);

    // Focus the input for editing
    inputElement.focus();

    // Submit editing function
    inputElement.addEventListener('keypress', (keyEvent) => {
        if (keyEvent.key === 'Enter') {

            // Create a new text element to replace the input. If the input is empty, return to previous text
            const newTextElement = document.createElement('text')
            if (inputElement.value.trim() === "") newTextElement.innerText = prevText
            else newTextElement.innerText = inputElement.value.trim()
            inputElement.replaceWith(newTextElement)
        }
    })
}