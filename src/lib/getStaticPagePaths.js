import glob from 'fast-glob'
import * as path from 'path'

const getStaticPagePaths = async () => {
  const fetchPageFilenames = async () =>
    await glob(['*.jsx', '*/index.jsx'], {
      cwd: path.join(process.cwd(), 'src/pages'),
    })

  const pageFilenames = await fetchPageFilenames()

  const filteredPageFilenames = pageFilenames.filter(
    (filename) => filename.slice(0, 1) !== '_' && !filename.includes('.xml')
  )

  const parsedPageFilenames = filteredPageFilenames.map((filename) =>
    filename
      .replace('/index.jsx', '')
      .replace('index.jsx', '')
      .replace('.jsx', '')
      .replace(/^/, '/')
  )

  return parsedPageFilenames
}

export default getStaticPagePaths
