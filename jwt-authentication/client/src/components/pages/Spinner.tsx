type SpinnerProps = {
  spinnerType: string;
  size: string;
};

function Spinner({ spinnerType, size }: SpinnerProps) {
  
  const spinnerClass = `loading loading-${spinnerType} loading-${size}`;

  return <span className={spinnerClass}></span>;
}

export default Spinner;
