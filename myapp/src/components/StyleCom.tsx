

type StyleProps = {
    styles: React.CSSProperties
}

export const StyleComponents = (props : StyleProps)=>{
    return(
        <div style={props.styles} >Style componenet </div>
    )
}