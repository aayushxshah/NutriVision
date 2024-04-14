/* eslint-disable react/prop-types */
export default function Ingredients({setIngredients, onClick}) {

    return(
        <>
            <textarea placeholder='Enter Ingredients Here' cols={40} rows={10} onChange={(e) => setIngredients(e.target.value)}></textarea>
            <button onClick={onClick}>Enter</button>
        </>
    )
}