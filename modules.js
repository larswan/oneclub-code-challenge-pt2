export function validateInput (inputText){
    if (inputText) {
        return inputText
    } else (window.alert("Invalid entry"))
}

export function addItem(inputText, list) {
    const li = document.createElement(`li`);
    li.innerHTML = `
        <text>${inputText}</text>
        <span class="dragBars">||| </span>
        <button class="deleteBtn">X</button>
    `
    li.draggable = true;
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

    // Submit edit
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

export function makeItemDraggable(li) {
    li.draggable = true;

    li.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', li.innerHTML);
        li.classList.add('dragging');
    });

    li.addEventListener('dragend', () => {
        li.classList.remove('dragging');
    });
}

export function handleDrop(itemList, draggedItem, target) {
    const items = Array.from(itemList.children);
    const draggedIndex = items.indexOf(draggedItem);
    const targetIndex = items.indexOf(target);

    if (draggedIndex !== -1 && targetIndex !== -1) {
        itemList.insertBefore(draggedItem, targetIndex > draggedIndex ? target.nextSibling : target);
    }
}