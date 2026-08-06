import React from 'react';
import { StyleSheet } from 'react-native';
import AnimatedScroll from '../../components/ui/AnimatedScroll';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Store, Star, ShoppingCart, GraduationCap, History, Heart, HelpCircle, BookOpen } from 'lucide-react-native';
import Screen from '../../components/ui/Screen';
import { Colors } from '../../theme';
import ProfileOptionsCard from '../../components/profile/ProfileOptionsCard';
import ProfileOptionRow from '../../components/profile/ProfileOptionRow';
import ProfileHead from '../../components/profile/ProfileHead';
import ProfileDetails from '../../components/profile/ProfileDetails';
import InfoBar, { InfoItem } from '../../components/ui/InfoBar';
import AccountSettings from '../../components/ui/AccountSettings';

export default function Profile() {
  const tabBarHeight = useBottomTabBarHeight();
  const insets = useSafeAreaInsets();

  const infoItems: InfoItem[] = [
    { topText: "0", bottomText: "Items sold" },
    { 
      topText: "4.8", 
      bottomText: "Rating",
      topIcon: <Star color="#E5B022" fill="#E5B022" size={14} /> 
    },
    { 
      topText: "15", 
      bottomText: "Active",
      topTextColorOverride: Colors.greenAccent
    },
  ];

  return (
    <Screen statusBar="dark" backgroundColor={Colors.mainBackground} edges={['left', 'right']}>
      <AnimatedScroll contentContainerStyle={[styles.container, { paddingBottom: tabBarHeight + 40 }]} showsVerticalScrollIndicator={false}>
        <ProfileHead 
          imageSource={require('../../../assets/images/welcome.png')} 
          badgeText="Verified Student"
          badgeIcon={<GraduationCap color={Colors.white} size={14} strokeWidth={2.3} />}
        />
        
        <ProfileDetails 
          name="Inga Mbobo"
          subText="Application Development - 3rd Year"
          subIcon={<BookOpen color="#6B7280" size={16} />}
        />

        <InfoBar
          items={infoItems}
          topTextColor={Colors.head}
          bottomTextColor="#6B7280"
          separatorColor={Colors.border}
          style={styles.infoBar}
        />

        <AccountSettings />
        <ProfileOptionsCard title="MARKETPLACE">
          <ProfileOptionRow
            icon={<ShoppingCart color={Colors.greenAccent} size={20} strokeWidth={2.5} />}
            label="Manage My Listings"
            onPress={() => {}}
          />
          <ProfileOptionRow
            icon={<Store color={Colors.greenAccent} size={20} strokeWidth={2.5} />}
            label="Sales Dashboard"
            onPress={() => {}}
            isLast
          />
        </ProfileOptionsCard>

        <ProfileOptionsCard title="MY SHOPPING">
          <ProfileOptionRow
            icon={
              <History color={Colors.primary} size={20} strokeWidth={2.5} />
            }
            label="Order History"
            onPress={() => {}}
          />
          <ProfileOptionRow
            icon={<Heart color={Colors.primary} size={20} strokeWidth={2.5} />}
            label="Saved Items"
            onPress={() => {}}
            isLast
          />
        </ProfileOptionsCard>

        <ProfileOptionsCard title="HELP AND SUPPORT">
          <ProfileOptionRow
            icon={
              <HelpCircle color={Colors.primary} size={20} strokeWidth={2.5} />
            }
            label="Contact Us"
            onPress={() => {}}
            isLast
          />
        </ProfileOptionsCard>
      </AnimatedScroll>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  infoBar: {
    marginTop: 12,
    paddingHorizontal: 14,
  },
});