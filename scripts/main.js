// import {} from './module.js'
import { governors, colonyMinerals } from "./governors.js"

const mainContainer = document.querySelector("#container")

const render = async () => {
	const governorsHTML = await governors()
	const colonyMineralsHTML = await colonyMinerals()

    const mainHTML = `
    <h1> Title </h1>
    <article>
	    <div>
		    <section>
			    ${governorsHTML}
		    </section>
			<section>
				${colonyMineralsHTML}
			</section>
		    <section>
			    Choose Facility
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
}
render()