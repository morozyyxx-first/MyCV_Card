import cvPhoto from "./assets/cv_photo.jpg";

function Header() {
    return (
        <header>
            <img src={cvPhoto} alt="Error of load image" />
            <div id="head-info">
                <h2>Viktor Moroz</h2>
                <b>Profile:</b> Backend Python Developer / API Developer<br/>
                <b>Type of Work:</b> Remote (primary), Stationary, Hybrid
            </div>
        </header>
    );
}

export default Header