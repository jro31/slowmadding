// import getStaticPagePaths from '@/lib/getStaticPagePaths'
// import { getAllArticlePaths } from '@/lib/getAllArticles'

// const Sitemap = () => {}

// export default Sitemap

// export const getServerSideProps = async ({ req, res }) => {
//   const baseUrl = `${
//     process.env.NODE_ENV === 'production' ? 'https://' : 'http://'
//   }${req.headers.host}`

//   const staticPagePaths = await getStaticPagePaths()
//   const articlePaths = await getAllArticlePaths()

//   const allPaths = [...staticPagePaths, ...articlePaths]

//   const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
//     <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
//       ${allPaths
//         .map((path) => `<url><loc>${baseUrl}${path}</loc></url>`)
//         .join('')}
//     </urlset>
//   `

//   res.setHeader('Content-Type', 'text/xml')
//   res.write(sitemap)
//   res.end()

//   return {
//     props: {},
//   }
// }
