import React from "react";
import { AppBar, Toolbar } from "@mui/material";
import { styled } from "@mui/material";

const Header = styled(AppBar)`
  background-color: #111111;
`;

const Tabs = styled("p")`
  font-size: 20px;
`;

const Navbar = () => {
  return (
    <Header>
      <Toolbar>
        <Tabs>logo</Tabs>
        <Tabs>All Users</Tabs>
        <Tabs>Add User</Tabs>
      </Toolbar>
    </Header>
  );
};

export default Navbar;
