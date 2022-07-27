import React, { useState, useCallback } from 'react';
import { Card } from '../Card';
import CardHeader from '../Card/CardHeader';
import { TextField } from '../TextField';
import { FormField } from '../FormField';
import { TextLink } from '../TextLink';
import { Button } from '../Button';
import { ChevronDown, ChevronLeft } from '../../icons';

export const ConfirmCustomer = () => {
  const [formData, setFormData] = useState({ zip: '', hno: '' });
  const [isCollapsed, setisCollapsed] = useCollapse();

  return (
    <div className="mx-6 mt-24 max-w-screen-sm md:mx-auto">
      <a href="/" className="mb-6 flex items-center font-bold text-neutral-600">
        <span>
          <ChevronLeft className="h-5 w-5" />
        </span>
        <span>Back</span>
      </a>
      <Card>
        <CardHeader>Confirm Your Customer Account</CardHeader>
        <FormField className="mt-10">
          <TextField
            htmlFor="hno"
            label="Customer Number (Sold To #)*"
            onChange={(e) => setFormData({ ...formData, hno: e.target.value })}
            value={formData.hno}
            placeholder="Customer number"
            name="hno"
          />
        </FormField>
        <button
          onClick={setisCollapsed}
          className="mt-4 flex  items-center gap-2 text-xs font-bold text-neutral-600"
        >
          <span> Where is my Customer Sold To Number?</span>

          <span
            className={`${isCollapsed ? `rotate-180` : null} transition-all`}
          >
            <ChevronDown className="h-5 w-5" />
          </span>
        </button>
        {isCollapsed ? (
          <p className="mt-2 text-neutral-600 transition-all	">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
            corrupti.
          </p>
        ) : null}
        <FormField className="mt-10">
          <TextField
            htmlFor="zip"
            label=" Business Zipcode*"
            onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
            value={formData.zip}
            placeholder="Zipcode"
            name="zip"
          />
        </FormField>
        <div className="mt-10 flex items-center gap-8">
          <Button wide={true} type="submit">
            Next
          </Button>
          <TextLink href="/" title="Sign in instead" />
        </div>
      </Card>
    </div>
  );
};

const useCollapse = (initialState = false): [boolean, any] => {
  const [state, setState] = useState<boolean>(initialState);
  const collapse = useCallback((): void => setState((state) => !state), []);
  return [state, collapse];
};

ConfirmCustomer.displayName = 'ConfirmCustomer';
export default ConfirmCustomer;
