/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author

  return (
    <div className="bio">
      {author?.name && (
        <p>
          Written by{" "}
          <strong>
            <a href="https://linkedin.com/in/namyeop/" target="blank">
              {author.name}.
            </a>
          </strong>{" "}
          {author?.summary || null}
          {` `}
          Thank you for reaching out to me through the World Wide Web.
        </p>
      )}
    </div>
  )
}

export default Bio
