import connect from './store';
import { Header } from './styles';

const AuthorInfo = props => {
  console.log('props', props);
  const { author: { id, firstName } } = props;
  return (
    <Header>
      <h1>
        I got: {id} with name: {firstName}
      </h1>
    </Header>
  );
};

AuthorInfo.defaultProps = {
  author: null,
  error: null
};

export default connect(AuthorInfo);
