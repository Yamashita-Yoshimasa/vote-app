import * as React from 'react';
import Ward from './ward';

class Aichi extends React.Component {
    render (){
        return (
            <div id="Aichi" className="l-prefecture">
                <div className="p-prefecture">
                    <div className="p-prefecture__imagebox">
                        <img className="p-prefecture__image" src={`${window.location.origin}/images/Aichi.png`} alt=""/>
                    </div>
                    <Ward PreItem={"愛知"}/>
                </div>
            </div>
        );
    }
    }
export default Aichi;