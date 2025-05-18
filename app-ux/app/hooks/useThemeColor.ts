import { useColorScheme as useNativeColorScheme } from 'react-native';

// Definições de cores
export const Colors = {
  light: {
    primary: '#2F3D72',
    background: '#FFFFFF',
    card: '#FFFFFF',
    text: '#000000',
    border: '#E5E5E5',
    notification: '#FF3B30',
  },
  dark: {
    primary: '#2F3D72',
    background: '#FCFDFF',
    card: '#1E1E1E',
    text: '#FFFFFF',
    border: '#272729',
    notification: '#FF453A',
  },
};

export type ColorName = 'primary' | 'background' | 'card' | 'text' | 'border' | 'notification';
export type ThemeType = 'light' | 'dark';

export default function useColorScheme(): ThemeType {
  const colorScheme = useNativeColorScheme() as ThemeType;
  return colorScheme || 'light';
}


export function useThemeColor(colorName: ColorName): string {
  const theme = useColorScheme();
  return Colors[theme][colorName];
}