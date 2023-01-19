import {FC, useReducer} from "react";
import {EntriesContext, entriesReducer} from "./"
import { Entry } from '../../interfaces';
import { v4 as uuidv4 } from 'uuid';


export interface EntriesState {
    entries: Entry[]
}

const Entries_INITIAL_STATE: EntriesState ={
    entries: [
        {
            _id:uuidv4(),
            description: "Pendiente",
            status: "pending",
            createdAt: Date.now()
        },
        {
            _id:uuidv4(),
            description: "En progreso",
            status: "in-progress",
            createdAt: Date.now() *2
        },
        {
            _id:uuidv4(),
            description: "Terminada",
            status: "finished",
            createdAt: Date.now() *3
        }
    ]
}

export const EntriesProvider:FC = ({children}) =>{
    const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE)

    return (
        <EntriesContext.Provider value={{
            ...state,
        }}>
            {children}
        </EntriesContext.Provider>
    )
}