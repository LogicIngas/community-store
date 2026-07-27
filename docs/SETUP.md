# Community Store - Setup Guide

This guide explains how to set up the Community Store project for development.

---

# Prerequisites

Before getting started, ensure the following software is installed:

- Node.js (LTS)
- Git
- Visual Studio Code
- Expo Go (Android or iOS)

---

# Clone the Repository

Clone the project and navigate into the project folder.

```bash
git clone <repository-url>
cd community-store
```

---

# Install Project Dependencies

Install all required project dependencies.

```bash
npm install
```

---

# Install Expo Go

Install the **Expo Go** app on your mobile device.

- Android: Google Play Store
- iOS: Apple App Store

---

# Run the Application

Start the Expo development server.

```bash
npx expo start
```

If you experience issues after pulling the latest changes, restart Expo with a cleared cache.

```bash
npx expo start --clear
```

---

# Run on Your Device

1. Connect your computer and mobile device to the same Wi-Fi network.
2. Open Expo Go.
3. Scan the QR code displayed in the terminal or browser.
4. The application should launch successfully.

---

# Common Issues

## Missing Dependencies

Run:

```bash
npm install
```

---

## Expo Not Starting Correctly

Run:

```bash
npx expo start --clear
```

---

## Node.js Version

Ensure you are using the latest LTS version of Node.js.

---

If you continue experiencing setup issues, contact the team leader before making changes to the project configuration.
