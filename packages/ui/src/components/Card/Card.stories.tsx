import React, { useState, useCallback } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Card } from './Card';
import CardHeader from './CardHeader';
import { TextField } from '../TextField';
import { FormField } from '../FormField';
import { TextLink } from '../TextLink';
import { Button } from '../Button';
import { ChevronDown } from '../../icons';

export default {
  title: 'Card',
  component: Card,
  parameters: {
    backgrounds: {
      default: 'gray',
      values: [{ name: 'gray', value: '#E5E5E5' }],
    },
  },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => {
  const [formData, setFormData] = useState({ zip: '', hno: '', email: '' });
  const [isCollapsed, setisCollapsed] = useCollapse();

  return (
    <Card {...args}>
      <CardHeader>Register</CardHeader>
      <FormField className="mt-10">
        <TextField
          type="email"
          htmlFor="email"
          label=" Email*"
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          value={formData.email}
          placeholder="Email"
          name="email"
        />
      </FormField>

      <FormField className="mt-10">
        <TextField
          htmlFor="hno"
          label="Customer Number (Sold To #)*"
          onChange={(e) => setFormData({ ...formData, hno: e.target.value })}
          value={formData.hno}
          placeholder="Henry Schein customer number"
          name="hno"
        />
      </FormField>
      <button
        onClick={setisCollapsed}
        className="font-colgate-medium mt-4 flex  items-center gap-2 text-xs font-bold text-neutral-600 hover:cursor-pointer"
      >
        <span> Where is my Customer Sold To Number?</span>

        <span className={`${isCollapsed ? `rotate-180` : null} transition-all`}>
          <ChevronDown />
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
        <Button type="submit">Next</Button>
        <TextLink href="/" title="Sign in instead" />
      </div>
    </Card>
  );
};

const useCollapse = (initialState = false): [boolean, any] => {
  const [state, setState] = useState<boolean>(initialState);
  const collapse = useCallback((): void => setState((state) => !state), []);
  return [state, collapse];
};

export const Registration = Template.bind({});
