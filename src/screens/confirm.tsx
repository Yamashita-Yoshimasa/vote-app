import * as React from 'react';
import { Link } from 'react-scroll';

class Confirm extends React.Component {
    componentDidMount() {
        const ConfirmID = document.getElementById("confirm");
        ConfirmID.style.minHeight = window.innerHeight + 'px';
    }
    render (){
        return (
            <div id="confirm" className="l-confirm">
                <div className="p-confirm">
                    <p className="p-confirm__text -view">まずはあなたの<br/>選挙区を確認しましょう。</p>
                    <div className="c-arrow__box">
                        <Link
                            activeClass="active"
                            to="select"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration= {0}
                                ><i className="c-arrow fas fa-angle-double-down -view"></i></Link>
                    </div>
                </div>
            </div>
        );
    }
    }
export default Confirm;