import * as React from "react"
import { Link } from 'react-scroll';

function Confirm() {
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
                            duration= {800}
                                ><i className="c-arrow fas fa-angle-double-down -view"></i></Link>
                    </div>
                </div>
            </div>
        );
    }
export default Confirm;