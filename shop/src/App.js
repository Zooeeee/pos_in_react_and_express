import React, { Component } from 'react';
import OneItem from './OneItem'
import Display from './Display'
import axios from 'axios'
class App extends Component {
   

  constructor(props){
    super(props);
    this.state={
      data : [] ,
      test : ''
    }
    
}

//生命周期组件 引入后端的database
componentDidMount(){
  
  axios.get("http://localhost:8080/database")
  .then(res=>
    { 
      console.log("database:")
      console.log(res.data)
      this.setState({
        data:res.data
      })
    }
  
  )
  .catch(function (error) {
    console.log(error);
  });

  
}





//修改state里面的data中的某个对象的count
  getChildInformation(count,index){ 
    let new_data = this.state.data;
    new_data[index].count = count;
    this.setState({
      data:new_data
    })
}

  //通过该方法查看购物车，生成textarea内容
  getTextContain(){
  let result = ``;//name * count
  let result2 = ``; // barcode * count
  for(let a of this.state.data)
  {
    if(a.count > 0)
    {result += a.name + ` * ` + a.count + `
`;
    result2 += a.barcode + `-` + a.count+' ' ;}
  }
  this.setState({
    text:result,
    list:result2.split()
  })
  console.log(result) // 这是name * count 的形式
  console.log(result2)//这是barcode * count 的形式
}

  

//发送数据
  postData(){
    axios.post('http://localhost:8080/post',
      {"post":this.state.list}
  )
    .then(function (response) {
      console.log(response.data);
      alert(response.data)
      
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  
  
  
  
  
  
  
  
  render() {
    return (
      <div>
        
          {this.state.data.map((item,index)=>
          {
            return (
              <div key = {index}>
                <Display data = {this.state.data} item = {item} index= {index}/>
                <OneItem communicate = {this.getChildInformation.bind(this)} index = {index}  />
                <br/> <br/>
              </div>
            )
          }
          )}
          <textarea rows="10" cols="50" value = {this.state.text}></textarea>
          <button onClick = {this.getTextContain.bind(this)} >查看购物车</button>
          <button onClick={this.postData.bind(this)}>确认并提交</button>
        
      </div>
    );
  }
}

export default App;
