import { Helmet } from "react-helmet-async";
// import logo_icon from '../assets/logo_icon.png'


export default function SEOComponent({ seoData }) {

    return (
        (seoData &&
            <Helmet>

                <meta property="image" content="../assets/logo_icon.png" />
                <meta property="og:image" content="../assets/logo_icon.png" />
                <meta property="x:image" content="../assets/logo_icon.png" />

                {/* title tag (title in search result) */}
                <title>{seoData.title}</title>
                {/* og:title (title on social media) */}
                <title name="og:title">{seoData.title}</title>
                {/* x:title (title on x) any */}
                <title name="x:title">{seoData.title}</title>

                {/* description -> (description in search results) */}
                <meta name="description" content={seoData.description} />
                {/* og:description -> (description on social media) */}
                <meta name="description" content={seoData.description} />
                {/* X:description -> (description on x) any*/}
                <meta name="description" content={seoData.description} />


                <link rel="canonical" />
                {/* <meta name="description" content="This is a description of my page" />
         <meta name="keywords" content="react, meta tags, seo" />
        <meta name="author" content="Your Name" />
        <meta property="og:title" content="My Page Title" />
        <meta property="og:description" content="This is a description of my page" />
        <meta property="og:image" content="https://example.com/image.jpg" />
        <meta property="og:url" content="https://example.com/my-page" />
        <meta name="twitter:title" content="My Page Title" />
        <meta name="twitter:description" content="This is a description of my page" />
        <meta name="twitter:image" content="https://example.com/image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
       */}
            </Helmet>
        )
    )
} 