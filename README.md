# blogging-app (Medium Clone)
  A full stack blogging application (medium clone) made using MERN stack and TailwindCSS with complete User authentication using JWT. User can create new Blogs.User can update and delete their blogs. User can react on any blogs by liking or giving comments. User can also create their own library of blogs by saving blogs from list.

# Installation and Run:
  Follow the following instruction to run the code on your system.
  
  - Get the code on your pc.
  - Open terminal and navigate to the root directory of the code.
  
  ### for BackEnd
  - run command 'cd backend' inside the terminal to navigate to the backend folder.
  - run 'npm install' command inside the terminal to install all backend dependenices.
  - After complete installation, create '.env' file inside the backend directory and define the env variables as mentioned below:
      - PORT = Port for your backend code
      - MONGODB_URL = uri of your mongodb connection
      - JWT_SECRET = secret key for creating jwt token
      - TOKEN_EXPIRY = expiry time for jwt token
      - COOKIE_EXPIRY = expiry time for cookies

        #### Note: First create an account on Cloudinary if don't have one
      - CLOUD_NAME = cloudinary account name
      - CLOUD_API_KEY = cloudinary api key
      - CLOUD_API_SECRET = cloudinary api secret key

  ### for FrontEnd
  - run command 'cd..' to go back to parent directory.
  - run command 'cd frontend' inside the terminal to navigate to the frontend folder.
  - run 'npm install' command inside the terminal to install all frontend dependenices.
  - After complete installation, create '.env' file inside the frontend directory and define the following variables inside the .env file
      - VITE_BASE_URL = url of your backend code, ( example: "http://localhost:{BACKEND_PORT}" )


# Tools used:
  ### Backend
  - Node.js
  - Express.Js
  - MongoDB
  - Multer
  - Cloudinary
  - JWT

  ### Frontend
  - React.js
  - Redux toolkit
  - TailwindCSS
  - React-router-dom
  - React-quill
  - Axios
  
