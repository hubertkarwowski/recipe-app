import { Montserrat_600SemiBold } from '@expo-google-fonts/montserrat';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';

export default function RootLayout() {
  const [loaded] = useFonts({
    Montserrat_600SemiBold,
  });

  if (!loaded) {
    return null;
  }

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="przepis/[id]"
        options={{
          title: '',
          headerBackTitle: '',
          headerTintColor: '#E8835A',
          headerStyle: { backgroundColor: '#FDFAF7' },
          headerShadowVisible: false,
        }}
      />
    </Stack>
  );
}
