import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import {
  Building2,
  Megaphone,
  ShieldCheck,
  Users,
  HelpCircle
} from 'lucide-react-native';
import Screen from '../../components/ui/Screen';
import { Colors, Fonts } from '../../theme';
import ProfileHead from '../../components/profile/ProfileHead';
import ProfileDetails from '../../components/profile/ProfileDetails';
import InfoBar, { InfoItem } from '../../components/ui/InfoBar';
import AccountSettings from '../../components/ui/AccountSettings';
import ProfileOptionsCard from '../../components/profile/ProfileOptionsCard';
import ProfileOptionRow from '../../components/profile/ProfileOptionRow';
import Button from '../../components/ui/Button';

export default function Profile() {
  const infoItems: InfoItem[] = [
    { topText: "18", bottomText: "ANNOUNCEMENTS" },
    { topText: "42", bottomText: "REPORTS HANDLED" },
  ];

  return (
    <Screen statusBar="dark" backgroundColor={Colors.mainBackground} edges={['left', 'right']}>
      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        <ProfileHead
          imageSource={require('../../../assets/images/welcome.png')}
          badgeText="Faculty Admin"
          badgeIcon={<Building2 color={Colors.white} size={14} strokeWidth={2.3} />}
          badgeBackgroundColor={Colors.greenAccent}
        />

        <ProfileDetails
          name="Dr. Rameez Karriem"
          subText="Department of Informatics"
          subIcon={<Building2 color="#6B7280" size={16} />}
        />

        <InfoBar
          items={infoItems}
          topTextColor={Colors.head}
          topTextSize={26}
          bottomTextColor="#6B7280"
          bottomTextSize={12}
          separatorColor={Colors.border}
          style={styles.infoBar}
        />

        <View style={styles.buttonContainer}>
          <Button
            onPress={() => { }}
            backgroundColor={Colors.greenAccent}
            activeBackgroundColor="#57765C"
            style={styles.bulletinButton}
          >
            <Megaphone color={Colors.white} size={20} strokeWidth={2.2} style={styles.buttonIcon} />
            <Text style={styles.buttonText}>Post to Bulletin Board</Text>
          </Button>
        </View>

        <AccountSettings />

        <ProfileOptionsCard title="ADMIN TOOLS">
          <ProfileOptionRow
            icon={<ShieldCheck color={Colors.primary} size={20} strokeWidth={2.5} />}
            label="Community Moderation"
            onPress={() => { }}
          />
          <ProfileOptionRow
            icon={<Users color={Colors.primary} size={20} strokeWidth={2.5} />}
            label="User Management"
            onPress={() => { }}
          />
          <ProfileOptionRow
            icon={<Megaphone color={Colors.primary} size={20} strokeWidth={2.5} />}
            label="Manage Board Posts"
            onPress={() => { }}
            isLast
          />
        </ProfileOptionsCard>

        <ProfileOptionsCard title="HELP AND SUPPORT">
          <ProfileOptionRow
            icon={<HelpCircle color={Colors.primary} size={20} strokeWidth={2.5} />}
            label="Reports"
            onPress={() => { }}
            isLast
          />
        </ProfileOptionsCard>
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
    marginTop: 16,
    paddingHorizontal: 24,
  },
  buttonContainer: {
    width: '100%',
    paddingHorizontal: 14,
    marginTop: 24,
  },
  bulletinButton: {
    width: '100%',
    borderRadius: 16,
    minHeight: 54,
  },
  buttonIcon: {
    marginRight: 10,
  },
  buttonText: {
    fontFamily: Fonts.bold,
    fontSize: 16,
    color: Colors.white,
  },
});
