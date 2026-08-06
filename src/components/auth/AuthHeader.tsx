import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { ArrowLeft } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';
import { Colors, Fonts } from '../../theme';

interface AuthHeaderProps {
  showLogo?: boolean;
  showBackButton?: boolean;
  imageHeight?: number;
  onBackPress?: () => void;
}

export default function AuthHeader({ 
  showLogo = false, 
  showBackButton = true,
  imageHeight = 240,
  onBackPress
}: AuthHeaderProps) {
  const navigation = useNavigation();

  return (
    <>
      <View style={[styles.headerImageContainer, { height: imageHeight }]}>
        <Image 
          source={require('../../../assets/images/login_bg.png')} 
          style={styles.headerImage}
          contentFit="cover"
        />
        <LinearGradient
          colors={['rgba(250, 247, 242, 0.62)', 'rgba(250, 247, 242, 0.9)', Colors.mainBackground]}
          locations={[0, 0.63, 1]}
          style={styles.gradient}
        />
      </View>

      <View style={styles.topNav}>
        {showBackButton ? (
          <TouchableOpacity 
            style={styles.backButton}
            onPress={() => onBackPress ? onBackPress() : navigation.goBack()}
          >
            <ArrowLeft size={24} color={Colors.head} />
          </TouchableOpacity>
        ) : (
          <View style={styles.backButtonPlaceholder} />
        )}

        {showLogo && (
          <View style={styles.logoContainer}>
            <View style={styles.logoCircle}>
              <Image 
                source={require('../../../assets/logo/logoWhite.svg')} 
                style={{ width: 26, height: 26 }} 
                contentFit="contain" 
              />
            </View>
            <Text style={styles.logoText}>
              Kasi<Text style={{ color: Colors.primary }}>Cart</Text>
            </Text>
          </View>
        )}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  headerImageContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: -1,
  },
  headerImage: {
    width: '100%',
    height: '100%',
  },
  gradient: {
    ...StyleSheet.absoluteFillObject,
  },
  topNav: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 45,
    marginBottom: 45,
  },
  backButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 3,
  },
  backButtonPlaceholder: {
    width: 48,
  },
  logoContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 48,
  },
  logoCircle: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  logoText: {
    fontFamily: Fonts.enBold,
    fontSize: 22,
    color: Colors.head,
    letterSpacing: -0.3,
  },
});
