import React, { Component } from 'react'

export class Carousel extends Component {
  render() {
    return (
      <div>
        <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
            <div className="carousel-item active">
            <img src="https://d3h2k7ug3o5pb3.cloudfront.net/image/2020-12-13/1f6806f0-3d3e-11eb-892b-1727b307c367.jpg" className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
            <img src="https://d3h2k7ug3o5pb3.cloudfront.net/image/2020-12-13/1f6806f0-3d3e-11eb-892b-1727b307c367.jpg" className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
            <img src="https://d3h2k7ug3o5pb3.cloudfront.net/image/2020-12-13/1f6806f0-3d3e-11eb-892b-1727b307c367.jpg" className="d-block w-100" alt="..."/>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
        </div>
      </div>
    )
  }
}

export default Carousel
