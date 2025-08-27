// eslint.config.js
import nextPlugin from "@next/eslint-plugin-next";
import js from "@eslint/js";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import prettier from "eslint-plugin-prettier";
import globals from "globals";

/** @type {import("eslint").Linter.FlatConfig[]} */
export default [
    {
        ignores: ["node_modules", ".next", "out", "dist"], // things we don’t lint
    },
    {
        files: ["**/*.{js,jsx,ts,tsx}"],
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "module",
            globals: {
                ...globals.browser,
                ...globals.node,
            },
        },
        plugins: {
            react,
            "react-hooks": reactHooks,
            prettier,
            "@next/next": nextPlugin,
        },
        rules: {
            ...js.configs.recommended.rules,
            ...react.configs.recommended.rules,
            ...reactHooks.configs.recommended.rules,
            ...nextPlugin.configs["core-web-vitals"].rules,

            // Prettier integration
            "prettier/prettier": "warn",

            // Custom tweaks
            "react/react-in-jsx-scope": "off", // Next.js handles React import
            "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
        },
        settings: {
            react: {
                version: "detect",
            },
        },
    },
];
