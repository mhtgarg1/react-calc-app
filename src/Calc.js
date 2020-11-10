import React ,{Component} from 'react';

class Calc extends Component{

    state = {
        num1: null,
        num2: null,
        result: null

    }
    
    handleChange1=(e)=>{
        this.setState({
            num1:e.target.value
        })

    }
    handleChange2 = (e) => {
        this.setState({
            num2:e.target.value
        })
    }

    add = () => {
        this.setState({
            result: parseInt(this.state.num1) + parseInt(this.state.num2)
        })
    }
    subtract = () => {
        this.setState({
            result: parseInt(this.state.num1) - parseInt(this.state.num2)
        })
    }
    multiply = () => {
        this.setState({
            result: parseInt(this.state.num1) * parseInt(this.state.num2)
        })
    }
    divide = () => {
        this.setState({
            result: parseInt(this.state.num1) / parseInt(this.state.num2)
        })
    }
    percentage = () => {
        this.setState({
            result: parseInt(this.state.num1) * parseInt(this.state.num2)/100
        })
    }

    render(){
    return(
        <div className=" container center-align" >
        <div className="row">
                <div className="col s12 m6">
                    <div className="card blue-grey darken-1">
                        <div className="card-content white-text">
                            <span className="card-title">Calculator</span>
                            <input type="number" placeholder="num1" onChange={this.handleChange1} ></input>
                            <input type="number" placeholder="num2" onChange={this.handleChange2} ></input>
                            <input type="number" placeholder="result" readonly value={this.state.result}></input>
                        </div>
                        <div className="card-action">
                            <button className="btn-floating btn-large waves-effect waves-light red" onClick={this.add}>+</button>
                            <button className="btn-floating btn-large waves-effect waves-light blue" onClick={ this.subtract }>-</button>
                            <button className="btn-floating btn-large waves-effect waves-light green" onClick={this.multiply }>x</button>
                            <button className="btn-floating btn-large waves-effect waves-light pink" onClick={this.divide }>/</button>
                            <button className="btn-floating btn-large waves-effect waves-light gray" onClick={this.percentage}>%</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}
}
export default Calc;