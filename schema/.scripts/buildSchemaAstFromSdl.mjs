import { readFile, writeFile } from 'node:fs/promises'
import { parse } from 'graphql'

const { stringify } = JSON

const filePaths = [
  './schema-gateway/src/supergraph-gateway.graphql',
  './schema-inventory/src/inventory.graphql',
  './schema-products/src/products.graphql',
  './schema-users/src/users.graphql',
]

for (const filePath of filePaths) {
  const schemaSdl = await readFile(filePath, {
    encoding: 'utf-8',
  })

  const schemaAst = parse(schemaSdl)

  await writeFile(
    filePath.replace('.graphql', '.json'),
    stringify(schemaAst, null, 2),
  )
}
