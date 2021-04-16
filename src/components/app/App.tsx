import React, { useState } from 'react';
import './App.css';
import Ingredient from '../../scripts/Ingredient';
import ScalingWindow from '../scaling_window/ScalingWindow';
import OriginalRecipeWindow from '../original_recipe_window/OriginalRecipeWindow';
import Unit from '../../scripts/Unit';

function App() {

  const defaultStartRecipe: Ingredient[] = [
    new Ingredient(0, "flour", Unit.G, 300),
    new Ingredient(1, "milk", Unit.Ml, 500),
    new Ingredient(2, "eggs", Unit.Other, 2),
    new Ingredient(3),
    new Ingredient(4),
    new Ingredient(5),
    new Ingredient(6),
  ];

  const [onScalingStage, setOnScalingStage] = useState(false);
  const [originalRecipe, setOriginalRecipe] = useState(defaultStartRecipe);
  const instructionsOriginalRecipe: string = "Use the fields below to write down the original recipe you want to scale, picking initial quantities and units of measurement. Ingredients with quantity of 0 will be ignored.";
  const instructionsScaling: string = "Change the quantities of individual ingredients to scale all other ingredients in a proportional manner, or input the scale itself at the bottom. Changing units will automatically convert the quantity for a given ingredient.";

  let contentWindow;
  if (onScalingStage)
  {
    contentWindow = <ScalingWindow originalRecipe={originalRecipe}/>
  }
  else
  {
    contentWindow = <OriginalRecipeWindow originalRecipe={originalRecipe} setOriginalRecipe={setOriginalRecipe} maxIngredients={50}/>
  }

  return (
    <div className="App">
      <header className="main_header">
        Recipe Scaler
      </header>

      <main className="content_wrapper">
        <p className="instructions">
          {(onScalingStage) ? instructionsScaling : instructionsOriginalRecipe}
        </p>

        {contentWindow}

        <button className="switch_app_stage_button" onClick={() => setOnScalingStage(prev => !prev)}>
          {(onScalingStage) ? "Go Back To Original" : "Continue To Scaling"}
        </button>
      </main>
      <footer className="main_footer">

      </footer>
    </div>
  );
}

export default App;