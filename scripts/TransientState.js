import { render } from "./main.js"

const transientState = {
    governorId: 0,
    facilityId: 0,
    mineralId: 0,
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

// Returns the currently saved governor's name from state
export const getGovernorChoice = () => {
    return transientState.governorId
}

// Returns the currently saved colony name from state
export const getGovernorColonyMatch = () => {
    return transientState.colonyName
}

export const getFacility = () => {
  return transientState.facilityId
}

export const purchaseMineral = async () => {
  // Get the governor that matches the transient state governorId to get the colony they are responsible for
  const governorResponse = await fetch(`http://localhost:8088/governors/${transientState.governorId}`)
  const governor = await governorResponse.json()

  // Check if the colony already has this mineral. This uses the governor we found in the previous fetch and looks at their colonyId to see if there is an obj in colonyMinerals that matches. However, it is also looking to see if the mineralId in the colonyMinerals obj matches the transient state mineralId as well. If both match then it is returned as an array. 
  const colonyMineralResponse = await fetch(`http://localhost:8088/colonyMinerals?colonyId=${governor.colonyId}&mineralId=${transientState.mineralId}`)
  const colonyMinerals = await colonyMineralResponse.json()

  if (colonyMinerals.length === 0) {
    // Colony doesn't have this mineral — POST a new record
    const postOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        colonyId: governor.colonyId,
        mineralId: transientState.mineralId,
        mineralQuantity: 1
      })
    }
    await fetch("http://localhost:8088/colonyMinerals", postOptions)
  } 
  
  else {
    // If there is a match in colonyMinerals then there will be only ONE obj in the returned array, so to select for that specific obj we need to do this:
    const colonyMineral = colonyMinerals[0]

    // Update the colony — add 1 ton. The ...colonyMineral spreads the properties in the obj so you don't have to rewrite them all
    const putColonyOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...colonyMineral,
        mineralQuantity: colonyMineral.mineralQuantity + 1
      })
    }
    await fetch(`http://localhost:8088/colonyMinerals/${colonyMineral.id}`, putColonyOptions)

    // Get the facility's current mineral quantity. Gets the facilityMinerals obj that matches the transient state facilityId and mineralId selected. 
    const facilityMineralResponse = await fetch(`http://localhost:8088/facilityMinerals?facilityId=${transientState.facilityId}&mineralId=${transientState.mineralId}`)
    const facilityMinerals = await facilityMineralResponse.json()
    const facilityMineral = facilityMinerals[0]

    // Update the facility — subtract 1 ton
    const putFacilityOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...facilityMineral,
        mineralQuantity: facilityMineral.mineralQuantity - 1
      })
    }
    await fetch(`http://localhost:8088/facilityMinerals/${facilityMineral.id}`, putFacilityOptions)
  }

  document.querySelector("#container").innerHTML = await render()
}
