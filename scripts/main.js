import { governors, colonyMinerals } from "./governors.js"
import { getFacilities, facilitySection } from "./facilities.js"
import { FinishButton } from "./button.js"
import { spaceCart } from "./spaceCart.js"

const mainContainer = document.querySelector("#container")

export const render = async () => {
  const mainHTML = `
    <h1>Solar System Mining Marketplace</h1>
<article>
    <div class="top-row">
        <section id="governor-container">
            ${await governors()}
        </section>
        <section id="facility-container">
            ${await getFacilities()}
        </section>
    </div>
    <div class="top-row-right">
        <section id="colonyMinerals-container">
            ${await colonyMinerals()}
        </section>
    </div>
</article>
<div class="bottom-row">
    <section id="facility-minerals-container">
        ${await facilitySection()}
        </section>
        <section id="cart-container">
        ${await spaceCart()}
        ${FinishButton()}
        </section>
</div>
    </article>`

  mainContainer.innerHTML = mainHTML
}

document.addEventListener("stateChanged", render)

render()
