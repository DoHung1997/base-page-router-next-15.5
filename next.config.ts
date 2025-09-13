import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  i18n: {
    locales: ["en", "vi"],
    defaultLocale: 'en'
  },
  webpack: (config) => {
    // camelCase style names from css modules
    config.module.rules
        ?.find(({oneOf}: {oneOf : any}) => !!oneOf).oneOf
        .filter(({use}: {use : any}) => JSON.stringify(use)?.includes('css-loader'))
        .reduce((acc: any, {use}: {use : any}) => acc.concat(use), [])
        .forEach(({options}: {options : any}) => {
          if (options.modules) {
            options.modules.exportLocalsConvention = 'camelCase';
          }
        });
    return config;
  },
  transpilePackages: [
    // antd & deps
    "@ant-design",
    "@rc-component",
    "antd",
    "rc-cascader",
    "rc-checkbox",
    "rc-collapse",
    "rc-dialog",
    "rc-drawer",
    "rc-dropdown",
    "rc-field-form",
    "rc-image",
    "rc-input",
    "rc-input-number",
    "rc-mentions",
    "rc-menu",
    "rc-motion",
    "rc-notification",
    "rc-pagination",
    "rc-picker",
    "rc-progress",
    "rc-rate",
    "rc-resize-observer",
    "rc-segmented",
    "rc-select",
    "rc-slider",
    "rc-steps",
    "rc-switch",
    "rc-table",
    "rc-tabs",
    "rc-textarea",
    "rc-tooltip",
    "rc-tree",
    "rc-tree-select",
    "rc-upload",
    "rc-util",
  ]
};

export default nextConfig;
