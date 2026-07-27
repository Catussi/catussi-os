import { memo } from "react";
import StyledButton from "components/system/Dialogs/StyledButton";
import useUi from "hooks/useUi";
import { useProcesses } from "contexts/process";

type ButtonsProps = {
  id: string;
  onClick?: () => void;
};

const Buttons: FC<ButtonsProps> = ({ id, onClick }) => {
  const { closeWithTransition } = useProcesses();
  const ui = useUi();
  const close = (): void => closeWithTransition(id);

  return (
    <nav className="buttons">
      <StyledButton onClick={onClick || close}>{ui.ok}</StyledButton>
      <StyledButton onClick={close}>{ui.cancel}</StyledButton>
    </nav>
  );
};

export default memo(Buttons);
