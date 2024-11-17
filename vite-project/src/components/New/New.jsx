import React from 'react'
import './New.css'
import { Link } from 'react-router-dom'

function New() {

    const New = [
        {
            img: "https://cdn.konigle.com/release-notes/banners/2024/9/ability-to-add-on-page-faqs.jpeg",
            heading: "Ability to Add On-page FAQs",
            date: "Sep 18,2024",
            para: "Konigle websites can now add FAQs to pages, blogs, and glossary terms."
        },
        {
            img: "https://cdn.konigle.com/release-notes/banners/2024/8/new-block-types-in-text-editor.jpeg",
            heading: "New block types in text editor",
            date: "Aug 26,2024",
            para: "Support for 3 new types of blocks in our text editor has been released on Konigle."
        },
        {
            img: "https://cdn.konigle.com/release-notes/banners/2024/8/website-dock-component.png",
            heading: "Website Dock Component",
            date: "Aug 21, 2024",
            para: "The Website Dock componenet has been released on Konigle"
        },
        {
            img: "https://cdn.konigle.com/release-notes/banners/2024/8/ability-to-add-padding-and-margin.png",
            heading: "Ability to add padding and margin",
            date: "Aug 01, 2024",
            para: "Konigle users are now able to add padding and margins to different block on their websites."
        },
        {
            img: "https://cdn.konigle.com/release-notes/banners/2024/8/ability-to-create-secret-url.png",
            heading: "Ability To Create Secret URL",
            date: "Jul 31, 2024",
            para: "The ability to create secret URLs for Konigle websites is now live"
        },
        {
            img: "https://cdn.konigle.com/release-notes/banners/2024/8/ability-to-disable-website-header-and-footer.png",
            heading: "Ability to disable Website Header and Footer",
            date: "Jul 31, 2024",
            para: "All Konigle websites' headers and footers can now be disabled."
        },
        {
            img: "https://cdn.konigle.com/release-notes/banners/2024/7/photos-plugin.png",
            heading: "Photo Plugin",
            date: "Jul 30, 2024",
            para: "You can now let visitors upload images to your website built on Konigle"
        },
        {
            img: "https://cdn.konigle.com/release-notes/banners/2024/7/wedding-website-components.png",
            heading: "Wedding Website Components",
            date: "Jul 30, 2024",
            para: "You can now build a fully functional wedding website on Konigle with these newly released components."
        },
        {
            img: "https://cdn.konigle.com/release-notes/banners/2024/7/new-variants-of-multiple-components.png",
            heading:"New variants of Multiple Components",
            date: "Jul 26, 2024",
            para: "Even more designs of various components have been released on Konigle's Component Builder."
        },
        {
            img: "https://cdn.konigle.com/release-notes/banners/2024/7/comment-manager-plugin.png",
            heading: "Comment Manager Plugin",
            date: "Jul 23, 2024",
            para: "Konigle websites are further enhanced to support comments."
        },
        {
            img: "https://cdn.konigle.com/release-notes/banners/2024/8/video-support-capability.jpg",
            heading: "Features Component",
            date: "May 30, 2024",
            para: "A new style of the Features component is now available to enhance your website design."
        },
        {
            img: "https://cdn.konigle.com/release-notes/banners/2024/7/nested-folders.png",
            heading: "Video Support Capability",
            date: "Jul 22, 2024",
            para: "Videos are now supported for selected website componenets on Konigle!"
        },
        {
            img: "https://cdn.konigle.com/release-notes/banners/2024/7/new-variant-of-the-reviews-component.png",
            heading: "Nested Folders",
            date: "Jul 18, 2024",
            para: "The wait is over! We're excited to announce the release of the new Nested Folders feature!"
        },
        {
            img: "https://cdn.konigle.com/release-notes/banners/2024/7/header-and-footer-variants.png",
            heading: "New Variant of the Reviews Component",
            date: "Jul 02, 2024",
            para: "To add to the reReviews component we released last month here is a new variant of this component."
        },
        {
            img: "https://cdn.konigle.com/release-notes/banners/2024/7/more-variants-of-the-features-component.webp",
            heading: "Header and Footer Variants",
            date: "Jul 02, 2024",
            para: "New varieties of headers and footers have been released on Konigle."
        },
        {
            img: "https://cdn.konigle.com/release-notes/banners/2024/7/tabbed-highlights-component.webp",
            heading: "More Variants of the ffeatures Component",
            date: "Jun 26, 2024",
            para: "Konigle websites have more ways to showcase their product/service features now."
        },
        {
            img: "https://cdn.konigle.com/release-notes/banners/2024/6/reviews-component.webp",
            heading: "Tabbed Jighlights Component",
            date: "Jun 26, 2024",
            para: "A new varient of the Highlights component, 'Highlights-Tabbed' has been released.",
        },
        {
            img: "https://cdn.konigle.com/release-notes/banners/2024/6/tabbed-rich-text-component.webp",
            heading: "Review Component",
            date: "Jun 19, 2024",
            para: "We're excited to announce the new reviews component, designed to make it easier than ever for websites to share their customer's experiences and help others make informed decisions."
        },
    ]

  return (
    <div className='new-main'>
        <div className="new-updata">
        <h1 className='new-heading-top'>What's New</h1>
        <p className='new-para'>We are constantly improving our products and services. Here are some of the latest updates and new features.</p>
        </div>
        <div className="new-allcards">
            {
                New.map((entry, index) => (
                    <div key={index} className="new-cards">
                        <div className="new-image-comp">
                        <img src={entry.img} alt="" />
                        </div>
                        <div className="newcard-data">
                            <Link className='new-heading'>{entry.heading}</Link>
                            <p className='new-date'>{entry.date}</p>
                            <p className='new-det'>{entry.para}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default New