import React, { Component } from 'react'
import { Jumbotron } from 'reactstrap'
export default class Home extends Component {
  render() {
    return (
      <div>
        <Jumbotron>
            <div className="container">
                <div className="row row-header">
                    <div className="">
                        <h1>VecHire</h1>
                        <p>We take inspirations from the carbon footprint reduction campaign and hence want to decrease the pollution generated by vehicles</p>

                    </div>
                </div>
            </div>
        </Jumbotron>
        <Jumbotron>
            <div className="container">
                <div className="row row-header">
                    <div>
                        <h2 className="row justify-content-center">How to Hire?</h2>
                        <p>We take inspirations from the carbon footprint reduction campaign and hence want to decrease the pollution generated by vehicles</p>

                    </div>
                </div>
            </div>
        </Jumbotron>
        <Jumbotron>
            <div className="container">
                <div className="row row-header">
                    <div>
                        <h2 className="row justify-content-center">How to Add?</h2>
                        <p>We take inspirations from the carbon footprint reduction campaign and hence want to decrease the pollution generated by vehicles</p>

                    </div>
                </div>
            </div>
        </Jumbotron>
      </div>
    )
  }
}