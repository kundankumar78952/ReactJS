import React from "react";
import { NavLink } from "react-router-dom";
const ErrorPage = () => {

    return (<>
        <h1> Not found</h1>
        <h2>founding not</h2>
        <NavLink to="/">Go back</NavLink>
    </>)
}
export default ErrorPage;