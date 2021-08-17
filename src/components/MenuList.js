import React from 'react'
import Checkbox from "./Checkbox"

const MenuList = ({ dishes, selectedDishes, onChange, isFirst }) => {

  const HandleCheckboxClicked = (selectedDishId) => {
    // is currently selected
    if(selectedDishes[selectedDishId]){
      // remove selected key from dishes list
      delete selectedDishes[selectedDishId];
    } else { // is not currently selected
      // Add selected key to MenuList
      selectedDishes[selectedDishId] = {}
    }
    // call onChange function given by parent
    onChange(selectedDishes)
  }

  const HandleSubOptionsListChange = (dishId, subSelections) => {
    // add sub selections to current dishId
    selectedDishes[dishId] = subSelections;
    // call onChange function given by parent
    onChange(selectedDishes);
  }

return (
  <div>
  {dishes.map(dish => (
    <ul className={isFirst && "firstUL"}>
      <Checkbox
        selected={selectedDishes[dish.id]}
        label={dish.name}
        onChange={() => {HandleCheckboxClicked(dish.id)}}
       />
      {/* Base Case */}
      {(dish.choices.length > 0 && selectedDishes[dish.id]) &&
        <MenuList
          dishes={dish.choices}
          selectedDishes={selectedDishes[dish.id]}
          onChange={(subSelections) => HandleSubOptionsListChange(dish.id, subSelections)}
         />
      }
    </ul>
  ))}
</div>
)
}


export default MenuList
