import React, { useState, useEffect } from "react";
//Can we separate the signup pages from for each 
// type of user to go under each folder like the fuculty signup to the 
// fucultyTabs folder and the community member signup to under the communityTabs folder 
// and the vendorSignup under the vendorTabs folder, or the way we have done it now is the industry approach
//  or makes things easy for data capture during conneting to the database?
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Mail, Lock, Phone, MapPin, Briefcase, Home } from "lucide-react-native";
import { useNavigation, useRoute, RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import Screen from "../../components/ui/Screen";
import AnimatedScroll from "../../components/ui/AnimatedScroll";
import AuthHeader from "../../components/auth/AuthHeader";
import Input from "../../components/ui/Input";
import PasswordInput from "../../components/ui/PasswordInput";
import Checkbox from "../../components/ui/Checkbox";
import Button from "../../components/ui/Button";
import { Colors, Fonts, Shadows } from "../../theme";
import { RootStackParamList } from "../../components/navigation/RootNavigator";

type Role = "Student" | "Faculty" | "Vendor" | "Resident";

// Can we separate the signup pages from for each type of user to go under each folder like the fuculty signup to the fucultyTabs folder and the community member signup to under the communityTabs folder and the vendorSignup under the vendorTabs folder, or the way you have done it now is the industry approach?

export default function SignupPage() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const route = useRoute<RouteProp<RootStackParamList, "Signup">>();

  const [activeRole, setActiveRole] = useState<Role>(
    route.params?.defaultRole || "Student"
  );

  // Update role if passed in navigation params later
  useEffect(() => {
    if (route.params?.defaultRole) {
      setActiveRole(route.params.defaultRole);
    }
  }, [route.params?.defaultRole]);

  // Form State
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [campus, setCampus] = useState("");
  const [department, setDepartment] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [address, setAddress] = useState("");
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  const getSubtitleText = () => {
    switch (activeRole) {
      case "Vendor":
        return "Create your vendor account in minutes";
      case "Resident":
        return "Create your resident account in minutes";
      default:
        return "Create your free account in minutes";
    }
  };

  const getButtonText = () => {
    switch (activeRole) {
      case "Vendor":
        return "Create Vendor Account";
      case "Resident":
        return "Create Resident Account";
      default:
        return "Create Account";
    }
  };

  return (
    <Screen statusBar="dark" backgroundColor={Colors.mainBackground} edges={[]}>
      <AnimatedScroll contentContainerStyle={styles.scrollContent}>
        <AuthHeader showLogo={false} showBackButton={true} imageHeight={280} />

        <View style={styles.content}>
          {/* Titles */}
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Join the Community</Text>
            <Text style={styles.subtitle}>{getSubtitleText()}</Text>
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
                )
              )}
            </View>
          </View>

          {/* Form */}
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : undefined}
            style={styles.formContainer}
          >
            <View style={styles.row}>
              <View style={styles.halfWidth}>
                <Input
                  label="FIRST NAME"
                  placeholder="Alex"
                  value={firstName}
                  onChangeText={setFirstName}
                  autoCapitalize="words"
                />
              </View>
              <View style={styles.halfWidth}>
                <Input
                  label="LAST NAME"
                  placeholder="Morgan"
                  value={lastName}
                  onChangeText={setLastName}
                  autoCapitalize="words"
                />
              </View>
            </View>

            <Input
              label="EMAIL ADDRESS"
              placeholder="Alexmorgan@gmail.com"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              icon={<Mail size={20} color={Colors.secondaryText} />}
            />

            <PasswordInput
              label="PASSWORD"
              placeholder="........."
              value={password}
              onChangeText={setPassword}
              icon={<Lock size={20} color={Colors.secondaryText} />}
            />

            <Input
              label="PHONE NUMBER"
              placeholder="+27 790865000"
              value={phone}
              onChangeText={setPhone}
              keyboardType="phone-pad"
              icon={<Phone size={20} color={Colors.secondaryText} />}
            />

            {/* Role Specific Fields */}
            {activeRole === "Faculty" && (
              <Input
                label="DEPARTMENT"
                placeholder="Computer Science"
                value={department}
                onChangeText={setDepartment}
                icon={<Briefcase size={20} color={Colors.secondaryText} />}
              />
            )}

            {activeRole === "Vendor" && (
              <Input
                label="BUSINESS NAME"
                placeholder="Morgan's Delights"
                value={businessName}
                onChangeText={setBusinessName}
                icon={<Briefcase size={20} color={Colors.secondaryText} />}
              />
            )}

            {activeRole === "Resident" && (
              <Input
                label="ADDRESS / UNIT NUMBER"
                placeholder="Block B, Apt 402"
                value={address}
                onChangeText={setAddress}
                icon={<Home size={20} color={Colors.secondaryText} />}
              />
            )}

            <Input
              label="CAMPUS / LOCATION"
              placeholder="District six Campus"
              value={campus}
              onChangeText={setCampus}
              icon={<MapPin size={20} color={Colors.secondaryText} />}
            />

            <View style={styles.termsContainer}>
              <Checkbox
                isChecked={agreeToTerms}
                onToggle={setAgreeToTerms}
                label=""
              />
              <Text style={styles.termsText}>
                I agree to CommuniStore's{" "}
                <Text style={styles.termsLink}>Terms of Service</Text> and{" "}
                <Text style={styles.termsLink}>Privacy Policy</Text>
              </Text>
            </View>

            <Button
              onPress={() => navigation.navigate("RoleSelection")}
              backgroundColor={Colors.primary}
              hasBorder={false}
              style={[styles.submitButton, Shadows.primary]}
            >
              <Text style={styles.submitButtonText}>{getButtonText()}</Text>
            </Button>
          </KeyboardAvoidingView>
        </View>
      </AnimatedScroll>
    </Screen>
  );
}

const styles = StyleSheet.create({
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 40,
  },
  content: {
    paddingHorizontal: 24,
    marginTop: -80, // pull up into the header image a bit
  },
  titleContainer: {
    alignItems: "center",
    marginBottom: 30,
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
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 12,
  },
  roleTab: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 12,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: Colors.border,
    minWidth: 80,
    alignItems: "center",
  },
  activeRoleTab: {
    backgroundColor: Colors.primary,
    borderColor: Colors.primary,
  },
  roleTabText: {
    fontFamily: Fonts.bold,
    fontSize: 13,
    color: Colors.head,
  },
  activeRoleTabText: {
    color: "#FFFFFF",
  },
  formContainer: {
    gap: 4, // Input component has its own bottom margin, but we add some gap just in case
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 16,
  },
  halfWidth: {
    flex: 1,
  },
  termsContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginTop: 10,
    marginBottom: 30,
    paddingRight: 20,
  },
  termsText: {
    fontFamily: Fonts.regular,
    fontSize: 12,
    color: Colors.head,
    marginLeft: 12,
    lineHeight: 18,
    flex: 1,
  },
  termsLink: {
    fontFamily: Fonts.bold,
    color: Colors.primary,
  },
  submitButton: {
    height: 56,
  },
  submitButtonText: {
    fontFamily: Fonts.bold,
    fontSize: 16,
    color: "#FFFFFF",
  },
});
