import myPhoto from './assets/my_photo'

function Header() {
    return (
        <header>
            <img src={myPhoto} alt="My_Photo" />
            <div id="head-info">
                <h2>Viktor Moroz</h2>
                <b>Profile:</b> Backend Python Developer / API Developer<br/>
                <b>Type of Work:</b> Remote (primary), Stationary, Hybrid
            </div>
        </header>
    );
}

export default Header