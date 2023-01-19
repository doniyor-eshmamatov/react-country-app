function Country() {
    return (
        <div className="hero">
            <div className="container">
                <div className="hero__inner">
                    <ul className="hero__list">
                        <HeroItem/>
                        <HeroItem/>
                        <HeroItem/>
                        <HeroItem/>
                        <HeroItem/>
                        <HeroItem/>
                        <HeroItem/>
                        <HeroItem/>
                    </ul>
                </div>
            </div>
        </div>
    )
}

function HeroItem() {
    return (
        <li className="hero__item card">
            <CardImg/>
            <h3 className="card__title">Uzbekistan</h3>
            <p className="card__text">Capital: Toashkent</p>
            <button type="button">More..</button>
        </li>
    )
}

function CardImg() {
    return (
        <img className="card__img" src={'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Flag_of_Uzbekistan.svg/800px-Flag_of_Uzbekistan.svg.png?20221217173250'} width={'250'} alt={'Country flag'}/>
    )
}

export default Country;