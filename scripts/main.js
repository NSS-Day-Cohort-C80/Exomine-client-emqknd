import { getFacilities, handleFacilityChoice } from "./facilities.js"
//TODO: import other modules

const mainContainer = document.querySelector("#container")

const render = async () => {

    const mainHTML = `
    <h1>Solar System Mining Marketplace</h1>
    <article>
        <div>
            <section>
                Choose Gov
            </section>
            <section id="facility-container">
                ${await getFacilities()}
            </section>
            <section id="facility-minerals-container">
                Facility Minerals radio buttons list
            </section>
        </div>
        <div>
            <section id="colonyMinerals-container">
                Colony Mineral List
            </section>
            <section id="cart-container">
                Space Cart Button
            </section>
        </div>
    </article>
    `
    mainContainer.innerHTML = mainHTML
    handleFacilityChoice()
}

render()