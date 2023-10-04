document.addEventListener("DOMContentLoaded", function() {
    const list = document.querySelector('ul');
    const input = document.querySelector('input');
    const btn = document.querySelector('button');

    btn.addEventListener('click', () =>{
        inputVal = input.value;
        input.value = '';
  
    const newItem = document.createElement('li');
    const newSpan = document.createElement('span');
    const newBtn = document.createElement('button');
  
    newItem.appendChild(newSpan);
    newItem.appendChild(newBtn);
  
    newSpan.textContent = inputVal;
    newBtn.textContent = 'Delete';
    list.appendChild(newItem);
  
    newBtn.addEventListener('click', () =>{
        const listItem = newBtn.parentElement;
        newItem.remove();
      
    });
    input.focus();
    });
});