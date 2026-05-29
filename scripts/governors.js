import { setGovernorChoice, setGovernorColonyMatch, getGovernorColonyMatch, getGovernorChoice } from "./TransientState.js"

const handleGovernorChoice = (changeEvent) => {
    if (changeEvent.target.id === "governor-options") {
        setGovernorChoice(parseInt(changeEvent.target.value))
    }
}

// When a governor is selected, fetch that governor's colony data and save it to state
const handleGovernorColonyMatch = async (changeEvent) => {
    if (changeEvent.target.id === "governor-options") {
        const governorId = parseInt(changeEvent.target.value)
        // ?_expand=colony nests the full colony object onto the governor
        const response = await fetch(`http://localhost:5091/api/governors/${governorId}`)
        const governor = await response.json()
        // Store the colony name in transientState and trigger a re-render
        setGovernorColonyMatch(governor.colony.name)
    }
}

export const governors = async () => {

    const response = await fetch("http://localhost:5091/api/governors")
    const governorsArray = await response.json()

    // console.log(governors)

    document.addEventListener("change", handleGovernorChoice)

    let optionsHTML = '<label for="governor-options">Choose a governor </label>'

    optionsHTML += '<select id="governor-options">'
    optionsHTML += '<option value="0">Choose a governor...</option>'

    // Dropdown options for active governors. The current selection should still display on re-render
    const arrayOfOptions = governorsArray.map(
        (governor) => {
            if (governor.isActive == true) {
                return `<option ${getGovernorChoice() === governor.id ? 'selected' : ''} value="${governor.id}">${governor.name}</option>`    
            }
        }
    )

    // console.log(arrayOfOptions)

    optionsHTML += arrayOfOptions.join("")
    optionsHTML += "</select>"

    return optionsHTML
}

export const colonyMinerals = async () => {

    // Listen for dropdown changes to update the selected governor's colony
    document.addEventListener("change", handleGovernorColonyMatch)
    
    let mineralsHTML = "<h2>Inventory</h2>"

    // Get the saved colony name from transientState and display it
    mineralsHTML += `<h3>${getGovernorColonyMatch()} Minerals</h3>`

    //If a governor choice has been selected then we are going to get the governor obj associated with that choice   
    if (getGovernorChoice() !== 0) {
        const governorResponse = await fetch(`http://localhost:5091/api/governors${getGovernorChoice()}`)
        const governor = await governorResponse.json()

        //Here we are finding a match between the governor we selected and an object in the colonyMinerals array based on the value of colonyId in both objects 
        const colonyMineralResponse = await fetch(`http://localhost:5091/api/colonyminerals?colonyId=${governor.colonyId}`)
        const colonyMineralsArray = await colonyMineralResponse.json()

        //If there are no objects that matched the governor.colonyId in the returned array then "No minerals purchased yet" will appear. If there are objects in that array then an unordered list will appear that shows the quantity and name of the purchased minerals
        if (colonyMineralsArray.length === 0) {
            mineralsHTML += `<ul>
                <li>No minerals purchased yet</li>
            </ul>`
        }
        else {
            colonyMineralsArray.forEach((colonyMineral) => {
                mineralsHTML += `<ul>
                    <li>${colonyMineral.mineralQuantity} tons of ${colonyMineral.mineral.name} </li>
                </ul>`
            })
        }
    }
    
    return mineralsHTML
}