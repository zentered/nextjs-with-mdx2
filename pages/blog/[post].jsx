import dynamic from 'next/dynamic'
import { getSlugs, getMeta } from 'utils/posts.js'
import { MDXProvider } from '@mdx-js/react'

export default function Post({ post, meta }) {
  // import mdx
  const Post = dynamic(import(`content/posts/${post}.mdx`))

  // dynamic import because not ESM compatible
  const embeds = dynamic(() => import('mdx-embed'))
  const { CodePen, Gist } = embeds

  const components = {
    CodePen,
    Gist
  }

  return (
    <div>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="mt-64 pb-5">
            <h1 className="text-lg leading-6 font-medium text-gray-900">
              {meta.title}
            </h1>
          </div>
        </div>
        <article className="mx-auto prose">
          <MDXProvider components={components}>
            <Post />
          </MDXProvider>
        </article>
      </main>
    </div>
  )
}

export async function getStaticProps({ ...ctx }) {
  const post = ctx.params['post']
  const meta = await getMeta(post)

  return {
    props: {
      post,
      meta
    }
  }
}

export async function getStaticPaths() {
  const paths = await getSlugs()
  console.log(paths)
  return {
    paths, // An array of path names, and any params
    fallback: false // so that 404s properly appear if something's not matching
  }
}
