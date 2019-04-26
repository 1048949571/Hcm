import './index.less'

const NoneData = props => {
  return (
    <div className={`none-data-wrapper ${props.className}`} style={props.style}>
      <span className="icon"></span>
      <p className="text">{props.text}</p>
    </div>
  )
}

NoneData.defaultProps = {
  text: '数据空空如也',
  className: '',
  style: {},
}

export default NoneData