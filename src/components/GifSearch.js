import React from 'react';

class GifSearch extends React.Component {
  state = {
    searchValue: this.props.searchValue
  }

  handleChange = (event) => {
    // console.log(event.target.value)
    this.setState({
      searchValue: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.searchQuery(this.state)
  }


  render() {
    // console.log(this.state);
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Enter a Search Term:
          <input type="text" onChange={this.handleChange} value={this.state.searchValue} /></label>
         <input type="submit" value="Find GIFs" />
        </form>
      </div>
    )
  }

}

export default GifSearch;
