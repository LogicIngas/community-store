import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useRoute, RouteProp } from "@react-navigation/native";

import Screen from "../../components/ui/Screen";
import AnimatedScroll from "../../components/ui/AnimatedScroll";
import AuthHeader from "../../components/auth/AuthHeader";
import { Colors, Fonts } from "../../theme";
import { RootStackParamList } from "../../components/navigation/RootNavigator";

import StudentInfoView from "../../components/auth/StudentInfoView";
import FacultyInfoView from "../../components/auth/FacultyInfoView";
import VendorInfoView from "../../components/auth/VendorInfoView";
import ResidentInfoView from "../../components/auth/ResidentInfoView";

type Role = "Student" | "Faculty" | "Vendor" | "Resident";

export default function SignupPage() {
  const route = useRoute<RouteProp<RootStackParamList, "Signup">>();
  const insets = useSafeAreaInsets();

  const [activeRole, setActiveRole] = useState<Role>(
    route.params?.defaultRole || "Student",
  );

  // Update role if passed in navigation params later
  useEffect(() => {
    if (route.params?.defaultRole) {
      setActiveRole(route.params.defaultRole);
    }
  }, [route.params?.defaultRole]);



  return (
    <Screen statusBar="dark" backgroundColor={Colors.mainBackground} edges={[]}>
      <AnimatedScroll contentContainerStyle={[styles.scrollContent, { paddingBottom: insets.bottom + 15 }]}>
        <AuthHeader showLogo={false} showBackButton={true} imageHeight={280} />

        <View style={styles.content}>
          {/* Titles */}
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Join the Community</Text>
            <Text style={styles.subtitle}>Create your free account in minutes</Text>
          </View>

          {/* Role Selection */}
          <View style={styles.roleSelectionContainer}>
            <Text style={styles.roleLabel}>I AM A...</Text>
            <View style={styles.roleTabs}>
              {(["Student", "Faculty", "Vendor", "Resident"] as Role[]).map(
                (role) => (
                  <TouchableOpacity
                    key={role}
                    style={[
                      styles.roleTab,
                      activeRole === role && styles.activeRoleTab,
                    ]}
                    onPress={() => setActiveRole(role)}
                    activeOpacity={0.7}
                  >
                    <Text
                      style={[
                        styles.roleTabText,
                        activeRole === role && styles.activeRoleTabText,
                      ]}
                    >
                      {role}
                    </Text>
                  </TouchableOpacity>
                ),
              )}
            </View>
          </View>

          {/* Form Component */}
          {activeRole === "Student" && <StudentInfoView />}
          {activeRole === "Faculty" && <FacultyInfoView />}
          {activeRole === "Vendor" && <VendorInfoView />}
          {activeRole === "Resident" && <ResidentInfoView />}
        </View>
      </AnimatedScroll>
    </Screen>
  );
}

const styles = StyleSheet.create({
  scrollContent: {
    flexGrow: 1,
  },
  content: {
    paddingHorizontal: 24,
  },
  titleContainer: {
    alignItems: "center",
    marginBottom: 38,
  },
  title: {
    fontFamily: Fonts.black,
    fontSize: 32,
    color: Colors.head,
    marginBottom: 8,
    textAlign: "center",
  },
  subtitle: {
    fontFamily: Fonts.regular,
    fontSize: 15,
    color: Colors.head,
    textAlign: "center",
  },
  roleSelectionContainer: {
    alignItems: "center",
    marginBottom: 30,
  },
  roleLabel: {
    fontFamily: Fonts.black,
    fontSize: 10,
    letterSpacing: 1.5,
    color: Colors.head,
    marginBottom: 16,
  },
  roleTabs: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    gap: 10,
  },
  roleTab: {
    flex: 1,
    paddingVertical: 8,
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: Colors.border,
    minWidth: 60,
    alignItems: "center",
  },
  activeRoleTab: {
    backgroundColor: Colors.primary,
    borderColor: Colors.primary,
  },
  roleTabText: {
    fontFamily: Fonts.medium,
    fontSize: 13,
    color: Colors.head,
  },
  activeRoleTabText: {
    color: "#FFFFFF",
    fontFamily: Fonts.bold,
  },
});
