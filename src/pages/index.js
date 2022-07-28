import React from "react";
import WelcomePage from "../components/WelcomePage/WelcomePage";
import StickyNavigation from "../components/StickyNavigation/StickyNavigation";
import ArticleCardList from "../components/ArticleCardList/ArticleCardList";
import {graphql} from "gatsby";
import './index.css';

const IndexPage = (props) => {
    const data = props.data;

    return (
        <div>
            <WelcomePage websiteTitle={data.site.siteMetadata.title}/>
            <div className="nav-wrapper">
                <StickyNavigation navTitle={data.site.siteMetadata.title}/>
                <div className="article-card-list-wrapper" id="article-card-list-wrapper">
                    <ArticleCardList/>
                </div>
            </div>
        </div>
    );
};

export const query = graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
`

export default IndexPage

export const Head = (props) => (
    <>
        <title>{props.data.site.siteMetadata.title}</title>
        <link rel="preconnect" href="https://fonts.loli.net"></link>
        <link rel="preconnect" href="https://gstatic.loli.net" crossOrigin></link>
        <link
            href="https://fonts.loli.net/css2?family=Montserrat+Alternates:wght@200&family=MuseoModerno:wght@100;300&family=Noto+Sans+SC:wght@300;400&family=Quicksand:wght@400&display=swap"
            rel="stylesheet"></link>
    </>
)