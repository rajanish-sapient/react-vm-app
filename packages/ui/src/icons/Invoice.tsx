import * as React from 'react';
import { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgInvoice = ({
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
      d="M7.455 1.25a.75.75 0 0 0-.75.75v14.705H3.818a2.568 2.568 0 0 0-2.568 2.568V22c0 .414.336.75.75.75h10.91a.75.75 0 0 0 .75-.75v-2.348c0-.809.647-1.447 1.522-1.447h.007c.816.003 1.516.561 1.516 1.522a3.022 3.022 0 1 0 6.046 0V2a.75.75 0 0 0-.75-.75H7.454Zm7.72 15.455h.007c1.534 0 3.023 1.12 3.023 3.022a1.522 1.522 0 1 0 3.046 0V2.75H8.204v13.955h6.97Zm-11.357 1.5h8.718c-.24.42-.377.91-.377 1.447v1.598H2.75v-1.977c0-.59.478-1.068 1.068-1.068Zm7.432-10.75a.75.75 0 0 1 .75-.75h5.454a.75.75 0 1 1 0 1.5H12a.75.75 0 0 1-.75-.75ZM12 11.25a.75.75 0 0 0 0 1.5h5.454a.75.75 0 1 0 0-1.5H12Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgInvoice;
