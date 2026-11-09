
import React from 'react';
import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';

const pages = import.meta.glob('./pages/**/*.tsx', {
    eager: true,
});

createInertiaApp({
    resolve: (name) => pages[`./pages/${name}.tsx`],

    setup({ el, App, props }) {
        createRoot(el).render(
            React.createElement(App, props)
        );
    },
});

