import React from 'react';

class GifList extends React.Component {

  render() {
    // console.log(this.props.gifs);

    const printedGifList = this.props.gifs.map(gif => <li><img src={`https://media.giphy.com/media/${gif.id}/giphy.gif`} /></li>)

    return (
      <div>
        <ul>
          {printedGifList}
        </ul>
      </div>
    )
  }

}

export default GifList;
