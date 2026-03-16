const transientState = {
    governorId: 0,
    facilityId: 0,
    mineralId: 0
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
    document.dispatchEvent(new CustomEvent("stateChanged"))
    console.log(transientState)
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
