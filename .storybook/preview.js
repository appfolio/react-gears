import React from 'react';
import {
  Col,
  Container,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  Navbar,
  NavItem,
  NavLink,
  UncontrolledDropdown,
} from '../src';
import allThemes from './themes';

const changeTheme = (url) => {
  const link = document.getElementById('theme');
  link.href = url;

  try {
    localStorage.storybookTheme = url;
  } catch (err) {
    // Safari private mode
  }
};

const ThemeLink = ({ children, url }) => (
  <NavLink href="#" onClick={() => changeTheme(url)}>
    {children}
  </NavLink>
);

export const decorators = [
  (Story, info) => (
    <div>
      <Navbar color="light">
        <Nav>
          {Object.keys(allThemes).map((name) => {
            const links = allThemes[name];
            return (
              <NavItem key={name}>
                <UncontrolledDropdown>
                  <DropdownToggle nav caret>
                    {name}
                  </DropdownToggle>
                  <DropdownMenu>
                    {links.map((theme, i) => (
                      <DropdownItem key={theme.url}>
                        <ThemeLink key={i} url={theme.url}>
                          {theme.name}
                        </ThemeLink>
                      </DropdownItem>
                    ))}
                  </DropdownMenu>
                </UncontrolledDropdown>
              </NavItem>
            );
          })}
        </Nav>
      </Navbar>
      <Container fluid className="my-5">
        <Col xl="7">
          <header className="mb-5">
            <h1 className="display-4 mb-0">{info.kind}</h1>
            <h2 className="h3 text-muted">{info.name}</h2>
          </header>
          <section id="story-root">
            <Story />
          </section>
        </Col>
      </Container>
    </div>
  ),
];
