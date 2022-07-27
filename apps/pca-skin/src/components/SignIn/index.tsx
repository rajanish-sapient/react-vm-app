/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import { TextField, FormField, Button, CardHeader, Card } from 'ui';
import gigya from '../../lib/gigya';

const SignIn = () => {
  const [formData, setFormData] = useState({ password: '', email: '' });

  const handleSubmit = (e: any) => {
    console.log(e.response);
  };

  const loadScreen = () => {
    gigya?.accounts.showScreenSet({
      screenSet: 'Default-RegistrationLogin',
      containerID: 'userLogin',
      onAfterSubmit: handleSubmit,
    });
  };
  useEffect(() => {
    loadScreen();
  }, []);
  return (
    <div className="drop-shadow-xl">
      <Card>
        <div className="divide-y">
          <div className="mb-10">
            {gigya ? (
              <div id="userLogin"></div>
            ) : (
              <>
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
                  className="mb-3 mt-10 block text-xs  text-[#555859]"
                >
                  Password*
                </label>
                <div className="relative w-full">
                  <input
                    type="password"
                    className="focus:outlineSign w-full rounded-full border border-[#D6D6D6] py-3 pl-6 pr-16 text-[#3c3939] outline-[#3C3939] placeholder:font-light placeholder:text-[#959392]"
                    placeholder="Password"
                    value={formData.password}
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                  />
                  <button className="absolute top-4 right-4 text-xs font-bold text-[#125CE0]">
                    show
                  </button>
                </div>
                <a
                  href="#"
                  className="mt-4 inline-block text-xs font-bold text-[#125CE0]"
                >
                  Forget password?
                </a>
                <div className="mt-10 flex items-center gap-8">
                  <Button type="submit" wide={true}>
                    Sign In
                  </Button>
                </div>
              </>
            )}
          </div>
          <div className="">
            <h1 className="mt-10 mb-2 text-2xl font-black leading-7 text-[#555859]">
              Don’t Have An Account?
            </h1>
            <p className="mb-10 text-base font-light leading-6 text-[#555859]">
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

export default SignIn;
