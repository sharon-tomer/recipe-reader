import Listener from "../Listener/Listener";
import Reader from "../Reader/Reader";
import Recipe from "../Recipe/Recipe";
import mockData from "../Recipe/mock.json";

export default class RecipeNavigator {
    reader;
    listener;
    handles;
    recipe;
    currentStepIndex;

    constructor() {
        this.recipe = new Recipe(mockData.recipes[0]);
        this.reader = new Reader();
        this.handles = {
            next: this.next,
            prev: this.prev,
            ingredients: this.ingredients,
            start: this.start,
            repeat: this.repeat
        }
        this.currentStepIndex = 0;
        this.listener = new Listener({handles: this.handles});
    }

    #currentStep() {
        return this.recipe.getStep(this.currentStepIndex).instruction;
    }

    next() {

    }
    prev() {

    }
    ingredients() {
        this.reader.read(this.recipe.getIngredients().map((item, index) => `${index}) ${item.quantity} ${item.unit} ${item.description}`).join('\n'));
    }
    start() {
        this.currentStepIndex = 0;
        this.reader.read(this.#currentStep());
    }
    repeat() {
        this.reader.read(this.#currentStep());
    }
}