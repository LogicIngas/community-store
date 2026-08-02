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
│   │   ├── RootNavigator.tsx
│   │   └── TabNavigator.tsx
│   └── ui/
│       ├── AnimatedScroll.tsx
│       ├── Button.tsx
│       ├── Checkbox.tsx
│       ├── InfoBar.tsx
│       ├── Input.tsx
│       ├── PasswordInput.tsx
│       ├── Screen.tsx
│       └── SystemBars.tsx
├── screens/
│   ├── auth/
│   │   ├── LoginPage.tsx
│   │   └── WelcomePage.tsx
│   └── tabs/
│       ├── Account.tsx
│       ├── Explore.tsx
│       ├── Home.tsx
│       ├── Messages.tsx
│       └── Plus.tsx
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
- **components/navigation/**: Navigation configurations (Root and Tab navigators).
- **components/ui/**: Reusable, core UI components used throughout the application.
- **screens/auth/**: Screens related to the authentication flow.
- **screens/tabs/**: Main dashboard screens accessed via the bottom tab navigator.
- **theme/**: Centralized global styling tokens (colors, fonts, shadows).

### assets/
- **fonts/**: Custom application fonts.
- **images/**: General application images.
- **logo/**: Brand logos.
