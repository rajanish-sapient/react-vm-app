import * as React from 'react';
import { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgSubscriptions = ({
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
      d="M21.9.957a.75.75 0 0 1 .643.844l-.8 5.9a.75.75 0 0 1-.842.643l-6-.8a.75.75 0 1 1 .198-1.487l4.438.592C17.89 4.272 15.123 2.75 12 2.75c-5.086 0-9.25 4.164-9.25 9.25a.75.75 0 0 1-1.5 0C1.25 6.086 6.086 1.25 12 1.25c3.474 0 6.588 1.628 8.533 4.216l.524-3.866A.75.75 0 0 1 21.9.957ZM22.75 12a.75.75 0 0 0-1.5 0c0 5.086-4.165 9.25-9.25 9.25-3.124 0-5.892-1.521-7.537-3.898l4.437.591a.75.75 0 1 0 .198-1.486l-6-.8a.75.75 0 0 0-.842.642l-.8 5.9a.75.75 0 0 0 1.486.202l.525-3.867C5.412 21.122 8.525 22.75 12 22.75c5.914 0 10.75-4.836 10.75-10.75Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgSubscriptions;
