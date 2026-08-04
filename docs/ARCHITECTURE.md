# KasiCart Architecture & File Structure

## Directory Structure

```text
src/
├── App.tsx
├── components/
│   ├── auth/
│   │   ├── AuthHeader.tsx
│   │   └── Divider.tsx
│   ├── navigation/
│   │   ├── CommunityTabNavigator.tsx
│   │   ├── CustomTabBar.tsx
│   │   ├── FacultyTabNavigator.tsx
│   │   ├── RootNavigator.tsx
│   │   ├── StudentTabNavigator.tsx
│   │   ├── VendorTabNavigator.tsx
│   │   └── components/
│   │       ├── CenterActionButton.tsx
│   │       └── TabBarButton.tsx
│   ├── profile/
│   │   ├── ProfileDetails.tsx
│   │   ├── ProfileHead.tsx
│   │   ├── ProfileOptionRow.tsx
│   │   └── ProfileOptionsCard.tsx
│   └── ui/
│       ├── AccountSettings.tsx
│       ├── AnimatedScroll.tsx
│       ├── Avatar.tsx
│       ├── Button.tsx
│       ├── Checkbox.tsx
│       ├── InfoBar.tsx
│       ├── Input.tsx
│       ├── PasswordInput.tsx
│       ├── Screen.tsx
│       ├── SystemBars.tsx
│       └── Toggle.tsx
├── screens/
│   ├── auth/
│   │   ├── LoginPage.tsx
│   │   ├── RoleSelection.tsx
│   │   └── WelcomePage.tsx
│   ├── communityTabs/
│   │   ├── Explore.tsx
│   │   ├── Home.tsx
│   │   ├── Messages.tsx
│   │   ├── Plus.tsx
│   │   └── Profile.tsx
│   ├── facultyTabs/
│   │   ├── Explore.tsx
│   │   ├── Home.tsx
│   │   ├── Messages.tsx
│   │   ├── Plus.tsx
│   │   └── Profile.tsx
│   ├── studentTabs/
│   │   ├── Explore.tsx
│   │   ├── Home.tsx
│   │   ├── Messages.tsx
│   │   ├── Plus.tsx
│   │   └── Profile.tsx
│   └── vendorTabs/
│       ├── Explore.tsx
│       ├── Home.tsx
│       ├── Messages.tsx
│       ├── Plus.tsx
│       └── Profile.tsx
└── theme/
    ├── colors.ts
    ├── fonts.ts
    ├── index.ts
    └── shadows.ts

assets/
├── fonts/
├── images/
└── logo/
```

## Explanations

### src/
- **App.tsx**: Main application entry point.
- **components/auth/**: Authentication-specific UI components.
- **components/navigation/**: Navigation configurations (Root and Tab navigators), including custom tab bars and interactive center actions.
- **components/profile/**: Domain-specific components used for building out user profile screens and settings views.
- **components/ui/**: Reusable, core UI components used throughout the application (e.g. Inputs, Buttons, Avatars, Toggles, Account Settings).
- **screens/auth/**: Screens related to the authentication flow.
- **screens/*Tabs/**: Main dashboard screens grouped by user role (`studentTabs`, `vendorTabs`, `communityTabs`, `facultyTabs`). Each contains a specific Profile and Home implementation.
- **theme/**: Centralized global styling tokens (colors, fonts, shadows).

### assets/
- **fonts/**: Custom application fonts.
- **images/**: General application images.
- **logo/**: Brand logos.
