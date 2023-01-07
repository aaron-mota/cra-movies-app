import SiteContainer from "./components/layout/SiteContainer";
import "./App.css"

import axios from 'axios'
import { useEffect, useState } from "react";
import { getDocs } from "./services/index.js";
import { Skeleton } from "@mui/material";

axios.defaults.baseURL = process.env.BACKENDURL || "http://localhost:4000"



function App() {

  const [isFetching, setIsFetching] = useState(false)
  const [response, setResponse] = useState("")

  useEffect(() => {
    const controller = new AbortController()
    async function fetchDocs() {
      setIsFetching(true)
      try {
        const docs = await getDocs(controller, true)
        setResponse(docs)
      } catch(e) {
        console.log("There was a problem or the request was cancelled.", e)
      } finally {
        setIsFetching(false)
      }
    }
    fetchDocs()
    return () => {
      controller.abort()
    }
  }, [])


  return (
    <SiteContainer>
      Hello

      {isFetching ? <Skeleton width={210} height={118} /> : <div>{response}</div>}

      {/* TODO:  HTTP CLIENT / SERVICES (accessing API -- fetch/axios) */}
      {/* TODO (OPTIONAL):  BACKEND (NODEJS) / DB (?) */}

      {/* TODO:  NAVIGATION */}
      {/* TODO:  PAGES */}
      

    </SiteContainer>
  )
}

export default App;



      {/* TODO:  HTTP CLIENT / SERVICES (accessing API -- fetch/axios) */}
      {/* TODO (OPTIONAL):  BACKEND (NODEJS) / DB (?) */}

      {/* TODO:  NAVIGATION */}
      {/* TODO:  PAGES */}


{/* CRA */}
// npx create-react-app my-app

// CLIENT
// delete unnecessary (keep App.css -- @import-normalize)
// create folders (src//pages,components,services,utils)
// create client > move all folders into client

// SERVER
// create server > cd server
// npm i express body-parser cors
// create .env
    // PORT=4000
// create package.json
    // {
    //   "name": "my-app-backend",
    //   "version": "1.0.0",
    //   "scripts": {
    //     "client": "cd client && yarn start",
    //     "server": "nodemon server.js --ignore client",
    //     "dev": "concurrently --kill-others-on-fail \"yarn server\" \"yarn client\""
    //   },
    //   "dependencies": {
    //     "body-parser": "^1.20.1",
    //     "cors": "^2.8.5",
    //     "express": "^4.18.2"
    //   },
    //   "devDependencies": {
    //     "concurrently": "^4.0.1"
    //   }
    // }
// create server.js
    // const express = require('express');
    // const bodyParser = require('body-parser');
    // const app = express();
    // const port = process.env.PORT || 4000;
    // app.use(bodyParser.json());
    // app.use(bodyParser.urlencoded({ extended: true }));

    // // app.use("/", require("./router"))
    // const cors = require("cors")
    // app.use(cors())

    // app.use("/", require("./router"))

    // app.listen(port, () => console.log(`Listening on port ${port}`));
// create router/index.js
    // const express = require('express');
    // const bodyParser = require('body-parser');
    // const app = express();
    // const port = process.env.PORT || 4000;
    // app.use(bodyParser.json());
    // app.use(bodyParser.urlencoded({ extended: true }));

    // // CORS
    // const cors = require("cors")
    // app.use(cors())

    // // ROUTER
    // const router = require("./router")
    // app.use("/", router)

    // // LISTEN
    // app.listen(port, () => console.log(`Listening on port ${port}`));
// create router/api/index.js
    // const router = require("express").Router()

    // router.get('/hello', (req, res) => {
    //   res.send('Hello From Express');
    // });
    // router.post('/world', (req, res) => {
    //   console.log(req.body);
    //   res.send(
    //     `I received your POST request. This is what you sent me: ${req.body.post}`,
    //   );
    // });

    // module.exports = router;


// START APP
    // terminal (node/server):  node server.js ("Listening on port 4000")
    // terminal (node/client):  npm start








//////////////////////
// GET (AXIOS)
//////////////////////
// useEffect(() => {
//   const ourRequest = axios.CancelToken.source()
//   async function getDoc() {
//     try {
//       setIsFetching(true)
//       const response = await axios.get(`/docs/${id}`, {cancelToken: ourRequest.token}) // clean-up set as second get argument (3rd if it was post request)
//       console.log("retrievededDoc (doc): ", response.data)
//       setDoc(response.data)
//     } catch(e) {
//       console.log("There was a problem or the request was cancelled.", e)
//     } finally {
//       setIsFetching(false)
//     }
//   }
//   getDoc()
//   return () => {
//     ourRequest.cancel()
//   }
// }, [id])

//////////////////////
// POST (AXIOS)
//////////////////////
// useEffect(() => {
//   const ourRequest = axios.CancelToken.source()
//   async function getDocs() {
//     try {
//       setIsFetching(true)
//       const response = await axios.post(`/docs/userId`, {obj: {}, token: appState.user.token}, {cancelToken: ourRequest.token})
//       console.log("retrievededDocs (docs): ", response.data)
//       setDocs(response.data)
//     } catch(e) {
//       console.log("There was a problem or the request was cancelled.", e)
//     } finally {
//       setIsFetching(false)
//     }
//   }
//   getDocs()
//   return () => ourRequest.cancel() // clean-up
// }, [])


