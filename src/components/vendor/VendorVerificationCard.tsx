import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ShieldCheck } from 'lucide-react-native';
import { Colors, Fonts } from '../../theme';

type VendorVerificationCardProps = {
  percentage?: number;
  subtitle?: string;
};

export default function VendorVerificationCard({
  percentage = 80,
  subtitle = "Upload your operation hours to reach 100%."
}: VendorVerificationCardProps) {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.headerRow}>
          <View style={styles.titleContainer}>
            <ShieldCheck color={Colors.primary} size={20} strokeWidth={2.2} />
            <Text style={styles.titleText}>Vendor Verification</Text>
          </View>
          <Text style={styles.percentageText}>{percentage}%</Text>
        </View>

        <View style={styles.progressTrack}>
          <View style={[styles.progressFill, { width: `${percentage}%` }]} />
        </View>

        <Text style={styles.subtitleText}>{subtitle}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 14,
    marginTop: 24,
  },
  card: {
    backgroundColor: Colors.white,
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  titleText: {
    fontFamily: Fonts.bold,
    fontSize: 16,
    color: Colors.head,
  },
  percentageText: {
    fontFamily: Fonts.bold,
    fontSize: 15,
    color: Colors.primary,
  },
  progressTrack: {
    height: 10,
    backgroundColor: '#EBE5DF',
    borderRadius: 5,
    overflow: 'hidden',
    marginVertical: 14,
  },
  progressFill: {
    height: '100%',
    backgroundColor: Colors.primary,
    borderRadius: 5,
  },
  subtitleText: {
    fontFamily: Fonts.regular,
    fontSize: 13,
    color: Colors.secondaryText,
  },
});
