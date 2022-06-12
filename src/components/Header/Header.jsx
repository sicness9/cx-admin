import React from 'react'

// icons
import logo from '../../icons/mileiqLogo.svg'
import darkLogo from '../../icons/mileiqLogoDarkmode.svg'
import darkSwitch from '../../icons/darkThemeSwitch.svg'
import lightSwitch from '../../icons/lightThemeSwitch.svg'

// styles
import { HeaderStyles } from './Header.styles'

function Header( props ) {
    const themeToggler = () => {
        props.themeState === "light" ? props.setThemeState("dark") : props.setThemeState("light");
      };

  return (
    <HeaderStyles>
        <nav className="cx-admin-nav">
            <div className="logo-container">
                {props.themeState === 'light' ? <img alt="logo" className='logo' src={logo}/>
                : <img alt="logo" className='logo' src={darkLogo}/>}
            </div>
            <div className="theme-switch-container">
                <button className='theme-toggle-btn' onClick={themeToggler}>
                    {props.themeState === 'dark' ? <img alt="theme-toggler" src={darkSwitch}/>
                    : <img alt="theme-toggler" src={lightSwitch}/>}
                </button>
            </div>
        </nav>
    </HeaderStyles>
  )
}

export default Header