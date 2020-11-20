import React, { useState } from 'react';
import ReactBnbGallery from 'react-bnb-gallery';
import 'react-bnb-gallery/dist/style.css'

const PHOTOS = [
  "https://source.unsplash.com/random",
  "https://source.unsplash.com/random/400x600",
  "https://source.unsplash.com/random/600x800",
  "https://source.unsplash.com/random/800x800",
  "https://source.unsplash.com/random/900x500",
  "https://source.unsplash.com/random/500x800",
  "https://source.unsplash.com/random/900x600",
  "https://source.unsplash.com/random/700x900",
  "https://source.unsplash.com/random/600x900"
];

const GalleryExample = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <ReactBnbGallery
      show={isOpen}
      photos={PHOTOS}
    />
  );
};

export default GalleryExample