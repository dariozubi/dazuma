import moment from 'moment'

const posts = processPosts(requirePosts())

export function getPosts () {
  return posts
}

export function getPost (id) {
  return posts.find(p => p.id === id)
}

function requirePosts () {
  return require.context('../../text/en/blog/', true, /\.mdx$/)
}

function processPosts (posts) {
  const parsedPosts = parsePosts(posts)
  const sortedPosts = sortPosts(parsedPosts)
  return sortedPosts
}

function parsePosts (raw_posts) {
  const keys = raw_posts.keys();
  const posts = keys.map(raw_posts);
  return posts
    .map((p, k) => ({
      ...p.data,
      createdAt: moment(p.data.date),
      Doc: p.default,
      id: keys[k].substring(2,keys[k].length-4)
    }))
}

function sortPosts (posts) {
  posts.sort((a, b) => a.createdAt.isBefore(b.createdAt) ? 1 : -1)
  return posts
}