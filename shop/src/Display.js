import React, { Component } from 'react';
//import data from './datbase'


class Display extends Component{
    /*constructor(props){
        super(props);
        //console.log(this.props.data)
        }*/

    render(){
        //let data = this.props.data
        return (
            <div>
                <img  width = "150px" height = "150px"  src = {this.props.data[this.props.index].post} alt = {this.props.data[this.props.index].name}/>
                <p>名称:{this.props.data[this.props.index].name}</p>
                <p>单位:{this.props.data[this.props.index].unit}</p>
                <p>价格:{this.props.data[this.props.index].price}</p>
                <p>优惠:{this.props.data[this.props.index].discount}</p>
            </div>
        )
    }


    
}



export default Display;