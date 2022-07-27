import * as React from 'react';
import { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgSocialFacebook = ({
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
      d="M9.5 8.667H7V12h2.5v10h4.167V12h3L17 8.667h-3.333V7.25c0-.75.166-1.083.916-1.083H17V2h-3.167c-3 0-4.333 1.333-4.333 3.833v2.834Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgSocialFacebook;
