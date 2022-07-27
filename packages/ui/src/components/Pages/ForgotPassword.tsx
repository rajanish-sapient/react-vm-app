import { useState } from 'react';
import { Card } from '../Card';
import CardHeader from '../Card/CardHeader';
import { TextField } from '../TextField';
import { FormField } from '../FormField';
import { Button } from '../Button';

export const ForgotPassword = () => {
  const [formData, setFormData] = useState({ email: '' });

  return (
    <div className="mx-6 mt-24 max-w-screen-sm md:mx-auto">
      <Card>
        <CardHeader>Forgot Your Password?</CardHeader>
        <p className="mt-6 font-light leading-6">
          Enter the associated email address and we'll send you a link to reset
          your password
        </p>
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
        <div className="mt-10">
          <Button wide={true}>Create Your Account</Button>
        </div>
      </Card>
    </div>
  );
};

ForgotPassword.displayName = 'ForgotPassword';
