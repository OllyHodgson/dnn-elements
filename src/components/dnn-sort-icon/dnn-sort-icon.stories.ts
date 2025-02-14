import { html } from "lit-html";
import { Meta } from "@storybook/web-components";
import readme from "./readme.md";
import { ifDefined } from "lit-html/directives/if-defined";
import { injectStyles } from "../../../.storybook/utilities";

export default {
    title: "Elements/Sort Icon",
    component: 'dnn-sort-icon',
    parameters: {
        notes: readme,
        actions: {
            handles: ['sortChanged'],
        },
    },
    argTypes: {
        'sortDirection': {
            options: ['asc', 'desc', 'none'],
            control: {
                type: 'radio',
            },
            defaultValue: "none",
        },
        'sort-direction': {
            options: ['asc', 'desc', 'none'],
            control: {
                type: 'radio',
            },
            defaultValue: "none",
        },
        '--color': {
            control: {
                type: 'color'
            }
        },
        '--color-hover': {
            control: {
                type: 'color'
            }
        },
        '--color-sorted': {
            control: {
                type: 'color'
            }
        },
    },
} as Meta;

const Template = (args: {
    sortDirection: "asc" | "desc" | "none",
    color: string;
}, context) =>
    {
        return html`
            <dnn-sort-icon
                style=${ifDefined(injectStyles(args, context))}
                .sortDirection=${ifDefined(args.sortDirection)}
            />
        `;
    }

export const SortIcon = Template.bind({});
SortIcon.args = {
    sortDirection: "none",
};