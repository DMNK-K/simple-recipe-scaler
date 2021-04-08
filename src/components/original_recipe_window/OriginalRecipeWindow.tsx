import React from 'react';
import './StyleOriginalRecipeWindow.css';
import '../../scripts/Ingredient.ts';
import Ingredient from '../../scripts/Ingredient';
import IngredientInput from '../ingredient_input/IngredientInput';

type OGRecipeWindowProps =
{
    originalRecipe: Ingredient[],
    setOriginalRecipe: React.Dispatch<React.SetStateAction<Ingredient[]>>,
    maxIngredients: number
}


const OriginalRecipeWindow: React.FC<OGRecipeWindowProps> = ({originalRecipe, setOriginalRecipe, maxIngredients}) =>
{
    function editIngredient(replacementIngredient: Ingredient):void
    {
        const newRecipe: Ingredient[] = Ingredient.deepCloneIngredientArray(originalRecipe);
        const index: number = newRecipe.findIndex(x => x.id === replacementIngredient.id);
        if (index < 0){return;}
        newRecipe[index] = replacementIngredient;
        setOriginalRecipe(newRecipe);
    }

    function addIngredient(): void
    {
        const newId: number = 1 + Math.max(...originalRecipe.map(x => x.id), 0);
        const newRecipe: Ingredient[] = Ingredient.deepCloneIngredientArray(originalRecipe);
        newRecipe.push(new Ingredient(newId));
        setOriginalRecipe(newRecipe);
    }

    function removeIngredient(ingrId: number): void
    {
        const newRecipe: Ingredient[] = Ingredient.deepCloneIngredientArray(originalRecipe);
        const index: number = newRecipe.findIndex(x => x.id === ingrId);
        if (index < 0){return;}
        newRecipe.splice(index, 1);
        setOriginalRecipe(newRecipe);
    }

    const ingredientRows: JSX.Element[] = originalRecipe.map((ingredient) =>
        <IngredientInput key={ingredient.id} ingredient={ingredient} editIngredient={editIngredient} removeIngredient={removeIngredient}/>
    );

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
            <button disabled={originalRecipe.length >= maxIngredients} onClick={addIngredient}>Add Ingredient</button>
        </div>
    );
}

export default OriginalRecipeWindow;