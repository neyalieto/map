import normalizeRoute from './normalizeRoute';
import normalizeCoordinates from './normalizeCoordinates';

const getPositions = route => route.map(normalizeCoordinates);
const getBounds = routes => routes.reduce((acc, route) => route ? [...acc, ...getPositions(route)] : acc, []);
const getFirstPosition = route => normalizeCoordinates(route[0]);
const getLastPosition = route => normalizeCoordinates(route[route.length - 1]);

const normalizeRouteData = ({ route, before, after }) => ({
  bounds: getBounds([route, before, after]),
  primary: normalizeRoute(route),
  secondary: [
    before && [...getPositions(before), getFirstPosition(route)],
    after && [getLastPosition(route), ...getPositions(after)],
  ].filter(Array.isArray),
})

export default normalizeRouteData;
