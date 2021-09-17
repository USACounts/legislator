import React, { useState } from 'react';
import styled from 'styled-components';
import MinimumLayout from '@components/templates/layouts/Minimum';
import type { OfficialWithImage } from '@type/hasura';
import Seo from '@components/App/Seo';
import CircleAvatar from '@components/molecules/CircleAvatar';
import CountBox from '@components/atoms/CountBox';
import { graphql } from 'gatsby';
import OptionDetails, {
  OptionDetailsProps,
} from '@components/molecules/OptionDetails';

export type PageQueryData = {
  hasura: {
    elected_officials_by_pk: {
      bills_aggregate: {
        aggregate: {
          count: number;
        };
        nodes: Array<{
          id: string;
          type: string;
          number: number;
          congress: number;
          introduced_at: string;
          short_title: string;
          title: string;
        }>;
      };
      amendments_aggregate: {
        aggregate: {
          count: number;
        };
        nodes: Array<{
          id: string;
          type: string;
          number: number;
          congress: number;
          purpose: string;
          description: string;
          introduced_at: string;
          bill: {
            id: string;
            number: number;
            congress: number;
            type: string;
            title: string;
          };
        }>;
      };
      cosponsorships_aggregate: {
        aggregate: {
          count: number;
        };
        nodes: Array<{
          original_cosponsor: boolean;
          bill: {
            id: string;
            type: string;
            number: number;
            congress: number;
            short_title: string;
            title: string;
          };
        }>;
      };
      committee_memberships_aggregate: {
        aggregate: {
          count: number;
        };
        nodes: Array<{
          id: string;
          rank: string;
          party: string;
          title: string;
          committee: {
            id: string;
            name: string;
          };
        }>;
      };
      subcommittee_memberships_aggregate: {
        aggregate: {
          count: number;
        };
        nodes: Array<{
          id: string;
          rank: string;
          party: string;
          title: string;
          subcommittee: {
            id: string;
            name: string;
          };
        }>;
      };
      votes_aggregate: {
        aggregate: {
          count: number;
        };
        nodes: Array<{
          id: string;
          decision: string;
          date: string;
          roll_call: {
            id: string;
            question: string;
          };
        }>;
      };
    };
  };
};

export const query = graphql`
  query elected_officials_aggregate_counts($id: String!) {
    hasura {
      elected_officials_by_pk(id: $id) {
        bills_aggregate {
          aggregate {
            count
          }
          nodes {
            id
            type
            number
            congress
            introduced_at
            short_title
            title
          }
        }
        amendments_aggregate {
          aggregate {
            count
          }
          nodes {
            id
            type
            number
            congress
            purpose
            description
            introduced_at
            bill {
              id
              number
              congress
              type
              title
            }
          }
        }
        cosponsorships_aggregate(where: { withdrawn_at: { _is_null: true } }) {
          aggregate {
            count
          }
          nodes {
            original_cosponsor
            bill {
              id
              type
              number
              congress
              short_title
              title
            }
          }
        }
        committee_memberships_aggregate {
          aggregate {
            count
          }
          nodes {
            id
            rank
            party
            title
            committee {
              name
              id
            }
          }
        }
        subcommittee_memberships_aggregate {
          aggregate {
            count
          }
          nodes {
            id
            rank
            party
            title
            subcommittee {
              name
              id
            }
          }
        }
        votes_aggregate {
          aggregate {
            count
          }
          nodes {
            id
            decision
            date
            roll_call {
              id
              question
            }
          }
        }
      }
    }
  }
`;

export type ElectedOfficialTemplateProps = {
  pageContext: {
    slug: string;
    electedOfficial: OfficialWithImage;
  };
  data: PageQueryData;
};

