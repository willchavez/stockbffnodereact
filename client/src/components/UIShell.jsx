import React, { Component } from 'react';
import {
  Content,
  Header,
  HeaderName,
  SkipToContent,
  SideNav,
  SideNavItems,
  SideNavMenu,
  SideNavMenuItem
} from 'carbon-components-react/lib/components/UIShell/';
import UIShellBody from './UIShellBody';

const Fade20 = () => (
  <svg
    icon
    width="20"
    height="20"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    aria-hidden="true"
  >
    <path
      d="M8.24 25.14L7 26.67a14 14 0 0 0 4.18 2.44l.68-1.88a12
        12 0 0 1-3.62-2.09zm-4.05-7.07l-2 .35A13.89 13.89 0 0 0 3.86
        23l1.73-1a11.9 11.9 0 0 1-1.4-3.93zm7.63-13.31l-.68-1.88A14
        14 0 0 0 7 5.33l1.24 1.53a12 12 0 0 1 3.58-2.1zM5.59
        10L3.86 9a13.89 13.89 0 0 0-1.64 4.54l2 .35A11.9 11.9 0 0 1 5.59
        10zM16 2v2a12 12 0 0 1 0 24v2a14 14 0 0 0 0-28z"
    />
  </svg>
);

class UIShell extends Component {
  constructor(props) {
    super(props);
    this.state = {
      patternName: 'Display Form'
    };
  }

  onPatternSelection = label => {
    this.setState({ patternName: label });
  };

  renderSideNavItem = label => {
    return (
      <SideNavMenuItem
        href="# "
        isActive={label === this.state.patternName ? true : false}
        onClick={e => this.onPatternSelection(label)}
      >
        {label}
      </SideNavMenuItem>
    );
  };

  render() {
    return (
      <div>
        <Header aria-label="IBM Platform Name">
          <SkipToContent />
          <HeaderName href="#" prefix="IBM">
            Will's page
          </HeaderName>
        </Header>
        <SideNav aria-label="Side navigation">
          <SideNavItems>
            <SideNavMenu
              defaultExpanded
              icon={<Fade20 />}
              title="12 Design Patterns"
            >
              {this.renderSideNavItem('Display Form')}
              {this.renderSideNavItem('Validating Form')}
              {this.renderSideNavItem('Update Form')}
              {this.renderSideNavItem('Validating Form Wizard 1')}
              {this.renderSideNavItem('Validating Form Wizard 2')}
              {this.renderSideNavItem('Simple List')}
              {this.renderSideNavItem('Table List')}
              {this.renderSideNavItem('List to List')}
              {this.renderSideNavItem('Linked List')}
              {this.renderSideNavItem('Master Detail')}
              {this.renderSideNavItem('Create, Read, Update, Delete')}
              {this.renderSideNavItem('Search List')}
              {this.renderSideNavItem('Search Form')}
            </SideNavMenu>
          </SideNavItems>
        </SideNav>
        <Content id="main-content">
          <UIShellBody patternName={this.state.patternName} />
        </Content>
      </div>
    );
  }
}

export default UIShell;
