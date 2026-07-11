import { defineConfig, globalIgnores } from 'eslint/config'
import nextCoreWebVitals from 'eslint-config-next/core-web-vitals'

export default defineConfig([
  globalIgnores(['.next/']),
  {
    extends: [...nextCoreWebVitals],

    rules: {
      'react/no-unescaped-entities': 'off',
      '@next/next/no-img-element': 'off',
    },
  },
])
