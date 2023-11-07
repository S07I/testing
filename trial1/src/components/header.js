
//props is an object
//props={name="Shankar"}
export function Header(props){
    return(<div>
        <h1>Hello props.name</h1>
         {/* /* //Hello props.name */ }
        <h1>Heloo {props.name} </h1>
        </div>) 
        
}

export function Nav(){

    return(
        <div>
            <h1>Nav</h1>
        </div>
    )
}

