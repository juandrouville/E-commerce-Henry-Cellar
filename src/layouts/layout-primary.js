// Components
import Menu from 'components/menu/'

const LayoutPrimary = ({ children }) => {
  return (
    <React.Fragment>
      <Menu />
      {children}
    </React.Fragment>
  )
}

export default LayoutPrimary
