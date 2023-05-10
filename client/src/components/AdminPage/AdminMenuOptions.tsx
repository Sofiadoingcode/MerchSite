function AdminMenuOptions({setDisplay, value, children}:{setDisplay:React.Dispatch<React.SetStateAction<string>>, value: string,children:JSX.Element}) {

    return (
        <>
        <button className="admin_menu_buttons" onClick={()=> setDisplay(value)}>{children}
        <p className="admin_menu_buttons_arrow">{'>'}</p>
        </button>
        </>
    )
  }
  
  export default AdminMenuOptions