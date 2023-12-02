import { BrowserRouter, Route, Routes } from "react-router-dom"
import SeSTAbuttons from "./SestaButtons"
import SeSTAadd from "./SestaAdd"

export const SestaRouter=()=>{
    return(
        <>
            <BrowserRouter>
                {/* <HodMenu/> */}
                {/* <ViewSeminar/> */}
                <Routes >
                            <Route path="/" element={<SeSTAbuttons/>}/>
                            <Route path="/addform" element={<SeSTAadd/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}