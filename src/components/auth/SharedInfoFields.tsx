import React from "react";
import { View, StyleSheet } from "react-native";
import { Mail, Lock, Phone, MapPin } from "lucide-react-native";
import Input from "../ui/Input";
import PasswordInput from "../ui/PasswordInput";
import { Colors } from "../../theme";

export type SharedInfoFieldsProps = {
  firstName: string;
  setFirstName: (text: string) => void;
  lastName: string;
  setLastName: (text: string) => void;
  email: string;
  setEmail: (text: string) => void;
  password: string;
  setPassword: (text: string) => void;
  phone: string;
  setPhone: (text: string) => void;
  campus: string;
  setCampus: (text: string) => void;
  confirmPassword: string;
  setConfirmPassword: (text: string) => void;
  children?: React.ReactNode;
};

export default function SharedInfoFields({
  firstName,
  setFirstName,
  lastName,
  setLastName,
  email,
  setEmail,
  password,
  setPassword,
  phone,
  setPhone,
  campus,
  setCampus,
  confirmPassword,
  setConfirmPassword,
  children,
}: SharedInfoFieldsProps) {
  return (
    <>
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
        placeholder="Enter your email address"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        icon={<Mail size={20} color={Colors.secondaryText} />}
      />

      <Input
        label="PHONE NUMBER"
        placeholder="Enter your phone number"
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
        icon={<Phone size={20} color={Colors.secondaryText} />}
      />

      <Input
        label="CAMPUS / LOCATION"
        placeholder="District Six Campus"
        value={campus}
        onChangeText={setCampus}
        icon={<MapPin size={20} color={Colors.secondaryText} />}
      />

      {children}

      <PasswordInput
        label="PASSWORD"
        placeholder="••••••••"
        value={password}
        onChangeText={setPassword}
        icon={<Lock size={20} color={Colors.secondaryText} />}
      />

      <PasswordInput
        label="CONFIRM PASSWORD"
        placeholder="••••••••"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        icon={<Lock size={20} color={Colors.secondaryText} />}
      />
    </>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 16,
  },
  halfWidth: {
    flex: 1,
  },
});
