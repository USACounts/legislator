import React from 'react';
import styled from 'styled-components';

export type BillListItemProps = {
  statement: string;
  index: number;
};

const BillListItem = ({ statement, index }: BillListItemProps) => {
  if (statement.startsWith(' ')) {
    statement = statement.replace(/^\s*/, '');
  }

  if (statement.startsWith('and')) {
    statement = statement.replace(/^and\s*/, '');
  }

  if (!statement.endsWith('.')) {
    statement += '.';
  }

  statement = statement[0].toUpperCase() + statement.slice(1);

  return <ListItem key={index}>{statement}</ListItem>;
};

export default BillListItem;

const ListItem = styled.li`
  line-height: 32p;
  letter-spacing: -0.063px;
  font-size: 21px;
  font-family: charter;
  font-weight: 400;
  padding-top: 22px;
  margin: 0;
`;
