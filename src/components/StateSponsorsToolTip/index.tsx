import React from 'react';
import styled from 'styled-components';
import type {
  Cosponsorship as ICosponsorship,
  Official as IOfficial,
} from '@type/hasura';

export type LabelValuePair = {
  state: string;
  value: string;
};

export type StateSponsorsToolTipProps = {
  state: string;
  congressImages: any[];
  sponsor?: IOfficial;
  cosponsors?: ICosponsorship[];
  className?: string;
};

const StateSponsorsToolTip = ({
  state,
  // congressImages,
  sponsor,
  cosponsors = [],
  className,
}: StateSponsorsToolTipProps) => {
  const hasBillCosponsorships = cosponsors.length > 0;
  const isSponsorState = !!sponsor;
  const hasSponsors = hasBillCosponsorships || isSponsorState;
  return (
    <Wrapper className={className} hide={!hasSponsors}>
      {sponsor ? <BillSponsor sponsor={sponsor} /> : null}
      {hasBillCosponsorships ? <BillCosponsor cosponsors={cosponsors} /> : null}
    </Wrapper>
  );
};

export default StateSponsorsToolTip;

const Wrapper = styled.div<{ hide?: boolean }>`
  position: absolute;
  text-align: left;
  padding: 0.5rem;

  opacity: ${(props) => (props.hide ? 0 : 1)};
  /* transition: opacity 0.3s; */

  border: solid thin var(--color-text);
  border-radius: 5px;
  background-color: var(--color-backgroundLite);
  text-shadow: 1px 1px 0px var(--color-gray300);
`;

export type BillSponsorProps = {
  sponsor: IOfficial;
};

export const BillSponsor = ({ sponsor }: BillSponsorProps) => {
  return (
    <BillSponsorWrapper>
      <ToolTipHeader>Sponsor</ToolTipHeader>
      <ToolTipUnorderedList>
        <ToolTipListItem>{sponsor.preferred_name}</ToolTipListItem>
      </ToolTipUnorderedList>
    </BillSponsorWrapper>
  );
};

export const BillCosponsor = ({
  cosponsors,
}: {
  cosponsors: ICosponsorship[];
}) => {
  return (
    <BillSponsorWrapper>
      <ToolTipHeader>Cosponsors</ToolTipHeader>
      <ToolTipUnorderedList columns={Math.floor(cosponsors.length / 10)}>
        {cosponsors.map((cosponsor, index) => (
          <ToolTipListItem key={index}>
            {cosponsor.elected_official.preferred_name}
          </ToolTipListItem>
        ))}
      </ToolTipUnorderedList>
    </BillSponsorWrapper>
  );
};

const BillSponsorWrapper = styled.div`
  max-height: 400px;
`;

const ToolTipHeader = styled.p`
  margin: 0;
  padding: 0;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  font-weight: 600;
`;

const ToolTipUnorderedList = styled.ul<{ columns?: number }>`
  margin: 0;
  padding: 0;
  padding-left: 0;
  height: 100%;

  column-count: ${(props) => props.columns || 1};
  column-gap: 1.5em;

  list-style: none;
`;

const ToolTipListItem = styled.li<{ icon?: string }>`
  position: relative;
  padding: 0;
  padding-left: 1.5em;
  margin: 0;
  font-size: 0.8rem;
  white-space: nowrap;

  :before {
    content: '✓';
    position: absolute;
    left: 0;
  }
`;
