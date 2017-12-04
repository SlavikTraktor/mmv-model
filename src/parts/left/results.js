import React, {Component} from 'react'
import {Line, defaults}  from 'react-chartjs-2'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

defaults.global.animation = {
    duration: 1000,
    easing: 'easeOutQuad'
};

class Results extends Component{
    render(){
        return(
            <div className="results">
                <div className="chart">
                    <Line data={this.props.data} options={this.props.options}/>
                </div>
                {
                    this.props.considered && 
                        <div className="single-results">
                            <ul>
                                <ReactCSSTransitionGroup
                                transitionName="anim"
                                transitionAppear={true}
                                transitionAppearTimeout={5000}
                                transitionEnter={false}
                                transitionLeave={false}>
                                    {
                                        this.props.results.map((e, i) => {
                                            return <li key={i}>{e.name + " = " + e.res}</li>
                                        })
                                    }
                                </ReactCSSTransitionGroup>
                            </ul>
                        </div>
                        
                }
            </div>
        )
    }
}

export default Results