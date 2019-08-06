import React from 'react';
import styled from 'styled-components';


class Content extends React.Component{
    getCities = (arr, arr2) =>{
        for(let i=0; i<arr.length; i++){
            if(arr2.indexOf(arr[i].city)==-1){
                arr2.push(arr[i].city)
            }
            if(arr2.length==10) break;

        }
    }
    render(){
        let citiesArray = [];
        if(this.props.country !== ''){
            console.log(this.props.country);
            fetch(`https://api.openaq.org/v1/measurements?country=${this.props.country}&parameter=pm10&order_by=value&sort=desc&date_from=2019-07-31&date_to=2019-07-31`).then( resp => {
            if (resp.ok)
                return resp.json();
            else
                 throw new Error('Błąd sieci!');
            }).then( data => {
                this.getCities(data.results, citiesArray,);
                console.log(citiesArray);

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