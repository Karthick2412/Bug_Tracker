import MainNavigation from "../components/MainNavigation";
import { Outlet } from "react-router-dom";
import './Content.css'
function RootLayout(){
    return(
<>
<MainNavigation/>
<main className="content">
<Outlet/>
</main>
</>
    );
}

export default RootLayout;