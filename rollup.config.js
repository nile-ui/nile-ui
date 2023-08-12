import { babel } from "@rollup/plugin-babel";
import external from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import scss from "rollup-plugin-scss";
import typescript from "@rollup/plugin-typescript";
import { terser } from "rollup-plugin-terser";

export default [
  {
    input: "./src/index.ts",
    output: [
      {
        file: "dist/index.common.js",
        format: "cjs",
      },
      {
        file: "dist/index.es.js",
        format: "es",
        exports: "named",
      },
      {
        dir: "dist/esm/",
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      scss({
        output: true,
        failOnError: true,
        outputStyle: "compressed",
      }),
      babel({
        exclude: "node_modules/**",
        presets: ["@babel/preset-react"],
      }),
      external(),
      resolve({ browser : true }),
      typescript(),
      terser(),
    ],

  },
];
