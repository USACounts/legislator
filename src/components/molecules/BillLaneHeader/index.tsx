import React from 'react';
import styled from 'styled-components';
import ChamberDropdown from '@components/molecules/ChamberDropdown';
// Import BillFeedOrderDropdown from '@components/BillFeedOrderDropdown';
import OrderByToggle from '@components/molecules/OrderByToggle';
import SearchInput from '@components/atoms/SearchInput';

export type BillLaneHeaderProps = {
  /**
   *  When a user specifies a Chamber
   */
  handleChamberSelection: (selection: string) => void;
  /**
   * When a user specifies a value to search by
   */
  handleSearchInput: React.ChangeEventHandler<HTMLInputElement>;
  /**
   * When a user specifies the sort order. Default is isAscending === false
   */
  handleOrderAscToggle: (isAscending: boolean) => void;
  billCount: number;
  searchBy?: string;
  className?: string;
};

const BillLaneHeader = ({
  handleChamberSelection,
  handleSearchInput,
  handleOrderAscToggle,
  billCount,
  searchBy,
  className = '',
}: BillLaneHeaderProps) => {
  return (
    <Wrapper className={className}>
      <ChamberDropdown handleSelection={handleChamberSelection} />
      <SearchInput value={searchBy} onChange={handleSearchInput} />
      <BillCount>{billCount} Bills</BillCount>
      <OrderByToggle handleToggle={handleOrderAscToggle} />
    </Wrapper>
  );
};

export default BillLaneHeader;

const Wrapper = styled.div`
  /* Prevent avatar images (z-index:2) from overlapping */
  z-index: 3;

  position: sticky;
  top: -0.5px;

  width: 100%;
  height: 40.5px;

  background-color: var(--color-background);
  /* background-color: var(--color-ribbon); */
  /* background-color: var(--color-paper); */

  overflow: hidden;

  padding-left: 1em;
  padding-right: 1em;

  border-bottom: solid thin var(--color-text);

  font-family: advocate_c43_mid;
  font-size: 1.4em;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BillCount = styled.p`
  padding: 0;
  margin: 0;
  white-space: nowrap;

  color: var(--color-gray500);
  font-family: advocate_c43_mid;
`;
