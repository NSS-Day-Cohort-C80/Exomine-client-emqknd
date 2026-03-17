// import {} from './module.js'
import { getFacilities, handleFacilityChoice } from "./facilities.js"

const mainContainer = document.querySelector("#container")

const render = async () => {

    const mainHTML = `
    <h1> Title </h1>
    <article>
	    <div>
		    <section>
			    Choose Gov
		    </section>
		    <section id="facility-container">
			    ${await getFacilities()}
		    </section>
		    <section>
			    Colony Mineral List
		    </section>
	    </div>
	    <div>
		    <section>
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