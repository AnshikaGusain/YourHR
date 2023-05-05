**Website Documentation for YourHR website**


**Overview**

The YourHR website is a web application built using ReactJS, a popular JavaScript library for building user interfaces where job-seeking users can sign in/sign up and upload their resumes. The website is built using:-

Front-end:

HTML, CSS, JavaScript, ReactJs, 

Back-end:

NodeJs, ExpressJs

Database:

MongoDB


**Getting Started**

To get started with the website, simply navigate to the URL for the website(   ) and you will be able to use the functionalities provided by the website.

**Structure and Design**

The website has two parts: Front end and Back end

	The front end consists of several pages, including:

•	Sign In page: This page provides the functionality to the already signed-up users to sign in to the website.

•	Sign Up page: The users who are new and don’t have an account can sign up using this page.

•	Home page: After signing in or signing up, the users can upload their resumes here.

	The back end responds to the requests of the front end by storing the data sent by the front end in the database.The website uses a responsive design, which means that it is optimized for viewing on a variety of screen sizes and devices. The design is created using Bootstrap, with additional custom CSS styles for specific elements.

**Code Structure and Organization**

The front end and back end of the website are organized into several directories and files:

	The front end has the following structure:
 
•	public directory: A directory containing index.html and style.css.

o	index.html:- The main HTML file for the website which includes all the links of CSS, JS files, and other resources used.

o	style.css:- The CSS file for the website which contains the custom styles for the website.

•	src directory: A directory that is the heart of React application as it contains JavaScript which needs to be processed.

o	components directory: A directory containing all of the React reusable components that make up the pages.

o	index.js: It is where we usually mount/render our main react component onto our “root” element.

	The second end has the following structure:

•	controllers directory: The functions that separate the code to route different requests from the code that processes requests.

•	server.js: This file responds to the requests of the front end of the website using different controllers created, which includes storing the user’s credentials and information and sending a response for each request.

**Dependencies and Libraries**

The website relies on several third-party links, libraries, and dependencies, including:

•	Used in the front end:

  o	Bootstrap: It is a free, open source front-end development framework for the creation of websites and web apps.

  o	Font Awesome: It is the Internet's icon library and toolkit, used by millions of designers, developers, and content creators.

  o	React: It is a JavaScript library for building user interfaces. It is used to build single-page applications. It allows us to create reusable UI components.


•	Used in the back end:

o	bcrypt: It is a cryptographic hashing algorithm, recommended for password hashing.

o	cors: CORS (Cross-Origin Resource Sharing) is a system that transmits HTTP headers that determines whether browsers block frontend JavaScript code from accessing responses for cross-origin requests.

o	dotenv: It is a zero-dependency module that loads environment variables from a .env file into process.env.

o	express: It is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.

o	mongoose: It is a JavaScript library that allows you to define schemas with strongly typed data.

o	multer: It is a middleware designed to handle multipart/form-data in forms.


•	Database service used:

o	MongoDB Atlas: It is an integrated suite of data services centered around a cloud database designed to accelerate and simplify how you build with data. Build faster and build smarter with a developer data platform that helps solve your data challenges. 


**Server Configuration**

The website is hosted on a server running Node.js, Express, and other libraries mentioned above with a MongoDB database using MongoDB Atlas for storing user data. The back end responds the requests with specific endpoints. Here, the post endpoints are:

o	/signin

o	/signup

o	/upload


**Conclusion**

This documentation provides an overview of the YourHR Website, including its structure, design, code organization, and server configuration. It is intended to serve as a reference for developers and stakeholders who need to understand how the website works, and how it can be maintained and updated over time.

