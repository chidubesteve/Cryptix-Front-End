import React, { useState, useRef } from 'react';
import { TbFilterSearch } from 'react-icons/tb';
import { FaAngleDown, FaAngleUp, FaRegUser } from 'react-icons/fa6';
import { MdVerified, MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { IoImagesOutline, IoCloseCircle } from 'react-icons/io5';
import { BsWallet2 } from 'react-icons/bs';
import { LuFiles } from 'react-icons/lu';
import { BiSort } from 'react-icons/bi';

//internal imports
import style from './Filter.module.css';
import { Title } from '../ComponentIndex';
import { Dropdown } from '../ComponentIndex';
import { handleSelection } from '../../utils/handleDropDownCheckBoxesSelection';
const Filter = () => {
  const [filter, setFilter] = useState(true);
  const [openPriceFilter, setOpenPriceFilter] = useState(false);
  const [priceRangeValue, setPriceRangeValue] = useState([0.01, 10]);
  const [salesTypesDropDown, setSalesTypesDropDown] = useState(false);
  const [openSortOrderDropDown, setOpenSetOrderDropDown] = useState(false);
  const [openFileTypesDropDown, setOpenFileTypesDropDown] = useState(false);
  const [selectedSortOrder, setSelectedSortOrder] = useState('Sort order');
  const [activeButton, setActiveButton] = useState('');
  const [sortOrderChoices, setSortOrderChoices] = useState(false);
  const [fileTypesSelected, setFileTypesSelected] = useState([]);
  const [salesTypesSelected, setSalesTypesSelected] = useState([]);
  const [isVerifiedFilterRemoved, setIsVerifiedFilterRemoved] = useState(false);

  //functions
  const openFilter = () => {
    if (!filter) {
      setFilter(true);
    } else {
      setFilter(false);
    }
  };
  const handleSalesTypesSelection = (isChecked, value) => {
    handleSelection(isChecked, value, setSalesTypesSelected);
  };
  const handleFilterTypesSelection = (isChecked, value) => {
    handleSelection(isChecked, value, setFileTypesSelected);
  };

  const handleSortOrderChange = (value) => {
    setSelectedSortOrder(value || 'Sort order');
    setSortOrderChoices(true);
  };

  const handleClearSortOrderSelection = () => {
    setSelectedSortOrder('Sort order');
    setSortOrderChoices(false);
  };

  const handleClearFileTypesSelection = () => {
    setFileTypesSelected([]);
  };

  const handleClearSalesTypesSelection = () => {
    setSalesTypesSelected([]);
  };
  const openNFTPriceRangeFilter = () => {
    if (!openPriceFilter) {
      setOpenPriceFilter(true);
      setOpenFileTypesDropDown(false);
      setOpenSetOrderDropDown(false);
      setSalesTypesDropDown(false);
    } else {
      setOpenPriceFilter(false);
    }
  };
  const openSalesTypes = () => {
    if (!salesTypesDropDown) {
      setSalesTypesDropDown(true);
      setOpenPriceFilter(false);
      setOpenFileTypesDropDown(false);
      setOpenSetOrderDropDown(false);
    } else {
      setSalesTypesDropDown(false);
    }
  };
  const openFileTypes = () => {
    if (!openFileTypesDropDown) {
      setOpenFileTypesDropDown(true);
      setOpenSetOrderDropDown(false);
      setOpenPriceFilter(false);
      setSalesTypesDropDown(false);
    } else {
      setOpenFileTypesDropDown(false);
    }
  };

  const openSortOrder = () => {
    if (!openSortOrderDropDown) {
      setOpenSetOrderDropDown(true);
      setOpenPriceFilter(false);
      setOpenFileTypesDropDown(false);
      setSalesTypesDropDown(false);
    } else {
      setOpenSetOrderDropDown(false);
    }
  };

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  //arrays
  const fileTypeArrayNames = ['Image', 'Video', 'Music'];

  const salesTypeArrayNames = ['Buy Now', 'On Auction', 'New', 'Has Offers'];

  const sortOrderArrayNames = [
    'Price: Low - High',
    'Price: High - Low',
    'Newest',
    'Oldest',
    'Most favourited',
  ];
  return (
    <div className={style.filter}>
      <div className={style.filter_box_title}>
        {' '}
        <Title
          title="Featured NFTs"
          paragraph="Discover the most outstanding NFts in all topics of life."
        />{' '}
      </div>
      <div className={style.filter_box}>
        <div className={style.filter_box_left}>
          {['All NFTs', 'Arts', 'Music', 'Sports', 'Photography'].map(
            (name) => (
              <button
                key={name}
                className={activeButton === name ? style.activeButton : ''}
                onClick={() => {
                  handleButtonClick(name);
                }}
              >
                {name}{' '}
              </button>
            )
          )}
        </div>
        <div className={style.filter_box_right}>
          <button className={style.filter_box_right_box} onClick={openFilter}>
            <TbFilterSearch className={style.filter_box_right_box_icon} />
            <span>Filter</span> &nbsp;
            {filter ? <FaAngleDown /> : <FaAngleUp />}
          </button>
        </div>
      </div>
      {filter && (
        <div className={style.filter_box_items}>
          <div className={style.filter_box_items_box}>
            <div
              className={`${style.filter_box_items_box_item} ${style.filter_box_item_box_applied_filter}`}
              tabIndex={0}
              onClick={openNFTPriceRangeFilter}
            >
              <BsWallet2 />{' '}
              <span>
                {priceRangeValue[0]} ETH - {priceRangeValue[1]} ETH
              </span>
              <IoCloseCircle />
            </div>
            {openPriceFilter && (
              <Dropdown
                inputType={'range'}
                openDropDown={setOpenPriceFilter}
                setPriceRangeValue={setPriceRangeValue}
                priceRangeValue={priceRangeValue}
              />
            )}
          </div>

          <div className={style.filter_box_items_box}>
            <div
              className={`${
                style.filter_box_items_box_item_transaction
              }              ${
                salesTypesSelected.length > 0 &&
                style.filter_box_item_box_applied_filter
              }`}
              onClick={openSalesTypes}
              tabIndex={0}
            >
              <IoImagesOutline /> <span>Sales types</span>{' '}
              {salesTypesDropDown ? (
                <IoCloseCircle
                  onClick={() => handleClearSalesTypesSelection()}
                />
              ) : (
                <MdOutlineKeyboardArrowDown />
              )}
            </div>
            {salesTypesDropDown && (
              <Dropdown
                inputType={'checkbox'}
                children={salesTypeArrayNames}
                openDropDown={setSalesTypesDropDown}
                handleChoice={handleSalesTypesSelection}
                handleClearSelection={handleClearSalesTypesSelection}
                selectedItems={salesTypesSelected}
              />
            )}
          </div>

          <div className={style.filter_box_items_box}>
            <div
              className={`${
                style.filter_box_items_box_item_transaction
              }              ${
                fileTypesSelected.length > 0
                  ? style.filter_box_item_box_applied_filter
                  : ''
              }`}
              onClick={openFileTypes}
              tabIndex={0}
            >
              <LuFiles /> <span>File types</span>{' '}
              {openFileTypesDropDown ? (
                <IoCloseCircle
                  onClick={() => handleClearFileTypesSelection()}
                />
              ) : (
                <MdOutlineKeyboardArrowDown />
              )}
            </div>
            {openFileTypesDropDown && (
              <Dropdown
                inputType={'checkbox'}
                children={fileTypeArrayNames}
                openDropDown={setOpenFileTypesDropDown}
                handleChoice={handleFilterTypesSelection}
                handleClearSelection={handleClearFileTypesSelection}
                selectedItems={fileTypesSelected}
              />
            )}
          </div>

          <div className={style.filter_box_items_box}>
            <div
              className={`${style.filter_box_items_box_item_transaction}  ${
                sortOrderChoices ? style.filter_box_item_box_applied_filter : ''
              }`}
              onClick={openSortOrder}
              tabIndex={0}
            >
              <BiSort /> <span>{selectedSortOrder}</span>{' '}
              {openSortOrderDropDown ? (
                <IoCloseCircle
                  onClick={() => handleClearSortOrderSelection()}
                />
              ) : (
                <MdOutlineKeyboardArrowDown />
              )}
            </div>
            {openSortOrderDropDown && (
              <Dropdown
                inputType="radio"
                children={sortOrderArrayNames}
                openDropDown={setOpenSetOrderDropDown}
                onSelectSortOrder={handleSortOrderChange}
                handleChoice={setSortOrderChoices}
                selectedItems={[selectedSortOrder]}
                handleClearSelection={handleClearSortOrderSelection}
              />
            )}
          </div>

          <div className={style.filter_box_items_box}>
            <div
              className={`${style.filter_box_items_box_item} ${
                !isVerifiedFilterRemoved &&
                style.filter_box_item_box_applied_filter
              }`}
              tabIndex={0}
              onClick={() =>
                setIsVerifiedFilterRemoved(!isVerifiedFilterRemoved)
              }
              title={`Verified creators filter: ${
                isVerifiedFilterRemoved ? 'off' : 'on'
              }`}
            >
              <FaRegUser /> <span>Verified creators</span>
              <MdVerified />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Filter;
