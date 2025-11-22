import { Helmet } from "react-helmet-async";
// import logo_icon from '../assets/logo_icon.png'


export default function SEOComponent({ seoData }) {

    return (
        (seoData &&
            <Helmet>
                {/* change link with course seo title */}
                {window.history.replaceState(null, "New Page Title", `${seoData.seo_slug}`)}

                {/* add mini developer logo */}
                <meta property="image" content="../assets/logo_icon.png" />
                <meta property="og:image" content="../assets/logo_icon.png" />
                <meta property="x:image" content="../assets/logo_icon.png" />

                {/* title tag (title in search result) */}
                <title>{seoData.seo_title}</title>
                {/* og:title (title on social media) */}
                <title name="og:title">{seoData.seo_title}</title>
                {/* x:title (title on x) any */}
                <title name="x:title">{seoData.seo_title}</title>

                <meta name="slug" content={seoData.seo_slug} />

                {/* description -> (description in search results) */}
                {/* <meta name="description" content={seoData.seo_description} /> */}
                {/* og:description -> (description on social media) */}
                {/* <meta name="description" content={seoData.seo_description} /> */}
                {/* X:description -> (description on x) any*/}
                {/* <meta name="description" content={seoData.seo_description} /> */}

                {/* Search engines */}
                {/* <meta name="description" content={seoData.seo_description} /> */}
                {/* Social media - Open Graph */}
                {/* <meta property="og:description" content={seoData.seo_description} /> */}
                {/* Twitter / X */}
                {/* <meta name="twitter:description" content={seoData.seo_description} /> */}

                <meta name="description" content="Welcome to Mini Developer Coding School." />
                <link rel="canonical" />

            </Helmet>
        )
    )
} 