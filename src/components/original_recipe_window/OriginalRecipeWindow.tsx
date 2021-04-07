import React from 'react';
import './StyleOriginalRecipeWindow.css';
import '../../scripts/Ingredient.ts';
import Ingredient from '../../scripts/Ingredient';

type OGRecipeWindowProps =
{
    originalRecipe: Ingredient[]
    setOriginalRecipe: React.Dispatch<React.SetStateAction<Ingredient[]>>
}


const OriginalRecipeWindow: React.FC<OGRecipeWindowProps> = ({originalRecipe, setOriginalRecipe}) =>
{
    function editIngredient(replacementIngredient: Ingredient):void
    {
        const newRecipe: Ingredient[] = Ingredient.deepCloneIngredientArray(originalRecipe);
        const index: number = newRecipe.findIndex(x => x.id === replacementIngredient.id);
        newRecipe[index] = replacementIngredient;
        setOriginalRecipe(newRecipe);
    }

    return(
        <div className="content">
            <div className="content_desc_row">
                <div>Quantity</div>
                <div>Unit</div>
                <div>Name</div>
            </div>
            <div>
                
            </div>
            <button>Add ingredient</button>
        </div>
    );
}

export default OriginalRecipeWindow;