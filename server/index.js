const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const multer = require("multer");
const helmet = require("helmet");
const path = require("path");
// const { fileURLToPath } = require("url");
const admin = require('./config/firebaseConfig.js');
// const firebaseConfig = require('./config/firebaseConfig.js');

const { projects } = require('./mock.json');

// const authRoutes = require("./routes/auth.js");
// const userRoutes = require("./routes/users.js");
// const postRoutes = require("./routes/posts.js");
// const { register } = require("./controllers/auth.js");
// const { createPost } = require("./controllers/posts.js");
// const { verifyToken } = require("./middleware/auth.js");
// const User = require("./models/User.js");
// const Post = require("./models/Post.js");
// const { users, posts } = require("./data/index.js");

/* CONFIGURATIONS */
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/assets", express.static(path.join(__dirname, "public/assets")));

/* FILE STORAGE */
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/assets");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage });

// INITIALZE Firestore
// const db = admin.firestore();

// const seedDb = () => {
//   console.log("SEEDING DB");
//   const projectsArr = Object.values(projects);

//   const promises = projectsArr.map((project) => {
//     return db.collection('projects').add(project)
//       .then((docRef) => {
//         console.log('Document written with ID: ', docRef.id);
//       })
//       .catch((error) => {
//         console.error('Error adding document: ', error);
//       });
//   });

//   return Promise.all(promises)
//     .then(() => {
//       console.log('All documents inserted successfully');
//     })
//     .catch((error) => {
//       console.error('Error inserting documents: ', error);
//     });
// }

// seedDb();

// // // Add a document to a collection
// db.collection('users').add(
//   employees['employee1']
// )
// .then((docRef) => {
//   console.log('Document written with ID: ', docRef.id);
// })
// .catch((error) => {
//   console.error('Error adding document: ', error);
// });

// // Get a document by ID
// const collectionRef = db.collection('users');
// collectionRef.get()
//   .then((querySnapshot) => {
//     console.log('querySnapshot: ', querySnapshot);
//     querySnapshot.forEach((doc) => {
//       console.log(doc.id, " => ", doc.data());
//     });
//   })
//   .catch((error) => {
//     console.log("Error getting documents: ", error);
//   });

// Update a document
// docRef.update({
//   age: 31
// })
// .then(() => {
//   console.log('Document successfully updated');
// })
// .catch((error) => {
//   console.error('Error updating document: ', error);
// });

// Delete a document
// docRef.delete()
// .then(() => {
//   console.log('Document successfully deleted');
// })
// .catch((error) => {
//   console.error('Error deleting document: ', error);
// });

/* ROUTES WITH FILES */
// app.post("/auth/register", upload.single("picture"), register);
// app.post("/posts", verifyToken, upload.single("picture"), createPost);

/* ROUTES */
// app.use("/auth", authRoutes);
// app.use("/users", userRoutes);
// app.use("/posts", postRoutes);

// console.log('mockData', JSON.stringify(employees['employee1'], null, '\t'));

app.get('/',(req,res) => {
  console.log('req.body', req.body);
  res.send('Hello World');
})

/* MONGOOSE SETUP */
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server Port: ${PORT}`));

  /* ADD DATA ONE TIME */
  // User.insertMany(users);
  // Post.insertMany(posts);

 /**
  * add some data to Firebase
  * setup /get routes to retreive data from firebase
  * connect FE to BE
  * call the BE APIs from FE and display info
  */
