import { setFacilityChoice } from "./TransientState.js"
//going to add my personal comment stuff to direct thru my code logic

export const getFacilities = async () => {
  const response = await fetch("http://localhost:8088/facilities")
  const facilitiesArray = await response.json()
  // gets the facilities (fetches) from the database and puts them into the facilitiesArray, waits for fetch to return (async/await)

  let facilityOptionsHTML = `<label for="facility">Choose a facility</label>`
  facilityOptionsHTML += `<select id="facility">`
  facilityOptionsHTML += `<option value="0">Choose a facility </option>`
  //html string starters for the dropdown, placeholder

  const governorSelect = document.querySelector("#governor")

  if (governorSelect && governorSelect.value !== "0") {
    //checks that gov dropdown exists, also checks if governor was selected
    const governorResponse = await fetch(
      `http://localhost:8088/governors/${governorSelect.value}`,
    )
    const governor = await governorResponse.json()
    // gets the governor that was selected
    if (governor.isActive === true) {
      const activeFacilitiesArray = facilitiesArray.filter(
        (facility) => facility.isActive === true,
      )
      //checks if governor is active, goes forward only if they are active

      activeFacilitiesArray.forEach((facility) => {
        facilityOptionsHTML += `<option value="${facility.id}">${facility.name}</option>`
      })
      // checks active facilities, adds option
    }
  }

  facilityOptionsHTML += `</select>`
  return facilityOptionsHTML
  //returns finished HTML string
}

export const getFacilityMinerals = async (facilityId) => {
  const response = await fetch(
    "http://localhost:8088/facilityMinerals?_expand=mineral",
  )
  const facilityMineralsArray = await response.json()
  //gets all facility minerals and expands them to see full object so it has the actual data nested

  const matchingMineralsArray = facilityMineralsArray.filter(
    (facilityMineral) => facilityMineral.facilityId === parseInt(facilityId),
  )
  //^ checks the selected facility and what minerals it has
  const availableMineralsArray = matchingMineralsArray.filter(
    (facilityMineral) => facilityMineral.mineralQuantity !== 0,
  )
  //removes the mineral if it's out (most likely will never happen since theres a LOT of each mineral but ya kno)

  let mineralsHTML = ``

  availableMineralsArray.forEach((facilityMineral) => {
    mineralsHTML += `<input type="radio" name="mineral" value="${facilityMineral.mineralId}" />`
  })
  //radio button!!!! for each mineral that the facility has available. also returns the finished html string
  return mineralsHTML
}

export const handleFacilityChoice = () => {
  document.addEventListener("change", async (event) => {
    //watches for ANY change event on the page
    if (event.target.id === "governor") {
      document.querySelector("#facility-container").innerHTML =
        await getFacilities()
    }
    //checks if the governor dropdown ever changes and changes the facility dropdown in turn to relate directly (specifically the active status)

    if (event.target.id === "facility") {
      setFacilityChoice(event.target.value)
      document.querySelector("#facility-minerals-container").innerHTML =
        await getFacilityMinerals(event.target.value)
    }
    //only runs if the facility dropdown was used, saves it to the transient state. getFacilityMinerals calls function that relates to the radio button for that specific facility
  })
}
