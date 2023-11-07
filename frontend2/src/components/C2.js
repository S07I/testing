import { Component } from "react";
import C3 from "./C3";

class C2 extends Component
{
    constructor(){
        super();
        console.log("i am constructor");
        this.state={role:"Engineer,bool:true"};
        //if u write handleclick as a normal function
        this.handleClick=this.handleClick.bind(this);

    }
    handleClick(){
        this.setState({role:"Doctor"});
    }
    static getDerivedStateFromProps(){
        console.log("i am getDerivedStateFromProps method");
        return null;
    }
    componentDidMount(){
        console.log("i am componentDidMount method");

    }
    shouldComponentUpdate(){
        console.log("I am shouldComponentUpdate method");
        return true;//if don't want to return to same value ,write it as false
    }
     getSnapshotBeforeUpdate(){
        console.log("I am getSnapshotBeforeUpdate method");
        return null;
    }
    componentDidUpdate(){
        console.log("i am componentDidUpdate method");
    }
    handleClick2=()=>{
        this.setState({
            bool:false
        })
    }
    render(){
        console.log("i am render method");

        return(<div>
            <h1>Life Cycle Methods</h1>
            <h1>State value -{this.state.role}</h1>
            <button onClick={this.handleClick}>Click Me!!</button>
            {(this.state.bool)?<C3 />:null}
            <button onClick={this.handleClick2}>Unmount the component</button>
        </div>)
    }
}
export default C2;


/*

class A{
    public void abc(){

    }
}
class B extends a{
    void abc()//throws an error->visibility can'r be reduced
    {

    }
}


*/