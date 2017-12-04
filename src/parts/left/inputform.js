import React, {Component} from 'react'

class InputForm extends Component{
    render(){
        return(
            <div>
                <div className="controls">
                    <div className="input-fields">
                        <div>
                            <span className="bukva">&#955;:</span>
                            <input type="text" placeholder="&#955;..." onChange={this.props.hL}/>
                        </div>
                        <div>
                            <span className="bukva">&#181;:</span>
                            <input type="text" placeholder="&#181;..." onChange={this.props.hM}/>
                        </div>
                        <div>
                            <span className="bukva">&#086;:</span>
                            <input type="text" placeholder="&#086;..." onChange={this.props.hV}/>
                        </div>
                    </div>
                    <div className="consider">
                        <button
                            className="control-button"
                            style={{
                            verticalAlign: 'middle'
                        }}
                            onClick={this.props.consider}>
                            <span>Рассчитать</span>
                        </button>
                    </div>
                    
                </div>
                {
                    Boolean(this.props.error) &&
                    <div className="error">{this.props.error}</div>
                }
            </div>
        )
    }
}

export default InputForm