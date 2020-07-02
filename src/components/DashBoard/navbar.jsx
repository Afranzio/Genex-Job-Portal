import React from "react";
import { Nav, Icon } from "rsuite";

const styles = {
  marginBottom: 10
};

const CustomNav = ({ active, onSelect, ...props }) => {
  return (
    <Nav {...props} activeKey={active} onSelect={onSelect} style={styles}>
      <Nav.Item eventKey="home" icon={<Icon icon="home" />}>
        Home
      </Nav.Item>
      <Nav.Item eventKey="SignIn">SignIn</Nav.Item>
      <Nav.Item eventKey="SignUp">SignUp</Nav.Item>
      <Nav.Item eventKey="profie">Profile</Nav.Item>
      <Nav.Item eventKey="about">About</Nav.Item>
    </Nav>
  );
};

class Demo extends React.Component {
  constructor() {
    super();
    this.state = {
      active: 'home'
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(activeKey) {
    this.setState({ active: activeKey });
  }
  render() {
    const { active } = this.state;
    return (
      <div >
        <CustomNav appearance="tabs" active={active} onSelect={this.handleSelect} />
      </div>
    );
  }
}

export default Demo;
