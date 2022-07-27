import * as React from 'react';
import SocialFacebook from '../../icons/SocialFacebook';
import SocialInstagram from '../../icons/SocialInstagram';
import SocialLinkedIn from '../../icons/SocialLinkedIn';

export interface FooterColTypeLink {
  name: string;
  title: string;
  links: Array<{
    label: string;
    path: string;
    target: string;
    emphasize?: boolean;
  }>;
}

export interface FooterColTypeContact {
  name: string;
  title: string;
  contact: string;
  social_handles: Array<{
    name: string;
    url: string;
  }>;
  office_schedule: Array<{
    day: string;
    time: string;
  }>;
}

export type FooterColType = FooterColTypeLink | FooterColTypeContact;
export interface FooterProps {
  footerCols: Array<FooterColType>;
  footerLogoUrl: string;
}

export const Footer = ({ footerCols, footerLogoUrl }: FooterProps) => {
  const totalCols = footerCols.length;
  const getFooterLinks = (col: FooterColType): col is FooterColTypeLink => {
    return 'links' in col;
  };
  const getFooterSocial = (col: FooterColType): col is FooterColTypeContact => {
    return 'social_handles' in col;
  };

  const linksData = footerCols.filter(getFooterLinks);
  const socialData = footerCols.filter(getFooterSocial)[0];
  let gridClass;

  if (totalCols === 4) {
    gridClass = 'grid-cols-1 grid lg:grid-cols-4 gap-4';
  } else if (totalCols === 3) {
    gridClass = 'grid-cols-1 grid lg:grid-cols-3 gap-4';
  } else {
    gridClass = 'grid-cols-1 grid lg:grid-cols-4 gap-4';
  }

  return (
    <footer id="site-footer" className="relative bg-black" role="footer">
      <div className="footer-inner container py-5 text-center text-white lg:py-12 lg:text-left">
        <div className={`${gridClass}`}>
          {linksData.map((linkCol, index) => (
            <FooterLinkColumn key={index} linkColumnData={linkCol} />
          ))}

          <FooterSocialColumn socialColumnData={socialData} />
        </div>

        <div className="mt-16 flex flex-col items-center justify-center text-center lg:flex-row lg:justify-start lg:text-left">
          <div className="logo mr-0 mb-6 lg:mb-0 lg:mr-14">
            <img src={footerLogoUrl} className="w-52" alt="footer logo" />
          </div>

          <p className="text-[12px]">
            © 2022 CP Skin Health. All Rights Reserved.{' '}
          </p>
        </div>
      </div>
    </footer>
  );
};

Footer.displayName = 'Footer';

export interface FooterLinkColumnProps {
  linkColumnData: FooterColTypeLink;
}

const FooterLinkColumn = ({ linkColumnData }: FooterLinkColumnProps) => {
  return (
    <div className="mb-3 lg:mb-0">
      <ul>
        <li className="block">
          <span className="block py-2 font-bold lg:py-3">
            {linkColumnData.title}
          </span>
        </li>
        {linkColumnData.links?.map((link) => {
          return (
            <li
              key={link.label}
              className={`block ${link.emphasize ? 'font-bold' : ''}`}
            >
              <a
                className="block py-2 lg:py-3"
                href={link.path}
                title={link.label}
                target={link.target}
              >
                {link.label}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export interface FooterSocialColumnProps {
  socialColumnData: FooterColTypeContact;
}

const FooterSocialColumn = ({ socialColumnData }: FooterSocialColumnProps) => {
  return (
    <div className="mt-4 lg:mt-0">
      <ul className="social_group flex justify-center py-2 lg:justify-start lg:py-3">
        {socialColumnData.social_handles.map((handle, index) => {
          return (
            <li key={index} className="mx-6 basis-0 lg:mx-0 lg:basis-20">
              <a
                href={handle.url}
                title={handle.name}
                target="_blank"
                rel="noreferrer"
              >
                {handle.name === 'facebook' ? (
                  <SocialFacebook className="h-6 w-6" />
                ) : handle.name === 'instagram' ? (
                  <SocialInstagram className="h-6 w-6" />
                ) : handle.name === 'linkedin' ? (
                  <SocialLinkedIn className="h-6 w-6" />
                ) : null}
              </a>
            </li>
          );
        })}
      </ul>

      <div className="help mt-12">
        <a href="/" className="font-bold">
          Need Help?
        </a>

        <p className="contact mt-4">
          Call <span>{socialColumnData.contact}</span>
        </p>
      </div>

      <div className="mt-6">
        {socialColumnData.office_schedule?.map((schedule, index) => {
          return (
            <p key={index}>
              <span className="font-bold">{schedule.day}</span>:
              <span> {schedule.time}</span>
            </p>
          );
        })}
      </div>
    </div>
  );
};
