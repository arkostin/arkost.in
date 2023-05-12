/**
 * Main icon component, displayed at the center of the page.
 */
import './MainIcon.css'
import mainPhoto from './mainPhoto.jpg'

function MainIcon() {
    return (
        <div className="MainIcon">
            <img src={mainPhoto} className="MainPhoto" alt="mainPhoto"></img>
        </div>
    );
}

export default MainIcon