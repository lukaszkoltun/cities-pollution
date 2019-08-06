import React from 'react';
import styled from 'styled-components';

class Content extends React.Component{
    render(){
        return <div>
            {this.props.country}
        </div>
    }
}

export default Content;