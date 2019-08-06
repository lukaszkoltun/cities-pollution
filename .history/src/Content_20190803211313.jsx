import React from 'react';
import styled from 'styled-components';

class Content extends React.Component{
    componentDidMount(){
        if(this.props.country !== ''){
            console.log(this.props.country);
        }
    }
    render(){
        return <div>
            {this.props.country}
        </div>
    }
}

export default Content;