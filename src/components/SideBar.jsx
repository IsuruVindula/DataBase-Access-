import React from "react";
import SideNav, {
  // Toggle,
  // Nav,
  NavItem,
  NavIcon,
  NavText,
} from "@trendmicro/react-sidenav";
import { useHistory } from "react-router-dom";

// Be sure to include styles at some point, probably during your bootstraping
import "@trendmicro/react-sidenav/dist/react-sidenav.css";

import { FaViacoin, FaCoins} from "react-icons/fa";

const sidebar = {
  marginRight: "15px",
  color: "warning",
};

export default function SideBar() {
  let history = useHistory();

  return (
    <SideNav
      onSelect={(selected) => {
        const to = "/" + selected;
        history.push(to);
      }}
      style={sidebar}
    >
      <SideNav.Toggle />
      <SideNav.Nav defaultSelected="home">
        <NavItem eventKey="datasources">
          <NavIcon>
            <FaCoins size="1.8rem" />
          </NavIcon>
          <NavText>Data Storage</NavText>
          <NavItem eventKey="datasources/sourcelist">
            <NavText>Source List</NavText>
          </NavItem>
          <NavItem eventKey="datasources/addsource">
            <NavText>Add Source</NavText>
          </NavItem>
          <NavItem eventKey="datasources/sinklist">
            <NavText>Sink List</NavText>
          </NavItem>
          <NavItem eventKey="datasources/addsink">
            <NavText>Add Sink</NavText>
          </NavItem>
        </NavItem>

        <NavItem eventKey="addvalidation">
          <NavIcon>
            <FaViacoin size="1.8rem" />
          </NavIcon>
          <NavText>Validations</NavText>

          <NavItem eventKey="validations/list">
            <NavText>Rule List</NavText>
          </NavItem>

          <NavItem eventKey="validations/addrule">
            <NavText>Add Rule</NavText>
          </NavItem>
        </NavItem>
      </SideNav.Nav>
    </SideNav>
  );
}


