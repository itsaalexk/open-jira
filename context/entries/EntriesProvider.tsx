import {FC, useReducer} from "react";
import {EntriesContext, entriesReducer} from "./"
import { Entry } from '../../interfaces';
import { v4 as uuidv4 } from 'uuid';


export interface EntriesState {
    entries: Entry[]
}

const Entries_INITIAL_STATE: EntriesState ={
    entries: []
}

export const EntriesProvider:FC = ({children}) =>{
    const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE)
    // TODO: Agregar un titulo y una descripcion y llevarlo al contexto global para tener mas funcionalidad en la app
    //Ej clase 113 NextJs Fernando
    const addNewEntry = (description: string)=>{
        const newEntry:Entry ={
            _id: uuidv4(),
            description: description,
            createdAt: Date.now(),
            status: "pending"
        }
        dispatch({type: '[Entry] - Add-Entry', payload: newEntry})

    }
    const updateEntry = (entry:Entry)=>{
        dispatch({type:'[Entry] - Entry-Updated', payload:entry})
    }

    return (
        <EntriesContext.Provider value={{
            ...state,
            addNewEntry,
            updateEntry
        }}>
            {children}
        </EntriesContext.Provider>
    )
}