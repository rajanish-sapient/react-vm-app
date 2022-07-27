import * as React from 'react';
import { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgSocialInstagram = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7 3a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4H7ZM1 7a6 6 0 0 1 6-6h10a6 6 0 0 1 6 6v10a6 6 0 0 1-6 6H7a6 6 0 0 1-6-6V7Zm11.483 1.989a3 3 0 1 0-.88 5.935 3 3 0 0 0 .88-5.935ZM9.74 7.519a5 5 0 1 1 4.606 8.876A5 5 0 0 1 9.74 7.518ZM17.5 5.5a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2h-.01Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgSocialInstagram;
