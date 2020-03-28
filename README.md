# react-boilerplate

This is a react boilerplate using parcel.

## Installation

### Configure Babel (Optional)

If you want to customize babel settings, install the following packages:

```bash
npm install -D babel-eslint @babel/core @babel/preset-env @babel/preset-react
```

Install the plugins you want to enable. For example, class properties:

```bash
npm install -D @babel/plugin-proposal-class-properties
```

Create a file `.babelrc`:

```json
{
  "presets": ["@babel/preset-react", "@babel/preset-env"],
  "plugins": ["@babel/plugin-proposal-class-properties"]
}
```

Add the following to `.eslintrc.json`:

```json
{
  "parser": "babel-eslint"
}
```
