const groceries = ['Chesse', 'Eggs', 'Bread']

const groceryList = document.getElementById('groceryList')
const newGroceryInput = document.getElementById('newGrocery')
const addBtn = document.getElementById('addBtn')

const CreateGroceryElement = grocery => {
    const groceryElement = document.createElement('li')
    groceryElement.innerText= grocery
    groceryElement.classList.add(groceryItem)
    return groceryElement
}

const addGrocery = newGrocery => {
    groceryList.appendChild(CreateGroceryElement(newGrocery))
}

addBtn.addEventListener('click', e => {
    e.preventDefault()
    const value = newGroceryInput.value
    if (value) {
        addGrocery(value)
        newGroceryInput.value = null
    }
})

