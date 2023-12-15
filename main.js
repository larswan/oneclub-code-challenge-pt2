import './style.css'
import { validateInput, addItem, deleteListItem, editText } from './modules';

document.addEventListener('DOMContentLoaded', () => {
  const editableForm = document.getElementById('editableForm');
  const itemNameInput = document.getElementById('itemNameInput');
  const newItemBtn = document.getElementById('newItemBtn');
  const itemList = document.getElementById('itemList');

  newItemBtn.addEventListener('click', (e)=>{
    e.preventDefault()
    if(validateInput(itemNameInput.value)){
      addItem(itemNameInput.value, itemList)
      editableForm.reset()
    }
  }) 
  
  // Catch the new item after its added
  itemList.addEventListener('itemAdded', (e) => {
    const {li} = e.detail  
    const textElement = li.querySelector('text')
    const deleteBtn = li.querySelector('.deleteBtn')
    
    // Delete item when button is clicked
    deleteBtn.addEventListener('click', ()=>{
      deleteListItem(li)
    })

    // Edit text
    textElement.addEventListener('click', ()=>{
      editText(li)
  })
  }
  )
})

