// import {} from './module.js'

const mainContainer = document.querySelector("#container")

const render = async () => {

    const mainHTML = `
    <h1> Title </h1>
    <article>
	    <div>
		    <section>
			    Choose Gov
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