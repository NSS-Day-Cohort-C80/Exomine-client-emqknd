import { setMineralChoice } from "./TransientState.js"

export const getCart = async (mineralId) => {
    
    const mineral = await response.json()

    return `
    <div id="cart-contents">
    <p>1 ton of ${mineral.name}</p>
    </div>
    `

}

export const handleMineralChoice = () => {
    document.addEventListener("change", async (event) => {
        if (event.target.name === "mineral") {
            setMineralChoice(event.target.value)
            document.querySelector("#cart-container").innerHTML =
            await getCart(event.target.value)
        }

    })

}