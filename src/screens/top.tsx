import * as React from 'react';
import { Link } from 'react-scroll';
import Confirm from './confirm';
import SelectPrefecture from './SelectPrefecture';
class Top extends React.Component {
    componentDidMount() {
        const TopID = document.getElementById("top");
        TopID.style.minHeight = window.innerHeight + 'px';
    }
    render () {
        return (
        <div className="container">
            <div id="top" className="l-top">
                <div className="p-top">
                    <h1 className="p-top__title -view">Let's Vote</h1>
                    <div className="c-arrow__box">
                        <Link
                            activeClass="active"
                            to="confirm"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration= {400}
                                ><i className="c-arrow fas fa-angle-double-down -view"></i></Link>
                    </div>
                </div>
            </div>
            <Confirm />
            <SelectPrefecture />
        </div>
        );
    }
}

export default Top;