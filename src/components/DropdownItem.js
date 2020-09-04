import React, {PureComponent} from 'react'


class DropdownItem extends PureComponent {
    // here we can syn the server with app.sync('PATCH', 'user', { dropdown_1_state: {true,false} })
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