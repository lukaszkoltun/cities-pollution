import React from 'react';
import styled from 'styled-components';


class Content extends React.Component{
    render(){
        if(this.props.country !== ''){
            console.log(this.props.country);
            fetch(`https://api.openaq.org/v1/measurements?country=PL&parameter=pm25&order_by=parameter&order_by=city&sort=desc&limit=10`).then( resp => {
            if (resp.ok)
                return resp.text();
            else
                 throw new Error('Błąd sieci!');
            }).then( ip => {
                console.log('Moje IP:', ip);
            }).catch( err => {
                console.log('Błąd!', err);
            });
        }
        return <div>
            {this.props.country}
        </div>
    }
}

export default Content;