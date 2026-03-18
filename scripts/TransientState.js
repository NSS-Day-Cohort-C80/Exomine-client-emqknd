const transientState = {
    governorId: 0,
    facilityId: 0,
    mineralId: 0,
    // New - need to add colonyName
    colonyName: ""
}

export const setFacilityChoice = (selectedFacility) => {
    transientState.facilityId = selectedFacility
    document.dispatchEvent(new CustomEvent("stateChanged"))
    console.log(transientState)
}

export const setGovernorChoice = (selectedGovernor) => {
    transientState.governorId = selectedGovernor
    document.dispatchEvent(new CustomEvent("stateChanged"))
    console.log(transientState)
}

export const setMineralChoice = (selectedMineral) => {
    transientState.mineralId = selectedMineral
    console.log(transientState)
}

// Saves the selected governor's colony name to state and triggers a re-render
export const setGovernorColonyMatch = (selectedColony) => {
    transientState.colonyName = selectedColony
    document.dispatchEvent(new CustomEvent("stateChanged"))
    console.log(transientState)
}

// Returns the currently saved colony name from state
export const getGovernorColonyMatch = () => {
    return transientState.colonyName
}

export const purchaseMineral = () => {
    /*
        Does the chosen governor's colony already own some of this mineral?
            - If yes, what should happen?
            - If no, what should happen?

        Defining the algorithm for this method is traditionally the hardest
        task for teams during this group project. It will determine when you
        should use the method of POST, and when you should use PUT.

        Only the foolhardy try to solve this problem with code.
    */



    document.dispatchEvent(new CustomEvent("stateChanged"))
}
