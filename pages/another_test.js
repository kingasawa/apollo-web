import _ from 'lodash';

import App from '../components/App';
import withData from '../libraries/withData';
// import { dump } from '../libraries/helpers';

import AuthorInfo from '../components/AuthorInfo';

export default withData(props => {
  console.log('page /test props', props);
  const { url: { query } } = props;

  console.log('query', query);
  return (
    <App>
      <div>
        <h1>test</h1>
        <div>foundid: {_.get(query, 'id', 0)} </div>
        <p>HELLO WORLD! HELLO FROM RAN!</p>
        <hr />
        <AuthorInfo id={query.id} />
        <AuthorInfo id={parseInt(query.id, 10) - 1} />
      </div>
    </App>
  );
});
