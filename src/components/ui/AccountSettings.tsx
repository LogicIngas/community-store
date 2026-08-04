import React, { useState } from 'react';
import { CircleUser, Lock, Bell } from 'lucide-react-native';
import ProfileOptionsCard from '../profile/ProfileOptionsCard';
import ProfileOptionRow from '../profile/ProfileOptionRow';
import Toggle from './Toggle';
import { Colors } from '../../theme';

export default function AccountSettings() {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  return (
    <ProfileOptionsCard title="ACCOUNT SETTINGS">
      <ProfileOptionRow 
        icon={<CircleUser color={Colors.primary} size={20} strokeWidth={2.5} />}
        label="Edit Profile"
        onPress={() => {}}
      />
      <ProfileOptionRow 
        icon={<Lock color={Colors.primary} size={20} strokeWidth={2.5} />}
        label="Account Security"
        onPress={() => {}}
      />
      <ProfileOptionRow 
        icon={<Bell color={Colors.primary} size={20} strokeWidth={2.5} />}
        label="Notification Preferences"
        rightElement={<Toggle value={notificationsEnabled} onValueChange={setNotificationsEnabled} />}
        isLast
      />
    </ProfileOptionsCard>
  );
}
