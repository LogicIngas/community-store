import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { Mail, Lock, IdCard } from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import Svg, { Path } from "react-native-svg";

import Screen from "../../components/ui/Screen";
import AnimatedScroll from "../../components/ui/AnimatedScroll";
import AuthHeader from "../../components/auth/AuthHeader";
import Divider from "../../components/auth/Divider";
import Input from "../../components/ui/Input";
import PasswordInput from "../../components/ui/PasswordInput";
import Checkbox from "../../components/ui/Checkbox";
import Button from "../../components/ui/Button";
import { Colors, Fonts, Shadows } from "../../theme";
import { RootStackParamList } from "../../components/navigation/RootNavigator";


// Custom Google SVG Logo
const GoogleIcon = () => (
  <Svg width="20" height="20" viewBox="0 0 24 24">
    <Path
      fill="#4285F4"
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
    />
    <Path
      fill="#34A853"
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
    />
    <Path
      fill="#FBBC05"
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
    />
    <Path
      fill="#EA4335"
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
    />
  </Svg>
);

export default function LoginPage() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [keepSigned, setKeepSigned] = useState(false);

  return (
    <Screen statusBar="dark" backgroundColor={Colors.mainBackground} edges={[]}>
      <AnimatedScroll contentContainerStyle={styles.scrollContent}>
        <AuthHeader showLogo={true} showBackButton={false} />

        <View style={styles.content}>
          {/* Titles */}
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Welcome Back</Text>
            <Text style={styles.subtitle}>
              Sign in to your community account
            </Text>
          </View>

          {/* Form */}
          <View style={styles.formContainer}>
            <Input
              label="EMAIL ADDRESS"
              placeholder="Enter your email address"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              icon={<Mail size={20} color={Colors.secondaryText} />}
            />

            <PasswordInput
              label="PASSWORD"
              rightLabel="FORGOT PASSWORD?"
              onRightLabelPress={() => {}}
              placeholder="Enter your password"
              value={password}
              onChangeText={setPassword}
              icon={<Lock size={20} color={Colors.secondaryText} />}
            />

            <Checkbox
              label="Keep me signed in"
              isChecked={keepSigned}
              onToggle={setKeepSigned}
            />

            <Button
              onPress={() => navigation.navigate("RoleSelection")}
              backgroundColor={Colors.primary}
              hasBorder={false}
              style={[styles.signInButton, Shadows.primary]}
            >
              <Text style={styles.signInButtonText}>Sign In</Text>
            </Button>
          </View>

          <Divider />

          {/* Social Buttons */}
          <View style={styles.socialButtonsContainer}>
            <TouchableOpacity style={styles.socialButton} activeOpacity={0.6}>
              <GoogleIcon />
              <Text style={styles.socialButtonText}>Google</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.socialButton} activeOpacity={0.6}>
              <Image
                source={require("../../../assets/images/facebook.png")}
                style={styles.fbImage}
              />
              <Text style={styles.socialButtonText}>Facebook</Text>
            </TouchableOpacity>
          </View>

          {/* Special Login */}
          <TouchableOpacity style={styles.studentButton} activeOpacity={0.6}>
            <IdCard
              size={20}
              color={Colors.primaryDark}
              strokeWidth={2}
              style={{ marginRight: 10 }}
            />
            <Text style={styles.studentButtonText}>
              Sign in with Student / Faculty ID
            </Text>
          </TouchableOpacity>

          {/* Footer */}
          <View style={styles.footer}>
            <Text style={styles.footerText}>New to CommunityStore? </Text>
            <TouchableOpacity>
              <Text style={styles.footerLink}>Create Account</Text>
            </TouchableOpacity>
          </View>
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
    marginBottom: 48,
  },
  title: {
    fontFamily: Fonts.black,
    fontSize: 32,
    color: Colors.head,
    marginBottom: 8,
  },
  subtitle: {
    fontFamily: Fonts.regular,
    fontSize: 15,
    color: Colors.head,
  },
  formContainer: {
    marginBottom: 29,
  },
  signInButton: {
    height: 56,
  },
  signInButtonText: {
    fontFamily: Fonts.bold,
    fontSize: 16,
    color: "#FFFFFF",
  },
  socialButtonsContainer: {
    flexDirection: "row",
    gap: 16,
    marginBottom: 20,
  },
  socialButton: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 56,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 12,
    ...Shadows.soft,
  },
  socialButtonText: {
    fontFamily: Fonts.bold,
    fontSize: 15,
    color: Colors.head,
    marginLeft: 10,
  },
  fbImage: {
    width: 24,
    height: 24,
  },
  studentButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 56,
    backgroundColor: Colors.primaryLight,
    borderWidth: 1,
    borderColor: Colors.primaryLightBorder,
    borderRadius: 12,
    marginBottom: 27,
    ...Shadows.soft,
  },
  studentButtonText: {
    fontFamily: Fonts.bold,
    fontSize: 15,
    color: Colors.primaryDark,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  footerText: {
    fontFamily: Fonts.regular,
    fontSize: 14,
    color: Colors.head,
  },
  footerLink: {
    fontFamily: Fonts.medium,
    fontSize: 14,
    color: Colors.primaryDark,
  },
});
