import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { BsChevronDoubleDown } from "react-icons/bs";

const SortSelector = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDoubleDown />}>
        order by: relevance
      </MenuButton>
      <MenuList>
        <MenuItem>zfsdsf</MenuItem>
        <MenuItem>sdfcasf</MenuItem>
        <MenuItem>dbsdfv</MenuItem>
        <MenuItem>xbcvbc</MenuItem>
        <MenuItem>cvxbxvc</MenuItem>
        <MenuItem>asdf</MenuItem>
        <MenuItem>hafdgv</MenuItem>
        <MenuItem>svnbj,v</MenuItem>
        <MenuItem>asv</MenuItem>
        <MenuItem>cvbsfg</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
