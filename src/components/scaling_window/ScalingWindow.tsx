import React, { useState } from 'react';
import Ingredient from '../../scripts/Ingredient';
import './StyleScalingWindow.css'

type ScalingWindowProps =
{
    originalRecipe: Ingredient[]
}

const ScalingWindow: React.FC<ScalingWindowProps> = ({originalRecipe}) =>
{
    const [scale, setScale] = useState(1);

    return(
        <div className="content">
            <div className="content_desc_row">
                <div>Quantity</div>
                <div>Unit</div>
                <div>Name</div>
            </div>
            <div>

            </div>
        </div>
    );
}

export default ScalingWindow;