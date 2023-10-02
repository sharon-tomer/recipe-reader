type Step = {
    description: string;
    ingredients_added: IngredientName[];
}

type Ingredient = {
    description: IngredientName;
    quantity: number | null;
    unit: any;
}

type IngredientName = string;

export default class Recipe {
    private name: string;
    private ingredients: Ingredient[];
    private steps: Step[];
    private current: number;

    constructor (props: {name: string, ingredients: Ingredient[], steps: Step[]}){
        this.name = props.name;
        this.ingredients = props.ingredients;
        this.steps = props.steps;
        this.current = 0;
    }

    #handleStep(): Step {
        const res = this.steps[this.current];
        this.current++;
        return res;
    }

    public get nextStep(): Step {
        return this.#handleStep()
    }
    public set nextStep(stepNum: number) {
        this.current = stepNum;
    }
}