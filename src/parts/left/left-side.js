import React, {Component} from 'react'
import {gStartData, gStartOptions, arrNullTo} from './gdata'
import Results from './results'
import InputForm from './inputform'
import Modal from './modal'


class Left extends Component {
    constructor(props) {
        super(props)

        this.state = {
            lyambda: "",
            mu: "",
            V: "",
            error: "",
            results: [{
                name: "",
                res: ""
            }],
            isInfoOpen: false,
            considered: false,
            graphData: gStartData,
            graphOptions: gStartOptions
        }

        this.handleLyambda = this
            .handleLyambda
            .bind(this)

        this.handleMu = this
            .handleMu
            .bind(this)

        this.handleV = this
            .handleV
            .bind(this)

        this.consider = this
            .consider
            .bind(this)

        this.toggleInfo = this
            .toggleInfo
            .bind(this)
    }

    handleLyambda(e) {
        this.setState({lyambda: e.target.value})
    }

    handleMu(e) {
        this.setState({mu: e.target.value})
    }

    handleV(e) {
        this.setState({V: e.target.value})
    }

    toggleInfo(){
        this.setState({isInfoOpen: !this.state.isInfoOpen})
    }

    consider() {
        if(!this.state.lyambda || !this.state.mu || !this.state.V){
            return
        }

        if (this.state.lyambda / (this.state.mu * this.state.V) >= 1) {
            this.setState({error: "λ/(µV) >= 1 исправьте ошибку"})
            return
        }

        

        this.setState({error: ""})

        let data = this.state.graphData
            let V = Number(this.state.V),
                M = Number(this.state.mu),
                L = Number(this.state.lyambda)
            let Pi = [],
                Wj = [],
                ro = L / M

            let bot = 0
            for (let x = 0; x < V; x++) 
                bot += div(ro, x)
            bot += div(ro / V) * (V / (V - ro))

            for (let i = 0; i <= V + 5; i++) {
                if (i < V) {
                    let top = div(ro, i)

                    Pi.push(top / bot)
                    Wj.push(NaN)
                } else if (i === V) {
                    let top = div(ro, i)
                    Pi.push(top / bot)
                    Wj.push(top / bot)
                } else {
                    let top = div(ro, V) * Math.pow(ro / V, i - V)
                    Wj.push(top / bot)
                }
            }

            data.labels = arrNullTo(V + 5)
            data.datasets = [
                {
                    label: 'P',
                    data: Pi,
                    borderColor: 'rgba(160, 58, 70, 1)',
                    backgroundColor: 'rgba(251, 213, 217, 0.5)',
                    borderWidth: 5
                }, {
                    label: 'W',
                    data: Wj,
                    borderColor: 'rgba(42, 117, 107, 1)',
                    backgroundColor: 'rgba(251, 213, 217, 0.5)',
                    borderWidth: 5
                }
            ]

            this.setState({
                graphData: data,
                results: [{
                    name:"Pt",
                    res: Pi[V]*(V/(V-ro))
                },{
                    name:"γ",
                    res: 1/(M*(V-ro))
                },{
                    name: "j",
                    res: L/(M*(V-ro))
                }],
                considered: true
            })
        }

        render() {
            return (
                <article>
                    <h1 className="model-name" onClick={this.toggleInfo}>Модель СМО M/M/V</h1>
                    {
                        this.state.isInfoOpen && 
                        <Modal onClose={this.toggleInfo}/>
                    }
                    <InputForm consider={this.consider} hV={this.handleV} hL={this.handleLyambda} hM={this.handleMu} error={this.state.error}/>
                    <Results considered={this.state.considered} data={this.state.graphData} options={this.state.graphOptions} results={this.state.results}/>
                </article>
            )
        }
    }

    function div(u, v) {
        let res = 1;
        for (let i = 1; i <= v; i++) {
            res *= u;
            res /= i;
        }
        return res;
    }

    export default Left