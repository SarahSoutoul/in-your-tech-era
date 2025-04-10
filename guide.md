# Implement a theme switcher for your Clerk-powered Next.js application

## Introduction

In this guide, you'll learn how to implement a theme switcher for your Clerk-powered Next.js application. This switcher will allow users to toggle between light and dark modes, ensuring that both your app and Clerk’s UI components adapt accordingly.

To achieve this, we’ll use the `next-themes` library to handle theme switching effectively.

This guide assumes you've already set up a Next.js project with Clerk authentication and are using Next.js App Router, but the concepts can be adapted to Next.js Pages Router. If you haven’t, follow the steps in the **Clerk Next.js Quickstart guide**.

## Prerequisites

Before starting, ensure you have:

- A Next.js application set up with Clerk, using the **Clerk Next.js Quickstart guide**
- Basic understanding of Next.js and React

Let’s get started! 

---

## 1. Install `next-themes` (need to add yarn too, pnpm, bun)

Run the following command to install `next-themes` to your Next.js application

```sh {{ filename: '.env' }}
npm install next-themes
```

> [!NOTE]
> **More information on `next-themes`** 
> 
> `next-themes` is a lightweight theme management library for Next.js applications. It provides an easy and quick way to implement dark mode and theme switching by manging the theme state using local storage and class-based styling.
> 
> It follows a class-based approach to theme switching. It applies a CSS class (like `light` or `dark` ) to the `<html>` element, which allows global styling based on the selected element. For example, if the theme is **dark**, it will add `class="dark"` to the `<html>` tag. You can then use Tailwind CSS or regular CSS to style elements based on this class. When the theme is toggled, `next-themes` ensures the correct class is applied to `<html>`, making the UI update instantly.
> 
> `next-themes` can also detect the user’s system preferences (`light` or `dark`) and applies it by default. In addition to that, it saves the selected theme in `localStorage`, so the preference remains even after refreshing the page.

## 2. Create a Theme Provider

The `ThemeProvider` component from `next-themes` is a **React context provider** that manages the theme state in your Next.js application. It wraps your entire app to provide theme-related functionality globally. 

1. In your `/app` folder, create a `/providers` folder
2. Inside this directory, create a **`theme-provider.ts`** file with the following code to configure your custom theme provider. This ensures the `ThemeProvider` (renamed `NextThemeProvider` in the code) only renders on the client side and delays rendering until the component is mounted, avoiding hydration errors.  

```tsx
'use client'

import {useEffect, useState} as React from 'react'
import { ThemeProvider as NextThemeProvider } from 'next-themes'

export function ThemeProvider({ children, ...props }: React.ComponentProps<typeof NextThemeProvider>) {
  const [mounted, setMounted] = useState(false)

  // Only render content after first client-side mount
  useEffect(() => {
    setMounted(true)
  }, [])

  // Return null on server-side and first render
  if (!mounted) return null

  // Only render theme provider when we're on the client
  return <NextThemeProvider {...props}>{children}</NextThemeProvider>
}
```

<aside>
💡

**Why do we need a custom `ThemeProvider`?**

By default, Next.js renders components on the server, which can lead to hydration mismatches when handling client-side theme settings like `next-themes` . This occurs because the theme is set client-side (e.g - from `localStorage` or system preferences), but in a server-rendered (SSR) environment, Next.js doesn’t know the preferred theme. The server may initially render the page with a different theme, causing a mismatch between the server-rendered and client-rendered HTML. 

To prevent this issue, the `mounted` state delays rendering of the theme provider and its children until the component has mounted on the client. This ensures that the correct theme is applied without mismatch.

</aside>

## 3. **Integrate Clerk with Theme Switching**

To ensure that Clerk’s authentication UI follows the selected theme, Clerk components allow you to customize the appearance through the `baseTheme` property. For more information on Clerk themes, refer to the [Clerk documentation on themes](https://clerk.com/docs/customization/themes). 

1. In the `/providers` folder, create a `clerk-provider.tsx` file with the following code. The `useTheme` hook from `next-themes` is used to acess the current app theme. By retrieving `resolvedTheme` and passing it to Clerk’s `appearance` attribute, the authentication UI will synchronize with the app’s theme. This ensures that when a user switches between themes, Clerk’s UI components also update accordingly.

```tsx
'use client';

import { ClerkProvider } from '@clerk/nextjs';
import { dark } from '@clerk/themes';
import { useTheme } from 'next-themes';

export default function _ClerkProvider({ children }: { children: React.ReactNode }) {
  // Retrieves the resolved theme from the useTheme hook
  const { resolvedTheme } = useTheme();

  return (
    <ClerkProvider appearance={resolvedTheme === 'dark' ? { baseTheme: dark } : undefined}>
      {children}
    </ClerkProvider>
  );
}
```

<aside>
💡

What is `resolvedTheme` ?

A property provided by the `useTheme` hook from `next-themes` - it represents the currently applied theme in your Next.js app. This value can either be ‘light’ or ‘dark’ depending on the theme set by the user or determined by the system’s preferences.

</aside>

## 4. **Apply Providers in the Root Layout**

Now, it’s time to integrate both the theme provider and the Clerk provider in the main application root layout so that both the theme and authentication UI are properly handled across the entire app.

1. In your **`app/layout.tsx`** file, refactor the code to ensure the main application is wrapped by both providers
2. Pass three attributes to the `ThemeProvider` component
    - `attribute="class"` applies the current theme as a class (`light` or `dark`) to the HTML element.
    - `defaultTheme="system"` sets the default theme to match the user’s system preference. If the user has their operating system set to dark more, the app will start with a dark theme, even before the user interacts with the theme switcher.
    - `enableSystem` allows automatic switching between `dark` or `light` based on the system preferences, and works in conjunction with `defaultTheme="system"`

```tsx
import type { Metadata } from 'next';
import { ThemeProvider } from '../providers/theme-provider';
import ClerkProvider from '../providers/clerk-provider';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Clerk Next.js Quickstart',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
         <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <ClerkProvider>
              {children}
            </ClerkProvider>
          </ThemeProvider>
        </body>
    </html>
  );
}
```

## 5. **Create a Theme Toggle Button**

Once `next-themes` is set up, it’s time to implement a toggle switcher or button to give users the ability to change the app’s theme. 

1. Create a `components` folder, if you don’t have one
2. In this folder, create a `theme-switcher.ts` file and add the following code. For this, the `useTheme` hook is used again to retrieve the `theme` (current active theme being applied to the application) and `setTheme` (setter function that allows you to set the theme programatically). This ensures you can interact with the current theme and manage it. 

```tsx
'use client'

import { useTheme } from 'next-themes'

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()

  return (
    <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
      Toggle Theme
    </button>
  )
}
```

## 6. Add the Theme Toggler to the Homepage

With the theme switcher set up, it’s time to include it in your homepage, or any other pages of you choice. 

1. In your `app/page.ts`, add the following code

```tsx
import { SignInButton, SignUpButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import ThemeSwitcher from './components/theme-switcher';

export default function Home() {
  return (
   <div>
      <header className="flex justify-end items-center p-4 gap-4 h-16">
        <SignedIn>
            <UserButton />
        </SignedIn>
        <SignedOut>
          <SignInButton />
          <SignUpButton />
        </SignedOut>     
        <ThemeSwitcher />
      </header>
    </div>
  );
}
```

## 7. Styling

## Conclusion

You’ve successfully implemented a theme switcher for a Clerk-powered Next.js app! Your users can now toggle between light and dark modes, and Clerk’s components will respect their preference.

For more information on theming Clerk components, visit Clerk's Theming Documentation.
