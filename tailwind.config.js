import forms from '@tailwindcss/forms';
import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            colors: {
                primary: '#FFFFFF',
                secondary: '#E0E0E0',
                textPrimary: '#222222',
                textSecondary: '#444444',
                buttonPrimary: '#FFB400',
                buttonSecondary: '#444444',
                buttonHoverPrimary: '#E09B00',
                buttonHoverSecondary: '#333333',
                line: '#E0E0E0',
                success: '#28A745',
                warning: '#FFC107',
                error: '#DC3545',
            },
            fontFamily: {
                poppins: ['Poppins', ...defaultTheme.fontFamily.sans],
            },
        },
    },

    plugins: [forms, require('tailwind-scrollbar-hide')],
};
