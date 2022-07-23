import {createContext, useState, useEffect} from "react"
import {getCategoriesAndDocuments} from "../../../Utils/Firebase/firebase.utils"

export const  CategoriesContext = createContext({
    categoryMap: {},
})

export const CategoriesProvider = ({children}) => {
    const [categoryMap, setCategoryMap] = useState({});
    
    useEffect(() => {
        const getCategoriesMap = async () => {
           const categoryMap = await getCategoriesAndDocuments()
            console.log(categoryMap);
            setCategoryMap(categoryMap);
        }

        getCategoriesMap()
    }, [])

    const value = {categoryMap};

    return(
        <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
    )
}