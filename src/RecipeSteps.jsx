/* eslint-disable react/prop-types */
import { useState } from "react";



function Step({ step, openai }) {

    const [result, setResult] = useState();

    const generateImage = async () => {
      const res = await openai.images.generate({
        model: "dall-e-2",
        prompt: step,
      });
      setResult(res.data[0].url);
    };

    generateImage();

    return(
        <div className="stepDiv">
            <img className="result-image" src={result} alt="loading..." />
            <h4 className="step">{step}</h4>
        </div>
        
    )

}

export default function RecipeSteps({ selectedRecipe, openai }) {
    if (Object.keys(selectedRecipe).length === 0){
        console.log('check 3');
        return (<></>);
    }

    // const steps = <h1>Error</h1>;
    // console.log(selectedRecipe)
    const steps = selectedRecipe.recipie.map((step, index) => {
        return <Step step={step} openai={openai} key={index}/>
    })

    return (
        <div className="stepsDiv">
            {steps}
        </div>
    )

}