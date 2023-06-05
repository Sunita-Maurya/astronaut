import s from "./primaryButton.module.css";

const PrimaryButton = ({
  children,
  mixcolorb = "#000000",
  mixcolora = "#000000",
}) => {
  return (
    <div
      className={s.button}
      style={{
        "--psudobga": mixcolora,
        "--psudobgb": mixcolorb,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {children}
    </div>
  );
};

export default PrimaryButton;
