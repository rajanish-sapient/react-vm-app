import * as React from 'react';
import { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgTrusted = ({
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
      d="M11.47 15.32a6.91 6.91 0 1 0 0-13.82 6.91 6.91 0 0 0 0 13.82Zm6.375-1.424a8.41 8.41 0 1 0-12.503.276.784.784 0 0 0-.057.05L.48 18.854A.75.75 0 0 0 1 20.145h2.683V23a.75.75 0 0 0 1.273.537L11.26 17.4h1.089l5.785 6.116A.75.75 0 0 0 19.43 23v-2.855h2.855a.75.75 0 0 0 .53-1.28l-4.97-4.97Zm-1.076 1.045a8.384 8.384 0 0 1-3.162 1.606l4.322 4.569v-1.72a.75.75 0 0 1 .75-.75h1.794l-3.704-3.705ZM9.86 16.667a8.37 8.37 0 0 1-3.417-1.512.752.752 0 0 1-.117.146l-3.469 3.344h1.575a.75.75 0 0 1 .75.75v1.828l4.678-4.556Zm1.78-5.465a2.963 2.963 0 1 0 0-5.926 2.963 2.963 0 0 0 0 5.926Zm0 1.5a4.463 4.463 0 1 0 0-8.926 4.463 4.463 0 0 0 0 8.926Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgTrusted;
