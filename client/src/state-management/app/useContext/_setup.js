import React, { useEffect, Suspense, useContext } from "react"
import { useImmerReducer, useImmer } from "use-immer"
import axios from 'axios'
axios.defaults.baseURL = process.env.BACKENDURL || "https://projectname.herokuapp.com/"
// axios.defaults.withCredentials = true




  ////////////////////
  // APP STATE (INITIAL STATE)
  ////////////////////
  
  // SETUP
  ////////////////////
  
  // (?... menus/toasts ?)
  const anchorOrigin = {
    horizontal: "center",
    vertical: "top"
  }

  const selectText = [
      "Adams",
      "Barnes",
      "Benson",
      "Billings",
      "Bottineau",
      "Bowman",
      // ...
    ]
  
  let selectNumbers = []
  for (let i = 129; i < 165; i++) {
      numbers.push((i).toString())
    }
    

        
  // MANAGEMENT SYSTEM (useContext) (via useImmerReducer)       (create/manage state (useReducer, Immer > Context)
  ////////////////////
  const initialState = {
    loggedIn: Boolean(localStorage.getItem(`${appName}Token"`)),
    flashMessages: [],
    user: {
      token: localStorage.getItem(`${appName}Token`),
      first: localStorage.getItem(`${appName}First`),
      last: localStorage.getItem(`${appName}Last`),
      username: localStorage.getItem(`${appName}Username`),
      avatar: localStorage.getItem(`${appName}Avatar`),
      _id: localStorage.getItem(`${appName}Id`)
    },

    tablePodView: {
      general: localStorage.getItem(`${appName}TablePodViewGeneral`),
    },
    
    followedWells: JSON.parse(localStorage.getItem(`${appName}FollowedWells`)),
    notes: JSON.parse(localStorage.getItem(`${appName}Notes`)),

    showModal: false,
    modalType: null,
    modalData: [],

    selectNumbers: selectNumbers,
    selectText: selectText,

    toast: {
      success: {
        variant: "success",
        anchorOrigin: anchorOrigin,
        dense: true,
        // style: {
        //   backgroundColor: "red"
        // }
      }
    }
  }
  function ourReducer(draft, action) {
    switch (action.type) {
      case "login":
        draft.loggedIn = true
        // draft.user = action.data // sets token/username/avatar into ...
        draft.user = action.data.user // sets token/username/avatar into ...
        draft.followedWells = action.data.followedWells
        draft.notes = action.data.notes
        console.log("user: ", action.data.user)
        console.log("followedWells: ", action.data.followedWells)
        console.log("notes: ", action.data.notes.length)
        return // or 'break'
      case "logout":
        draft.loggedIn = false
        return
      case "flashMessage":
        draft.flashMessages.push(action.value)
        return
      case "toggleModal":
        draft.showModal = action?.value?.showModal === false ? false : !draft.showModal
        draft.modalType = action.value.modalType
        draft.modalData = action.value.modalData
        return
      case "updateTablePodViewGeneral":
        draft.tablePodView.general = action.value
        localStorage.setItem(`${appName}TablePodViewGeneral`, action.value)
        return
      // case "updateNotes":
      //   draft.notes = action.value
      //   localStorage.setItem("MBNotes", JSON.stringify(action.value))
      //   return
    }
  }
  const [state, dispatch] = useImmerReducer(ourReducer, initialState)

  
  // PERSIST DATA
  useEffect(() => {
    if (state.loggedIn) {
      localStorage.setItem(`${appName}Token`, state.user.token)
      localStorage.setItem(`${appName}First`, state.user.first)
      localStorage.setItem(`${appName}Last`, state.user.last)
      localStorage.setItem(`${appName}Username`, state.user.username)
      localStorage.setItem(`${appName}Avatar`, state.user.avatar)
      localStorage.setItem(`${appName}Id`, state.user._id)
      localStorage.setItem(`${appName}FollowedWells`, JSON.stringify(state.followedWells))
      localStorage.setItem(`${appName}Notes`, JSON.stringify(state.notes))
      localStorage.setItem(`${appName}TablePodViewGeneral`, state.tablePodView.general || "pod")
    } else {
      localStorage.removeItem(`${appName}Token`)
      localStorage.removeItem(`${appName}First`)
      localStorage.removeItem(`${appName}Last`)
      localStorage.removeItem(`${appName}Username`)
      localStorage.removeItem(`${appName}Avatar`)
      localStorage.removeItem(`${appName}Id`)
      localStorage.removeItem(`${appName}FollowedWells`)
      localStorage.removeItem(`${appName}Notes`)
      localStorage.removeItem("TablePodViewGeneral")
    }
  }, [state.loggedIn])
