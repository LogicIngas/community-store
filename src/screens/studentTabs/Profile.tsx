import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { GraduationCap, Star } from 'lucide-react-native';
import Screen from '../../components/ui/Screen';
import { Colors } from '../../theme';
import ProfileHead from '../../components/profile/ProfileHead';
import ProfileDetails from '../../components/profile/ProfileDetails';
import InfoBar, { InfoItem } from '../../components/ui/InfoBar';
import AccountSettings from '../../components/ui/AccountSettings';

export default function Profile() {
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
      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        <ProfileHead 
          imageSource={require('../../../assets/images/welcome.png')} 
          badgeText="Verified Student"
          badgeIcon={<GraduationCap color={Colors.white} size={14} strokeWidth={2.3} />}
        />
        
        <ProfileDetails 
          name="Inga Mbobo"
          subText="Application Development - 3rd Year"
          subIcon={<GraduationCap color="#6B7280" size={16} />}
        />

        <InfoBar
          items={infoItems}
          topTextColor={Colors.head}
          bottomTextColor="#6B7280"
          separatorColor={Colors.border}
          style={styles.infoBar}
        />

        <AccountSettings />
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingBottom: 40,
  },
  infoBar: {
    marginTop: 12,
    paddingHorizontal: 14,
  },
});
