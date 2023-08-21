export type NotepadState = {
  notepadFileName: string
  notepadFileContents: string
}

export type Action =
  | {
      type: "start"
      payload: { notepadFileName: string; notepadFileContents: string }
    }
  | {
      type: "save"
      payload: string
    }
  | {
      type: "new"
      payload: { notepadFileName: string; notepadFileContents: string }
    }

export type NotepadDispatch = (action: Action) => void
