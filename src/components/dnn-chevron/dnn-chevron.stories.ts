import { html } from "lit-html";
import { ifDefined } from 'lit-html/directives/if-defined';
import { Meta } from "@storybook/web-components";
import readme from './readme.md';

export default {
    title: 'Elements/Chevron',
    component: 'dnn-chevron',
    parameters: {
        actions: {
            handles: ['changed'],
        },
        notes:  readme,
    },
    argTypes: {
        'expand-text': {
            control: 'text',
        },
        'collapse-text': {
            control: 'text',
        },
        'expanded': {
            control: 'boolean',
          },
        },
} as Meta;

const Template = (args) =>
    html`
        <dnn-chevron
            expand-text=${ifDefined(args.expandText)}
            collapse-text=${ifDefined(args.collapseText)}
            ?expanded=${ifDefined(args.expanded)}>
        </dnn-chevron>
    `;

export const Chevron = Template.bind({});
Chevron.args = {
    expandText: 'expand',
    collapseText: 'collapse',
    expanded: false,
};
