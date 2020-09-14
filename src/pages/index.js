import React from 'react'
import { Link } from 'gatsby';

import Layout from '../components/Layout'
import SEO from '../components/seo'
import PostItem from '../components/PostItem';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <PostItem
      slug="/about/"
      background="red"
      category="misc"
      date="30 de Julho de 2019"
      timeToRead="5"
      title="Dummy title"
      description="This is a description"
    />
  </Layout>
)

export default IndexPage