const ElectedOfficialTemplate = ({
  pageContext: { slug, electedOfficial },
  data: {
    hasura: {
      elected_officials_by_pk: {
        amendments_aggregate,
        bills_aggregate,
        committee_memberships_aggregate,
        cosponsorships_aggregate,
        subcommittee_memberships_aggregate,
        votes_aggregate,
      },
    },
  },
}: ElectedOfficialTemplateProps) => {
  const [clickedOption, setClickedOption] = useState<OptionDetailsProps | null>(
    null
  );
  const [hoveredOption, setHoveredOption] = useState<OptionDetailsProps | null>(
    null
  );

  const activeOption = clickedOption ? clickedOption : hoveredOption;

  const options: OptionDetailsProps[] = [
    {
      title: 'Bills Introduced',
      count: bills_aggregate.aggregate.count,
      type: 'bills',
      details: bills_aggregate.nodes.map((bill) => ({
        text: `Introduced ${bill.type.toUpperCase()} ${bill.number}`,
        subtext: bill.short_title || bill.title,
        slug: `/${bill.congress}/${bill.type}${bill.number}`,
      })),
    },
    {
      title: 'Bills Cosponsored',
      count: cosponsorships_aggregate.aggregate.count,
      type: 'cosponsorships',
      details: cosponsorships_aggregate.nodes.map(({ bill }) => ({
        text: `Cosponsor of ${bill.type.toUpperCase()} ${bill.number}`,
        subtext: bill.short_title || bill.title,
        slug: `/${bill.congress}/${bill.type}${bill.number}`,
      })),
    },
    {
      title: 'Amendments Introduced',
      count: amendments_aggregate.aggregate.count,
      type: 'amendments',
      details: amendments_aggregate.nodes.map((amendment) => ({
        text: `Amended ${amendment.bill.type.toUpperCase()} ${
          amendment.bill.number
        } with ${amendment.type.toUpperCase()} ${amendment.number}`,
        subtext:
          amendment.purpose ||
          amendment.description ||
          `Bill: ${amendment.bill.title}`,
        slug: `/${amendment.bill.congress}/${amendment.bill.type}${amendment.bill.number}`,
      })),
    },
    {
      title: 'Roll Call Votes',
      count: votes_aggregate.aggregate.count,
      type: 'rollCalls',
      details: votes_aggregate.nodes.map((vote) => ({
        text: vote.roll_call.question,
        subtext: vote.decision,
        slug: `/rollcalls/${vote.id}`,
      })),
    },
    {
      title: 'Committees',
      count: committee_memberships_aggregate.aggregate.count,
      type: 'committees',
      details: committee_memberships_aggregate.nodes.map((committee) => ({
        text: committee.committee.name,
        subtext: committee.title,
        slug: `/committees/${committee.id}`,
      })),
    },
    {
      title: 'Subcommittees',
      count: subcommittee_memberships_aggregate.aggregate.count,
      type: 'subcommittees',
      details: subcommittee_memberships_aggregate.nodes.map((subcommittee) => ({
        text: subcommittee.subcommittee.name,
        subtext: subcommittee.title,
        slug: `/subcommittees/${subcommittee.id}`,
      })),
    },
  ];

  const handleOptionClick = (option: OptionDetailsProps) => {
    const isActiveOption = clickedOption?.title === option.title;

    if (isActiveOption) {
      setClickedOption(null);
    }

    if (!isActiveOption) {
      setClickedOption(option);
    }
  };

  const termStartDate = new Date(electedOfficial.term_start_at).toLocaleString(
    'en-us',
    localDateStringOptions
  );
  const termEndDate = new Date(electedOfficial.term_end_at).toLocaleString(
    'en-us',
    localDateStringOptions
  );
  const termText = `${termStartDate} - ${termEndDate}`;

  const position = normalizePosition(electedOfficial.position);
  const positionText = `${electedOfficial.state}  ${position}`;

  return (
    <MinimumLayout>
      <Seo
        pathname={slug}
        title={electedOfficial.preferred_name}
        description={electedOfficial.preferred_name}
        keywords={[
          electedOfficial.preferred_name,
          electedOfficial.position,
          electedOfficial.political_party,
          electedOfficial.state,
          electedOfficial.first_name,
          electedOfficial.last_name,
          electedOfficial.gender,
        ]}
      />
      <ContentLayout>
        <div className="title">
          <Name>{electedOfficial.preferred_name}</Name>
          {/* <StateIcon className="state" state={electedOfficial.state} /> */}
          {/* <State>{electedOfficial.state}</State> */}
          <Position>{positionText}</Position>
          <TermDate>{termText}</TermDate>
        </div>
        <CircleAvatar
          className="image"
          preferred_name={electedOfficial.preferred_name}
          political_party={electedOfficial.political_party}
          image={electedOfficial.image}
          loading="eager"
          size="240px"
        />
        <OptionsContainer className="options">
          {options.map((option, index) => {
            // Dynamic classnames a-f to match grid assignments
            const char = String.fromCharCode(97 + index);
            return (
              <CountBox
                key={option.title}
                className={char}
                title={option.title}
                count={option.count}
                isActive={option.title === activeOption?.title}
                onMouseOver={() => {
                  setHoveredOption(option);
                }}
                onMouseOut={() => {
                  setHoveredOption(null);
                }}
                onClick={() => handleOptionClick(option)}
              />
            );
          })}
        </OptionsContainer>

        {activeOption ? (
          <OptionDetails className="details" {...activeOption} />
        ) : null}
      </ContentLayout>
    </MinimumLayout>
  );
};

