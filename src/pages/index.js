import React from "react";
import WelcomePage from "../components/WelcomePage/WelcomePage";
import './index.css';
import {graphql} from "gatsby";

const IndexPage = (props) => {
    const data = props.data;

    return (
        <div>
            <title>{data.site.siteMetadata.title}</title>
            <WelcomePage websiteTitle={data.site.siteMetadata.title}/>
        </div>
    );
};

export const query = graphql`
    query MyQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
`

export default IndexPage