var React = require('react');

var RadioButton = React.createClass({

  getInitialState: function () {
    return {
      selectedOption: 'option1'
    };
  },
  
  handleOptionChange: function (changeEvent) {
    this.setState({
      selectedOption: changeEvent.target.value
    });
  },

  render: function () {
    return ({/* JSX code */});
    
    <form>
    <div className="radio">
      <label>
        <input type="radio" value="option1" checked={this.state.selectedOption === 'option1'} 
        onChange={this.handleOptionChange} />/>
        Option 1
      </label>
    </div>
    <div className="radio">
      <label>
        <input type="radio" value="option2" checked={this.state.selectedOption === 'option2'} 
        onChange={this.handleOptionChange} />/>
        Option 2
      </label>
    </div>
    <div className="radio">
      <label>
        <input type="radio" value="option3" checked={this.state.selectedOption === 'option3'} 
        onChange={this.handleOptionChange} />/>
        Option 3
      </label>
    </div>
    <div className="radio">
      <label>
        <input type="radio" value="option4" checked={this.state.selectedOption === 'option4'} 
        onChange={this.handleOptionChange} />/>
        Option 4
      </label>
    </div>
    <div className="radio">
      <label>
        <input type="radio" value="option5" checked={this.state.selectedOption === 'option5'} 
        onChange={this.handleOptionChange} />/>
        Option 5
      </label>
    </div>

    <button class="btn btn-default" type="add">Save</button>

  </form>

  }
});

module.exports = RadioButton;


