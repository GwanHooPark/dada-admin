import summary from 'rollup-plugin-summary';
import { terser } from 'rollup-plugin-terser';
import resolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import pkg from "./package.json";
const extensions = ['.js', '.jsx', '.ts', '.tsx'];

export default {
    input: './src/my-element.ts',
    output: [
        {
            sourcemap: true,
            file: pkg.main,
            format: "cjs",
        },
        {
            sourcemap: true,
            file: pkg.module,
            format: "esm",
        },
    ],
    onwarn(warning) {
        if (warning.code !== 'THIS_IS_UNDEFINED') {
            console.error(`(!) ${warning.message}`);
        }
    },
    plugins: [
        replace({ 'Reflect.decorate': 'undefined' }),
        resolve({ extensions }),
        terser({
            ecma: 2017,
            module: true,
            warnings: true,
            mangle: {
                properties: {
                    regex: /^__/,
                },
            },
        }),
        summary(),
    ],
};
