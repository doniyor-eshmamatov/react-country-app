function Navbar() {
    return (
        <nav className="nav">
            <div className="container">
                <div className="nav__inner">
                    <NavForm/>
                </div>
            </div>
        </nav>
    )
}

function NavForm() {
    return (
        <form className="nav__form">
            <NavSearch/>
            <NavSelect/>
        </form>
    )
}

function NavSearch() {
    return (
        <input className="nav__search" type={'text'} placeholder="Search country..."></input>
    )
}

function NavSelect() {
    return (
        <select className="nav__select">
            <option value={'1'}>filter</option>
        </select>
    )
}

export default Navbar;