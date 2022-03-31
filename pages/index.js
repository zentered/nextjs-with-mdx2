import { getPosts } from 'utils/posts.js'

function Home({ posts }) {
  return (
    <div>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="mt-64 pb-5 border-b border-gray-200">
            <h1 className="text-lg leading-6 font-medium text-gray-900">
              Blog Posts
            </h1>
          </div>
          <div className="flow-root mt-6">
            <ul role="list" className="-my-5 divide-y divide-gray-200">
              {posts.map((post, idx) => (
                <li key={idx} className="py-5">
                  <div className="relative focus-within:ring-2 focus-within:ring-indigo-500">
                    <h3 className="text-sm font-semibold text-gray-800">
                      <a
                        href={post.slug}
                        className="hover:underline focus:outline-none"
                      >
                        <span className="absolute inset-0" aria-hidden="true" />
                        {post.title}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-600 line-clamp-2">
                      {post.preview}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  )
}

export async function getStaticProps() {
  const posts = await getPosts()

  return {
    props: {
      posts
    }
  }
}

export default Home
