export const colors = {
  // Neutralne bazy — ciepłe beże
  background: '#FDFAF7',
  surface: '#F5F0EA',
  border: '#EDE6DD',

  // Tekst
  textPrimary: '#2E2820',
  textSecondary: '#8C8070',

  // Akcent — pastelowy pomarańcz
  accentTint: '#FFF0E6',
  accentLight: '#FFDCC4',
  accentMuted: '#F5A97A',
  accent: '#E8835A', // główny CTA, ikony aktywne
  accentDark: '#C4683A', // tekst na jasnym tle akcent

  // Wspierające pastele (do labeli, tagów)
  sageLight: '#EEF5EE',
  sageMid: '#79A87C',
  lavenderLight: '#F0EBF6',
  lavenderMid: '#9E82BA',
  blushLight: '#FDF0E8',
  blushMid: '#D4887A',
} as const;

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
};

export const radius = {
  sm: 6,
  md: 12,
  lg: 20,
};

export const fontSize = {
  sm: 12,
  md: 16,
  lg: 18,
  xl: 24,
  xxl: 32,
};

export const iconSize = {
  sm: 24,
  md: 32,
  lg: 40,
};
