import './style.css'
import { validateInput, addItem, deleteListItem } from './modules';

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
    const editBtn = li.querySelector('.editBtn')
    const deleteBtn = li.querySelector('.deleteBtn')
    
    // Delete item when button is clicked
    deleteBtn.addEventListener('click', ()=>{
      deleteListItem(li)
    })


  })

})
