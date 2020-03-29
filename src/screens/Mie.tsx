import * as React from 'react';
import Ward from './ward';

class Mie extends React.Component {
    render (){
        return (
            <div id="Mie" className="l-prefecture">
                <div className="p-prefecture">
                    <div className="p-prefecture__imagebox">
                        <img className="p-prefecture__image -mie" src={`${window.location.origin}/images/Mie.png`} alt=""/>
                    </div>
                    <Ward PreItem={"三重"}/>
                </div>
            </div>
        );
    }
    }
export default Mie;