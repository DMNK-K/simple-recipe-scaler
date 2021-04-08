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

    function editUnit(unitVal:string)
    {
        if (Object.values(Unit).includes(unitVal as Unit))
        {
            const unit:Unit = unitVal as Unit; //cast should be safe because of the includes check
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

    const selectUnitOptions: JSX.Element[] = Object.values(Unit).map((unit) =>
        <option key={unit} value={unit}>{unit}</option>
    );

    return(
        <div className="ingredient_row">
            <input className="quantity_input" type="number" value={ingredient.quantity} onChange={(e) => editQuantity(Number(e.target.value))}></input>
            <select className="unit_select" value={ingredient.unit} onChange={(e) => editUnit(e.target.value)}>
                {selectUnitOptions}
            </select>
            <input className="name_input" type="text" value={ingredient.name} onChange={(e) => editName(e.target.value)}></input>
            <button className="remove_ingredient_button" onClick={() => removeIngredient(ingredient.id)}>Remove</button>
        </div>
    );
}

export default IngredientInput;