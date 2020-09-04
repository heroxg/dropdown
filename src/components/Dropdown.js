import React, {PureComponent} from 'react';

class Dropdown extends PureComponent {
  constructor(props) {
    super(props);
    
    this.state = {
      isOpen: false,
    };

    this.toggle = this.toggle.bind(this)
  }

  toggle() {
    // const {isOpen} = this.state;
    // this.setState({isOpen: isOpen});
    this.setState(prevState => ({
        isOpen: !prevState.isOpen
    }))
  }

  render() {
    const {isOpen} = this.state;
    const {label} = this.props;

    return (
      <div className="dropdown">
        {/* <button type="button" className="dropdown-button" id="dropdownButton" aria-haspopup="true" aria-expanded={isOpen} onClick={() => this.toggle()}>
            {label}
        </button> */}

        {/* <ul className={`${isOpen ? 'dropdown-open' : ''} dropdown-menu`} aria-labelledby="dropdownButton" role="menu">
          {this.props.children}
        </ul> */}
        <button onClick={() => this.toggle()}>
            {label }
        </button> 
        <div>{isOpen ? this.props.children : ""}</div>
      </div>
    );
  }
}

export default Dropdown