import React from "react";
import WelcomePage from "../components/WelcomePage/WelcomePage";
import StickyNavigation from "../components/StickyNavigation/StickyNavigation";
import ArticleCardList from "../components/ArticleCardList/ArticleCardList";
import Footer from "../components/Footer/Footer";
import {SEO} from "../components/seo";
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
            <Footer/>
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

export const Head = () => (
    <SEO/>
)