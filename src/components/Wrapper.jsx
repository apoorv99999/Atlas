function Wrapper(props) {
  return (
    <div 
      style={{
        padding: `${props.paddingY ? `${props.paddingY} 1.5rem` : '0 1.5rem'}`,
        display: `${props.flex ? 'flex' : 'block'}`,
        justifyContent: `${(props.flex && props.justifyContent) && `${props.justifyContent}`}`,
        alignItems: `${(props.flex && props.alignItems) && `${props.alignItems}`}`
      }}

      className={`${props.className && props.className}`}
    >
        {props.children}
    </div>
  )
}

export default Wrapper;