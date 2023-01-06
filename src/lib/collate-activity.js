import { getAllArticles } from './getAllArticles'

// TODO: Add Facebook feed (see src/lib/parse-facebook-feed.js)
// TODO: Add Happy Cow
// TODO: Add Strava
const collateActivity = async () => {
  const articles = (await getAllArticles()).map(
    ({ component, ...meta }) => meta
  )

  return articles // TODO: Update this to return all activity
}

export default collateActivity
