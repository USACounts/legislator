import React from 'react';
import type { Bill as IBill, Official as IOfficial } from '@type/hasura';
import { navigate } from 'gatsby';
import Button from '@components/Button';

import styled from 'styled-components';
import Image from '@components/Image';
import Avatar from '@components/Avatar';

export type BillCardProps = Pick<
  IBill,
  | 'id'
  | 'type'
  | 'number'
  | 'title'
  | 'subject'
  | 'updated_at'
  | 'congress'
  | 'summary'
> & {
  onClick?: () => void;
  sponsorImage: any;
  className?: string;
  sponsor: IOfficial;
};

const BillCard = ({
  onClick,
  type,
  number,
  title,
  congress,
  subject,
  sponsor,
  sponsorImage,
  updated_at,
  className,
  summary,
}: BillCardProps) => {
  return (
    <Wrapper className={className} onClick={onClick}>
      <Avatar className="sponsor" party={sponsor.political_party}>
        <Image imageData={sponsorImage} alt={sponsor.preferred_name} />
      </Avatar>
      <p className="sponsorName">{sponsor.preferred_name}</p>
      <p className="bill-number">{`${type.toUpperCase()} ${number}`}</p>

      <p className="bill-title">{title}</p>

      <p className="bill-timestamp">{new Date(updated_at).toDateString()}</p>

      {summary === 'No summary available.' ? null : (
        <Button
          className="viewBillButton"
          onClick={async () => navigate(`${congress}/${type}${number}`)}
        >
          Bill Details
        </Button>
      )}
    </Wrapper>
  );
};

export default BillCard;

const Wrapper = styled.div`
  max-width: none;
  width: 100%;
  margin: 0;
  padding-top: 0.75rem;
  padding-left: 1rem;
  padding-right: 1rem;

  display: grid;
  grid-template-columns: 62px repeat(9, 1fr);
  grid-template-rows: 30px 30px 1fr 50px;
  grid-template-areas:
    'sponsor sponsorName sponsorName sponsorName sponsorName sponsorName timestamp timestamp   timestamp   timestamp'
    'sponsor ........... ........... id          id          id          id          ......        ......        ......'
    'sponsor title       title       title       title       title       title       title         title         title'
    'sponsor ......      ......      ......      ......      viewBillButton      viewBillButton      viewBillButton        viewBillButton viewBillButton';

  overflow: hidden;

  border: 0;
  border-radius: 0;
  border-bottom: solid thin var(--color-gray300);

  text-align: left;
  align-items: start;

  p {
    font-family: century_supra_t3;
    margin: 0;
  }

  :hover {
    background-color: var(--color-backgroundAlt);
  }

  .sponsor {
    grid-area: sponsor;
    align-self: start;
    margin-right: 0.75rem;
  }

  .sponsorName {
    grid-area: sponsorName;
    font-weight: 300;
    font-size: 0.9rem;
  }

  .bill-number {
    grid-area: id;
    align-self: start;
    justify-self: center;
    font-weight: 700;
  }

  .bill-title {
    grid-area: title;
    max-width: min(70ch);
    align-self: start;
    font-size: 1.1rem;
    letter-spacing: -0.063px;

    @media (max-width: 450px) {
      font-size: 1rem;
    }
  }

  .bill-timestamp {
    grid-area: timestamp;
    text-align: right;
    align-self: start;
    font-size: 0.8rem;
    color: hsl(0deg, 0%, 70%);
    font-weight: 400;
  }

  .viewBillButton {
    grid-area: viewBillButton;
    justify-self: end;
    align-self: center;
  }
`;
