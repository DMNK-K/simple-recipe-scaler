import Unit from './Unit';

class UnitHelper
{
    private static weightUnits: Unit[] = [Unit.G, Unit.Kg, Unit.Oz, Unit.Lb];
    private static volumeUnits: Unit[] = [Unit.Ml, Unit.L, Unit.Teaspoons, Unit.Tablespoons, Unit.Cups, Unit.FluidOz, Unit.Qt, Unit.Gal];
    private static otherUnits: Unit[] = [Unit.Other];

    private static proportions: {[key in Unit]: number} = {
        Other: 1,

        Grams: 1,
        Kilograms: 1000,
        Ounces: 28.349523,
        Pounds: 453.592,

        Mililiters: 1,
        Liters: 1000,
        Teaspoons: 5,
        Tablespoons: 15,
        Cups: 235,
        "Fluid Ounces": 29.57353,
        Quarts: 946.353,
        Gallons: 3785.412
    };

    static unitsAreSameCategory(unitA: Unit, unitB: Unit): boolean
    {
        if (unitA === unitB){return true;}
        if (this.weightUnits.includes(unitA) && this.weightUnits.includes(unitB)){return true;}
        if (this.volumeUnits.includes(unitA) && this.volumeUnits.includes(unitB)){return true;}
        if (this.otherUnits.includes(unitA) && this.otherUnits.includes(unitB)){return true;}
        return false;
    }

    static getMatchingCategoryUnits(unit: Unit): Unit[]
    {
        if (this.weightUnits.includes(unit)){return this.weightUnits;}
        if (this.volumeUnits.includes(unit)){return this.volumeUnits;}
        if (this.otherUnits.includes(unit)){return this.otherUnits;}
        return [];
    }

    static getQuantityAfterConversion(currentQuantity: number, currentUnit: Unit, targetUnit: Unit): number
    {
        if (currentUnit === targetUnit){return currentQuantity;}
        return currentQuantity * this.proportions[currentUnit] / this.proportions[targetUnit];
    }
}

export default UnitHelper;