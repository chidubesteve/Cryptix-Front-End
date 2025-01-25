import React, { useRef } from 'react';
import ReactSlider from 'react-slider';
import { useTheme } from 'next-themes';

import style from './Dropdown.module.css';
import { Button } from '../ComponentIndex';

const Dropdown = ({
  inputType,
  children = [], // Default to an empty array if no children are passed
  openDropDown,
  onSelectSortOrder,
  handleChoice,
  handleClearSelection,
  selectedItems,
  setPriceRangeValue,
  priceRangeValue,
}) => {
  const refs = useRef([]);
  const { resolvedTheme } = useTheme();

  const handleClear = () => {
    if (inputType === 'range') {
      setPriceRangeValue([0.01, 10]);
    } else {
      refs.current.forEach((ref) => {
        if (ref) {
          ref.checked = false;
        }
      });
      selectedItems = [];
      handleClearSelection();
    }
    openDropDown(false);
  };

  const handleSelect = (value, index) => {
    if (inputType === 'radio' && onSelectSortOrder) {
      onSelectSortOrder(value);
      handleChoice(true);
    } else if (inputType === 'checkbox') {
      const isChecked = refs.current[index]?.checked;
      handleChoice(isChecked, value);
      if (isChecked) {
        selectedItems.push(value);
      } else {
        selectedItems = selectedItems.filter((item) => item !== value);
      }
    }
  };

  const handleApply = () => {
    openDropDown(false);
  };

  return (
    <form action="">
      <div className={style.dropdown_box}>
        {inputType === "range" ? (
          <>
            <h3>Price range</h3>
            <div className={style.dropdown_box_range_slider_box}>
              <ReactSlider
                ariaLabel={["Min Price", "Max Price"]}
                ariaValuetext={(state) =>
                  `Min price value: ${state.value[0]}, Max price value: ${state.value[1]}`
                }
                defaultValue={[0, 100]}
                value={priceRangeValue}
                min={0.01}
                max={10}
                step={0.03}
                className={style.dropdown_box_range_slider}
                thumbClassName={style.range_thumbs}
                renderTrack={(props, state) => (
                  <div
                    {...props}
                    className={`${style.track} ${
                      state.index === 2
                        ? style.track_sides
                        : state.index === 1
                        ? style.track_middle
                        : style.track_sides
                    }`}
                  />
                )}
                trackClassName={`${style.track}`}
                onBeforeChange={(value, index) =>
                  console.log(
                    `onBeforeChange: ${JSON.stringify({ value, index })}`
                  )
                }
                onChange={(value, index) => {
                  setPriceRangeValue(value);
                  console.log(`onChange: ${JSON.stringify({ value, index })}`);
                }}
              />
            </div>
            <div className={style.dropdown_box_range_slider_box_prices_box}>
              <div className={style.dropdown_box_range_slider_box_minPrice}>
                <label htmlFor="minPrice">Min Price</label>
                <div
                  className={
                    style.dropdown_box_range_slider_box_minPrice_input_div
                  }
                >
                  <span>ETH</span>
                  <input
                    type="text"
                    value={`${priceRangeValue[0]}`}
                    name="minPrice"
                    aria-label="Min Price"
                    disabled
                  />
                </div>
              </div>
              <div className={style.dropdown_box_range_slider_box_minPrice}>
                <label htmlFor="maxPrice">Max Price</label>
                <div
                  className={
                    style.dropdown_box_range_slider_box_minPrice_input_div
                  }
                >
                  <span>ETH</span>
                  <input
                    type="text"
                    value={`${priceRangeValue[1]}`}
                    name="maxPrice"
                    aria-label="Max Price"
                    disabled
                  />
                </div>
              </div>
            </div>
          </>
        ) : (
          children.map((name, i) => (
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
                defaultChecked={selectedItems?.includes(name)}
              />
              <label htmlFor={`${name}-${i}`}>
                <span aria-label={name}>{name}</span>
              </label>
            </div>
          ))
        )}
        <div className={style.dropdown_box_buttons_box}>
          <Button
            btnName="Clear"
            handleClick={handleClear}
            className={`${style.clear_btn} ${
              resolvedTheme === "dark" ? style.dark_clear_btn : ""
            }`}
          />
          <Button
            btnName="Apply"
            type="submit"
            handleClick={handleApply}
            className={`${style.apply_btn} ${
              resolvedTheme === "dark" ? style.dark_apply_btn : ""
            }`}
          />
        </div>
      </div>
    </form>
  );
};

export default Dropdown;
