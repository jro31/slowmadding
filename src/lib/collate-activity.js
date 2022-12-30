import parseArticles from './parse-articles'

// TODO: Add Facebook feed (see src/lib/parse-facebook-feed.js)
// TODO: Add Happy Cow
// TODO: Add Strava
const collateActivity = async () => {
  const parsedArticles = await parseArticles()

  return parsedArticles // TODO: Update this to return all activity
}

export default collateActivity
