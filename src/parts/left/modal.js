import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import chema from '../../img/shema.png'
import diagr from '../../img/diagrSost.png'

class Modal extends Component{
    componentWillMount(){
        this.portal = document.createElement('div')
        this.portal.id = 'portal'
        document.body.appendChild(this.portal)
    }

    componentWillUnmount(){
        setTimeout(
            ()=>document.body.removeChild(this.portal),
        100)
        
    }

    render(){
        return(
            ReactDOM.createPortal(
                <ReactCSSTransitionGroup
                transitionName="info"
                transitionAppear={true}
                transitionEnter={false}
                transitionLeave={true}
                transitionAppearTimeout={200}
                transitionLeaveTimeout={100}>
                    <div className="info" onClick={this.props.onClose}>
                        <div>
                            <h2>Схема модели</h2>
                            <img alt={"Схема модели"} src={chema}/>
                            <h2>Диаграмма состояний модели</h2>
                            <img alt={"Диаграмма состояний"} src={diagr}/>
                        </div>
                    </div>
                </ReactCSSTransitionGroup>,
            this.portal)
        )
    }
}

export default Modal