
import * as React from "react"
import { Link } from 'react-scroll';

function Map(){
        return (
            <div id="select" className="l-select">
                <div className="p-select">
                    <p className="p-select__text -view">あなたの住んでいる<br/>都道府県を<br/>選択してください</p>
                <div className="c-arrow__box">
                        <Link
                            activeClass="active"
                            to="map"
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

export default Map;