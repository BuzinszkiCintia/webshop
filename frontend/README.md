<h1>Save Boxes project</h1>
<h2>About the App</h2>
<a>This app is the implementation of a webshop that sells vegetable and fruit boxes. It has the following basic functions:</a>
<ul>
<li>
On the Homepage the app shows all the sellable vegetable and/or fruit boxes. You can delete any of the boxes you want with the trash bin on each card. You can also update any of the boxes if you click on the pencil icon.  
</li>
<li>
You can add new boxes under the "Create Box" menu
</li>
<li>
The navbar's "Webshop" menu always navigate you back to the Homepage
</li>
</ul>
<h2>Dependecies</h2>
<a>Backend</a>
<ul>
<li>
   "express": "^4.18.2"
</li>
<li>
   "express-session": "^1.17.3"
</li>
<li>
"cors": "^2.8.5"
</li>
<li>
"morgan": "^1.10.0"
</li>
<li>
 "nodemon": "^2.0.22"
</li>
</ul>
<a>Frontend</a>
<ul>
<li>
"react-router-dom": "^6.9.0"
</li>
<li>
 "react-use-navigate": "^0.1.1"
</li>
<li>
 "styled-components": "^5.3.9"
</li>
</ul>

<h2>Backend <h2>
<h3>app.js</h3>
<a>There are four endpoints in app.js file. /read, /delete, /update, /create. 
The /read endpoint is for reading the webshopitems.json file and give back the information strored. The /delete endpoint is for delete a certain item from the json file according to the given index from the frontend. The /update endpoint is for update a certain item in the json. The /create endpoint is for new item adding
  </a>
<h3>webshopitems.json</h3>
<a>This json store the webshop items</a>

<h2>Frontend <h2>
<h3>App.js</h3>
<a>
Contains the Routing for all the components and the footer menu, with the Links to the CreateItem component and ReadItem component.
  </a>
  <h3>ReadItem component</h3>
<a>
Contains two fetch-es to the backend. First is to GET the data from the webshopitems.json. Second is to remove items with a POST method, that which item (index) we want to remove from the list. These are controlled with two material icon buttons (trashbin, pencil). It has a little loader.
  </a>
  <h3>CreateItem component</h3>
<a>
Contains three input fields and a button, with alert functionality. It also has a POST fetch because on button click you send the data to the backend to store in webshopitems.json. After clicking to the Add button(if everything is ok) it will navigate you back to the ReadItem Component with the modified items. It also has a little loader.
  </a>
  <h3>UpdateItem component</h3>
<a>
Contains the certain item's data, you clicked (pencil icon). You can modify here all the information and update the item. You cannot leave the input fields empty. After clicking to the Update button(if everything is ok) it will navigate you back to the ReadItem Component with the modified items.
  </a>

  <h2>Styling</h2>
  <a>The styling was made with styled-components. </a>

  <h2>Setup</h2>
  <ul>
  <li>download or clone the repository</li>
  <li>first navigate to the /backend folder (cd /backend)</li>
  <li> run npm install</li>
  <li> run npm run dev</li>
   <li>then open a new terminal and navigate to the /frontend folder (cd /frontend)</li>
  <li> run npm install</li>
  <li> run npm start</li>
  </ul>
