import React, { useState } from 'react';
import { Card } from '../Card';
import CardHeader from '../Card/CardHeader';
import { TextField } from '../TextField';
import { FormField } from '../FormField';
import { Button } from '../Button';

export const Login = () => {
  const [formData, setFormData] = useState({ password: '', email: '' });

  return (
    <div className="drop-shadow-xl">
      <Card>
        <div className="divide-y">
          <div className="mb-10">
            <CardHeader>Sign In</CardHeader>
            <FormField className="mt-10">
              <TextField
                type="email"
                htmlFor="email"
                label=" Email*"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                value={formData.email}
                placeholder="Email"
                name="email"
              />
            </FormField>
            <label
              htmlFor="password"
              className="mb-3 mt-10 block text-xs  text-neutral-600"
            >
              Password*
            </label>
            <div className="relative w-full">
              <input
                type="password"
                className="focus:outlineSign w-full rounded-full border border-neutral-300 py-3 pl-6 pr-16 text-neutral-800 outline-neutral-800 placeholder:font-light placeholder:text-stone-400"
                placeholder="Password"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />
              <button className="absolute top-4 right-4 text-xs font-bold text-blue-700">
                show
              </button>
            </div>
            <a
              href="#"
              className="mt-4 inline-block text-xs font-bold text-blue-700"
            >
              Forget password?
            </a>
            <div className="mt-10 flex items-center gap-8">
              <Button type="submit">Sign In</Button>
            </div>
          </div>
          <div className="">
            <h1 className="mt-10 mb-2 text-2xl font-black leading-7 text-neutral-600">
              Don’t Have An Account?
            </h1>
            <p className="mb-10 text-base font-light leading-6 text-neutral-600">
              Create your account today to easily manage past and upcoming
              orders, subscriptions, and invoices.
            </p>
            <Button>Create Your Account</Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

Login.displayName = 'Login';
