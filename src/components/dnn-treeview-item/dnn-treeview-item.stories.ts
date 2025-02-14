import { html } from "lit-html";
import { ifDefined } from 'lit-html/directives/if-defined';
import { Meta } from "@storybook/web-components";
import readme from './readme.md';

export default {
    title: "Elements/Treeview Item",
    component: "dnn-treeview-item",
    parameters: {
        notes: readme,
    },
    argTypes: {
        expanded: {
            control: "boolean",
        },
    },
} as Meta;

const Template = (args: {
    expanded: boolean,
}) =>
    html`
        <dnn-treeview-item
            ?expanded=${ifDefined(args.expanded)}
        >
            <span>Root Item</span>
            <dnn-treeview-item slot="children">
                <span>Child 1</span>
            </dnn-treeview-item>
            <dnn-treeview-item slot="children">
                <span>Child 2</span>
            </dnn-treeview-item>
            <dnn-treeview-item slot="children">
                <span>Child 3</span>
            </dnn-treeview-item>
        </dnn-treeview-item>
    `;

export const TreeviewItem = Template.bind({});
TreeviewItem.args = {
    expanded: false,
}