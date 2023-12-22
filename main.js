import './style.css';
import { validateInput, addItem, deleteListItem, editText, makeItemDraggable, handleDrop } from './modules';

document.addEventListener('DOMContentLoaded', () => {
  const editableForm = document.getElementById('editableForm');
  const itemNameInput = document.getElementById('itemNameInput');
  const newItemBtn = document.getElementById('newItemBtn');
  const itemList = document.getElementById('itemList');

  newItemBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (validateInput(itemNameInput.value)) {
      addItem(itemNameInput.value, itemList);
      editableForm.reset();
    }
  });

  // Catch the new item after it's added
  itemList.addEventListener('itemAdded', (e) => {
    const { li } = e.detail;
    const textElement = li.querySelector('text');
    const deleteBtn = li.querySelector('.deleteBtn');
    const dragIcon = li.querySelector('.dragBars');

    // Delete item when the button is clicked
    deleteBtn.addEventListener('click', () => {
      deleteListItem(li);
    });

    // Edit text
    textElement.addEventListener('click', () => {
      editText(li);
    });

    makeItemDraggable(li);
  });

  // Handle drop event
  itemList.addEventListener('dragover', (e) => {
    e.preventDefault();
    const draggedItem = document.querySelector('.dragging');
    const target = e.target.closest('li');
    if (target && draggedItem !== target) {
      handleDrop(itemList, draggedItem, target);
    }
  });
});
