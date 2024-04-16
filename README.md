# NutriVision

NutriVision is a web application that aims to make cooking healthy food easy and fun! It offers a vast collection of recipes based on the ingredients you have on hand and provides step-by-step visual instructions for each recipe. Built with DALL-E, GPT-3 Turbo, and React, NutriVision revolutionizes the way you cook by combining cutting-edge AI technology with a seamless user experience.

## Awards

This project was submitted to OhloneHacks and won 3rd place in the Health and Wellness Track. 
- [Presentation](https://docs.google.com/presentation/d/1s-7rfUW9mOhdSrrytgtc4ZfzLM8NpVwJA5GY8Fn54BE/edit?usp=sharing)

## Features

- **Ingredient-Based Recipe Search**: Simply input the ingredients you have, and NutriVision will suggest delicious recipes that you can prepare using those ingredients.
  
- **Step-by-Step Visual Instructions**: Each recipe comes with detailed visual instructions for every step, making it easy for users to follow along and cook with confidence.
  
- **AI-Powered Recipe Generation**: Leveraging the power of DALL-E and GPT-3 Turbo, NutriVision generates high-quality recipes tailored to your preferences and dietary needs.

## Technologies Used

- **DALL-E**: DALL-E is an AI model developed by OpenAI that generates images from textual descriptions. NutriVision utilizes DALL-E to provide visual representations of each recipe step.
  
- **GPT-3 Turbo**: GPT-3 Turbo is a powerful language model developed by OpenAI that generates human-like text. NutriVision harnesses the capabilities of GPT-3 Turbo to generate personalized recipe suggestions based on user input.
  
- **React**: NutriVision is built using React, a popular JavaScript library for building user interfaces. React provides a smooth and interactive user experience, making it easy to navigate through recipes and instructions.

## Getting Started

To get started with NutriVision, follow these steps:

1. Clone this repository to your local machine.
   
2. Install dependencies using npm or yarn:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Create a `.env` file and create variable `VITE_Open_AI_Key`.

4. Obtain API keys for DALL-E and GPT-3 Turbo from OpenAI and set `VITE_Open_AI_Key` to the key in `.env`.

5. Start the development server:

   ```bash
   npm start
   # or
   yarn start
   ```

6. Open your web browser and navigate to `http://localhost:3000` to access NutriVision.

## Contributors

- Aayush Shah
- Aayushi Shah

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
