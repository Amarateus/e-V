import { Outlet } from "react-router-dom"
import { NavBarContainer } from "./navBar/NavBarContainer"
import { FooterContainer } from "./footer/FooterContainer"


export const Layout = () => {
  return (
    <div>
        <NavBarContainer />
        <Outlet />
        <FooterContainer />
    </div>
  )
}
