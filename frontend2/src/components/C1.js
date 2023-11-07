import { Component } from "react";

class C1 extends Component
{
    constructor(props){
        super(props);
        // this.state={role:"Engineer"};
        this.state={bool:true};
    }

    handleClick=()=>{
        // this.setState({role:"Doctor"});
        this.setState({bool:!this.state.bool});
    }
    

    render(){
        return(
            <div>
                <h1>Props values - {this.props.gift}</h1>
                {/* <h1>State value -{this.state.role}</h1> */}
                <h1>State value-{(this.state.bool)?"Engineer":"Doctor"}</h1>
                <button onClick={this.handleClick}>Click Me!!</button>
            </div>
        )
    }
}
export default C1;