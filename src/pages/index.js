import React from "react";
import WelcomePage from "../components/WelcomePage/WelcomePage";
import StickyNavigation from "../components/StickyNavigation/StickyNavigation";
import {graphql} from "gatsby";
import './index.css';

const IndexPage = (props) => {
    const data = props.data;

    return (
        <div>
            <title>{data.site.siteMetadata.title}</title>
            <WelcomePage websiteTitle={data.site.siteMetadata.title}/>
            <div className="nav-wrapper">
                <StickyNavigation navTitle={data.site.siteMetadata.title}/>
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