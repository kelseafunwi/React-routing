import {  NavLink, Outlet, useNavigation } from "react-router-dom"

export default function Root() {
  const navigation = useNavigation();
  {navigation.state !== 'loading' ?? <h1>Page is still loading</h1>}
  return (
    <>
      <div>
        Root header with links
        <NavLink to='/'>Home</NavLink> <br />
        <NavLink to='/data'>Data</NavLink> <br />
      </div>
      <div>
        <Outlet />
      </div>
    </>
  )
}
