import * as React from 'react';
import { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgSocialLinkedIn = ({
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
      d="M6.375 4.174a2.16 2.16 0 0 1-2.188 2.174A2.16 2.16 0 0 1 2 4.174 2.16 2.16 0 0 1 4.188 2a2.16 2.16 0 0 1 2.187 2.174Zm0 3.913H2V22h4.375V8.087Zm7 0H9V22h4.375v-7.304c0-4.087 5.25-4.435 5.25 0V22H23v-8.783c0-6.87-7.787-6.608-9.625-3.217V8.087Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgSocialLinkedIn;
