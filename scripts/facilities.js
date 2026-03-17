import { setFacilityChoice } from "./TransientState.js"

export const getFacilities = async () => {
  const response = await fetch("http://localhost:8088/facilities")
  const facilities = await response.json()

  let facilityOptionsHTML = `<select id="facility">
        <option value="0">Choose a facility</option>`

  // TODO: need to import a governor function and build an if (function()) {}
  if (document.querySelector("#governor").value !== "0") {
    const activeFacilities = facilities.filter(
      (facility) => facility.isActive === true,
    )

    activeFacilities.forEach((facility) => {
      facilityOptionsHTML += `<option value="${facility.id}">${facility.name}</option>`
    })
}

    facilityOptionsHTML += `</select>`
  return facilityOptionsHTML
}

export const getFacilityMinerals = async (facilityId) => {
  const response = await fetch("http://localhost:8088/facilityMinerals")
  const facility = await response.json()

  const mineralsThatMatch = facility.filter(
    (facilityMineral) => facilityMineral.facilityId === facilityId
  )

  const availableMinerals = mineralsThatMatch.filter(
    (facilityMineral) => facilityMineral.mineralQuantity !== 0
  )

  let mineralsHTML = ``

  availableMinerals.forEach((facilityMineral) => {
    mineralsHTML += `<label>
      <input type="radio" name="mineral" value="${facilityMineral.mineralId}" />
      mineral id: ${facilityMineral.mineralId}
    </label>`
  })

  return mineralsHTML
}

export const handleFacilityChoice = () => {
  document.addEventListener("change", async (event) => {

    if (event.target.id === "governor") {
      document.querySelector("#facility-container").innerHTML = await getFacilities()
    }

    if (event.target.id === "facility") {
      setFacilityChoice(event.target.value)
    }
  })
}
