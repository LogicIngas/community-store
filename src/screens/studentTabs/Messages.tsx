import React, { useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../components/navigation/RootNavigator';
import Screen from '../../components/ui/Screen';
import Header from '../../components/ui/Header';
import SearchBar from '../../components/ui/SearchBar';
import FilterTabs from '../../components/ui/FilterTabs';
import ConversationListItem from '../../components/messages/ConversationListItem';
import { Colors } from '../../theme';
import { DummyConversations } from '../../data/dummyMessages';

export default function Messages() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [activeTab, setActiveTab] = useState('All');

  // Format the time for display (e.g. "10:30 AM")
  const formatTime = (isoString: string) => {
    const date = new Date(isoString);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const renderItem = ({ item }: { item: typeof DummyConversations[0] }) => {
    const lastMessage = item.messages[item.messages.length - 1];
    
    // For the student, they are talking to the vendor
    const displayName = item.vendorName;
    
    // Use the TechGuys logo when talking to the vendor
    const avatar = displayName === "Tech Guy's" 
      ? require('../../../assets/images/TechGuys.png')
      : require('../../../assets/images/welcome.png');

    return (
      <ConversationListItem
        name={displayName}
        productName={item.productName}
        lastMessage={lastMessage.text}
        time={formatTime(lastMessage.timestamp)}
        avatar={avatar}
        onPress={() => navigation.navigate('ChatDetail', { conversationId: item.conversationId })}
        unreadCount={1}
      />
    );
  };

  return (
    <Screen statusBar="dark" backgroundColor={Colors.mainBackground}>
      <Header title="Messages" />
      <SearchBar placeholder="Search conversation" />
      <FilterTabs 
        tabs={['All', 'Unread']} 
        activeTab={activeTab} 
        onTabChange={setActiveTab} 
      />
      
      <FlatList
        data={DummyConversations}
        keyExtractor={(item) => item.conversationId}
        renderItem={renderItem}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  listContent: {
    paddingBottom: 20,
  },
  separator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: Colors.border,
    marginHorizontal: 16, // Respects the screen padding
  }
});
