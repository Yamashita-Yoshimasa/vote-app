import * as React from 'react';

class Aichi extends React.Component {
    render (){
        return (
            <div id="Aichi" className="l-Aichi">
                <div className="p-Aichi">
                    <div className="p-Aichi__imagebox">
                        <img className="p-Aichi__image" src={`${window.location.origin}/images/Aichi.png`} alt=""/>
                    </div>
                    
                </div>
            </div>
        );
    }
    }
export default Aichi;