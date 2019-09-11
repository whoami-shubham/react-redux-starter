import React, { Component } from 'react'
import './Footer.css'

export default class Footer extends Component {
    render() {
        return (
            <div>
                <div className="col-sm-12 last">
                    <div className="container">
                            <div className="col-sm-12 footer">
                                <span>&copy; 2019 No one care about this copyright line.</span>
                            </div>
                    </div>
                </div>
            </div>
        )
    }
}