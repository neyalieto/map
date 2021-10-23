import rawData from '../mockData/rawData';
import normalizeRouteData from '../utils/normalizeRouteData';

const useRouteData = () => normalizeRouteData(rawData);

export default useRouteData;
