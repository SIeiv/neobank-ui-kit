import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import { playwright } from '@vitest/browser-playwright';
import dts from 'vite-plugin-dts';

const dirname = typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url));

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
export default defineConfig({
    plugins: [
        react(),
        dts({
            insertTypesEntry: true,
            tsconfigPath: './tsconfig.build.json',
            rollupTypes: true,
        }),
    ],
    test: {
        projects: [
            {
                extends: true,
                plugins: [
                    // The plugin will run tests for the stories defined in your Storybook config
                    // See options at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon#storybooktest
                    storybookTest({
                        configDir: path.join(dirname, '.storybook'),
                    }),
                ],
                test: {
                    name: 'storybook',
                    browser: {
                        enabled: true,
                        headless: true,
                        provider: playwright({}),
                        instances: [
                            {
                                browser: 'chromium',
                            },
                        ],
                    },
                },
            },
        ],
    },
    build: {
        // Режим библиотеки
        lib: {
            entry: path.resolve(dirname, 'src/index.ts'),
            name: 'NeobankUiKit',
            fileName: (format) => `neobank-ui-kit.${format}.js`,
        },
        rollupOptions: {
            external: ['react', 'react-dom', 'react/jsx-runtime'],
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM',
                    'react/jsx-runtime': 'ReactJSXRuntime',
                },
                assetFileNames: (assetInfo) => {
                    if (assetInfo.name?.endsWith('.svg')) {
                        return 'assets/[name][extname]';
                    }
                    if (assetInfo.name?.endsWith('.css')) {
                        return '[name][extname]';
                    }
                    return 'assets/[name]-[hash][extname]';
                },
            },
        },
        assetsInlineLimit: 0,
        sourcemap: true,
        emptyOutDir: true,
    },
});
