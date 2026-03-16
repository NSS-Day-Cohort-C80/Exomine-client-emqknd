# Exomine Algorithmic Plan

## HTML layout:

```
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
```


## Modules:
Index.html
* HTML script

Main.css
* Page styling

main.js
* HTML imports and container HTML string

colonies.js
* Colony: HTML string list for minerals obtained 
* Custom event to update HTML string list based on what was purchased 
* Will have a function to fetch purchase for each colony and make an HTML string that will show what has been purchased

facilities.js
* Facility: HTML string with a dropdown menu of facilities
* Will have a function(handleFacilityChoice) to invoke setFacilityChoice
Event Listener for selected facility to update transient state obj

minerals.js
* Minerals: HTML string with radio buttons of available minerals based on facility selected 
* Will have a function(handleMineralChoice) to invoke setMineralChoice

governors.js
* Governors: HTML string with dropdown menu of various governors
* Will have a function(handleGovernorChoice) to invoke setGovernorChoice
* Event listener for selected gov to update transient state obj

transientState.js
* Transient state object
* Functions that allow a chosen choice to update the transient state object
	- Ex. setGovernorChoice
	- Ex. setFacilityChoice
	- Ex. setMineralChoice
* placeOrder function to POST transient state obj to api database
* placeOrder function to PUT edited objs to api database (We would have two PUT objs. One to edit the minerals the colony had obtained and the other to edit the material storage at a given facility). 
	- Must add re-render for custom event here too!
	- We must add an if statement to check the activity of the governor
	- We must add an if statement to check the status/activity of a facility
	- Include an alert that displays if the user tries to submit the form before selecting any options

button.js
* OrderButton: HTML string that adds an order button to the page.
* Will also have a function that will invoke our placeOrder function with an Event listener. 
