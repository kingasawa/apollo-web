import { graphql } from 'react-apollo';
import AuthorInfoGql from './AuthorInfo.gql';

const withData = graphql(AuthorInfoGql, {
  options: opt => {
    console.log('opt', opt);
    const { id } = opt;
    return {
      variables: {
        id
      }
    };
  },
  // Cho nay minh se dua data vao props cua component AuthorInfo
  //  vi` o cho component no connect vao file store nay
  props: ctx => {
    // console.log('store ctx', ctx);
    const { data: { author } } = ctx;
    return { author };
  }
});

export default comp => withData(comp);
