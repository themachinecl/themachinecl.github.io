import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";


export const AppRouter = () => {

    return (
    <Routes>
          <Route path="/" element={ <Home  /> } />
        <Route path="/Home" element={ <Home  /> } />
    </Routes>
    )
}

export default AppRouter;