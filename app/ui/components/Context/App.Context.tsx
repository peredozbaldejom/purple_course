'use client'
import { MenuItem, TopLevelCategory } from "@/app/lib/definitions";
import { ReactNode, createContext, useState } from "react";

interface IContext {
    menu: MenuItem[];
    setMenu?: (newMenu: MenuItem[]) => void
    firstCategory: TopLevelCategory
}

export const AppContext = createContext<IContext>({menu: [], firstCategory: TopLevelCategory.Courses})

export const AppContextProvider = ({menu, children, firstCategory} : IContext & { children : ReactNode}) : JSX.Element => {
    const [menuState, setMenuState] = useState<MenuItem[]>(menu);
    const setMenu = (newMenu : MenuItem[]) => {
        console.log(newMenu)
        setMenuState(newMenu);
    } 

    return <AppContext.Provider value={{menu: menuState, firstCategory, setMenu}}>
        {children}
    </AppContext.Provider>
} 