module.exports = {
  purge: [
    './components/**/*.html',
    './components/**/*.jsx',
    './components/**/*.js',
    './pages/**/*.html',
    './pages/**/*.jsx',
    './pages/**/*.js',
  ],
  theme: {
    fontFamily: {
      display: ['DM Sans', 'sans-serif'],
      body: ['DM Sans', 'sans-serif'],
    },
    extend: {
      colors: {
        'primary': '#0F3665',
        'secondary': '#00CCFF',
        'hc-blue-light': '#00CCFF33',
        'hc-green': '#3DDC84',
        'hc-green-light': '#3DDC8499'
      },
    },
  },
};
