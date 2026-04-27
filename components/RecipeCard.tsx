import { LABEL_CONFIG } from '@/constants/foodLabels';
import { colors, fontSize, iconSize, radius, spacing } from '@/constants/theme';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Image } from 'expo-image';
import { StyleSheet, Text, View } from 'react-native';

interface Props {
  recipe?: any;
  variant: 'default' | 'showMore';
  isFavorite?: boolean;
}

export default function RecipeCard({ variant, recipe, isFavorite }: Props) {
  if (variant === 'showMore') {
    return (
      <View style={[styles.container, styles.showMore]}>
        <View style={styles.showMoreIcon}>
          <Ionicons
            name="arrow-forward-outline"
            size={16}
            color={colors.textSecondary}
          />
        </View>
        <Text style={styles.showMoreText}>Więcej przepisów</Text>
      </View>
    );
  }

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Image source={recipe.image} alt="Image" style={styles.image} />
      <View style={styles.favorite}>
        <Ionicons
          name={isFavorite ? 'heart' : 'heart-outline'}
          size={iconSize.sm}
          color={colors.accent}
        />
      </View>

      <View style={styles.body}>
        <Text
          style={[styles.name, { fontFamily: 'Montserrat_600SemiBold' }]}
          numberOfLines={2}
        >
          {recipe.name}
        </Text>
        <View
          style={{
            height: 1,
            backgroundColor: colors.surface,
          }}
        />
        {recipe.labels?.length > 0 && (
          <>
            <View style={styles.divider} />
            <View style={styles.labels}>
              {recipe.labels.map((label: string) => (
                <View key={label} style={styles.foodLabel}>
                  <Text style={styles.labelText}>
                    {LABEL_CONFIG[label]?.text ?? label}
                  </Text>
                </View>
              ))}
            </View>
          </>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: 200,
    borderRadius: radius.sm,
    overflow: 'hidden',
    borderWidth: 0.5,
    borderColor: colors.border,
    backgroundColor: colors.background,
  },
  image: {
    width: '100%',
    height: 140,
  },
  favorite: {
    position: 'absolute',
    top: 8,
    right: 8,
  },
  body: {
    padding: 12,
  },
  name: {
    fontSize: fontSize.md,
    color: colors.accent,
    lineHeight: fontSize.md * 1.4,
    marginBottom: spacing.sm,
  },
  divider: {
    height: 0.5,
    backgroundColor: colors.surface,
    marginBottom: spacing.sm,
  },
  labels: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 5,
  },
  foodLabel: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingHorizontal: 7,
    paddingVertical: 3,
    borderRadius: 6,
    borderWidth: 0.5,
    borderColor: colors.border,
  },
  labelText: {
    fontSize: 11,
    color: colors.textSecondary,
  },
  showMore: {
    height: 220,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  showMoreIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    borderWidth: 0.5,
    borderColor: colors.border,
    alignItems: 'center',
    justifyContent: 'center',
  },
  showMoreText: {
    fontSize: fontSize.sm,
    color: colors.textSecondary,
  },
});
