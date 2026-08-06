import React from "react";
import { StyleSheet } from "react-native";
import AnimatedScroll from "../../components/ui/AnimatedScroll";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Users, MapPin, History, Heart, HelpCircle } from "lucide-react-native";
import Screen from "../../components/ui/Screen";
import { Colors } from "../../theme";
import ProfileHead from "../../components/profile/ProfileHead";
import ProfileDetails from "../../components/profile/ProfileDetails";
import InfoBar, { InfoItem } from "../../components/ui/InfoBar";
import AccountSettings from "../../components/ui/AccountSettings";
import ProfileOptionsCard from "../../components/profile/ProfileOptionsCard";
import ProfileOptionRow from "../../components/profile/ProfileOptionRow";

export default function Profile() {
  const tabBarHeight = useBottomTabBarHeight();
  const insets = useSafeAreaInsets();

  const infoItems: InfoItem[] = [
    { topText: "2026", bottomText: "MEMBER SINCE" },
    { topText: "17", bottomText: "ITEMS PURCHASED" },
  ];

  return (
    <Screen
      statusBar="dark"
      backgroundColor={Colors.mainBackground}
      edges={["left", "right"]}
    >
      <AnimatedScroll
        contentContainerStyle={[
          styles.container,
          { paddingBottom: tabBarHeight + 40 },
        ]}
        showsVerticalScrollIndicator={false}
      >
        <ProfileHead
          imageSource={require("../../../assets/images/welcome.png")}
          badgeText="Community Member"
          badgeIcon={<Users color={Colors.white} size={14} strokeWidth={2.3} />}
          badgeBackgroundColor="#757067"
        />

        <ProfileDetails
          name="Ethan Williams"
          subText="Local Resident"
          subIcon={<MapPin color="#6B7280" size={16} />}
        />

        <InfoBar
          items={infoItems}
          topTextColor={Colors.head}
          bottomTextColor="#6B7280"
          separatorColor={Colors.border}
          style={styles.infoBar}
        />

        <AccountSettings />

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
