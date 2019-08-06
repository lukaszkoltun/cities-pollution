import React from 'react';

class Input extends React.Component{
    
    render(){
        var people = ['Steven', 'Sean', 'Stefan', 'Sam', 'Nathan'];

function matchPeople(input) {
  var reg = new RegExp(input.split('').join('\\w*').replace(/\W/, ""), 'i');
  return people.filter(function(person) {
    if (person.match(reg)) {
      return person;
    }
  });
}

function changeInput(val) {
  var autoCompleteResult = matchPeople(val);
  document.getElementById("result").innerHTML = autoCompleteResult;
}
        return <div>
            <input type="text" onkeyup="changeInput(this.value)"/>
            <div id="result"></div>
        </div>
    }
}
export default Input;