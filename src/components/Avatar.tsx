import React from 'react';
import Image from 'next/image';

interface AvatarProps {
  src: string;
  alt: string;
}

const Avatar: React.FC<AvatarProps> = ({ src, alt }) => {
  return <Image src={src} alt={alt} className="avatar" width={50} height={50} />;
};

export default Avatar;
