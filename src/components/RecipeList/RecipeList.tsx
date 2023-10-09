import Recipe, { RecipeProps } from "@/components/Recipe/Recipe";

export default function RecipeList(props: { recipies: RecipeProps[] }) {
    return <div> 
        <div id='title'>Recipies</div>
        <div id='list'> 
            {
                props.recipies.map(recipeProps => {
                    return <Recipe {...recipeProps} isCompact={true}/>
                })
            } 
        </div>
    </div>
}