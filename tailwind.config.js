module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    maxWidth: {
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      'prd': '375px'
     },

    extend: {
      backgroundImage: theme => ({
        'flori': "url('headimg.png')",
       })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
