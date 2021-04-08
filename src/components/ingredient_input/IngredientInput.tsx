import React from 'react';
import Ingredient from '../../scripts/Ingredient';
import './StyleIngredientInput.css';
import Unit from '../../scripts/Unit';
type IngredientInputProps =
{
    ingredient: Ingredient,
    editIngredient(newIngredient:Ingredient): void,
    removeIngredient(id: number): void
}

const IngredientInput: React.FC<IngredientInputProps> = ({ingredient, editIngredient, removeIngredient}) =>
{
    function editName(name:string)
    {
        const newIngredient: Ingredient = ingredient.clone();
        newIngredient.name = name;
        editIngredient(newIngredient);
    }

    function editUnit(unitKey:string)
    {
        if (Object.values(Unit).includes(Unit[unitKey as keyof typeof Unit]))
        {
            const unit:Unit = Unit[unitKey as keyof typeof Unit];
            const newIngredient: Ingredient = ingredient.clone();
            newIngredient.unit = unit;
            editIngredient(newIngredient);
        }
    }

    function editQuantity(quantity:number)
    {
        if (!isNaN(quantity))
        {
            const newIngredient = ingredient.clone();
            newIngredient.quantity = quantity;
            editIngredient(newIngredient);
        }
    }

    return(
        <div className="ingredient_row">
            <input type="number" value={ingredient.quantity} onChange={(e) => editQuantity(Number(e.target.value))}></input>
            <select></select>
            <input type="text" value={ingredient.name} onChange={(e) => editName(e.target.value)}></input>
            <button onClick={() => removeIngredient(ingredient.id)}>Remove</button>
        </div>
    );
}

export default IngredientInput;