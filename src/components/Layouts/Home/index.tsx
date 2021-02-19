import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Header, { HeaderSpacer } from '@components/Header';
import styled from 'styled-components';

export type HomeLayoutProps = {
  children: React.ReactNode;
};

const HomeLayout = ({ children }: HomeLayoutProps) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <Wrapper>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <HeaderSpacer />
      {children}
      <HeaderSpacer />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr min(70ch, calc(100% - 64px)) 1fr;
  grid-column-gap: 32px;
  grid-row-gap: 32px;

  > * {
    grid-column: 2;
  }

  .left-side {
    grid-column: 1 / 2;
    /* background: var(--color-background); */
    color: var(--color-text);

    @media (max-width: 900px) {
      display: none;
    }
  }

  .right-side {
    grid-column: 3 / 4;
    /* background: var(--color-background); */
    color: var(--color-text);

    @media (max-width: 900px) {
      display: none;
    }
  }

  .full-bleed {
    grid-column: 1 / -1;
  }
`;

export default HomeLayout;