//////////////////////
// CRUD (API: REST)
//////////////////////

// CREATE DOC
// useEffect(() => {
//   if (updateDocRequestCount && docState == "create") {
//     const ourRequest = Axios.CancelToken.source() // part of clean-up function
//     async function createDoc() {
//       try {
//         let dbDoc = {...updatedDoc}
//         delete dbDoc._id
//         dbDoc.createdDate = new Date()
//         dbDoc.updatedDate = new Date()
//         console.log("dbDoc: ", dbDoc)

//         const response = await Axios.post(`/create-note`, {doc: dbDoc, token: appState.user.token}, {cancelToken: ourRequest.token}) // backend is expecting property exactly named searchTerm
//         if (response.data._id) {
//           let newDoc = response.data
//           appDispatch({type: "flashMessage", value: "Note was created."}) 
//           appDispatch({type: "updateNotes", value: [...appState.notes, newDoc]})
//           try {
//             setNotes([...notes, newDoc])
//             setUpdatedDoc(newDoc)
//             setUpdateDocRequestCount(0)
//             setDocState("read")
//           }
//           catch {
//             setUpdatedDoc(newDoc)
//             setUpdateDocRequestCount(0)
//             setOpen(false)
//           }
//         }
//         else {
//           console.log("There was an ERROR! (creating doc)", console.error(response.data))
//           setUpdateDocRequestCount(0)
//         }
//       } catch(e) {
//         setUpdateDocRequestCount(0)
//         console.log("There was a problem or the request was cancelled. (creating doc)")
//       }
//     }
//     createDoc()
//     return () => {ourRequest.cancel()}
//   }
// }, [updateDocRequestCount])


// UPDATE DOC
// useEffect(() => {
//   if (updateDocRequestCount && (docState == "update" || updatedDoc.status == "inactive" || updatedDoc.status == "active") ) {
//     const ourRequest = Axios.CancelToken.source() // part of clean-up function
//     async function updateDoc() {
//       try {
//         // let docType = "note"
//         let docId = updatedDoc._id
//         let dbDoc = {...updatedDoc}
//         dbDoc.updatedDate = new Date()

//         console.log("dbDoc: ", dbDoc)

//         const response = await Axios.post(`/notes/${docId}/edit`, {doc: dbDoc, token: appState.user.token}, {cancelToken: ourRequest.token})
//         console.log("response: ", response)
//         if (response.data == "success") {
//           if (updatedDoc.status == "inactive" && docState != "update") {
//             appDispatch({type: "flashMessage", value: "Note was archived."}) 
//           }
//           else if (updatedDoc.status == "active" && docState != "update") {
//             appDispatch({type: "flashMessage", value: "Note was unarchived."}) 
//           }
//           else {
//             appDispatch({type: "flashMessage", value: "Note was updated."}) 
//           }
//           appDispatch({type: "updateNotes", value: notes.map(note => {if (note._id == dbDoc._id) {return dbDoc} return note})})
//           try {
//             setNotes(notes.map(note => {if (note._id == dbDoc._id) {return dbDoc} return note}))
//             setUpdatedDoc(dbDoc)
//             setUpdateDocRequestCount(0)
//             setDocState("read")
//           }
//           catch {
//             setUpdatedDoc(newDoc)
//             setUpdateDocRequestCount(0)
//             setOpen(false)
//           }
//         }
//         else {
//           console.log("There was an ERROR! (updating doc)")
//           setUpdateDocRequestCount(0)
//         }

//       } catch(e) {
//         setUpdateDocRequestCount(0)
//         console.log("There was a problem or the request was cancelled. (updating doc)")
//       }
//     }
//     updateDoc()
//     return () => {ourRequest.cancel()}
//   }
// }, [updateDocRequestCount])


// DELETE DOC
// function handleDelete() {
//   if (window.confirm("Are you sure you want to delete this note?")) {
//     setDeleteDocRequestCount(prev => prev + 1)
//   }
// }
// useEffect(() => {
//   if (deleteDocRequestCount) {
//     const ourRequest = Axios.CancelToken.source() // part of clean-up function
//     async function deleteDoc() {
//       try {
//         // let docType = "note"
//         let docId = updatedDoc._id
//         let dbDoc = {...updatedDoc}
//         dbDoc.updatedDate = new Date()

//         console.log("dbDoc: ", dbDoc)

//         const response = await Axios.delete(`/notes/${docId}`, {data: {token: appState.user.token}})
//         console.log("response: ", response)
//         if (response.data == "success") {
//           appDispatch({type: "flashMessage", value: "Note was deleted."}) 
//           appDispatch({type: "updateNotes", value: notes.filter(note => note._id != dbDoc._id)})
//           setNotes(notes.filter(note => note._id != dbDoc._id))
//           setUpdatedDoc({})
//           setOpen(false)
//           setDeleteDocRequestCount(0)
//           setDocState("read")
//         }
//         else {
//           console.log("There was an ERROR!")
//           setDeleteDocRequestCount(0)
//         }

//       } catch(e) {
//         setDeleteDocRequestCount(0)
//         console.log("There was a problem or the request was cancelled. (deleting doc)")
//       }
//     }
//     deleteDoc()
//     return () => {ourRequest.cancel()}
//   }
// }, [deleteDocRequestCount])
