## Elaine Archbold Interactive Frontend Development Milestone Project
My plan for this site was to have an interactive travel site where you could search for hotels in a given location and also have a section where you could store the places you have been.
I used the Google Maps API on the home page and incorporated the autocomplete and controls fileds into a search bar. The API returns results of hotels in that area and also gives information on those hotels.

I created mock-ups of what I wanted the site to look like before I started.
![Desktop View1](assets/images/IndexMockUp.png)
![Desktop View1](assets/images/MyPlacesMockup.png)
![Desktop View1](assets/images/ContactMockup.png)

## UX
***The user can select thte country they wish to go to, then enter the city into the search bar and the map will populate showing nearby hotels. The user can retrieve the hotel information thanks to the Google Maps API. 
The user can select places they have been on the 'My Places' page to have their own interactive countries visited map.
The user can email any query using the form on the contact page. ***

My goal in the design was to display Ritchie’s portfolio of work, along with his contact details should users wish to collaborate with him on a project. I created a clean and simple look, with the photos speaking for themselves. It was important that the site is responsive and very user friendly with the images taking centre stage and easy to access. I kept the colour palette simple with shades of grey and added #e84610 for a highlight of colour.

I kept the Navbar and footer simple, and the lightbox on the portfolio page gives an overall gallery view before an image is selected, which is when the lightbox effect kicks in.

*User A - wants to be able to view Ritchie's portfolio. The Navbar contains a portfolio link which will take the user to the portfolio page where all of the images are available. I have also put a link to the Portfolio page just below the photo carousel on the home page.

*User B - wants to get in touch with Ritchie to discuss a future project. There is a contact form on the home page, as well as a Contact link in the NavBar to take the user to a contact page containing a contact form and contact details for Ritchie.

*User C - wants to purchase a copy of a photo. They can do this through the Shop page once payment functionality is added.

## Features
### Existing Features
On the home page, there is a Google Map & searchbar using Google Map API. The user can enter a location and nearby hotels will populate into the map.
I have an interactive 'Places Visited' map on the 'My Places' page with cookies to store the users selected locations.
I have set up a welcome/welcome back cookie to store the user name when they first use the site, and to welcome them back on return.
I have also set up cookies to store their selected places visited on the 'My Places' visited page.
I have used EmailJS on the 'Contact' page, and this has been tested. 


## Technologies Used
1. HTML
2. CSS
3. Bootstrap (4)
4. Javascript
5. Google Map API
6. EmailJS
7. JQuery
8. Photoshop
9. Illustrator


## Testing
***Jasmine
The site has been tested for responsiveness on Chrome, Safari and Firefox.***


All HTML was checked on the W3C Mark-up Validation Service.

The CSS was checked on the W3C CSS Validation Service.

All HTML was formatted on https://freeformatter.com.

All links have been tested.

The forms have been tested and will not submit unless the information is entered in the correct format.

Screenshots of the responsive design can be seen here:

![Desktop View1](assets/images/design.jpg)

## Deployment
The site has been deployed to GitHub pages and can be viewed here: https://elainearchbold.github.io/Interactive-Frontend/

## Credits
### Content
I used the Google Map API instructions from the Google API tutorial. This was added and style on 'Index.html'.
I used AM Charts interactive map (https://www.amcharts.com/visited_countries/#) for the 'My Places' page and styled this to suit the theme. I also added to their Javascript to create custom cookies to store the user selections. 


### Media
The image used on the 'Index' page is from unsplash : Image credit "Photo by Dariusz Sankowski on Unsplash"
The globe used in the logo is from all-free-download.com (https://all-free-download.com/free-vector/download/travel-icons-set_6813457.html) and was changed using Photoshop, and then added to Illustrator to create the logo. 
### Acknowledgements
