/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./{src,pages,components,app}/**/*.{ts,tsx,js,jsx,html}",
        "!./{src,pages,components,app}/**/*.{stories,spec}.{ts,tsx,js,jsx,html}",
        //     ...createGlobPatternsForDependencies(__dirname)
    ],
    theme: {
        extend: {
            colors: {
                blueGrey: {
                    50: "#eceff1",
                    100: "#cfd8dc",
                    200: "#b0bec5",
                    300: "#90a4ae",
                    400: "#78909c",
                    500: "#607d8b",
                    600: "#546e7a",
                    700: "#455a64",
                    800: "#37474f",
                    900: "#263238",
                    A100: "#cfd8dc",
                    A200: "#b0bec5",
                    A400: "#78909c",
                    A700: "#455a64",
                },
            },
        },
    },
    plugins: [],
};
