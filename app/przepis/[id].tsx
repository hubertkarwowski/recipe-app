import RecipeCard from '@/components/RecipeCard';
import { Image } from 'expo-image';
import {
  Linking,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { recipes } from '../(tabs)';

// data/ingredients.ts

export interface Ingredient {
  id: string;
  name: string;
  amount: string;
  emoji: string;
}

export const spaghettiIngredients: Ingredient[] = [
  { id: '2', name: 'Mięso mielone', amount: '500g', emoji: '🥩' },
  { id: '3', name: 'Cebula', amount: '1 sztuka', emoji: '🧅' },
  { id: '4', name: 'Czosnek', amount: '3 ząbki', emoji: '🧄' },
  { id: '5', name: 'Pomidory z puszki', amount: '400g', emoji: '🍅' },
  { id: '6', name: 'Koncentrat pomidorowy', amount: '2 łyżki', emoji: '🥫' },
  { id: '7', name: 'Marchewka', amount: '1 sztuka', emoji: '🥕' },
  { id: '8', name: 'Seler naciowy', amount: '2 łodygi', emoji: '🌿' },
  { id: '9', name: 'Oliwa z oliwek', amount: '2 łyżki', emoji: '🫒' },
  { id: '10', name: 'Czerwone wino', amount: '100ml', emoji: '🍷' },
  { id: '11', name: 'Bulion wołowy', amount: '200ml', emoji: '🍲' },
  { id: '12', name: 'Parmezan', amount: '50g', emoji: '🧀' },
  { id: '13', name: 'Sól', amount: 'do smaku', emoji: '🧂' },
  { id: '14', name: 'Pieprz czarny', amount: 'do smaku', emoji: '🫙' },
  { id: '15', name: 'Liść laurowy', amount: '2 sztuki', emoji: '🌿' },
];

export default function RecipeScreen() {
  const insets = useSafeAreaInsets();
  return (
    <ScrollView>
      <View>
        <View>
          <Image />
        </View>
        <Text>Spaghetti Bolognese</Text>
        <Text>60 min</Text>
        <View>
          <Text>Vege</Text>
          <Text>Vegan</Text>
        </View>
        <View>
          <Text>Składniki</Text>
          {spaghettiIngredients.map((item) => (
            <Text key={item.id}>{item.name}</Text>
          ))}
        </View>
        <Pressable
          onPress={() =>
            Linking.openURL(
              'https://www.przepisy.pl/przepis/spaghetti-bolognese'
            )
          }
        >
          <Text>Link do przepisu</Text>
        </Pressable>
      </View>
      <View>
        <Text>Inne przepisy</Text>
        {recipes.map((recipe) => (
          <Pressable key={recipe.id} onPress={() => {}}>
            <RecipeCard variant="default" recipe={recipe} />
          </Pressable>
        ))}
      </View>
      <View style={[styles.footer, { paddingBottom: insets.bottom + 16 }]}>
        <Pressable style={styles.button} onPress={() => {}}>
          <Text style={styles.buttonText}>Zapisz przepis</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#FDFAF7',
    borderTopWidth: 0.5,
    borderTopColor: '#EDE6DD',
    paddingHorizontal: 16,
    paddingTop: 12,
  },
  button: {
    backgroundColor: '#E8835A',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 15,
    fontFamily: 'Montserrat_600SemiBold',
  },
});
