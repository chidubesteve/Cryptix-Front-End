import React, { useRef, useState } from 'react';

//internal imports
import style from './Dropdown.module.css';
import { Button } from '../ComponentIndex';

const Dropdown = ({
  inputType,
  className,
  children,
  openDropDown,
  onSelectSortOrder,
  handleChoice,
  handleClearSelection,
  selectedItems,
}) => {
  const refs = useRef([]);
  // const [currentSelection, setCurrentSelection] = useState(selectedOptions)

  const handleClear = () => {
    refs.current.forEach((ref) => {
      if (ref) {
        ref.checked = false;
      }
    });
    selectedItems = [];
    handleClearSelection();
    openDropDown(false);
  };

  const handleSelect = (value, index) => {
    if (inputType === 'radio' && onSelectSortOrder) {
      onSelectSortOrder(value);
      handleChoice(true);
    } else if (inputType === 'checkbox') {
      const isChecked = refs.current[index].checked;
      handleChoice(isChecked, value);
      selectedItems.push(value);
    }
  };

  const handleApply = () => {
    openDropDown(false);
  };

  const classname = `${style.dropdown} ${className ? className : ''}`;
  return (
    <div className={style.dropdown_box}>
      {children.map((name, i) => (
        <div className={style.dropdown_box_input_box} key={i}>
          <input
            type={inputType}
            aria-label={name}
            name="inputGroup"
            id={`${name}-${i}`}
            ref={(el) => (refs.current[i] = el)}
            onClick={() => {
              handleSelect(name, i);
            }}
            checked={selectedItems?.includes(name)}
          />
          <label htmlFor={`${name}-${i}`}>
            <span aria-label={name}>{name}</span>
          </label>
        </div>
      ))}

      <div className={style.dropdown_box_buttons_box}>
        <Button
          btnName="Clear"
          handleClick={handleClear}
          className={style.clear_btn}
        />
        <Button
          btnName="Apply"
          handleClick={handleApply}
          className={style.apply_btn}
        />
      </div>
    </div>
  );
};

export default Dropdown;
