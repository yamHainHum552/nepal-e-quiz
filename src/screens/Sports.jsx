import {sports} from '../constants/sports';
import Playground from '../components/Playground';

const Sports = ({route}) => {
  const {params} = route;

  return <Playground payload={sports} category={params.data} />;
};

export default Sports;
