require('dotenv').config({
    path: '.env'
});

module.exports = {
    siteMetadata: {
        siteUrl: `https://www.ghjattu.cn`,
        title: 'Ghjattu',
        description: `Ghjattu's blog.The content includes programming contest problem solutions, front-end study notes, etc.`,
        author: 'Ghjattu',
    },
    plugins: [
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: "Ghjattu's blog",
                short_name: "Ghjattu's blog",
                description: 'Publishing articles personally',
                lang: 'zh-Hans',
                start_url: "/",
                background_color: "#F9F9F9",
                theme_color: "#F9F9F9",
                display: "standalone",
                icon: "src/images/favicon.png",
                crossOrigin: `use-credentials`,
            },
        },
        'gatsby-plugin-offline',
        // {
        //     resolve: "gatsby-source-filesystem",
        //     options: {
        //         name: `article`,
        //         path: `${__dirname}/article`,
        //     }
        // },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: `gatsby-remark-katex`,
                        options: {
                            strict: `ignore`
                        }
                    },
                    {
                        resolve: `gatsby-remark-prismjs`,
                        options: {
                            classPrefix: "language-",
                            inlineCodeMarker: null,
                            aliases: {},
                            showLineNumbers: false,
                            noInlineHighlight: false,
                            prompt: {
                                user: "root",
                                host: "localhost",
                                global: false,
                            }, escapeEntities: {},
                        }
                    },
                ],
            },
        },
        {
            resolve: `gatsby-source-mongodb`,
            options: {
                connectionString: process.env.MONGODB_URI,
                dbName: process.env.MONGODB_DATABASE_NAME,
                collection: `articles`,
                extraParams: {
                    ssl: true,
                    retryWrites: true,
                    w: `majority`
                },
                map: {
                    articles: { body: `text/markdown` },
                }
            }
        }
    ],
}
