import React from 'react';
import Layout from '@components/Layouts/BillView';
import type { Bill as BillType, OfficialWithImage } from '@type/hasura';
import SEO from '@components/Seo';
import Bill from '@components/Bill';
import styled from 'styled-components';
import BillDetails from '@components/BillDetails';

export type BillTemplateProps = {
  pageContext: {
    slug: string;
    bill: BillType;
  };
};

const BillTemplate = ({ pageContext: { slug, bill } }: BillTemplateProps) => {
  let allBillSubjects = [bill.subject];

  if (bill.subjects) {
    allBillSubjects = [...allBillSubjects, ...bill.subjects];
  }

  // Console.log(bill.actions);
  // console.log(bill.roll_calls);

  return (
    <>
      <SEO
        billSocialCard
        pathname={slug}
        title={`${bill.type.toUpperCase()}${bill.number}`}
        description={bill.title}
        keywords={allBillSubjects}
      />
      <Layout>
        <BillDetails
          sponsor={bill.sponsor}
          cosponsors={bill.cosponsorships}
          rollCalls={bill.roll_calls}
        />
        <BillWrapper>
          <Bill
            className="bill"
            type={bill.type}
            number={bill.number}
            status={bill.status}
            subject={bill.subject}
            title={bill.title}
            bill_text={bill.bill_text}
            summary={bill.summary}
          />
        </BillWrapper>
      </Layout>
    </>
  );
};

export default BillTemplate;

const BillWrapper = styled.div`
  position: absolute;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-areas: 'content bill';
  width: 100%;

  pointer-events: none;

  .bill {
    z-index: 1000;
    grid-area: bill;
    margin-top: 2rem;
    margin-bottom: 50vh;
    pointer-events: auto;

    @media (max-width: 450px) {
      margin-top: 0;
    }
  }

  @media (max-width: 900px) {
    position: relative;
    margin-top: 0;
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;
