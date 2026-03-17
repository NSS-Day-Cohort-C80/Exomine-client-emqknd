import { setFacilityChoice } from "./TransientState.js"

const getFacilities = async () => {
  const response = await fetch("http://localhost:8088/facilities")
  const data = await response.json()

  let facilityOptionsHTML = `<select id="facility">
        <option value="0">Choose a facility</option>`

  const activeFacilities = data.filter((facility) => facility.isActive === true)

  activeFacilities.forEach((facility) => {
    facilityOptionsHTML += `<option value="${facility.id}">${facility.name}</option>`
    })

  facilityOptionsHTML += `</select>`

  return facilityOptionsHTML
}

export const handleFacilityChoice = () => {
  document.addEventListener("change", (event) => {
    if (event.target.id === "facility") {
      setFacilityChoice(event.target.value)
    }
  })
}

export { getFacilities }
