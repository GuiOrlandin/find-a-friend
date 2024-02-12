import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import styled from "styled-components";

export const Trigger = styled(DropdownMenu.DropdownMenuTrigger)`
  border: none;
  width: 4.5rem;
  height: 4.5rem;

  border-radius: 20px;
  background: none;
`;

export const Portal = styled(DropdownMenu.DropdownMenuPortal)`
  border: none;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4.5rem;
  height: 4.5rem;
  border: 1px solid #ffffff;
  background: none;
  border-radius: 20px;
  color: #ffffff;
  font-size: 1.25rem;

  p {
    margin: 0;
  }

  img {
    margin: 0 0 0 0.25rem;
  }
`;
