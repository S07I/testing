
import { Component } from "react";
//there is pred efined class comp which has render method in ots definition]
//component name is "component" which is available in react file as namespace export
export class Footer extends Component{
    constructor(){
        super();
        this.state={count:0};
        //if u r witing the handleclick as normal function belo line is compulsory
        this.handleClick=this.handleClick.bind(this);
        //if u r writing handleclick as arrow function the above line is not compulsory
    }
    handleClick=()=>{
        this.setState({
            count:this.state.count+1
        });
    }
    render(){
        return(
            <div>
                <h1>Footer Component</h1>
                <h1>The{this.props.prod} is in{this.props.color} color and its cost is {this.props.cost}</h1>
                <h1>Counter:{this.state.count}</h1>
                <button onClick={this.handleClick}>Increase count</button>
            </div>
        )

    }
}
// export  default  footer;