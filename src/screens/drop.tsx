import * as React from "react"
import { Link } from 'react-scroll';
function Drop()  {
        return (
            <div className="select select--white">
                <span className="placeholder">Select your language</span>
                <ul>
                    <li data-value="es">España- Español</li>
                    <li data-value="en">United States - English</li>
                    <li data-value="fr">France - Français</li>
                    <li data-value="de">Deutschland - Deutsch</li>
                </ul>
                <input type="hidden" name="changemetoo"/>
            </div>
        );
}

export default Drop;