import React from "react";
import {graphql} from "gatsby";
import StickyNavigation from "../../components/StickyNavigation/StickyNavigation";
import {NewWindowForLink} from "../../utils/utils";
import "katex/dist/katex.min.css";
import "./ArticleTemplate.css"

class ArticleTemplate extends React.Component {
    componentDidMount() {
        NewWindowForLink();
    }

    render() {
        const data = this.props.data.markdownRemark;

        return (
            <div>
                <StickyNavigation navTitle={this.props.data.site.siteMetadata.title}/>
                <div className="article-container">
                    <article className="article">
                        <div className="article-front-matter">
                            <h1 className="article-title">{data.frontmatter.title}</h1>
                            <time className="article-date">{data.frontmatter.date}</time>
                        </div>
                        <div className="article-body" dangerouslySetInnerHTML={{__html: data.html}}></div>
                    </article>
                </div>
            </div>
        );
    }
}

export const query = graphql`
    query ($id: String) {
      markdownRemark(id: {eq: $id}) {
        html
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          slug
        }
      }
      site {
        siteMetadata {
          title
        }
      }
    }
`

export default ArticleTemplate

export const Head = (props) => (
    <>
        <title>{props.data.site.siteMetadata.title}</title>
    </>
)