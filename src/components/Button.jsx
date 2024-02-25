import { Tooltip } from "./Tooltip";

export const Button=(props)=>{
    const {toggleTooltip,show} = props;
    const top = 50;
    const left =50;
    const container={
        position:"relative",
        display:"inline-block",
        left:"50%",
        top:"50%"
    }
    const buttonStyle={
            border:"none",
            backgroundColor:"transparent",
            color:"gray",
    }
    return (
        <>
        <div style={container}>
            <button style= {buttonStyle} onMouseEnter={()=>{toggleTooltip()}} onMouseLeave={()=>{toggleTooltip()}}>Hover over me</button>
            {show?<Tooltip top={top} left={left}/>:null}
        </div>
            
        </>
    )
}