import React, {Component} from 'react';

class RadioButton extends Component{
    constructor() {
        super()    
    }
    
  getInitialState = function() {
    return {
      selectedOption: 'option1'
    };
  }
  
  handleOptionChange = function (changeEvent) {
    this.setState({
      selectedOption: changeEvent.target.value
    });
  }

render () {
    return (
    <form>
     <div className="radio">
       <label>
           1
         <input type="radio" value="option1" checked 
        onChange={this.handleOptionChange} />
        
      </label>

      <label>
          2
         <input type="radio" value="option2"  
        onChange={this.handleOptionChange} />
        
      </label>

      <label>
          3
         <input type="radio" value="option3"  
        onChange={this.handleOptionChange} />
        
      </label>

      <label>
          4
         <input type="radio" value="option4"  
        onChange={this.handleOptionChange} />
        
      </label>

      <label>
          5
         <input type="radio" value="option5"  
        onChange={this.handleOptionChange} />
        
      </label>
    </div>
 

    <button class="btn btn-default" type="add">Save</button>

  </form>
    )
}
}


export default RadioButton;


