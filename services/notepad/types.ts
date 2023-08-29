export type NotepadState = {
  file_name: string
  file_contents: string
  initialised: boolean
}

export type Action =
  | {
      type: "initialise"
      payload: { file_name: string }
    }
  | {
      type: "new"
    }
  | {
      type: "save"
      payload: string
    }
  | {
      type: "save as"
      payload: string
    }

export type NotepadDispatch = (action: Action) => void
