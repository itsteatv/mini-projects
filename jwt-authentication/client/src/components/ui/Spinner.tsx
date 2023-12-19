type SpinnerProps = {
  spinnerType: string;
  size: string;
};

function Spinner({ spinnerType, size }: SpinnerProps) {
  const isCentered = spinnerType === "infinity" && size === "lg";
  const spinnerClass = `loading loading-${spinnerType} loading-${size}`;

  const infinityLoadingStyle = {
    display: isCentered ? "flex" : "initial",
    alignItems: isCentered ? "center" : "initial",
    justifyContent: isCentered ? "center" : "initial",
    height: isCentered ? "100vh" : "initial",
  };

  return (
    <div style={infinityLoadingStyle}>
      <span className={spinnerClass}></span>
    </div>
  );
}

export default Spinner;
