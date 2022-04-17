import type * as monaco from 'monaco-editor';

const baseScheme = {
  white: '#ffffff',
  black: '#000000',
  brown: '#916b53',
  red: '#e53935',
  green: '#91b859',
  blue: '#6182b8',
  yellow: '#e2931d',
  orange: '#f76d47',
  cyan: '#39adb5',
  pink: '#ff5370',
  purple: '#9c3eda',
  violet: '#945eb8',
};

const scheme = {
  background: '#fdfdfd',
  foreground: '#90a4ae',
  selection: '#f0f0f0',
  lineHightlight: '#f8f8f8',
  lineNumbers: '#cfd8dc',
  lineNumberActive: '#7e939e',
  scrollbars: '#90a4ae10',
  scrollbarsHover: '#90a4ae20',
  scrollbarsActive: '#90a4ae40',
};

const themeData: monaco.editor.IStandaloneThemeData = {
  base: 'vs',
  inherit: true,
  rules: [{ token: 'keyword.md', foreground: baseScheme.blue }],
  colors: {
    'editor.background': scheme.background,
    'editor.foreground': scheme.foreground,
    'editor.lineHighlightBackground': scheme.lineHightlight,
    'editor.selectionBackground': scheme.selection,
    'editorCursor.foreground': scheme.foreground,
    'editorLineNumber.foreground': scheme.lineNumbers,
    'editorLineNumber.activeForeground': scheme.lineNumberActive,
    'scrollbarSlider.background': scheme.scrollbars,
    'scrollbarSlider.hoverBackground': scheme.scrollbarsHover,
    'scrollbarSlider.activeBackground': scheme.scrollbarsActive,
  },
};

export default {
  id: 'light',
  themeData,
};
