import RecipeCard from '@/components/RecipeCard';
import { spacing } from '@/constants/theme';
import { ScrollView, StyleSheet, View } from 'react-native';

type Label = 'vege' | 'vegan';

export interface Recipe {
  id: string;
  name: string;
  price: number;
  labels: Label[];
  image: any;
}

export const recipes: Recipe[] = [
  {
    id: '1',
    name: 'Spaghetti Bolognese',
    price: 32.99,
    labels: [],
    image: require('@/assets/images/spaghetti.jpg'),
  },
  {
    id: '2',
    name: 'Zupa krem z dyni',
    price: 18.5,
    labels: ['vege', 'vegan'],
    image: require('@/assets/images/spaghetti.jpg'),
  },
  {
    id: '3',
    name: 'Risotto grzybowe',
    price: 28.0,
    labels: ['vege'],
    image: require('@/assets/images/spaghetti.jpg'),
  },
  {
    id: '4',
    name: 'Buddha bowl',
    price: 24.99,
    labels: ['vege', 'vegan'],
    image: require('@/assets/images/spaghetti.jpg'),
  },
  {
    id: '5',
    name: 'Kurczak tikka masala',
    price: 35.0,
    labels: [],
    image: require('@/assets/images/spaghetti.jpg'),
  },
  {
    id: '6',
    name: 'Pancakes bananowe',
    price: 22.0,
    labels: ['vege'],
    image: require('@/assets/images/spaghetti.jpg'),
  },
  {
    id: '7',
    name: 'Sałatka quinoa',
    price: 26.5,
    labels: ['vege', 'vegan'],
    image: require('@/assets/images/spaghetti.jpg'),
  },
  {
    id: '8',
    name: 'Łosoś z warzywami',
    price: 42.0,
    labels: [],
    image: require('@/assets/images/spaghetti.jpg'),
  },
  {
    id: '9',
    name: 'Tacos z awokado',
    price: 29.0,
    labels: ['vege', 'vegan'],
    image: require('@/assets/images/spaghetti.jpg'),
  },
  {
    id: '10',
    name: 'Pizza Margherita',
    price: 31.0,
    labels: ['vege'],
    image: require('@/assets/images/spaghetti.jpg'),
  },
];

export default function Index() {
  return (
    <View style={{ padding: 16 }}>
      <ScrollView
        contentContainerStyle={styles.content}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} variant="default" recipe={recipe} />
        ))}
        <RecipeCard variant="showMore" />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    gap: spacing.sm,
  },
});
