const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN

export const client = require('contentful').createClient({
  space: space,
  accessToken: accessToken,
})

export default {}
