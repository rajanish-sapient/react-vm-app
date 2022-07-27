import React from 'react';
import { Card } from '../Card';
import CardHeader from '../Card/CardHeader';

export const VerifyEmail = () => {
  return (
    <div className="mx-6 mt-24 max-w-screen-sm md:mx-auto">
      <Card>
        <CardHeader>Thanks for Signing Up!</CardHeader>
        <p className="mt-6 font-light leading-6">
          A confirmation email has been sent to
          <span className="font-bold">{` patricia.long@west9thdental.com`}</span>
          .
        </p>
        <p className="mt-6 font-light leading-6">
          Please check your inbox and use the verification link to complete the
          registration.
        </p>
        <p className="mt-6 font-light leading-6">
          If the email hasn't arrived within 3 minutes, please try resending
          again.
        </p>
        <a
          href="/"
          className="mt-10 block text-base font-bold text-blue-700 hover:text-stone-900"
        >
          Resend verification email
        </a>
      </Card>
    </div>
  );
};

VerifyEmail.displayName = 'VerifyEmail';
export default VerifyEmail;
