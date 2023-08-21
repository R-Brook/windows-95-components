import React, { createContext } from "react"
import { Action, NotepadDispatch, NotepadState } from "./types"
import localForage from "localforage"

const initialNotepadState = {
  notepadFileName: "Untitled.txt",
  notepadFileContents: "Lorem ipsum",
}

const reducer = (state: NotepadState, action: Action): NotepadState => {
  switch (action.type) {
    case "start":
      return {
        ...state,
        ...initialNotepadState,
      }
    case "save":
      return {
        ...state,
        notepadFileContents: action.payload,
      }
    case "new":
      return {
        ...initialNotepadState,
        ...action.payload,
      }
    default:
      throw new Error("Notepad error, not a valid action")
  }
}

const NotepadStateContext = createContext<NotepadState | undefined>(undefined)
const NotepadDispatchContext = createContext<NotepadDispatch | undefined>(
  undefined
)

export const NotepadProvider = ({ children }) => {
  const NotepadStorageSectionName = "notepad-contents"
  const [state, dispatch] = React.useReducer(reducer, initialNotepadState)

  React.useEffect(() => {
    const getFromLocalForage = async () => {
      try {
        const localStorageNotepadState: NotepadState =
          (await localForage.getItem(NotepadStorageSectionName)) ||
          initialNotepadState
        dispatch({ type: "start", payload: localStorageNotepadState })
      } catch (error) {
        console.log("error getting from storage", error)
      }
    }
    getFromLocalForage()
  }, [])

  React.useEffect(() => {
    const setToLocalForage = async () => {
      try {
        await localForage.setItem(NotepadStorageSectionName, state)
      } catch (error) {
        console.log("error saving to storage", error)
      }
    }
    setToLocalForage()
  }, [state])

  return (
    <NotepadStateContext.Provider value={state}>
      <NotepadDispatchContext.Provider value={dispatch}>
        {children}
      </NotepadDispatchContext.Provider>
    </NotepadStateContext.Provider>
  )
}

export const useNotepadContents = (): NotepadState => {
  const context = React.useContext(NotepadStateContext)
  return context
}

export const useNotepadContentsDispatch = (): NotepadDispatch => {
  const context = React.useContext(NotepadDispatchContext)
  return context
}
