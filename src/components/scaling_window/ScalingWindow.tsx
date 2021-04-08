import React, { useState } from 'react';
import Ingredient from '../../scripts/Ingredient';
import IngredientScaler from '../ingredient_scaler/IngredientScaler';
import './StyleScalingWindow.css'

type ScalingWindowProps =
{
    originalRecipe: Ingredient[]
}

const ScalingWindow: React.FC<ScalingWindowProps> = ({originalRecipe}) =>
{
    const [scale, setScale] = useState(1);    

    const ingredientRows: JSX.Element[] = originalRecipe.filter(x => x.quantity > 0).map((ingredient) =>
        <IngredientScaler key={ingredient.id} ingredient={ingredient} scale={scale} changeScale={changeScaleDirectly}/>
    );

    function changeScaleDirectly(target: number)
    {
        if (!isNaN(target))
        {
            setScale(target);
        }
    }

    return(
        <div className="content">
            <div className="content_desc_row">
                <div>Quantity</div>
                <div>Unit</div>
                <div>Name</div>
            </div>
            <div>
                {ingredientRows}
            </div>
            <input type="number" value={scale} onChange={(e) => changeScaleDirectly(Number(e.target.value))}></input>
        </div>
    );
}

export default ScalingWindow;