import React from 'react'
import SvgIcon from '@src/renderer/components/svg-icon'

import './index.scss'

export default class NavHeader extends React.Component {
  public renderNavICon(): React.ReactElement {
    return (
      <div className="nav-header-logo">
        <SvgIcon icon="iconvscode"></SvgIcon>
      </div>
    )
  }
  public renderMenuList(): React.ReactElement {
    return <></>
  }
  public renderOperate(): React.ReactElement {
    const operateList: Array<string> = ['iconscale', 'iconclose']
    return (
      <div className="nav-header-right">
        {operateList.map((icon) => {
          return <SvgIcon icon={icon} key={icon} fontSize={ 24 }></SvgIcon>
        })}
      </div>
    )
  }
  public render(): React.ReactNode {
    return (
      <div className="nav-header">
        <div className="nav-header-left">
          {this.renderNavICon()}
          <div className="nav-header-menu-list"></div>
        </div>
        <div className="nav-header-title"></div>
        {this.renderOperate()}
      </div>
    )
  }
}
