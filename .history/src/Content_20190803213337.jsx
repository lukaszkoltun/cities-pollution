import React from 'react';
import styled from 'styled-components';
getData = (a) =>{
    fetch('https://api.openaq.org/v1/cities').then( resp => {
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
class Content extends React.Component{
    getData()
    render(){
        if(this.props.country !== ''){
            console.log(this.props.country);
        }
        return <div>
            {this.props.country}
        </div>
    }
}

export default Content;