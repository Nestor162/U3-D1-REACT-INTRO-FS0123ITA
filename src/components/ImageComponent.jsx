import { Component } from "react";

class ImageComponent extends Component {
  render() {
    return (
      <div>
        <img src={this.props.src} alt={this.props.alt} />
        <p>Immagine n° {this.props.picNum}</p>
      </div>
    );
  }
}

export default ImageComponent;
