import parseFacebookFeed from './parse-facebook-feed'

// TODO: Add Happy Cow
// TODO: Add Strava
// TODO: Add any site articles (perhaps see src/lib/getAllArticles.js)
const collateActivity = async () => {
  const facebookFeed = await parseFacebookFeed()

  return facebookFeed // TODO: Update this to return all activity
}

export default collateActivity
