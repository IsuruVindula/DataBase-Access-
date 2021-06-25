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
  marginRight: "14px",
  color: "primary",
};

export default function SideBar() {
  let history = useHistory();

  return (
    <SideNav
      //redirecting
      onSelect={(selected) => {
        selected.persist()
        const to = "/" + selected;
        // history.push('to')
        console.log(to)
      }}
      style={sidebar}
    >
      <SideNav.Toggle />
      <SideNav.Nav defaultSelected="home">
        <NavItem>
          <NavIcon>
            <FaCoins size="1.8rem" />
          </NavIcon>
          <NavText>Data Storage</NavText>
          <NavItem eventKey="alltablesourcelist">
            <NavText>Source List</NavText>
          </NavItem>
          <NavItem eventKey="adddata">
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


