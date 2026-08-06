import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/RootNavigator";
import { Briefcase } from "lucide-react-native";
import SharedInfoFields from "./SharedInfoFields";
import Input from "../ui/Input";
import Checkbox from "../ui/Checkbox";
import Button from "../ui/Button";
import { Colors, Fonts, Shadows } from "../../theme";

export default function VendorInfoView() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [campus, setCampus] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  return (
    <View style={styles.formContainer}>
      <SharedInfoFields
        firstName={firstName}
        setFirstName={setFirstName}
        lastName={lastName}
        setLastName={setLastName}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        confirmPassword={confirmPassword}
        setConfirmPassword={setConfirmPassword}
        phone={phone}
        setPhone={setPhone}
        campus={campus}
        setCampus={setCampus}
      >
        <Input
          label="BUSINESS NAME"
          placeholder="Morgan's Delights"
          value={businessName}
          onChangeText={setBusinessName}
          icon={<Briefcase size={20} color={Colors.secondaryText} />}
        />
      </SharedInfoFields>

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
        <Text style={styles.submitButtonText}>Create Vendor Account</Text>
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    gap: 4,
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
