import * as React from 'react';
import db from '../firebaseInit';
import { string } from 'prop-types';

interface WardProps {
    PreItem: string;
}

interface WardState {
    WardBox :any;
}

class Ward extends React.Component<WardProps,WardState>{
    constructor (props: WardProps) {
        super(props);
        this.state = {
            WardBox : [],
        }
    }
    componentDidMount() {
        let buff = new Array();
        let Prefecture: string;
        if(this.props.PreItem === "愛知") {
            Prefecture = "1";
        } else {
            Prefecture = "2";
        }
        db.collection("single").doc(Prefecture).collection("Ward").get().then((query) => {
            console.log(typeof query);
            query.forEach((doc) => {
              var data = doc.data();
              buff.push([doc.id, data.ward]);
            });
            this.setState({WardBox: buff});
          })
          .catch((error: Error)=>{
            console.log(`データの取得に失敗しました (${error})`);
          });
    }
    render() {
        let WardNumber = this.state.WardBox.map(item => item[0]);
        let Ward = this.state.WardBox.map(item => item[1]);
        console.log(WardNumber)
        console.log(Ward[String(0)])
        return (
            <div id="ward" className="l-ward">
                {WardNumber.map(item =>(
                    <div className="p-ward__ward-box -view" key={item}>
                        <p className="p-ward__number -view">{`第${item}区`}</p>
                        <p className="p-ward__name -view">{Ward[String(Number(item)-1)]}</p>
                    </div>
                ))}
            </div> 
        )
    }
}  


export default Ward;