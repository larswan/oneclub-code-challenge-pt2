import './style.css'
import { validateInput } from './modules';

document.addEventListener('DOMContentLoaded', () => {
  const editableForm = document.getElementById('editableForm');
  const itemNameInput = document.getElementById('itemNameInput');
  const newItemBtn = document.getElementById('newItemBtn');
  const itemList = document.getElementById('itemList');

  newItemBtn.addEventListener('click', (e)=>{
    e.preventDefault()
    if(validateInput(itemNameInput.value)){
      // add item
      console.log("valid")
      editableForm.reset()
    }
    
  })
})