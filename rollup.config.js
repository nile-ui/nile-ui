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
        sourcemap: true,
      },
      {
        file: "dist/index.es.js",
        format: "es",
        exports: "named",
        sourcemap: true,
      },
      {
        dir: "dist/esm/",
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      scss({
        fileName: 'nile-ui.css',
        sourceMap: true,
        output: true,
        failOnError: true,
        outputStyle: "compressed",
        include: ['./src/scss/**/*.scss'],
      }),
      babel({
        exclude: "node_modules/**",
        presets: ["@babel/preset-react"],
      }),
      external(),
      resolve({ browser : true }),
      typescript({
        sourceMap: true,
      }),
      terser(),
    ],

  },
];