const localDateStringOptions: Intl.DateTimeFormatOptions = {
  year: 'numeric',
  month: 'short',
  day: 'numeric',
};

const normalizePosition = (position: string) => {
  if (position === 'house_representative') return 'House Representative';
  if (position === 'senator') return 'Senator';
  if (position === 'president') return 'President';
  if (position === 'vice_president') return 'Vice President';
  return position;
};

export default ElectedOfficialTemplate;

const Name = styled.h2`
  font-weight: 600;
`;

const Position = styled.p`
  margin-bottom: 0;
  font-family: century_supra_c3;
  padding-bottom: 1rem;
  border-bottom: solid thin var(--color-gray700);
`;

const TermDate = styled.p`
  font-weight: 400;
  font-family: century_supra_c3;
  color: var(--color-dimText);
`;

const ContentLayout = styled.div`
  position: relative;
  overflow: hidden;

  display: grid;
  height: calc(100vh - 115px);
  grid-template-columns: 1fr auto 1fr;
  grid-template-rows: 50px 170px 300px auto;
  grid-template-areas:
    '....... ..... details'
    '....... title details'
    'options img   details'
    '....... ..... details';

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: fit-content;
  }

  .title {
    grid-area: title;
    width: 100%;
    height: 100%;
    justify-self: center;
    text-align: center;
  }

  .image {
    grid-area: img;
    justify-self: center;
    align-self: center;

    img {
      transition: all 0.3s;

      :hover {
        transform: scale(1.1);
      }
    }
  }

  .options {
    grid-area: options;
  }

  .details {
    grid-area: details;

    div:first-child {
      margin-top: 170px;
      @media (max-width: 600px) {
        margin-top: unset;
      }
    }
  }

  .state {
    width: 100%;
    height: auto;
    max-width: 100%;
    max-height: 100%;

    justify-self: center;
    align-self: center;

    path {
      fill: transparent;
      stroke: var(--color-gray500);
    }
  }
`;

const OptionsContainer = styled.div`
  width: 100%;
  height: 100%;
  max-height: 300px;
  align-self: start;
  line-height: normal;

  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-areas:
    'a a a a a a a a a a'
    'b b b b b b b b b .'
    'c c c c c c c c c .'
    'd d d d d d d d d .'
    'e e e e e e e e e .'
    'f f f f f f f f f f';
  align-items: start;
  align-content: space-between;
  text-align: right;

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: fit-content;
  }

  .a {
    grid-area: a;
  }

  .b {
    grid-area: b;
  }

  .c {
    grid-area: c;
  }

  .d {
    grid-area: d;
  }

  .e {
    grid-area: e;
  }

  .f {
    grid-area: f;
  }
`;
