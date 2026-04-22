import { LABEL_CONFIG } from '@/constants/foodLabels';
import { fontSize, iconSize, radius, spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/useTheme';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Image } from 'expo-image';
import { Platform, StyleSheet, Text, View } from 'react-native';

interface Props {
  recipe?: any;
  variant: 'default' | 'showMore';
  isFavorite?: boolean;
}

export default function RecipeCard({ variant, recipe, isFavorite }: Props) {
  const theme = useTheme();

  if (variant === 'default') {
    return (
      <View style={[styles.container, { backgroundColor: theme.background }]}>
        <Image source={recipe.image} alt="Image" style={styles.image} />
        <View style={styles.favorite}>
          <Ionicons
            name={isFavorite ? 'heart' : 'heart-outline'}
            size={iconSize.sm}
          />
        </View>

        <View>
          <Text
            style={[
              styles.name,
              {
                fontFamily: Platform.select({
                  android: 'Montserrat_700Bold',
                  ios: 'Montserrat-Bold',
                }),
              },
            ]}
          >
            {recipe.name}
          </Text>
          {recipe.labels.length > 0 && (
            <View style={styles.labels}>
              {recipe.labels.map((label) => (
                <View key={label} style={styles.foodLabel}>
                  <Text>{LABEL_CONFIG[label].text}</Text>
                </View>
              ))}
            </View>
          )}
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text>Więcej przepisów</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: 240,
    borderRadius: radius.sm,
    overflow: 'hidden',
  },
  name: {
    fontSize: fontSize.lg,
  },
  labels: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: spacing.sm,
  },
  foodLabel: {
    padding: spacing.sm,
  },
  image: {
    width: '100%',
    height: 150,
  },
  favorite: {
    position: 'absolute',
    top: 8,
    right: 8,
  },
});
