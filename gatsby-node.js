const path = require(`path`);

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@components': path.resolve(__dirname, 'src/components'),
        '@pages': path.resolve(__dirname, 'src/pages'),
        '@lib': path.resolve(__dirname, 'src/lib'),
        '@types': path.resolve(__dirname, 'src/types'),
        '@static': path.resolve(__dirname, 'static'),
      },
    },
  });
};

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query BillsQuery {
      hasura {
        bills(
          order_by: { updated_at: desc }
          where: { summary: { _neq: "No summary available." } }
        ) {
          id
          number
          title
          subject
          summary
          bill_text
          congress
          status
          status_at
          type
          introduced_at
          updated_at
          created_at
          by_request
          related_bills
          short_title
          subjects
          sponsor {
            id
            born_at
            created_at
            district
            first_name
            gender
            house_terms
            is_active
            last_name
            political_party
            position
            preferred_name
            president_terms
            rank
            senate_terms
            state
            term_end_at
            term_start_at
            updated_at
            vice_president_terms
          }
          cosponsorships {
            id
            original_cosponsor
            sponsored_at
            state
            withdrawn_at
            district
            elected_official {
              id
              created_at
              district
              first_name
              gender
              house_terms
              is_active
              last_name
              political_party
              position
              president_terms
              preferred_name
              rank
              senate_terms
              state
              term_end_at
              term_start_at
              updated_at
              vice_president_terms
              born_at
            }
          }
          actions {
            acted_at
            action_code
            how
            id
            references
            result
            roll
            status
            suspension
            text
            type
            vote_type
            where
          }
        }
      }
      congressImages: allFile(
        filter: { sourceInstanceName: { eq: "congressImages" } }
      ) {
        nodes {
          extension
          name
          modifiedTime
          childImageSharp {
            gatsbyImageData(
              width: 300
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    console.error(result.errors);
    return;
  }

  const images = result.data.congressImages.nodes;

  result.data.hasura.bills.forEach((bill) => {
    createPage({
      path: `${bill.congress}/${bill.type}${bill.number}`,
      component: path.resolve(`./src/components/BillTemplate/index.tsx`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: `${bill.congress}/${bill.type}${bill.number}`,
        ...bill,
        congressImages: images,
      },
    });
  });
};
