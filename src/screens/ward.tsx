import * as React from "react";
import db from '../firebaseInit';

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
            query.forEach((doc) => {
              var data = doc.data();
              buff.push([doc.id, data.ward]);
            });
            this.setState({WardBox: buff});
          })
          .catch((error)=>{
            console.log(`データの取得に失敗しました (${error})`);
          });
    }
    render() {
        let test0:[] = this.state.WardBox.map(item => item[0])
        // let test1:[] = test0.map(item => item[0])
        let test2:[] = this.state.WardBox.map(item => item[1])
        // let test3:[] = test2.map(item => item[0])
        console.log(Object.keys(test2))
        console.log(test2[String(1)])
        return (
            <p id="ward" className="p-select__text -view">test</p> 
        )
    }
}  


export default Ward;