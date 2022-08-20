import React from "react";
import {useSiteMetadata} from "../hooks/use-site-metadata";

export const SEO = ({title, description, pathname, children}) => {
    const {title: defaultTitle, description: defaultDescription, siteUrl, author} = useSiteMetadata()

    const seo = {
        title: title ? `${title} - ${defaultTitle}` : defaultTitle,
        description: description || defaultDescription,
        url: `${siteUrl}${pathname || ``}`,
        author: author,
    }

    return (
        <>
            <title>{seo.title}</title>
            <meta name="author" content={seo.author}/>
            <meta name="description" content={seo.description}/>
            {children}
        </>
    )
}