import * as React from 'react';
import db from '../firebaseInit';
import Select from './select';
import Ward from './ward';

interface PrefectureState {
    Prefecture: string[];
    PreGet: any;
    PreWard: any;
    PreItem : string;
    ShowFlag: boolean;
}

const PrefectureLength = 2;
class SelectPrefecture extends React.Component<{},PrefectureState> {
    constructor(props:{}) {
        super(props);
        this.state = {
            Prefecture: [],
            PreGet: {},
            PreWard: {},
            PreItem: '',
            ShowFlag: false,
        }
        this.ToggleFlag = this.ToggleFlag.bind(this)
    }

    async componentDidMount() {
        
        let test:string[] = [];
        let PreDoc:any = db.collection("single");
        let Prebox:string[] = [];
        for(let i = 1; i <= PrefectureLength; i++){
            this.setState({PreGet :await PreDoc.doc(String(i)).get()});
            Prebox[i-1] = this.state.PreGet.get("prefecture");
            console.log(Prebox[1]);
        }
        this.setState({Prefecture: Prebox});
    }

    ToggleFlag(PreItem:string):void {//voidは返り値のない関数にする
        this.setState({PreItem: PreItem});
        this.setState({ShowFlag: !this.state.ShowFlag });
    }

    public render() {
        let ShowWard = this.state.ShowFlag ? <Ward  PreItem = {this.state.PreItem} /> : '';
        return (
            <div>
                <Select Prefecture = {this.state.Prefecture} ToggleFlag = {this.ToggleFlag} />
                {ShowWard}
            </div>
        )
    }
}

export default SelectPrefecture;