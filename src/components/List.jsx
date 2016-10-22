var React = require('react');
var ListItem = require('./ListItem.jsx');

var List = React.createClass({
  render: function() {
    var createItem = function(text, index) {
      /*To pass donw the data to ListItem.
      'key' & 'text' are the props.
      Rule of thumb: Always give unique identifier when want to shao a list <li>
      else might show a wrong data.
      For this case, we create a 'key' as unique identifier and pass down.
      Refer to course 'React App: Your first React application', mins 11:10*/
      return <ListItem key={index + text} text={text} />
    };

    return (
      <ul>
        {this.props.items.map(createItem)}
      </ul>
    );

  }
});

module.exports = List;
