import { governors, colonyMinerals } from "./governors.js"
import { getFacilities, facilityName, handleFacilityChoice } from "./facilities.js"
import { purchaseMineral } from "./TransientState.js"

const mainContainer = document.querySelector("#container")

export const render = async () => {

    const mainHTML = `
    <h1>Solar System Mining Marketplace</h1>
    <article>
        <div class="left-col">
            <section id="governor-container">
                ${await governors()}
            </section>
            <section id="facility-container">
                ${await getFacilities()}
            </section>
            <section id="facility-minerals-container">
                ${await facilityName()}
            </section>
        </div>
        <div class="right-col">
            <section id="colonyMinerals-container">
                ${await colonyMinerals()}
            </section>
            <section id="cart-container">
                <h2>Space Cart</h2>
                <button id="purchase-btn">Purchase Mineral</button>
            </section>
        </div>
    </article>
    `
    mainContainer.innerHTML = mainHTML
    handleFacilityChoice()

    document.querySelector("#purchase-btn").addEventListener("click", purchaseMineral)
}

render()