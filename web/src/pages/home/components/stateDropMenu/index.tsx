import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import chevronDown from "../../../../assets/chevron-down.svg";
import { Button, Portal, Trigger } from "./styles";

export default function StateDropMenu() {
  return (
    <>
      <DropdownMenu.Root>
        <Trigger>
          <Button>
            PE <img src={chevronDown} alt="" />
          </Button>
        </Trigger>

        <Portal>
          <DropdownMenu.Content>
            <DropdownMenu.Label>Estados</DropdownMenu.Label>
            <DropdownMenu.RadioGroup>
              <DropdownMenu.RadioItem>
                <DropdownMenu.ItemIndicator />
                SP
              </DropdownMenu.RadioItem>
            </DropdownMenu.RadioGroup>

            <DropdownMenu.Arrow />
          </DropdownMenu.Content>
        </Portal>
      </DropdownMenu.Root>
    </>
  );
}
