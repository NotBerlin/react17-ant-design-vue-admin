import { NavLink } from 'react-router-dom';
import { Component } from 'react'

class MyNavLink extends Component {
    render() {
        return (
            <NavLink activeClassName="active" className="my-nav-link" {...this.props}></NavLink>
        )
    }
}

export default MyNavLink;
