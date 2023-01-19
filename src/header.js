function Header() {
    return (
        <header className="site-header">
            <div className="container">
                <div className="site-header__inner">
                    <Logo/>
                    <Modebtn/>
                </div>
            </div>
        </header>
    );
}

function Logo() {
    return (
        <h2 className="logo">
            Where in the world?
        </h2>
    )
}

function Modebtn() {
    return (
        <button className="site-header__mode" type="button">
            Dark Mode
        </button>
    )
}

export default Header;