import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import SponsorSpotlight from '@components/SponsorSpotlight';
import type { OfficialWithImage, Cosponsorship } from '@type/hasura';
import CircleAvatar from '@components/CircleAvatar';
import SectionTitle from '@components/BillDetailsSection/SectionTitle';
import Container from '@components/BillDetailsSection/Container';
import ContentWrapper from '@components/BillDetailsSection/ContentWrapper';
import Wrapper from '@components/BillDetailsSection/SectionRibbon';
import Avatar from '@components/Avatar';
import { isBrowser } from '@constants';

export type SponsorSectionProps = {
  sponsor: OfficialWithImage;
  cosponsors: Cosponsorship[];
  className?: string;
};

const SponsorSection = ({
  sponsor,
  cosponsors,
  className,
}: SponsorSectionProps) => {
  const [cosponsorAvatarSize, setCosponsorAvatarSize] = useState('80px');

  useEffect(() => {
    if (isBrowser) {
      const mediaQuery420pxScreenWidth = window?.matchMedia(
        '(max-width: 420px)'
      );
      const isScreenWidthLessThan420px = mediaQuery420pxScreenWidth.matches;
      const mediaQuery1200pxScreenWidth = window?.matchMedia(
        '(max-width: 1200px)'
      );
      const isScreenWidthLessThan1200px = mediaQuery1200pxScreenWidth.matches;
      const mediaQuery1400pxScreenWidth = window?.matchMedia(
        '(max-width: 1400px)'
      );
      const isScreenWidthLessThan1400px = mediaQuery1400pxScreenWidth.matches;
      setCosponsorAvatarSize(
        isScreenWidthLessThan420px
          ? '50px'
          : isScreenWidthLessThan1200px
          ? '70px'
          : isScreenWidthLessThan1400px
          ? '70px'
          : '80px'
      );
    }
  }, [cosponsorAvatarSize]);

  return (
    <Wrapper className={className}>
      <Container>
        <SectionTitle>Sponsors</SectionTitle>
        <SponsorContentWrapper>
          <SponsorSpotlight sponsor={sponsor} />
          {cosponsors.slice(0, 11).map((cosponsor: Cosponsorship) => {
            const { elected_official } = cosponsor;
            return (
              <Tooltip key={elected_official.id}>
                <CosponsorAvatar
                  className="avatar"
                  name={elected_official.preferred_name}
                  party={elected_official.political_party}
                  state={elected_official.state}
                  imageData={elected_official.image}
                  backgroundColor="var(--color-gray700)"
                  size={cosponsorAvatarSize}
                  loading="eager"
                />
                <span className="tooltiptext">
                  {elected_official.preferred_name}
                </span>
              </Tooltip>
            );
          })}
          {/* <OverflowCosponsorAvatar party="any" size={CosponsorAvatarSize}>
              <p>{cosponsors.length - 12} </p>
            </OverflowCosponsorAvatar> */}
        </SponsorContentWrapper>
      </Container>
    </Wrapper>
  );
};

export default SponsorSection;

const SponsorContentWrapper = styled(ContentWrapper)`
  /* padding-left: 2rem; */
  /* padding-right: 1rem; */
  padding-top: 2rem;
  padding-bottom: 3rem;

  display: flex;
  flex-direction: column;
  align-self: flex-start;
  justify-content: flex-start;
  align-content: stretch;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 0.5rem;

  @media (max-width: 900px) {
    column-gap: 0;
  }

  /* @media (max-width: 900px) {
    padding: 0;
    padding-top: 1.5rem;
    padding-right: 1.5rem;

    flex-direction: column;
    justify-content: flex-start;
    align-content: stretch;
    align-items: flex-start;
    gap: 1rem;
  } */
`;

const CosponsorAvatar = styled(CircleAvatar)`
  justify-self: center;
  transition: all 0.3s ease-in-out;
  /* margin-left: -1em; */

  /* margin-bottom: 10px; */
  padding: 0;

  @media (max-width: 400px) {
    margin: 0;
  }
`;

const OverflowCosponsorAvatar = styled(Avatar)`
  justify-self: center;
  transition: all 0.3s ease-in-out;
  /* margin-left: -1em; */
  margin-bottom: 10px;
  margin-top: 10px;
  padding: 0;

  background-color: var(--color-gray300);
  border-color: var(--color-gray300);

  p {
    margin: 0;
    padding: 0;
    white-space: wrap;
  }
`;

const Tooltip = styled.div`
  position: relative;
  display: inline-block;
  transition: all 1s;
  margin: 0;
  padding: 0;
  min-width: fit-content;
  max-width: fit-content;
  min-height: fit-content;
  max-height: fit-content;

  .tooltiptext {
    visibility: hidden;
    width: 120px;
    background-color: var(--color-bill);

    text-align: center;
    border-radius: 6px;
    padding: 5px 0;
    position: absolute;
    /* z-index: 500; */
    top: 125%;
    left: 50%;
    margin-left: -60px;
    opacity: 0;
    transition: opacity 0.3s;
    transition: top 0.3s;
    z-index: 800;
    font-style: italic;

    @media (max-width: 400px) {
      width: 100px;
    }
  }

  .tooltiptext::after {
    content: '';
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: rotate(180deg);
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: var(--color-bill) transparent transparent transparent;
  }

  :hover {
    .avatar {
      z-index: 1000;
      transform: scale(1.5);
    }

    .tooltiptext {
      visibility: visible;
      opacity: 1;
      top: 150%;
    }
  }
`;
