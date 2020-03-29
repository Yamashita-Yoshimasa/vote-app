import * as React from 'react';
import { Link } from 'react-router-dom';
//import Drop from './drop'

//親コンポーネントからデータを受け取る時、必ずそのデータの型を指定する必要がある。
interface SelectProps {
    Prefecture: string[];
}

class Select extends React.Component<SelectProps,{}> {
    constructor(props:SelectProps) {
        super(props);
        
    }
    componentDidMount() {
        const SelectID = document.getElementById("select");
        SelectID.style.minHeight = window.innerHeight + 'px';
    }
    render(){
        const PrefectureList:string[] = this.props.Prefecture
        return (
            <div id="select" className="l-select">
                <div className="p-select">
                    <p className="p-select__text -view">あなたの住んでいる<br/>都道府県を<br/>選択してください</p>
                    {PrefectureList.map(item =>(
                        <Link to={`/${item}/`} key={item} className="p-select__text -list -view">{item}</Link>
                    ))}
                </div>
            </div>
        );
    }
}

export default Select;