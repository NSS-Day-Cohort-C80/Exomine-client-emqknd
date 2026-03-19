import { purchaseMineral } from "./TransientState.js"

const handlePurchaseMineral = async (clickEvent) => {
    if (clickEvent.target.id === "purchase-button") {
        const facilityId = document.querySelector("#facility").value

        //This matches the facility selected to a facility obj in the facilities array 
        const response = await fetch(`http://localhost:8088/facilities/${facilityId}`)
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
    return `
    <article class="purchase_mineral">
    <button id='purchase-button'>Purchase Mineral</button>
    </article>
    `
}