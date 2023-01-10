import {FC, ReactNode, useReducer} from "react"
import { UIContext } from "./UIContext"
import { uiReducer } from "./"

export interface UIState {
    sidemenuOpen: boolean,
    
}
interface Props {
    children: ReactNode
}



const UI_INITIAL_STATE: UIState ={
    sidemenuOpen: false
}

export const UIProvider:FC<Props> =({children})=>{
    const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE)

    const openSideMenu = ()=>{
        dispatch({type: "UI - Open Sidebar"})
    }

    const closeSideMenu = () =>{
        dispatch({type: "UI - Close Sidebar"})
    }
    return (
        <UIContext.Provider value={{
            sidemenuOpen: state.sidemenuOpen,
            openSideMenu,
            closeSideMenu
        }}>
            {children}
        </UIContext.Provider>
    )
}


