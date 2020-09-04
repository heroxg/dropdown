import React, {PureComponent} from 'react'



class DropdownItem extends PureComponent {
    render() {
      // TODO implement me
      return(
          <div>
               <ul className="dropdown-menu" aria-labelledby="dropdownButton" role="menu">
                    {this.props.children}
                </ul>
          </div>
      )
    }
  }
export default DropdownItem