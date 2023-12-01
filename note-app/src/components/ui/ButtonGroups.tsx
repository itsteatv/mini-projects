type ButtonGroupsProps = {
  firstButton: ButtonProps;
  secButton: ButtonProps;
  thirdButton?: ButtonProps;
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
}) => {
  return (
    <>
      <div className=">=345px:flex-col >=445px:flex-col >=465px:flex-col flex gap-4 justify-end">
        <button onClick={firstButton.onClick} className={firstButton.className}>
          {firstButton.label}
        </button>

        <button onClick={secButton.onClick} className={secButton.className}>
          {secButton.label}
        </button>

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
