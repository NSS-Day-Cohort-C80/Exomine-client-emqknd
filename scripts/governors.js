import { setGovernorChoice } from "./TransientState.js"

const handleGovernorChoice = (changeEvent) => {
    if (changeEvent.target.id === "governor-options") {
        setGovernorChoice(parseInt(changeEvent.target.value))
    }
}

const handleGovernorColonyMatch = async (changeEvent) => {
    if (changeEvent.target.id === "governor-options") {
        const governorId = parseInt(changeEvent.target.value)
        const response = await fetch("http://localhost:8088/governors/${governorId}?_expand=colony")
        const governor = await response.json()
    }
}

export const governors = async () => {

    const response = await fetch("http://localhost:8088/governors")
    const governorsArray = await response.json()

    console.log(governors)

    document.addEventListener("change", handleGovernorChoice)

    let optionsHTML = '<label for="governor-options">Choose a governor </label>'

    optionsHTML += '<select id="governor-options">'
    optionsHTML += '<option value="0">Choose a governor...</option>'

   const arrayOfOptions = governorsArray.map(
        (governor) => {
            if (governor.isActive == true) {
                return `<option value="${governor.id}">${governor.name}</option>`    
            }
        }
    )

    console.log(arrayOfOptions)

    optionsHTML += arrayOfOptions.join("")
    optionsHTML += "</select>"

    return optionsHTML
}

export const colonyMinerals = async () => {
    // Fetch the data for governors
    const governorsResponse = await fetch("http://localhost:8088/governors")
    const governorsArray = await governorsResponse.json()

    // Fetch the data for colonies
    const coloniesResponse = await fetch("http://localhost:8088/colonies")
    const coloniesArray = await coloniesResponse.json()

    // document.addEventListener("change", handleGovernorChoice)

    document.addEventListener("change", handleGovernorColonyMatch)
    
    // let mineralsHTML = "<h2>Colony Name</h2>"

    let mineralsHTML = "<h3>${governor.colony.name} Minerals</h3>"
    
    // If a governor's colonyId matches a colony.id, then display "colony.name Minerals" as a header
    /* 
    Change event - change in the dropdown
    Create an event listener for that
    fetch use the ?_expand query params for 
        value="${governor.id}" match with Eric's screenshot ???

    */

    // mineralsHTML += "<h3>`${governor.colony.name} Minerals`</h3>"
    
    return mineralsHTML
}