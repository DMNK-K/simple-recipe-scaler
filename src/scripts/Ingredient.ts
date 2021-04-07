import Unit from "./Unit";
import UnitHelper from "./UnitHelper";

class Ingredient
{
    id: number;
    name: string = "";
    unit: Unit = Unit.Other;
    quantity: number = 0;

    constructor(id: number, name?: string, unit?: Unit, quantity?: number)
    {
        this.id = id;
        if (typeof name !== "undefined"){this.name = name;}
        if (typeof unit !== "undefined"){this.unit = unit;}
        if (typeof quantity !== "undefined"){this.quantity = quantity;}
    }

    convertUnit(targetUnit: Unit): void
    {
        if (this.unit !== targetUnit && UnitHelper.unitsAreSameCategory(this.unit, targetUnit))
        {
            this.quantity = UnitHelper.getQuantityAfterConversion(this.quantity, this.unit, targetUnit);
            this.unit = targetUnit;
        }
    }

    clone():Ingredient
    {
        return new Ingredient(this.id, this.name, this.unit, this.quantity);
    }

    static deepCloneIngredientArray(array: Ingredient[]): Ingredient[]
    {
        const result: Ingredient[] = [];
        for (let i: number = 0; i < array.length; i++)
        {
            result.push(array[i].clone());
        }
        return result;
    }
}

export default Ingredient;