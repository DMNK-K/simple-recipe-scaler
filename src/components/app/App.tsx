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
    new Ingredient(4)
  ];

  const [onScalingStage, setOnScalingStage] = useState(false);
  const [originalRecipe, setOriginalRecipe] = useState(defaultStartRecipe);
  const instructionsOriginalRecipe: string = "";
  const instructionsScaling: string = "";

  return (
    <div className="App">
      <header className="main_header">
        RecipeScaler
      </header>

      <main className="content_wrapper">
        <p className="instructions">
          {(onScalingStage) ? instructionsScaling : instructionsOriginalRecipe}
        </p>

        {(onScalingStage) ? <ScalingWindow originalRecipe={originalRecipe}/> : <OriginalRecipeWindow originalRecipe={originalRecipe} setOriginalRecipe={setOriginalRecipe}/>}

        <button className="switch_app_stage_button" onClick={() => setOnScalingStage(prev => !prev)}>
          {(onScalingStage) ? "Go Back To Original" : "Continue To Scaling"}
        </button>
      </main>
      <footer>

      </footer>
    </div>
  );
}

export default App;