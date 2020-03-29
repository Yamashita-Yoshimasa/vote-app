import * as React from 'react';
import db from '../firebaseInit';
import Select from './select';

interface PrefectureState {
    Prefecture: string[];
    PreGet: any;
    PreWard: any;
    PreItem : string;
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
        }
    }

    async componentDidMount() {
        
        let test:string[] = [];
        let PreDoc:any = db.collection("single");
        let Prebox:string[] = [];
        for(let i = 1; i <= PrefectureLength; i++){
            this.setState({PreGet :await PreDoc.doc(String(i)).get()});
            Prebox[i-1] = this.state.PreGet.get("prefecture");
        }
        this.setState({Prefecture: Prebox});
    }
    public render() {
        return (
            <div>
                <Select Prefecture = {this.state.Prefecture} />
            </div>
        )
    }
}

export default SelectPrefecture;