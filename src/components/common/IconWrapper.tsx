import Image from "next/image";

// this component will ease our work for using svgs if we ever decided not to use next/image
const IconWrapper = ({
  alt,
  src,
  className,
}: {
  alt: string;
  src: string;
  className?: string;
}) => {
  return <Image src={src} alt={alt} className={className ? className : ""} />;
};

export default IconWrapper;
