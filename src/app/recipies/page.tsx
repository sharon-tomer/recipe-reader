import { RecipeProps } from "@/components/Recipe/Recipe";
import RecipeList from "@/components/RecipeList/RecipeList";

export default function Page({ params: {recipies} }: { params: {recipies: RecipeProps[]} }) {
    return <RecipeList recipies={recipies}/>
}