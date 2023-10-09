import React, {useState} from "react";

export type Step = {
    instruction: string;
    ingredients_added: string[];
}

export type Ingredient = {
    name: string;
    description?: string;
    quantity: number | null;
    unit?: any;
}

export type RecipeProps = {
    name: string,
    description: string,
    ingredients: Ingredient[],
    steps: Step[],
    isCompact?: boolean
}

export default function Recipe(props: RecipeProps){
    const [currentStep, setStep] = useState<number>(0);

    function getStep(index?: number) {
        return props.steps[index || currentStep];
    }

    function getIngredients() {
        return props.ingredients;
    }

    return <div>
        <div id='info'>
            <div id='name'>{props.name}</div>
            <div id='description'>{props.description}</div>
        </div>
        <div id='ingredients'>
            { 
                props.ingredients.map(
                    ingredient => 
                        <div id='ingredient'>
                            <div id='ingredient-name'>{ingredient.name}</div>
                            <div id='ingredient-amount'>{`${ingredient.quantity} ${ingredient.quantity}`}</div>
                            {
                                ingredient.description && 
                                <div id='ingredient-desc'>{ingredient.description}</div>
                            }
                        </div> 
            )} 
        </div>
        <div id='steps'>
            {
                props.steps.map(
                    step => 
                        <div id='step'>
                            <div id='step-description'>{step.instruction}</div>
                        </div>
                )
            }
        </div>
    </div>
}