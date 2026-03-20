# Exomine

Here's a gif that showcase our group project working as expected locally:

![](./images/finished-working-app.gif)

---

## Original class instructions below

This project has you building an application that lets governors of different colonies in our Solar System purchase minerals from various mining facilities that human have established.

> "This project has made me realize the importance of an ERD and quality design of your data structure and how to access that data."
>   - Former NSS Student

## Professional Collaboration

In this project, you are expected to start building your professional collaboration skills by writing issue tickets and having professional pull requests. During your wireframing and algorithmic thinking design process, you are going to be creating tickets for your efforts.

Here's the link to the [Github Workflow Guides](https://nashville-software-school.github.io/github-workflow/) that everyone must use during this project.

You will need to clone this repository, create a project board, and create issue tickets once you have used your analytical and algorithmic thinking to define tasks. Make sure you review all articles and videos that we provide for you in the guides. You are expected to produce high quality documentation.

## Workflow Animation

This animation shows you the basic behavior of the application.

![](./images/exomine.gif)

## Features

**Given** a governor wants to purchase minerals for a colony<br/>
**When** a governor is chosen<br/>
**Then** the inventory for that governor's colony should be displayed _(the mineral names and quantities)_<br/>
**And** the facility select element should be enabled

**Given** a governor has been chosen<br/>
**When** a mining facility is chosen<br/>
**Then** the minerals available for purchase should be displayed _(the mineral names and quantities)_<br/>
**And** a radio button should be next to each

**Given** a governor has been chosen<br/>
**When** a mining facility is chosen<br/>
**Then** any minerals with a quantity of 0 should not have a radio button<br/>


**Given** a governor has been selected<br/>
**And** a facility has been selected<br/>
**When** a mineral has been selected<br/>
**Then** the chosen mineral should appear in a _Space Cart_ area with a button labeled _Purchase Mineral_


**Given** a governor has been selected<br/>
**And** a facility has been selected<br/>
**And** a mineral has been selected<br/>
**When** the _Purchase Mineral_ button is clicked<br/>
**Then** 1 ton of the chosen mineral should be added to the inventory of the active colony
**And** 1 ton of the chosen mineral should be removed from the inventory of the chosen mining facility<br/>

---

This last feature will require you to modify the data in your API. This is performed with an [HTTP request that uses the PUT method](https://dev.to/silvenleaf/fetch-api-easiest-explanation-part-3-4-put-by-silvenleaf-3oe8) instead of POST.

## Data Relationships

Below you can ready some basic information about the properties and relationships of the data you need for this application. 

### Governors

Each human habitation colony in the Solar System _(Earth, Mars, Europa, etc...)_ has a governor. To keep each colony running efficiently, the governor has to purchase essential minerals from lightly staffed mining facilities that have been established on asteroids, moons, and rocky planets.

From time to time, governors take leaves of absence, so their status can change from active to inactive. Only active governors should be displayed in the UI. By law, any person is eligible to become a Governor, but can only be a Governor of a since colony at any point in time.

### Colonies

Each colony can have one, or more, active governor depending on the size of the colony. For example, Earth could support up to five governors that are responsible for different regions of the planet.

### Mining Facilities

Each mining facility can be active or inactive depending on the changes of staffing from the various companies that operate the facilities. Each object representation should record the name of the facility and its active status.

If a mining facility is inactive, then the button in the UI should never be enabled, even after a governor is chosen.

### Minerals

Each mining facility can produce several kinds of minerals. Each mineral type can be produced at several mining facilities. Likewise, a colony can purchase many minerals. A single mineral _(Iron or Magnesium)_ can be purchased by many colonies.

Your team may want to consider that some of your tables will have more than one foreign key on them to handle this kind of relationship - called a many to many relationship.

* Read the [What Is a Many-to-Many Relationship in a Database?](https://www.vertabelo.com/blog/many-to-many-relationship/) article.
* Ask [ChatGPT to explain](https://chat.openai.com/) many to many relationships to the team.


## Algorithmic Planning

There is more to algorithmic thinking than just comments for a project like this.

1. Have we documented how the application UI should be structured?
2. Is our ERD complete and approved by our instructors?
3. Do we know which HTML elements we are going to use for each component?
4. Have we defined the CSS classes for each component?
5. Do we know which modules need to be created, and have the responsibility documented for each one?
6. Do we know the order in which the modules should be developed?

If anyone on the team is unsure about any of these questions, it leads to uncertainty, loss of productivity, and disagreements. We strongly urge you to solve this problem completely before writing any code. 


## Stretch Goal

**Do not attempt the stretch goal until you have completed the basic requirements above.**

If your team would like to do more advanced state manipulations, refactor your code to allow a governor to select minerals from multiple mining facilities before finalizing the purchase. A working example done by a previous team can be seen at [https://solar-mine.onrender.com/](https://solar-mine.onrender.com/). 
