import normalizeCoordinates from './normalizeCoordinates';

const normalizeRoute = route => route.map(item => ({
  id: item.term_id,
  name: item.name,
  country: item.country,
  coordinates: normalizeCoordinates(item),
  slug: item.slug,
}));

export default normalizeRoute;
