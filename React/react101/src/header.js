function Header()
{
    return(
        <div style={{display:"inline-flex",width:"100%"}}>
            <h1 style={{color:'#7DF9FF'}}>React Js</h1>
            <li style={{display:"inline-block",width:"200px",textAlign:"center",backgroundColor:"red",margin:"50px"}}>
                Home1
            </li>
            <li style={{display:"inline-block",width:"200px",textAlign:"center",backgroundColor:"green"}}>
                Library1
            </li>
            <li style={{display:"inline-block",width:"200px",textAlign:"center",backgroundColor:"yellow"}}>
                Contacts1
            </li>
        </div> 
    )
}

export default Header