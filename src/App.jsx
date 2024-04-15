import { useEffect, useState } from "react";
import { OpenAI } from "openai";
import "./App.css";
import Ingredients from "./Ingredients";
import RecipeOptions from "./RecipeOptions";
import RecipeSteps from "./RecipeSteps";

function App() {

  const openai = new OpenAI({apiKey: import.meta.env.VITE_Open_AI_Key, dangerouslyAllowBrowser: true })

  const [ingredients, setIngredients] = useState("no ingredients");
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState({});

  async function onIngredientsButtonClick() {
    const response = await openai.chat.completions.create({
      messages: [
        {
          role: "system",
          content: `given ${ingredients}, output recipie options using those ingredients and put into json format making it readable into this code: const results = [
            {
                name: "nameOfFood1"
                nutritionalValue: "nutritional value",
                ingredients: ["1", "2", "3"],
                recipie: [
                    "step 1",
                    "step 2",
                    "step 3",
                    "..."
                ]
            },
            {
                name: "nameOfFood2"
                nutritionalValue: "nutritional value",
                ingredients: ["1", "2", "3"],
                recipie: [
                    "step 1",
                    "step 2",
                    "step 3",
                    "..."
                ]
            ]
        } make each object into single strings. . eg. nutritionalValue:  "Calories: 250, Protien: 30g, Carbs: 2g" etc`,
        }
      ],
      model: "gpt-3.5-turbo-0125",
      response_format: { type: "json_object" },
    });

    let temp = JSON.parse(response.choices[0].message.content);
    setRecipes(temp.results);

    console.log(recipes);
  }

  useEffect(() => {
    console.log(`selected recipe changed: ${selectedRecipe.name}`);
  }, [selectedRecipe])

  return (
    <>
      <Ingredients setIngredients={setIngredients} onClick={onIngredientsButtonClick}/>
      <RecipeOptions results={recipes} setSelectedRecipe={setSelectedRecipe}/>
      <RecipeSteps selectedRecipe={selectedRecipe} openai={openai}/>
    </>
  )
}

export default App;