import { setFacilityChoice } from "./TransientState.js"

export const getFacilities = async () => {
  const response = await fetch("http://localhost:8088/facilities")
  const facilities = await response.json()

  let facilityOptionsHTML = `<select id="facility">
        <option value="0">Choose a facility</option>`

  // TODO: need to import a governor function and build an if (function()) {}
  if (document.querySelector("#governor").value !== 0) {
    const activeFacilities = facilities.filter(
      (facility) => facility.isActive === true,
    )

    activeFacilities.forEach((facility) => {
      facilityOptionsHTML += `<option value="${facility.id}">${facility.name}</option>`
    })

    facilityOptionsHTML += `</select>`
  } else {
    facilityOptionsHTML
  }
  return facilityOptionsHTML
}

export const handleFacilityChoice = () => {
  document.addEventListener("change", (event) => {
    if (event.target.id === "facility") {
      setFacilityChoice(event.target.value)
    }
  })
}
