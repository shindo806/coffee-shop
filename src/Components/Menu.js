import React, { Component } from 'react'
import { Input, Menu } from 'semantic-ui-react'

import { ReactComponent as Logo } from '../Images/logo/logo-white.svg';
export default class NavBar extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu secondary>
        <div className="container">
          <Menu.Item>
            <div className='logo'>
              <Logo className='logo-svg' />
              <span className='logo-title'>Coffee IT</span>
            </div>
          </Menu.Item>
          <Menu.Item
            name='Menu'
            active={activeItem === 'Menu'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='Coffee Story'
            active={activeItem === 'Coffee Story'}
            onClick={this.handleItemClick}
          />

          <Menu.Menu position='right'>
            <Menu.Item>
              <Input icon='search' placeholder='Search...' className='search-input' />
            </Menu.Item>
            <Menu.Item
              name='Login'
              active={activeItem === 'Login'}
              onClick={this.handleItemClick}
            />
          </Menu.Menu>
        </div>
      </Menu>
    )
  }
}
