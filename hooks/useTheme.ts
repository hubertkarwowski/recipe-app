import { darkColors, lightColors } from '@/constants/theme';
import { useColorScheme } from 'react-native';

export const useTheme = () => {
  const scheme = useColorScheme();

  return scheme === 'light' ? lightColors : darkColors;
};
