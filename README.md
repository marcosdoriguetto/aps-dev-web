<p align="center">
  <img alt="Uncarioca" src=".github/logo-unicarioca.png" width="280px">
</p>

<br>

## 💻 Technologies

Technologies used for the construction of this project:

- [React](https://reactjs.org)
- [React Router Dom](https://reactrouter.com/en/main)
- [Vite Starter](https://vitejs.dev/)

## 🚀 Getting started

**You need to have node installed on your machine**

Clone the project and access the folder.

```bash
$ git clone https://github.com/marcosdoriguetto/aps-dev-web.git
$ cd aps-dev-web
```

Follow the steps below:

```bash
# Install the dependencies
$ npm install

# Start the project
$ npm run dev
```

The app will be available for access on your browser at http://localhost:3000

## 👩‍💻 Connection with the Backend and with the Database

Clone the project and access the folder.

```bash
$ git clone https://github.com/SamuelFST/aps_dev_bd.git
$ cd aps-dev_bd
```

In the path: **src/main/resources/application.properties** change the variables:

- spring.datasource.url=jdbc:mysql://{YOUR_HOST}/{YOUR_SCHEMA_NAME}
- spring.datasource.username={YOUR_DATABASE_USERNAME}
- spring.datasource.password={YOUR_DATABASE_PASSWORD}

⚠ **Atention**
Don't forget the set JAVA_HOME variable in the your sistem, without this the application will not work.

The API will be initialized on port **8080**(http://localhost:8080), in case you change, don't forget to change the port in the file: **src/config/api.js** inside this project(frontend).

## 📝 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE.md) file for details.

---

<p align="center">Made with 💜 by Marcos, Filipe, Mateus, Samuel</p>
