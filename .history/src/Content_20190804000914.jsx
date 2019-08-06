import React from 'react';
import styled from 'styled-components';


class Content extends React.Component{
    render(){
        if(this.props.country !== ''){
            console.log(this.props.country);
            fetch(`https://api.openaq.org/v1/location?country=PL&parameter=pm10&parameter=25&order_by=parameter&sort=desc&limit=10`).then( resp => {
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