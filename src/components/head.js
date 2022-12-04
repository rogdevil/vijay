/* eslint-disable quotes */
import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

// https://www.gatsbyjs.com/docs/add-seo-component/

const Head = ({ title }) => {
  // const { defaultTitle, twitterUsername } = site.siteMetadata;

  const seo = {
    title: 'MobileHub',
    description: "Looking for a change in you old mobile device, don't worry we got you covered.",
    image: `https://www.mobilehub.shop/static/fdcfb17d46badcfc0e2c5bbd2118b181/a5bb2/vijay.avif`,
    url: `https://www.mobilehub.shop/`,
  };

  return (
    <Helmet title={title} defaultTitle={seo.title} titleTemplate={`%s | ${seo.title}`}>
      <html lang="en" />

      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />

      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:type" content="website" />

      {/* <meta name="google-site-verification" content="DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk" /> */}
    </Helmet>
  );
};

export default Head;

Head.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
};

Head.defaultProps = {
  title: null,
  description: null,
  image: null,
};
