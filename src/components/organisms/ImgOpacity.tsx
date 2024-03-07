'use client'
import Image, { ImageProps } from "next/image";
import { useEffect, useState } from "react";

export default function Img({ src, alt, ...rest }: ImageProps) {
  const [load, setLoad] = useState<boolean>(true);
  const [blur, setBlur] = useState<boolean>(true);

  useEffect(() => {
    if (!load) {
      setTimeout(() => {
        setBlur(false);
      }, 900)
    }
  }, [load])

  const estiles = {
    opacity: load ? 0 : 1,
    filter: blur ? 'blur(3px)' : 'blur(0px)',
    transition: 'opacity 0.2s cubic-bezier(0.3, 0.2, 0.2, 0.8) 0.5s',
  }

  return (
    <Image
      src={src}
      alt={alt}
      style={estiles}
      onLoad={() => setLoad(false)}
      {...rest}
    ></Image>
  )
} 