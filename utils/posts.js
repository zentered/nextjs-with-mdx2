import { promises as fs } from 'node:fs'
import { join } from 'path'
import matter from 'gray-matter'

const postsFolder = join(process.cwd(), 'content', 'posts')

async function getFiles() {
  const files = await fs.readdir(postsFolder)
  const mdxFiles = files.filter((f) => f.endsWith('.mdx'))
  const posts = []

  for (const file of mdxFiles) {
    const content = await fs.readFile(postsFolder + '/' + file, 'utf-8')
    const { data } = matter(content)
    data.slug = `/blog/${file.replace('.mdx', '')}`
    posts.push(data)
  }

  // filter/sort/map your posts here
  return posts
}

export async function getSlugs() {
  const posts = await getFiles()
  return posts.map((post) => post.slug)
}

export async function getPosts() {
  return getFiles()
}

export async function getMeta(post) {
  const content = await fs.readFile(`${postsFolder}/${post}.mdx`, 'utf-8')
  const { data } = matter(content)
  return data
}
