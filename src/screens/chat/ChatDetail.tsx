import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, Platform } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { MessageCircle } from "lucide-react-native";

import Screen from "../../components/ui/Screen";
import ChatHeader from "../../components/messages/ChatHeader";
import { Colors, Fonts, Shadows } from "../../theme";
import { DummyConversations, DummyProfiles } from "../../data/dummyMessages";

export default function ChatDetail() {
  const route = useRoute<any>();
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  const { conversationId } = route.params;

  // Find the conversation
  const conversation = DummyConversations.find(
    (c) => c.conversationId === conversationId,
  );
  const [messages] = useState(conversation?.messages || []);

  if (!conversation) {
    return (
      <Screen backgroundColor={Colors.white}>
        <View style={styles.center}>
          <Text style={styles.errorText}>
            Conversation could not be loaded.
          </Text>
        </View>
      </Screen>
    );
  }

  const avatar =
    conversation.vendorName === "Tech Guy's"
      ? require("../../../assets/images/TechGuys.png")
      : require("../../../assets/images/welcome.png");

  const renderMessage = ({ item }: { item: any }) => {
    const isSystem = item.senderType === "system";

    const isMe = item.senderType === DummyProfiles.student.role;

    if (isSystem) {
      return (
        <View style={styles.systemMessageContainer}>
          <Text style={styles.systemMessageText}>{item.text}</Text>
        </View>
      );
    }

    return (
      <View
        style={[
          styles.bubbleContainer,
          isMe ? styles.myBubbleContainer : styles.theirBubbleContainer,
        ]}
      >
        <View
          style={[styles.bubble, isMe ? styles.myBubble : styles.theirBubble]}
        >
          <Text
            style={[
              styles.messageText,
              isMe ? styles.myMessageText : styles.theirMessageText,
            ]}
          >
            {item.text}
          </Text>
        </View>
        <Text style={styles.timeText}>
          {new Date(item.timestamp).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </Text>
      </View>
    );
  };

  return (
    <Screen backgroundColor={Colors.mainBackground} statusBar="dark">
      <ChatHeader
        vendorName={conversation.vendorName}
        productName={conversation.productName}
        avatar={avatar}
        onBack={() => navigation.goBack()}
      />

      <View style={styles.container}>
        <FlatList
          data={messages}
          keyExtractor={(item) => item.id}
          renderItem={renderMessage}
          contentContainerStyle={styles.messageList}
          showsVerticalScrollIndicator={false}
        />

        {/* Disabled Input Bar for Student */}
        <View
          style={[
            styles.inputContainer,
            { paddingBottom: Math.max(insets.bottom, 20) },
          ]}
        >
          <View style={styles.inputPillDisabled}>
            <MessageCircle
              color={Colors.secondaryText}
              size={20}
              style={styles.inputIcon}
            />
            <Text style={styles.inputDisabledText}>Coming soon...</Text>
          </View>
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.mainBackground, // The chat area is the main background color
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorText: {
    fontFamily: Fonts.medium,
    color: Colors.secondaryText,
  },
  messageList: {
    padding: 16,
    paddingBottom: 24,
    paddingTop: 24,
  },
  systemMessageContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  systemMessageText: {
    fontFamily: Fonts.medium,
    fontSize: 12,
    color: Colors.primaryDark,
    textAlign: "center",
    backgroundColor: "#FCEFCF",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    overflow: "hidden",
  },
  bubbleContainer: {
    marginBottom: 16,
    maxWidth: "80%",
  },
  myBubbleContainer: {
    alignSelf: "flex-end",
    alignItems: "flex-end",
  },
  theirBubbleContainer: {
    alignSelf: "flex-start",
    alignItems: "flex-start",
  },
  bubble: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
    marginBottom: 4,
    ...Shadows.soft, // Soft shadow applied to all chat bubbles
  },
  myBubble: {
    backgroundColor: Colors.primary,
    borderBottomRightRadius: 4,
  },
  theirBubble: {
    backgroundColor: Colors.white,
    borderBottomLeftRadius: 4,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  messageText: {
    fontFamily: Fonts.regular,
    fontSize: 15,
    lineHeight: 20,
  },
  myMessageText: {
    color: Colors.white,
  },
  theirMessageText: {
    color: Colors.head,
  },
  timeText: {
    fontFamily: Fonts.regular,
    fontSize: 11,
    color: Colors.secondaryText,
    marginHorizontal: 4,
  },
  inputContainer: {
    paddingHorizontal: 16,
    paddingTop: 12,
    backgroundColor: Colors.white,
    borderTopWidth: 1,
    borderTopColor: Colors.divider,
  },
  inputPillDisabled: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.04)",
    borderRadius: 24,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  inputIcon: {
    marginRight: 8,
  },
  inputDisabledText: {
    fontFamily: Fonts.regular,
    fontSize: 15,
    color: Colors.secondaryText,
  },
});
