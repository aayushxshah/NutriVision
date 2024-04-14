import { useEffect, useState } from "react";
import { OpenAI } from "openai";
import "./App.css";
import Ingredients from "./Ingredients";
import RecipeOptions from "./RecipeOptions";
import RecipeSteps from "./RecipeSteps";

function App() {
  // const [prompt, setPrompt] = useState("");
  // const [result, setResult] = useState("");
  // const [loading, setLoading] = useState(false);
  // const [placeholder, setPlaceholder] = useState(
  //   "Search Bears with Paint Brushes the Starry Night, painted by Vincent Van Gogh.."
  // );

  const openai = new OpenAI({apiKey: import.meta.env.VITE_Open_AI_Key, dangerouslyAllowBrowser: true })

  // const generateImage = async () => {
  //   setPlaceholder(`Search ${prompt}..`);
  //   setLoading(true);
  //   const res = await openai.images.generate({
  //     model: "dall-e-2",
  //     prompt: prompt,
  //   });
  //   setLoading(false);
  //   setResult(res.data[0].url);
  // };
  // return (
  //   <div className="app-main">
  //     {loading ? (
  //       <>
  //         <h2>Generating..Please Wait..</h2>
  //         <div className="lds-ripple">
  //           <div></div>
  //           <div></div>
  //         </div>
  //       </>
  //     ) : (
  //       <>
  //         <h2>Generate an Image using Open AI API</h2>

  //         <textarea
  //           className="app-input"
  //           placeholder={placeholder}
  //           onChange={(e) => setPrompt(e.target.value)}
  //           rows="10"
  //           cols="40"
  //         />
  //         <button onClick={generateImage}>Generate an Image</button>
  //         {result.length > 0 ? (
  //           <img className="result-image" src={result} alt="result" />
  //         ) : (
  //           <></>
  //         )}
  //       </>
  //     )}
  //   </div>
  // );

  const [ingredients, setIngredients] = useState("no ingredients");
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState({});
  // const [display, setDisplay] = useState();

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