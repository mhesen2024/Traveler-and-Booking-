import { Outlet } from "react-router"
import SideBarActivity from "../components/organisem/SideBarActivity" 

export default function Activities() {
  return (
    <div>
      <SideBarActivity />
      <Outlet/>
    </div>
  )
}
