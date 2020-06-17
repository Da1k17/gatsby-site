import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import  Kv from "../components/kv"
import Footer from "../components/footer"
import BlogItem from "../components/blogitem"
import { Container, Row, Col } from "react-bootstrap"

const IndexPage = () => {
  const data = useStaticQuery ( graphql`
    query {
      allContentfulBlogPost (sort: {
        fields: createdDate,
        order: ASC
      }) {
        edges {
          node {
            title
            slug
            createdDate(formatString: "YYYY/MM/DD")
            thumbnail {
              fluid {
                src
              }
            }
          }
        }
      }
  }
  `)

  console.log("data", data)

  return (
  <Layout>
    <Kv />
    <Container>
      <Row>
        {
          data.allContentfulBlogPost.edges.map((edge, index)  => (
            <Col sm={4} key={index}>
              <BlogItem 
                title={edge.node.title}
                date={edge.node.createdDate}
                src={edge.node.thumbnail.fluid.src}
                link={`blog/${edge.node.slug}`}
                />
            </Col>
          ))
        }
      </Row>
    </Container>
    <Footer />
  </Layout>
  )
}

export default IndexPage
