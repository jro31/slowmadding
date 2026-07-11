import { defineConfig, globalIgnores } from 'eslint/config'
import nextCoreWebVitals from 'eslint-config-next/core-web-vitals'

export default defineConfig([
  globalIgnores(['.next/']),
  {
    extends: [...nextCoreWebVitals],

    rules: {
      'react/no-unescaped-entities': 'off',
      '@next/next/no-img-element': 'off',

      // New rules introduced by eslint-config-next 16 that flag long-standing
      // patterns in this codebase; disabled to keep the upgrade behavior-neutral
      'react-hooks/refs': 'off',
      'react-hooks/static-components': 'off',
      'react-hooks/immutability': 'off',
    },
  },
])
