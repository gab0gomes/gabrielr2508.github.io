import React from 'react';
import { graphql } from 'gatsby';
import { useMediaQuery } from 'react-responsive'

import Layout from '../components/Layout';
import SEO from '../components/seo';
import RecommendedPosts from '../components/RecommendedPosts';
import Comments from '../components/Comments';
import Search from '../components/Search';
import ShareButton from '../components/ShareButton';
import Footer from '../components/Footer';

import * as S from '../components/Post/styled';

const BlogPost = ({ data, pageContext }) => {
  const post = data.markdownRemark;
  const next = pageContext.nextPost;
  const previous = pageContext.previousPost;
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1170px)',
  });

  return (
    <Layout>
      <SEO
        title={ post.frontmatter.title }
        description={ post.frontmatter.description }
        image={ post.frontmatter.image.childImageSharp.fluid.src }
      />
      {
        isDesktopOrLaptop
        && <Search />
      }
      <S.PostWrapper>
        <S.PostBar id="post-bar">
          <S.PostDate>
            { post.frontmatter.date } • { post.timeToRead } min de leitura
          </S.PostDate>
          <ShareButton value={`${data.site.siteMetadata.siteUrl}${post.fields.slug}`} />
        </S.PostBar>
        <S.PostHeader>
          <S.PostTitle>
            { post.frontmatter.title }
          </S.PostTitle>
          <S.PostDescription>
          { post.frontmatter.description }
          </S.PostDescription>
        </S.PostHeader>
        <S.MainContent>
          <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
        </S.MainContent>
        <RecommendedPosts
          next={next}
          previous={previous}
        />
        <Comments
          url={ post.fields.slug }
          title={ post.frontmatter.title }
        />
        <Footer />
      </S.PostWrapper>
    </Layout>
  );
};

export const query = graphql`
  query ($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      frontmatter {
        title
        description
        date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
        image {
          childImageSharp {
            fluid {
              src
            }
          }
        }
      }
      html
      timeToRead
    }
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`;

export default BlogPost;