import React from 'react';

class Input extends React.Component{
    constructor(props){
        super(props);
        this.countries = ['Poland', 'Spain', 'Germany', 'France'];
    }
    render(){
        return <div>
            <ul>
                {this.countries.map((item => <li>{item}</li>))}
            </ul>
        </div>
    }
}
export default  Input;