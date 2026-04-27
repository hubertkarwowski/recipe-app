import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="saved"
        options={{ title: 'Zapisane', headerShown: true }}
      />
      <Tabs.Screen
        name="index"
        options={{ title: 'Przepisy', headerShown: true }}
      />
      <Tabs.Screen
        name="settings"
        options={{ title: 'Ustawienia', headerShown: true }}
      />
    </Tabs>
  );
}
