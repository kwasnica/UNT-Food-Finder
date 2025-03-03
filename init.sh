#!/usr/bin/env sh

echo 1>&2 "[INFO] Installing webpack dependencies..."
npm i --save-dev webpack webpack-cli webpack-dev-server html-webpack-plugin autoprefixer css-loader postcss-loader sass sass-loader style-loader mini-css-extract-plugin

echo 1>&2 "[INFO] Installing bootstrap dependencies..."
npm i --save bootstrap @popperjs/core
