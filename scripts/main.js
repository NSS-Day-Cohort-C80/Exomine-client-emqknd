// import {} from './module.js'
import { getFacilities, handleFacilityChoice } from "./facilities.js"
import { getGovernors } from "./governors.js"
//TODO: import other modules

const mainContainer = document.querySelector("#container")

const render = async () => {

    const mainHTML = `
    <h1> Solar System Mining Marketplace </h1>
    <article>
	    <div>
		    <section>
    			Get Gov
			</section>
		    <section id="facility-container">
			    ${await getFacilities()}
		    </section>
		    <section id="colonyMinerals-container">
			    Colony Mineral List
		    </section>
	    </div>
	    <div>
		    <section id="facility-minerals-container">
    		Facility Minerals radio buttons list
			</section>
		    <section>
			    Space Cart Button
		    </section>
	    </div>
    </article>

    `
        mainContainer.innerHTML = mainHTML
    handleFacilityChoice()
}

render()