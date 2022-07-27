import * as React from 'react';
import { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgAccount = ({
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
      d="M7.852 6.101a4.351 4.351 0 1 1 8.702 0 4.351 4.351 0 0 1-8.702 0ZM12.203.25a5.851 5.851 0 1 0 0 11.703 5.851 5.851 0 0 0 0-11.703ZM7.101 14.598a5.851 5.851 0 0 0-5.851 5.851V23a.75.75 0 0 0 1.5 0v-2.55a4.351 4.351 0 0 1 4.351-4.351h10.203a4.351 4.351 0 0 1 4.352 4.351V23a.75.75 0 0 0 1.5 0v-2.55a5.851 5.851 0 0 0-5.852-5.851H7.101Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgAccount;
