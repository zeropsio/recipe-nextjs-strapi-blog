import React from "react"
import Articles from "../components/articles"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { fetchAPI } from "../lib/api"

const Home = ({ articles, categories, global }) => {
  return (
    <Layout categories={categories}>
      <Seo seo={global.attributes.defaultSeo} />
      <div className="uk-section">
        <div className="uk-container uk-container-large">
          <h1>{global.attributes.siteName}</h1>
          <Articles articles={articles} />
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  // Run API calls in parallel
  const [articlesRes, categoriesRes, globalRes] = await Promise.all([
    fetchAPI("/articles", {
      populate: {
        author: { populate: "*" },
        cover: { populate: "*" },
        category: { populate: "*" },
        blocks: { populate: "*" },
      },
    }),
    fetchAPI("/categories", { populate: "*" }),
    fetchAPI("/global", {
      populate: {
        favicon: "*",
        defaultSeo: {
          populate: "*",
        },
      },
    }),
  ])

  return {
    props: {
      articles: articlesRes.data,
      categories: categoriesRes.data,
      global: globalRes.data,
    },
    revalidate: 1,
  }
}

export default Home
