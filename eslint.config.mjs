import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    // Build output of OpenNext and Wrangler:
    ".open-next/**",
    ".wrangler/**",
    "**/devlink/**",
    // Generated DevLink output (webflow.json devlink-export.rootDir):
    "src/webflow/**",
  ]),
]);

export default eslintConfig;
