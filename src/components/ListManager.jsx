var React = require('react');
var List = require('./List.jsx');

var ListManager = React.createClass({

  getInitialState: function() {
    return {items: [], newItemText:''};
  },
  /*'getInitialState': every component will call this once
    when it is 1st loaded even without define it*/

  onChange: function(element) {
    this.setState({newItemText: element.target.value});
  },

  handleSubmit: function(element) {
    /*.preventDefault(): to prevent 'onClick' function of the button function being call,
      instead we are using 'onSubmit' function of the html form
      We can use both function but we choose to use 'onSubmit' in this case*/
    element.preventDefault();

    /*this.state is mutatable, can change (this.props is read only)*/
    var currentItems = this.state.items;

    currentItems.push(this.state.newItemText);

    /*'setState' is React function used when we want to change the 'state'
      not necessary to hv 2 item inside*/
    this.setState({items: currentItems, newItemText:''});
  },

  render: function(){
    return (
      <div>
        <h3>{this.props.title}</h3>

        <form onSubmit={this.handleSubmit}>
          {/*'onChange' funtion is call on every key stroke and display it
            we need to explicitly handle it for React for its virtual DOM */}
          <input onChange={this.onChange} value={this.state.newItemText} />
          <button>Add</button>
        </form>

        <List items={this.state.items} />

      </div>
    );
  }

});

module.exports = ListManager;
