import { CheckboxStyle } from "../style/PaymentStyle";

const Checkbox = ({ checked, children, onCheckedChange }) => {
  const checkBoxChange = () => {
    // onCheckedChange("checked");
    onCheckedChange("");
  };
  return (
    <CheckboxStyle>
      <label>
        <input type="checkbox" checked={checked} onChange={checkBoxChange} />
        {children}
      </label>
    </CheckboxStyle>
  );
};
export default Checkbox;
