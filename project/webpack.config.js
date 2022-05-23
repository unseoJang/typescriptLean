import { resolve } from 'path';
import { ProgressPlugin } from 'webpack';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';

export const mode = 'production';
export const entry = './src/app.ts';
export const output = {
  filename: 'app.js',
  path: resolve(__dirname, 'dist'),
};
export const module = {
  rules: [
    {
      test: /\.ts$/,
      use: 'ts-loader',
      exclude: /node_modules/,
    },
  ],
};
export const plugins = [new ProgressPlugin(), new CleanWebpackPlugin()];
