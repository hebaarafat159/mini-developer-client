import { Helmet } from "react-helmet-async";
import logo_icon from '../assets/logo_icon.png'


export default function SEOComponent({ seoData }) {

    return (
        (seoData &&
            <Helmet>
                {/* change link with course seo title */}
                {window.history.replaceState(null, "New Page Title", `${seoData.seo_slug}`)}

                {/* add mini developer logo */}
                <meta property="image" content={logo_icon} />
                <meta property="og:image" content={logo_icon} />
                <meta property="x:image" content={logo_icon} />

                {/* title tag (title in search result) */}
                <title>{seoData.seo_title}</title>
                {/* og:title (title on social media) */}
                <title name="og:title">{seoData.seo_title}</title>
                {/* x:title (title on x) any */}
                <title name="x:title">{seoData.seo_title}</title>

                <meta name="slug" content={seoData.seo_slug} />

                {/* description -> (description in search results) */}
                <meta name="description" content={seoData.seo_description} />
                {/* og:description -> (description on social media) */}
                <meta name="og:description" content={seoData.seo_description} />
                {/* X:description -> (description on x) any*/}
                <meta name="x:description" content={seoData.seo_description} />
                <meta name="keywords" content={seoData.meta_keywords} />

                {/* Search engines */}
                {/* <meta name="description" content={seoData.seo_description} /> */}
                {/* Social media - Open Graph */}
                {/* <meta property="og:description" content={seoData.seo_description} /> */}
                {/* Twitter / X */}
                {/* <meta name="twitter:description" content={seoData.seo_description} /> */}

                <link rel="canonical" />
                <meta name="google-site-verification" content="pdHC7v6AAemteEVytTeXE61hGpHMNRPLA0lhDVNsSME" />
            </Helmet>
        )
    )
} 