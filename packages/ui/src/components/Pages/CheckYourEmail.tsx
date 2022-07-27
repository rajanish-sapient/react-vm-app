import { Card } from '../Card';
import CardHeader from '../Card/CardHeader';

export const CheckYourEmail = () => {
  return (
    <div className="mx-6 mt-24 max-w-screen-sm md:mx-auto">
      <Card>
        <CardHeader>Check Your Email</CardHeader>
        <p className="mt-6 font-light leading-6">
          An email has been sent to your inbox. Please follow the instructions
          to reset your password.
        </p>
        <p className="mt-6 font-light leading-6">
          For further assistance, please call 1-800-226-5428.
        </p>
      </Card>
    </div>
  );
};

CheckYourEmail.displayName = 'CheckYourEmail';
