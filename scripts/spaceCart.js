import { getMineralChoice } from "./TransientState.js"
import { handleMineralChange } from "./facilities.js"

export const spaceCart = async () => {

    // Double-check the handler on facilities.js for the selected mineral
    document.addEventListener("change", handleMineralChange )

    let mineralsHTML = "<h3>Space Cart</h3>"

    mineralsHTML += '<div>'

    if (getMineralChoice() !== 0) {
        // The facilityMinerals selected mineral should match the selected facility
        const response = await fetch(`http://localhost:8088/facilityMinerals/${getMineralChoice()}?_expand=facility&_expand=mineral`)
        const facilityMineral = await response.json()

        mineralsHTML += `1 ton of ${facilityMineral.mineral.name} from ${facilityMineral.facility.name}`
    }
    
    else {
        mineralsHTML
    }

    return mineralsHTML += `</div>`
}