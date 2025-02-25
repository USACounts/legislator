import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Candidate from '@icons/misc/Candidate';
import styled from 'styled-components';

/*
 * This component is built using the new `gatsby-plugin-image` (beta) to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded by passing the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-plugin-image`: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-plugin-image/
 * - how to: https://www.gatsbyjs.com/docs/how-to/images-and-media/using-gatsby-plugin-image/
 */

export type ImageProps = {
  imageData: any;
  alt: string;
  loading?: 'eager' | 'lazy';
  backgroundColor?: string;
  aspectRatio?: number;
  className?: string;
};

const Image = ({
  imageData,
  alt,
  loading,
  backgroundColor,
  className,
}: ImageProps) => {
  const image = imageData ? getImage(imageData) : false;

  if (!image) {
    return <StyledCandidate className={className} />;
  }

  return (
    <GatsbyImage
      className={className}
      image={image}
      alt={alt}
      loading={loading}
      backgroundColor={backgroundColor}
    />
  );
};

export default Image;

const StyledCandidate = styled(Candidate)`
  width: 100%;
  height: auto;

  path {
    fill: var(--color-text);
  }
`;
