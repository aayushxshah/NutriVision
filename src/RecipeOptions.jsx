/* eslint-disable react/prop-types */
function Recipe({recipe, key, setSelectedRecipe}) {
    return(
        <button key={key} onClick={() => setSelectedRecipe(recipe)}>
            <h3>{recipe.name}</h3>
            <h4>{recipe.nutritionalValue}</h4>
            <h4>{recipe.ingredients}</h4>
        </button>  
    )
}
export default function RecipeOptions({results, setSelectedRecipe}) {
    if (results.length > 0) {
        console.log('check 1');
        results = [
            {
                "name": "Scrambled Egg Toast",
                "nutritionalValue": "Calories: 320, Protein: 10g, Carbs: 15g",
                "ingredients": [
                    "Egg",
                    "Butter",
                    "Bread"
                ],
                "recipie": [
                    "1. In a bowl, beat the egg with a pinch of salt.",
                    "2. Heat butter in a pan over medium heat.",
                    "3. Pour the beaten egg into the pan and scramble until cooked.",
                    "4. Toast the bread slices.",
                    "5. Spread butter on the toast and place the scrambled eggs on top.",
                    "6. Serve hot and enjoy!"
                ]
            },
            {
                "name": "Buttered Egg Sandwich",
                "nutritionalValue": "Calories: 280, Protein: 12g, Carbs: 20g",
                "ingredients": [
                    "Egg",
                    "Butter",
                    "Bread"
                ],
                "recipie": [
                    "1. Boil the egg until hard boiled, then peel and slice.",
                    "2. Toast the bread slices.",
                    "3. Spread butter on the toast slices.",
                    "4. Layer the sliced boiled egg between the buttered slices.",
                    "5. Press gently to make a sandwich.",
                    "6. Serve and enjoy!"
                ]
            }
        ]
    }

    let display = (
        results.map((recipe, index) => {
            return <Recipe recipe={recipe} key={index} setSelectedRecipe={setSelectedRecipe}/>
        })
    )

    return (
        <>
            {display}
        </>
    )
}