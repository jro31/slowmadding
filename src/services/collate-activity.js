import parseFacebookFeed from './parse-facebook-feed'

const collateActivity = async () => {
  const facebookFeed = await parseFacebookFeed()

  return facebookFeed // TODO: Update this to return all activity
}

export default collateActivity
