/* eslint-disable */

const Header = (props) => {
  const headerStyle = {
    padding: '20px 0',
    lineHeight: '1.5em',
    color: '#aeadad',
    textAlign: 'center',
  };
  return (
    <header style={headerStyle} className="header">
      {props.children}
  </header>
  )
}

export default Header
