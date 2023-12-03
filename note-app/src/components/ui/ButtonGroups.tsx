import { useNavigate } from "react-router-dom";

type ButtonGroupsProps = {
  firstButton: ButtonProps;
  secButton: ButtonProps;
  thirdButton?: ButtonProps;
  handleDeleteNote: (id: string) => void;
  id: string;
};

type ButtonProps = {
  label: string;
  onClick?: () => void;
  className: string;
};

const ButtonGroups: React.FC<ButtonGroupsProps> = ({
  firstButton,
  secButton,
  thirdButton,
  handleDeleteNote,
  id,
}) => {
  const navigate = useNavigate();

  return (
    <>
      <div className=">=345px:flex-col >=445px:flex-col >=465px:flex-col flex gap-4 justify-end">
        <button onClick={firstButton.onClick} className={firstButton.className}>
          {firstButton.label}
        </button>

        {secButton.label === "Edit Tags" ? (
          <button
            onClick={() => {
              secButton.onClick?.();
            }}
            className={secButton.className}
          >
            {secButton.label}
          </button>
        ) : (
          <button
            onClick={() => {
              secButton.onClick?.();
              handleDeleteNote(id);
              navigate("/");
            }}
            className={secButton.className}
          >
            {secButton.label}
          </button>
        )}

        {thirdButton && (
          <button
            onClick={thirdButton.onClick}
            className={thirdButton.className}
          >
            {thirdButton.label}
          </button>
        )}
      </div>
    </>
  );
};

export default ButtonGroups;
