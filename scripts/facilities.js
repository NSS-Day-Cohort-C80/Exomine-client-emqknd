import { setFacilityChoice } from "./TransientState.js"

export const getFacilities = async () => {
  const response = await fetch("http://localhost:8088/facilities")
  const facilities = await response.json()

  let facilityOptionsHTML = `<label for="facility">Choose a facility</label>`
  facilityOptionsHTML += `<select id="facility">`
  facilityOptionsHTML += `<option value="0">Choose a facility</option>`

  const governorSelect = document.querySelector("#governor")

  if (governorSelect && governorSelect.value !== "0") {
    const governorResponse = await fetch(
      `http://localhost:8088/governors/${governorSelect.value}`,
    )
    const governor = await governorResponse.json()

    if (governor.isActive === true) {
      const activeFacilities = facilities.filter(
        (facility) => facility.isActive === true,
      )

      activeFacilities.forEach((facility) => {
        facilityOptionsHTML += `<option value="${facility.id}">${facility.name}</option>`
      })
    }
  }

  facilityOptionsHTML += `</select>`
  return facilityOptionsHTML
}

export const getFacilityMinerals = async (facilityId) => {
  const response = await fetch(
    "http://localhost:8088/facilityMinerals?_expand=mineral",
  )
  const facility = await response.json()

  const mineralsThatMatch = facility.filter(
    (facilityMineral) => facilityMineral.facilityId === parseInt(facilityId),
  )

  const availableMinerals = mineralsThatMatch.filter(
    (facilityMineral) => facilityMineral.mineralQuantity !== 0,
  )

  let mineralsHTML = ``

  availableMinerals.forEach((facilityMineral) => {
    mineralsHTML += `<label>
  <div><input type="radio" name="mineral" value="${facilityMineral.mineralId}" />
  ${facilityMineral.mineralQuantity} tons of ${facilityMineral.mineral.name} </div> </label>`
  })

  return mineralsHTML
}

export const handleFacilityChoice = () => {
  document.addEventListener("change", async (event) => {
    if (event.target.id === "governor") {
      document.querySelector("#facility-container").innerHTML =
        await getFacilities()
    }

    if (event.target.id === "facility") {
      setFacilityChoice(event.target.value)
      document.querySelector("#facility-minerals-container").innerHTML =
        await getFacilityMinerals(event.target.value)
    }
  })
}
