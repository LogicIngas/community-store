import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import Screen from "../../components/ui/Screen";
import Button from "../../components/ui/Button";
import { Colors, Fonts } from "../../theme";
import { RootStackParamList } from "../../components/navigation/RootNavigator";

export default function RoleSelection() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <Screen statusBar="dark" backgroundColor={Colors.mainBackground}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Developer Test Menu</Text>
          <Text style={styles.subtitle}>Select an account type to preview:</Text>
        </View>

        <View style={styles.buttonContainer}>
          <Button
            backgroundColor={Colors.primary}
            hasBorder={false}
            onPress={() => navigation.navigate("StudentTabs")}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Student Account</Text>
          </Button>

          <Button
            backgroundColor={Colors.primary}
            hasBorder={false}
            onPress={() => navigation.navigate("VendorTabs")}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Vendor Account</Text>
          </Button>

          <Button
            backgroundColor={Colors.primary}
            hasBorder={false}
            onPress={() => navigation.navigate("CommunityTabs")}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Community Account</Text>
          </Button>

          <Button
            backgroundColor={Colors.primary}
            hasBorder={false}
            onPress={() => navigation.navigate("FacultyTabs")}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Faculty Account</Text>
          </Button>
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: "center",
  },
  header: {
    alignItems: "center",
    marginBottom: 40,
  },
  title: {
    fontFamily: Fonts.black,
    fontSize: 28,
    color: Colors.head,
    marginBottom: 8,
  },
  subtitle: {
    fontFamily: Fonts.regular,
    fontSize: 16,
    color: Colors.secondaryText,
  },
  buttonContainer: {
    gap: 16,
  },
  button: {
    height: 56,
  },
  buttonText: {
    fontFamily: Fonts.bold,
    fontSize: 16,
    color: Colors.white,
  },
});
