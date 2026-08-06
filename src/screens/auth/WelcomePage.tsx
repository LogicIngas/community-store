import { BlurView } from "expo-blur";

import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";

import Screen from "../../components/ui/Screen";
import SystemBars from "../../components/ui/SystemBars";
import Button from "../../components/ui/Button";
import InfoBar from "../../components/ui/InfoBar";
import { Colors, Fonts, Shadows } from "../../theme";

import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../components/navigation/RootNavigator";

type WelcomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Welcome"
>;

export default function WelcomeScreen() {
  const navigation = useNavigation<WelcomeScreenNavigationProp>();

  return (
    <Screen
      statusBar="light"
      backgroundColor={Colors.head}
      edges={[]}
      hideNavigationBar
    >
      <ImageBackground
        source={require("../../../assets/images/welcome.png")}
        resizeMode="cover"
        style={styles.background}
      >
        <View style={styles.overlay}>
          <SystemBars variant="dark" blur />

          <View style={styles.container}>
            {/* Header */}
            <View>
              <View style={styles.brandContainer}>
                <View style={styles.logoPlaceholder}>
                  <Image
                    source={require("../../../assets/logo/logoWhite.svg")}
                    style={{ width: 34, height: 34 }}
                    contentFit="contain"
                  />
                </View>

                <View>
                  <Text style={styles.title}>
                    Kasi<Text style={{ color: Colors.primary }}>Cart</Text>
                  </Text>
                  <Text style={styles.slogan}>
                    BUY. SELL. SUPPORT. TOGETHER.
                  </Text>
                </View>
              </View>

              <BlurView intensity={12} tint="light" style={styles.trustBadge}>
                <View style={styles.statusDot} />

                <Text style={styles.trustText}>
                  Trusted by 4,200+ community members
                </Text>
              </BlurView>

              <View style={styles.hero}>
                <Text style={styles.heading}>
                  Your Campus,{"\n"}
                  Your Community{"\n"}
                  Marketplace.
                </Text>
              </View>

              <View style={styles.descriptionContainer}>
                <Text style={styles.description}>
                  Buy, sell, and trade with students, faculty, and local vendors
                  - all in one trusted place.
                </Text>
              </View>

              <View style={[styles.buttonContainer, { gap: 16 }]}>
                <Button
                  backgroundColor={Colors.primary}
                  onPress={() => navigation.navigate("Signup")}
                  hasBorder={false}
                  style={[{ height: 56 }, Shadows.primary]}
                >
                  <Text style={[styles.buttonText, { color: "#FFFFFF" }]}>
                    Get Started - It's Free
                  </Text>
                </Button>

                <Button
                  backgroundColor="transparent"
                  activeBackgroundColor="#FAF7F240"
                  borderColor="#FAF7F266"
                  hasBorder={true}
                  onPress={() => navigation.navigate("Login")}
                  style={{ height: 56, overflow: "hidden" }}
                >
                  <BlurView
                    intensity={12}
                    tint="light"
                    style={[StyleSheet.absoluteFill, { borderRadius: 16 }]}
                  />
                  <View
                    style={[
                      StyleSheet.absoluteFill,
                      { backgroundColor: "#FAF7F226", borderRadius: 16 },
                    ]}
                  />
                  <Text style={[styles.buttonText, { color: "#FFFFFF" }]}>
                    I already have an account
                  </Text>
                </Button>
              </View>

              <View style={styles.infoBarContainer}>
                <InfoBar
                  items={[
                    { topText: "2,400+", bottomText: "Members" },
                    { topText: "4.9", bottomText: "Avg rating" },
                    { topText: "950+", bottomText: "Products" },
                  ]}
                />
              </View>
            </View>

            {/* Footer */}
            <View style={styles.footer}>
              <Text style={styles.termsText}>
                By continuing you agree to our{" "}
                <Text style={styles.termsLink}>Terms & Conditions</Text>
              </Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </Screen>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },

  overlay: {
    flex: 1,
    backgroundColor: "#2D2A26BF",
  },

  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 40,
    justifyContent: "space-between",
  },

  brandContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingTop: 15,
    paddingBottom: 120,
  },

  logoPlaceholder: {
    width: 52,
    height: 52,
    borderRadius: 16,
    backgroundColor: Colors.primary,
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    fontFamily: Fonts.enBold,
    fontSize: 21,
    color: Colors.mainBackground,
  },
  slogan: {
    fontFamily: Fonts.enBold,
    fontSize: 8,
    color: Colors.mainBackground,
    opacity: 0.8,
    letterSpacing: 1.5,
    marginTop: 2,
  },

  trustBadge: {
    height: 30,
    alignSelf: "flex-start",

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,

    paddingHorizontal: 12,

    overflow: "hidden",
    borderRadius: 100,

    backgroundColor: "#FAF7F226", // 15%
    borderWidth: 1,
    borderColor: "#FAF7F266", // 40%
  },

  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 999,
    backgroundColor: "#05DF72",
  },

  trustText: {
    fontFamily: Fonts.regular,
    fontSize: 12,
    color: Colors.mainBackground,
  },
  hero: {
    paddingTop: 35,
  },

  heading: {
    fontFamily: Fonts.bold,
    fontSize: 36,
    color: Colors.mainBackground,
    lineHeight: 42, // Slightly tighter line height
  },
  descriptionContainer: {
    paddingTop: 30,
  },

  description: {
    fontFamily: Fonts.regular,
    fontSize: 15,
    lineHeight: 22.8,
    color: "rgba(250, 247, 242, 0.85)", // Softened contrast to make heading pop
  },
  buttonContainer: {
    paddingTop: 50,
  },
  buttonText: {
    fontFamily: Fonts.medium,
    fontSize: 16,
    color: Colors.mainBackground,
  },
  infoBarContainer: {
    paddingTop: 50,
  },
  footer: {
    alignItems: "center",
  },
  termsText: {
    fontFamily: Fonts.regular,
    fontSize: 12, // Increased from 10px for better accessibility/readability
    color: "rgba(250, 247, 242, 0.6)", // Subtler to offset the larger size
  },
  termsLink: {
    fontFamily: Fonts.medium,
    fontSize: 12,
    color: Colors.primary,
    textDecorationLine: "underline",
  },
});
