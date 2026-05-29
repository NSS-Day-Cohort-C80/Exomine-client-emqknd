import { purchaseMineral } from "./TransientState.js"

const handlePurchaseMineral = async (clickEvent) => {
    if (clickEvent.target.id === "purchase-button") {
        const facilityId = document.querySelector("#facility").value

        if (!facilityId || facilityId === "0") {
          alert("Please select a facility before purchasing.");
          return;
        }
        //This matches the facility selected to a facility obj in the facilities array 
        const response = await fetch(`http://localhost:5091/api/facilities/${facilityId}`)
        const facility = await response.json()

        //If the facility is active then the button will run the purchaseMineral function and if it is not then an alert will pop up
        if (facility.isActive === true) {
            await purchaseMineral()
        }
        else {
            alert("This facility is not active")
        }
    }
}

document.addEventListener("click", handlePurchaseMineral)

export const FinishButton = () => {
    return `<button id='purchase-button'>Purchase 1 Ton of Mineral</button>\n \n`
}