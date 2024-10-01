import React from "react"

export default function Footer(props){
    return(
       <>
     <footer style={props.mood}>
     <h5 style={props.mood}>{props.footHeading}</h5>
     </footer>
       </>
    )
}