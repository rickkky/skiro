import light from './light';
import * as monaco from 'monaco-editor';

export const defineThemes = () => {
  monaco.editor.defineTheme(light.id, light.themeData);
};

export const themes = {
  light,
};
