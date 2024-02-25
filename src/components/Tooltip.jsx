

export const Tooltip=(props)=>{
    const {top,left} = props;
    const y =-60;
    const styleTooltip={
        position:"absolute",
        left:`110%` ,
        width:'200px',
        minHeight:"50px",
        transform:`translateY(${y}%)`,
        borderRadius:'0.5rem',
        backgroundColor:"black",
        color:"white",
        margin:"auto",
        padding:"2px"

    }
    return (
        <>
            <div  style={styleTooltip}>
                <div style={{position:"relative",left:"-10px", borderRight:"10px solid pink",borderTop:"10px transparent pink",borderBottom:"10px transparent pink" , width:"0px"}}></div>
                Here is your tooltip for today
            </div>
        </>
    )
}