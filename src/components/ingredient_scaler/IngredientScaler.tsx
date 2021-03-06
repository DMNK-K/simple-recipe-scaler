import React, { useState } from 'react';
import Ingredient from '../../scripts/Ingredient';
import './StyleIngredientScaler.css';
import Unit from '../../scripts/Unit';
import UnitHelper from '../../scripts/UnitHelper';

type IngredientScalerProps = 
{
    ingredient: Ingredient,
    scale: number,
    changeScale(target: number): void
}

const IngredientScaler: React.FC<IngredientScalerProps> = ({ingredient, scale, changeScale}) =>
{
    const [desiredUnit, setDesiredUnit] = useState(ingredient.unit);

    //what edit quantity actually does is change the scale of the recipe, so the subsequent change in quantity is actually 1 step removed
    //and comes from "above" in the form of a different scale prop value
    function editQuantity(targetQuantity: number): void
    {
        if (!isNaN(targetQuantity) && ingredient.quantity > 0)
        {
            const convertedTargetQuantity = UnitHelper.getQuantityAfterConversion(targetQuantity, desiredUnit, ingredient.unit);
            const computedScale: number = convertedTargetQuantity / ingredient.quantity;
            changeScale(computedScale);
        }
    }

    function editUnit(unitVal:string)
    {
        if (Object.values(Unit).includes(unitVal as Unit))
        {
            const unit:Unit = unitVal as Unit;
            if (desiredUnit !== unit && UnitHelper.unitsAreSameCategory(desiredUnit, unit))
            {
                setDesiredUnit(unit);
            }
        }
    }

    const scaledQuantity = scale * UnitHelper.getQuantityAfterConversion(ingredient.quantity, ingredient.unit, desiredUnit);
    const selectOptions = UnitHelper.getMatchingCategoryUnits(ingredient.unit).map((unit) =>
        <option key={unit} value={unit}>{unit}</option>
    );

    return(
        <div className="ingredient_row">
            <input className="quantity_input" type="number" value={scaledQuantity} onChange={(e) => editQuantity(Number(e.target.value))}></input>
            <select className="unit_select" value={desiredUnit} onChange={(e) => editUnit(e.target.value)}>
                {selectOptions}
            </select>
            <span className="name_span">{ingredient.name}</span>
        </div>
    );
}

export default IngredientScaler;