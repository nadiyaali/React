export default function PrettyText({mycolor="coral", text, myfontSize="20px"}){
    return(
        // we are creating a JS object for style, using parameter mycolor
        // this will be takes as CSS style
        <p style={{color:mycolor, fontSize:myfontSize}}>{text}</p>    
    )
}