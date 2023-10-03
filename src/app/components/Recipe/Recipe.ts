type Step = {
    instruction: string;
    ingredients_added: IngredientName[];
}

type Ingredient = {
    description: IngredientName;
    quantity: number | null;
    unit: any;
}

type IngredientName = string;

export default class Recipe {
    name: string;
    ingredients: Ingredient[];
    steps: Step[];

    constructor (props: {name: string, ingredients: Ingredient[], steps: Step[]}){
        this.name = props.name;
        this.ingredients = props.ingredients;
        this.steps = props.steps;
    }

    getStep(index?: number) {
        return this.steps[index || 0];
    }
    getIngredients() {
        return this.ingredients;
    }
}