# Implement a theme switcher for your Clerk-powered Next.js application

| Title | Description                                      |
|------|--------------------------------------------------|
| Implement a theme switcher for your Clerk-powered Next.js application   | Learn how to build a theme switcher that applies across both your application and Clerk components in this step-by-step guide.           |


## **You'll learn the following:**

- Install `next-themes`
- Create a custom Theme Provider
- Integrate theme switching with Clerk using `@clerk/themes`
- Implement a theme switcher

## Introduction

In this guide, you'll learn how to implement a theme switcher for your Clerk-powered Next.js application. This switcher will allow users to toggle between light and dark modes, ensuring that both your app and Clerk’s UI components adapt accordingly.

This will be achieved by using [next-themes](https://www.npmjs.com/package/next-themes), a lightweight theme management library for Next.js apps. It helps implement dark mode and theme switching by managing the theme state using local storage and class-based styling.

> [!NOTE]
> **How does `next-themes` work?**  
>  
> It follows a class-based approach to theme switching. It applies a CSS class (like `light` or `dark`) to the `<html>` element, which allows global styling based on the selected theme.  
>  
> For example, if the theme is **dark**, it will add `class="dark"` to the `<html>` tag. You can then use Tailwind CSS or regular CSS to style elements based on this class. When the theme is toggled, `next-themes` ensures the correct class is applied to `<html>`, making the UI update instantly.  
>  
> `next-themes` can also detect the user’s system preferences (`light` or `dark`) and applies it by default. In addition to that, it saves the selected theme in `localStorage`, so the preference remains even after refreshing the page.

This guide assumes you've already set up a Next.js project with Clerk authentication and are using [Next.js App Router](https://clerk.com/docs/quickstarts/nextjs), but the concepts can be adapted to [Next.js Pages Router](https://clerk.com/docs/quickstarts/nextjs-pages-router). If you haven’t, follow the steps in the [**Clerk Next.js Quickstart guide**](https://clerk.com/docs/quickstarts/nextjs).

Let’s get started! 

---

## 1. Install `next-themes`

Run the following command to install `next-themes` to your Next.js app:

```sh {{ filename: 'terminal' }}
npm install next-themes
```

## 2. Create a `<ThemeProvider>` component

The `<ThemeProvider>` component from `next-themes` is a React context provider that manages the theme state in your Next.js app. It wraps your entire app to provide theme-related functionality globally. 

The following example demonstrates how to configure a custom theme provider to ensure the `<ThemeProvider>` (renamed `<NextThemeProvider>` in the code) only renders on the client side until the component is mounted, avoiding hydration errors.  

> [!NOTE]
> **Why is a custom `<ThemeProvider>` needed?**  
>  
> By default, Next.js renders components on the server, which can lead to hydration mismatches when handling client-side theme settings like `next-themes`.  
>  
> This occurs because the theme is set client-side (e.g., from `localStorage` or system preferences), but in a Server-side Rendering (SSR) environment, Next.js doesn’t know the preferred theme. The server may initially render the page with a different theme, causing a mismatch between the server-rendered and client-rendered HTML.  
>  
> To prevent this issue, the `mounted` state delays rendering of the theme provider and its children until the component has mounted on the client. This ensures that the correct theme is applied without mismatch.

1. In your `/app` folder, create a `/providers` folder.
2. Inside this directory, create a `theme-provider.tsx` file with the following code to configure your custom theme provider:  
    
    ```tsx
    'use client'
    
    import {useEffect, useState} from 'react'
    import { ThemeProvider as NextThemeProvider } from 'next-themes'
    
    export function ThemeProvider({ children, ...props }: React.ComponentProps<typeof NextThemeProvider>) {
      const [mounted, setMounted] = useState(false)
    
      // Only render content after first client-side mount
      useEffect(() => {
        setMounted(true)
      }, [])
    
      // Return null on server-side and first render
      if (!mounted) return null
    
      // Only render theme provider when on the client
      return <NextThemeProvider {...props}>{children}</NextThemeProvider>
    }
    ```
   

## 3. **Integrate Clerk with theme switching**

To ensure that Clerk’s authentication UI follows the selected theme, Clerk provides a way to customize the appearance of its components using the `appearance` prop. It can be applied to [`<ClerkProvider>`](https://clerk.com/docs/components/clerk-provider) directly to share styles across every component, or individually to any of the Clerk components. 

The `appearance` prop accepts multiple properties, including a `baseTheme` property to pass the corresponding theme. This is what can be used to sync up the Clerk components with the selected theme. For more information on Clerk themes, refer to the [Clerk documentation on themes](https://clerk.com/docs/customization/themes).

The following example demonstrates how to configure a custom Clerk provider to synchronize Clerk's components with the app's theme.
  
  > [!NOTE]
  > **Why is a custom `<ClerkProvider>` needed?**  
  >  
  > Similar to the custom `<ThemeProvider>`, a custom `ClerkProvider` is necessary to handle client-side theme synchronization in a Next.js app.  
  >  
  > Since the `useTheme` hook from `next-themes` relies on client-side JavaScript to determine the current theme, it’s not available during SSR. If you configure the `ClerkProvider` directly in `RootLayout`, it could cause a **hydration mismatch** between the server-rendered HTML and the client-rendered JavaScript, leading to inconsistent UI behavior.  
  >  
  > In your original setup, you may already have a `ClerkProvider` in your `app/layout.jsx` file. You will have to refactor this setup in the upcoming steps.

1. Run the following command to install `@clerk-themes` to your Next.js app:
    
      ```sh {{ filename: 'terminal' }}
      npm install @clerk/themes
      ```
    
2. In the `/providers` folder, create a `clerk-provider.tsx` file with the following code. The `useTheme` hook from `next-themes` is used to acess the current app theme. By retrieving `resolvedTheme` and passing it to Clerk’s `appearance` prop, the authentication UI will synchronize with the app’s theme. This ensures that when a user switches between themes, Clerk’s UI components also update accordingly.

    ```tsx
    'use client';
          
    import { ClerkProvider } from '@clerk/nextjs';
    import { dark } from '@clerk/themes';
    import { useTheme } from 'next-themes';
          
    export default function ThemedClerkProvider({ children }: { children: React.ReactNode }) {
      // Retrieves the resolved theme from the useTheme hook
      const { resolvedTheme } = useTheme();
          
      return (
        <ClerkProvider appearance={resolvedTheme === 'dark' ? { baseTheme: dark } : undefined}>
          {children}
        </ClerkProvider>
      );
    }
    ```

  > [!NOTE]
  > **What is `resolvedTheme`?**  
  >  
  > A property provided by the `useTheme` hook from `next-themes`—it represents the currently applied theme in your Next.js app.  
  >  
  > This value can either be `'light'` or `'dark'`, depending on the theme set by the user or determined by the system’s preferences.
  

## 4. **Apply providers in the root layout**

Now, it’s time to integrate both the **theme provider** and **custom Clerk provider** into the app's root layout to ensure consistent theming and authentication UI across the entire app.

In your original setup, the default `<ClerkProvider>` from `@clerk/nextjs` is likely wrapping your entire `<html>` block. You'll now have to replace that with your custom `<ThemedClerkProvider>` component and update how both providers are applied. Instead of wrapping the full `<html>`element, render both providers nested within the `<body>`tag. This ensures proper theme  and integration with Clerk's authentication components. 

The following example demonstrates how to refactor your code accordingly:

1. In your `app/layout.tsx` file, remove the default `<ClerkProvider>` import from `@clerk/nextjs`.
2. Import both providers (`<ThemeProvider>` and `<ThemedClerkProvider>`) from your custom files.
    
    ```tsx
    import { ThemeProvider } from './providers/theme-provider';
    import ThemedClerkProvider from './providers/clerk-provider';
    ```
        
3. Replace the existing `<ClerkProvider>` component with `<ThemedClerkProvider>` & ensure it wraps `{children}` rather than the entire `<html>` block.
4. Wrap `<ThemedClerkProvider>` with `<ThemeProvider>` to ensure the theme settings extend to Clerk's components and pass the following three properties to `<ThemeProvider>`.
    - `attribute="class"` applies the current theme as a class (`light` or `dark`) to the `<html>` element
    - `defaultTheme="system"` sets the default theme to match the user’s system preference. If the user has their operating system set to dark more, the app will start with a dark theme, even before the user interacts with the theme switcher
    - `enableSystem` allows automatic switching between `dark` or `light` based on the system preferences, and works in conjunction with `defaultTheme="system"`
        
        ```tsx
        import type { Metadata } from 'next';
        import { SignInButton, SignUpButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
        import { ThemeProvider } from './providers/theme-provider';
        import ThemedClerkProvider from './providers/clerk-provider';
        import { Geist, Geist_Mono } from 'next/font/google';
        import './globals.css';
        
        const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
        const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });
        
        export const metadata: Metadata = {
          title: 'Clerk Next.js Quickstart',
          description: 'Generated by create next app',
        };
        
        export default function RootLayout({
          children,
        }: {
          children: React.ReactNode;
        }) {
          return (
            <html lang="en">
              <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                  <ThemedClerkProvider>
                    <header className="flex justify-end items-center p-4 gap-4 h-16">
                      <SignedOut>
                        <SignInButton />
                        <SignUpButton />
                      </SignedOut>
                      <SignedIn>
                        <UserButton />
                      </SignedIn>
                    </header>
                    {children}
                  </ThemedClerkProvider>
                </ThemeProvider>
              </body>
            </html>
          );
        }
        ```
        

## 5. **Create a theme switcher component**

Once `next-themes` is set up, it’s time to implement a toggle switcher to give users the ability to change the app’s theme. 

1. Create a `components` folder, if you don’t have one.
2. In this folder, create a `theme-switcher.tsx` file and add the following code. For this, the `useTheme` hook is used again to retrieve the `theme` (current active theme being applied to the app) and `setTheme` (setter function that allows you to set the theme programatically). This ensures you can interact with the current theme and manage it. 
    
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
    

## 6. Render the theme switcher on your app

With the theme switcher set up, it’s time to include it in any page of your choice. The following code demonstrates how to render your `<ThemeSwitcher />` component in the root layout:

1. In your `app/layout.tsx` file, import  `<ThemeSwitcher />`  into your app by adding `import ThemeSwitcher from './components/theme-switcher';` at the top of your file.
2. Render `<ThemeSwitcher />` within your `<header>` under your Clerk authentication components.
    
      ```tsx
      import ThemeSwitcher from "./components/theme-switcher";
    
      export default function RootLayout({
          children,
        }: {
          children: React.ReactNode;
        }) {
          return (
            <html lang="en">
              <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                  <ClerkProvider>
                    <header className="flex justify-end items-center p-4 gap-4 h-16">
                      <SignedOut>
                        <SignInButton />
                        <SignUpButton />
                      </SignedOut>
                      <SignedIn>
                        <UserButton />
                      </SignedIn>
                      <ThemeSwitcher />
                    </header>
                    {children}
                  </ClerkProvider>
                </ThemeProvider>
              </body>
            </html>
          );
      }
      ```
    

## 7. Inspect theme behavior via DevTools 

1. Start your development server:
        
    ```bash
    npm run dev
    ```
    
2. Open your browser and navigate to [`http://localhost:3000`](http://localhost:3000/).
3. Open **Developer Tools** and switch to the `Elements` tab.
4. Locate the `<html>` element.
5. Toggle the theme switcher back and forth.
6. Observe the `<html>` class update between `light` and `dark`.

## 8. Apply styling based on theme across your app

Now, it’s time to implement styling across your app based on the `class` attribute (`light` or `dark`) of the `<html>` element. The following example demonstrates how to apply global styles and individual styles to your components based on active theme. 

### **Apply global theme styles in `globals.css`**

In your `globals.css` file, add the following code. Ensure you have the `@import` and `@variant` lines. The `transition` CSS property will ensure smooth transitions when switching between themes.
    
  ```css
  /* globals.css */
  @import "tailwindcss";
  @variant dark (&:where(.dark, .dark *)); 
    
  /* Light mode (default) */
  :root {
    --background-color: #ffffff;
    --text-color: #000000;
  }
    
  /* Dark mode */
  .dark {
    --background-color: #181818;
    --text-color: #ffffff;
  }
    
  body {
    background-color: var(--background-color);
    color: var(--text-color);
    transition: background-color 0.3s ease, color 0.3s ease;
   }
   ```
    

### **Apply individual styles**

**1. How to apply individual styles with Tailwind CSS**

Since `next-themes` applies a `dark` class to the `<html>` tag, you can use Tailwind’s `dark:` modifier:

```html
<p className="text-black dark:text-white">
  This text will be black in light mode and white in dark mode.
</p>
```

Similarly, for a button:

```html
<button className="bg-gray-200 text-black dark:bg-gray-700 dark:text-white px-4 py-2 rounded-md">
  Select me
</button>
```

**2. How to use inline styles with the `useTheme()` hook**

If you want to apply inline styles dynamically, you can use the `useTheme` hook from `next-themes` to conditionally style elements.

```tsx
import { useTheme } from 'next-themes';

export default function CustomComponent() {
  const { resolvedTheme } = useTheme();

  return (
    <div style={{
        backgroundColor: resolvedTheme === 'dark' ? '#181818' : '#ffffff',
        color: resolvedTheme === 'dark' ? '#ffffff' : '#000000',
        padding: '20px',
        borderRadius: '8px'
      }}
    >
      This box changes colors based on the theme!
    </div>
  );
}
```

## 9. One last hurdle

**This step is specifically for apps that have not built their own sign-in or sign-up pages within their Clerk apps using the [`<SignIn />`](https://clerk.com/docs/components/authentication/sign-in) and [`<SignUp />`](https://clerk.com/docs/components/authentication/sign-up) components. If you have, you can skip this step.**

By default, when using [`<SignInButton>`](https://clerk.com/docs/components/unstyled/sign-in-button) or [`<SignUpButton>`](https://clerk.com/docs/components/unstyled/sign-up-button) from Clerk, users are redirected to Clerk’s external authentication page. Since the `next-themes` package stores the theme preference (light/dark) in `localStorage` and applies it to the `<html>` element **only within your app**, the theme setting is lost when users are redirected.

To persist your theme, you need to render the complete sign-in/sign-up interface directly within your app's UI using the `<SignIn />` and `<SignUp />` components rather than relying on Clerk’s external authentication pages. Follow this [guide](https://clerk.com/docs/references/nextjs/custom-sign-in-or-up-page) to set it up!


## 10. Finished 🎉

You’ve successfully implemented a theme switcher for a Clerk-powered Next.js app! Your users can now toggle between light and dark modes, and Clerk’s components will respect their preference.

For more information on theming Clerk components, visit [Clerk's Theming Documentation](https://clerk.com/docs/customization/themes).

