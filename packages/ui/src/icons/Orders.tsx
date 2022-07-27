import * as React from 'react';
import { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgOrders = ({
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
    <g clipPath="url(#orders_svg__a)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.393.429a.75.75 0 0 1 .75-.75h19.836a.75.75 0 0 1 .75.75v23.143a.75.75 0 0 1-1.166.624l-2.89-1.927-2.89 1.927a.75.75 0 0 1-.832 0l-2.89-1.927-2.89 1.927a.75.75 0 0 1-.832 0l-2.89-1.927-2.89 1.927a.75.75 0 0 1-1.166-.624V.429Zm1.5.75V22.17l2.14-1.427a.75.75 0 0 1 .832 0l2.89 1.927 2.89-1.927a.75.75 0 0 1 .832 0l2.89 1.927 2.89-1.927a.75.75 0 0 1 .832 0l2.14 1.427V1.18H2.893ZM5.8 7.04a.75.75 0 0 1 .75-.75h5.51a.75.75 0 0 1 0 1.5h-5.51a.75.75 0 0 1-.75-.75Zm10.668-.75a.75.75 0 1 0 0 1.5h1.102a.75.75 0 0 0 0-1.5h-1.102ZM5.8 11.449a.75.75 0 0 1 .75-.75h5.51a.75.75 0 0 1 0 1.5h-5.51a.75.75 0 0 1-.75-.75Zm10.668-.75a.75.75 0 1 0 0 1.5h1.102a.75.75 0 0 0 0-1.5h-1.102ZM5.8 15.857a.75.75 0 0 1 .75-.75h5.51a.75.75 0 0 1 0 1.5h-5.51a.75.75 0 0 1-.75-.75Zm10.668-.75a.75.75 0 1 0 0 1.5h1.102a.75.75 0 0 0 0-1.5h-1.102Z"
        fill="currentColor"
      />
    </g>
    <defs>
      <clipPath id="orders_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgOrders;
