import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";

const Root = () => {
    return (
        <div className="container mx-auto flex flex-col">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;