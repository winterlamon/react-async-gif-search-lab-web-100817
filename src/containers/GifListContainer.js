import React from 'react';
import GifSearch from '../components/GifSearch';
import GifList from '../components/GifList';

class GifListContainer extends React.Component {

  state = {
    gifs: [],
    searchValue: ""
  }


  // partyOfThree = (gifs) => (
  //   while (this.state.gifs.length < 4 ) {
  //     this.setState({gifs})
  //   })
  getGifs = () => (
    fetch(`http://api.giphy.com/v1/gifs/search?q=${this.state.searchValue}&api_key=dc6zaTOxFJmzC`)
    .then(res => res.json())
    .then(gifs => this.setState({gifs: gifs.data}))
    .then(() =>console.log(this.state.gifs))
  )

  searchQuery = (search) => {
    this.setState({searchValue: search}, this.getGifs)
    // console.log(this.state.gifs)
  }


  render() {
    // console.log(this.state);
    return (
      <div>
        <GifSearch searchValue={this.state.searchValue} searchQuery={this.searchQuery}/>
        <GifList gifs={this.state.gifs}/>
      </div>
    )
  }

}


export default GifListContainer;
