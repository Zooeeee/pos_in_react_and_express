import React, { Component } from 'react';
class OneItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            count : 0 
        }
    }

    handleReduceCount(){
        let a = this.state.count-1
        if(a >= 0)
        {
            this.setState({ 
                count : a 
            })
            this.props.communicate(a,this.props.index)
        }
        else
            alert("数目不可小于零")
    }

    handleIncreaseCount(){
        let a = this.state.count+1
        this.setState(
           { count : a
           }
        )
        this.props.communicate(a,this.props.index)
    }

    
    
    render(){
        return(
            <div>
                <button onClick={this.handleReduceCount.bind(this)}>-</button>
                <button   disabled="disabled" >{this.state.count}</button>
                <button onClick={this.handleIncreaseCount.bind(this)} >+</button>
            </div>
        )
    }



}
export default OneItem;