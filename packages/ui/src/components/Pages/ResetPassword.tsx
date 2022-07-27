import { useState } from 'react';
import { Card } from '../Card';
import CardHeader from '../Card/CardHeader';
import { Button } from '../Button';
import { Check } from '../../icons';

export const ResetPassword = () => {
  const [formData, setFormData] = useState({
    password: '',
    confirmPassword: '',
  });

  return (
    <div className="mx-6 mt-24 max-w-screen-sm md:mx-auto">
      <Card>
        <CardHeader>Reset Password</CardHeader>
        <p className="mt-6 font-light leading-6">
          Please enter and confirm your new password. Your password must include
          the following:
        </p>
        <div className="mt-10">
          <ul>
            <li className="flex items-center gap-2">
              <span>
                <Check />
              </span>
              <span className="font-bold ">at least 8 characters</span>
            </li>
            <li className="flex items-center gap-2">
              <span>
                <Check />
              </span>
              <span className="font-bold">one lower-case letter</span>
            </li>
            <li className="flex items-center gap-2">
              <span>
                <Check />
              </span>
              <span className="font-bold">one upper-case letter</span>
            </li>
            <li className="flex items-center gap-2">
              <span>
                <Check />
              </span>
              <span className="font-bold">one number</span>
            </li>
            <li className="flex items-center gap-2">
              <span>
                <Check />
              </span>
              <span className="font-bold">
                one of the following symbols: !@#$%^&*
              </span>
            </li>
          </ul>
        </div>
        <label
          htmlFor="password"
          className="mb-3 mt-10 block text-xs  text-neutral-600"
        >
          New Password*
        </label>
        <div className="relative w-full">
          <input
            type="password"
            className="w-full rounded-full border border-neutral-300 py-3 pl-6 pr-16 text-neutral-800 outline-neutral-800 placeholder:font-light placeholder:text-stone-400 focus:outline"
            placeholder="New password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />
          <button className="absolute top-4 right-4 text-xs font-bold text-blue-700">
            show
          </button>
        </div>
        <label
          htmlFor="password"
          className="mb-3 mt-10 block text-xs  text-neutral-600"
        >
          Confirm Password*
        </label>
        <div className="relative w-full">
          <input
            type="password"
            className="focus:outlineSign w-full rounded-full border border-neutral-300 py-3 pl-6 pr-16 text-neutral-800 outline-neutral-800 placeholder:font-light placeholder:text-stone-400"
            placeholder="Confirm password"
            value={formData.confirmPassword}
            onChange={(e) =>
              setFormData({ ...formData, confirmPassword: e.target.value })
            }
          />
          <button className="absolute top-4 right-4 text-xs font-bold text-blue-700">
            show
          </button>
        </div>
        <div className="mt-10">
          <Button wide={true}>Reset Your Password</Button>
        </div>
      </Card>
    </div>
  );
};

ResetPassword.displayName = 'ResetPassword';
