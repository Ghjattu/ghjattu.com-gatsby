import React from "react";
import {graphql, Link, useStaticQuery} from "gatsby";
import './ArticleCardList.css'

const ArticleCardList = () => {
    const data = useStaticQuery(graphql`
        query {
          allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
            nodes {
              id
              frontmatter {
                title
                date(formatString: "MMMM DD, YYYY")
                slug
              }
              excerpt(format: PLAIN, pruneLength: 200, truncate: true)
            }
          }
        }
    `);

    return (
        <div className="article-card-list">
            {
                data.allMarkdownRemark.nodes.map(node =>
                    <article className="article-card" key={node.id}>
                        <time className="article-card-date">{node.frontmatter.date}</time>
                        <h3 className="article-card-title">
                            <Link to={`/article/${node.frontmatter.slug}`}>{node.frontmatter.title}</Link>
                        </h3>
                        <p className="article-card-excerpt" dangerouslySetInnerHTML={{__html: node.excerpt}}></p>
                        <Link to={`/article/${node.frontmatter.slug}`}
                              className="article-card-link"><span>READ MORE</span></Link>
                    </article>
                )
            }
        </div>
    );
};

export default ArticleCardList
