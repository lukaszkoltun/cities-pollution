import React from 'react';

class Input extends React.Component{
    render(){
        return<div>
             <form autocomplete="off" action="/action_page.php">
                <div class="autocomplete" style="width:300px;">
          <input id="myInput" type="text" name="myCountry" placeholder="Country">
        </div>
        <input type="submit">
      </form>
        </div>
    }
}