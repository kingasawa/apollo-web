import _ from 'lodash';
import Button from 'material-ui/Button';
import Link from 'next/link'; // choi voi simpe href va query ?xxx=xxx&aaa=aaa

// import Snackbar from 'material-ui/Snackbar';
import App from '../components/App';
import withData from '../libraries/withData';

// import { dump } from '../libraries/helpers';

// De co the navigate giua cac page
// import { Link } from '../routes'; // choi voi route

import AuthorInfo from '../components/AuthorInfo';
import SimpleSnackbar from '../components/SimpleSnackbar';

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
        <Link href={{ pathname: '/test', query: { id: 10 } }}>
          <a>
            <Button>View user 10</Button>
          </a>
        </Link>

        <SimpleSnackbar />
        <AuthorInfo id={query.id} />
      </div>
    </App>
  );
});
