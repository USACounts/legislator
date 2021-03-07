const path = require(`path`);
const createSocialCards = require('./src/libs/create-social-cards');
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
          cosponsorships(order_by: { sponsored_at: desc }) {
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
          actions(order_by: { acted_at: desc }) {
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
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    console.error(result.errors);
    return;
  }

  for (const bill of result.data.hasura.bills) {
    const slug = `${bill.congress}/${bill.type}${bill.number}`;

    createPage({
      path: slug,
      component: path.resolve(`./src/components/BillTemplate/index.tsx`),
      context: {
        slug,
        bill,
      },
    });

    // createSocialCards({
    //   bill: bill,
    //   author: 'USACounts',
    //   separator: '|',
    //   fontFile: require.resolve(
    //     './static/fonts/Century_Supra/T3/century_supra_t3_regular.ttf'
    //   ),
    //   slug,
    // });
  }
};
