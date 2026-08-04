# KasiStore Profile System Guide

This reference guide outlines the reusable UI components created for the KasiStore profile system. Use these building blocks to rapidly assemble the profile screens for all four account types: **Student**, **Faculty**, **Vendor**, and **Community Member**.

---

## 🛑 Important Principles

> **Always check if a component exists before building a new one.**
>
> The goal is absolute visual consistency across all profiles with minimal duplicate code. Only create new components if they introduce functionality that must be shared across multiple screens.

---

## 1. Identity & Header Components
*These components establish the user's identity at the top of the profile.*

### `ProfileHead.tsx`
| Attribute | Detail |
| :--- | :--- |
| **Location** | `src/components/profile/ProfileHead.tsx` |
| **Purpose** | Displays the profile cover, avatar, and role badge. |
| **Props** | `imageSource`, `badgeText`, `badgeIcon` |
| **Dependencies**| `Avatar.tsx` |

### `ProfileDetails.tsx`
| Attribute | Detail |
| :--- | :--- |
| **Location** | `src/components/profile/ProfileDetails.tsx` |
| **Purpose** | Displays the user's name and role-specific subtext. |
| **Props** | `name`, `subText`, `subIcon` |

**Role-Specific Examples:**
* **Student:** Application Development • 3rd Year
* **Vendor:** Store Category • Physical Address
* **Faculty:** Department • Faculty Title
* **Community:** Community Name • Area

---

## 2. Statistics & Metrics
*Visual data representation.*

### `InfoBar.tsx`
| Attribute | Detail |
| :--- | :--- |
| **Location** | `src/components/ui/InfoBar.tsx` |
| **Purpose** | Displays profile statistics in a horizontally scrolling layout. |
| **Props** | `items` (Array of objects), `style` |

**Item Object Structure:**
* `topText` (Required)
* `bottomText` (Required)
* `topIcon` (Optional)
* `topTextColorOverride` (Optional)

---

## 3. Settings Cards
*Building blocks for user preferences and actions.*

### `ProfileOptionsCard.tsx`
| Attribute | Detail |
| :--- | :--- |
| **Location** | `src/components/profile/ProfileOptionsCard.tsx` |
| **Purpose** | Wraps a group of related profile settings inside a clean, rounded card. |
| **Props** | `title` (e.g., "STORE SETTINGS", "COMMUNITY PREFERENCES"), `children` |

### `ProfileOptionRow.tsx`
| Attribute | Detail |
| :--- | :--- |
| **Location** | `src/components/profile/ProfileOptionRow.tsx` |
| **Purpose** | A single tappable settings row to be placed inside an Options Card. |
| **Props** | `icon`, `label`, `onPress`, `rightElement` (Optional), `isLast` (Optional) |

> **Note:** Always pass `isLast={true}` to the final row in a card to hide the bottom border line.

### `Toggle.tsx`
| Attribute | Detail |
| :--- | :--- |
| **Location** | `src/components/ui/Toggle.tsx` |
| **Purpose** | An animated switch component. |
| **Usage** | Pass this directly into the `rightElement` prop of a `ProfileOptionRow`. |

---

## 4. Pre-Built Universal Blocks
*Components that require zero configuration.*

### `AccountSettings.tsx`
| Attribute | Detail |
| :--- | :--- |
| **Location** | `src/components/ui/AccountSettings.tsx` |
| **Purpose** | A fully assembled account settings block required on *every* profile. |
| **Contents** | Edit Profile, Account Security, Notification Preferences. |

---

## 5. Core Layout Wrappers
*The foundational elements of the screen.*

### `Screen.tsx`
| Attribute | Detail |
| :--- | :--- |
| **Location** | `src/components/ui/Screen.tsx` |
| **Purpose** | Handles safe areas, status bar styling, and background color. |

### `Button.tsx`
| Attribute | Detail |
| :--- | :--- |
| **Location** | `src/components/ui/Button.tsx` |
| **Purpose** | Reusable button component (used for the Logout action). |

---

## 🛠️ Assembly Order

When building a new profile, stack the components strictly in this order:

1. `Screen`
2. `ScrollView`
3. `ProfileHead`
4. `ProfileDetails`
5. `InfoBar`
6. `AccountSettings`
7. *Role-Specific Option Cards*
8. *Logout Button*

---

## 💻 Plug-and-Play Template

Copy and paste this boilerplate to instantly generate a standard profile page:

```tsx
import React from 'react';
import { StyleSheet, ScrollView, Text } from 'react-native';
import { LogOut, MapPin } from 'lucide-react-native';

// Layout & Core UI
import Screen from '../../components/ui/Screen';
import Button from '../../components/ui/Button';
import { Colors, Fonts } from '../../theme';

// Profile Components
import ProfileHead from '../../components/profile/ProfileHead';
import ProfileDetails from '../../components/profile/ProfileDetails';
import InfoBar from '../../components/ui/InfoBar';
import AccountSettings from '../../components/ui/AccountSettings';

export default function GenericProfile() {
  return (
    <Screen
      statusBar="dark"
      backgroundColor={Colors.mainBackground}
      edges={["left", "right"]}
    >
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        {/* 1. Header */}
        <ProfileHead
          imageSource={require('../../../assets/images/placeholder.png')}
          badgeText="Verified Role"
          badgeIcon={<MapPin color="#FFFFFF" size={12} />}
        />

        {/* 2. Details */}
        <ProfileDetails
          name="User Full Name"
          subText="Role Specific Location / Detail"
          subIcon={<MapPin color={Colors.secondaryText} size={14} />}
        />

        {/* 3. Metrics */}
        <InfoBar
          style={styles.infoBar}
          items={[
            { topText: "0", bottomText: "Metric 1" },
            { topText: "0", bottomText: "Metric 2" },
          ]}
        />

        {/* 4. Universal Settings */}
        <AccountSettings />

        {/* 5. Custom Role Settings Go Here */}
        {/* <ProfileOptionsCard title="CUSTOM OPTIONS"> ... </ProfileOptionsCard> */}

        {/* 6. Logout Action */}
        <Button
          backgroundColor="#FEE2E2"
          hasBorder={false}
          onPress={() => console.log('Logout action triggered')}
          style={styles.logoutButton}
        >
          <LogOut color="#EF4444" size={20} style={{ marginRight: 8 }} />
          <Text style={styles.logoutText}>Log Out</Text>
        </Button>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingBottom: 40,
  },
  infoBar: {
    marginTop: 12,
    paddingHorizontal: 14,
  },
  logoutButton: {
    marginTop: 32,
    marginHorizontal: 14,
    height: 56,
    flexDirection: 'row',
  },
  logoutText: {
    color: '#EF4444',
    fontFamily: Fonts.bold,
    fontSize: 16,
  },
});
```

---

## 🎯 Expected Outcome
The final result should appear as **one cohesive profile system** across the entire app. The only visual difference between a Student profile and a Vendor profile should be the specific data points rendered inside the `InfoBar` and the `ProfileDetails`, along with their specific `ProfileOptionsCard` settings blocks.