/**
 * Recma plugin for the article MDX files.
 *
 * Turns `export const foo = ...` into a module-local `const foo = ...`, and
 * attaches `meta` to the default component as `MDXContent.meta`, so the
 * compiled module only exports a React component. React Fast Refresh only
 * hot-swaps a module when every one of its exports is a component; a module
 * with data exports is not a "refresh boundary", and for a page module that
 * means a full reload on every edit.
 */
export default function recmaMdxStaticExports({ attach = ['meta'] } = {}) {
  return (tree) => {
    const attached = []

    tree.body = tree.body.map((node) => {
      if (
        node.type === 'ExportNamedDeclaration' &&
        node.declaration?.type === 'VariableDeclaration'
      ) {
        for (const declarator of node.declaration.declarations) {
          if (
            declarator.id.type === 'Identifier' &&
            attach.includes(declarator.id.name)
          ) {
            attached.push(declarator.id.name)
          }
        }
        return node.declaration
      }
      return node
    })

    for (const name of attached) {
      tree.body.push({
        type: 'ExpressionStatement',
        expression: {
          type: 'AssignmentExpression',
          operator: '=',
          left: {
            type: 'MemberExpression',
            object: { type: 'Identifier', name: 'MDXContent' },
            property: { type: 'Identifier', name },
            computed: false,
            optional: false,
          },
          right: { type: 'Identifier', name },
        },
      })
    }
  }
}
