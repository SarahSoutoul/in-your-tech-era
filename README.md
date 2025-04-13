
# In Your Tech Era – Client Portal & Mentorship Dashboard ✨ 

Welcome to the heart of my mentorship platform 👩‍💻💫  

This is the dashboard I built to support women breaking into tech — a space to track progress, access resources, and stay connected between sessions. 

## 💖 What This Project Means to Me

I didn’t start in tech — I studied journalism and came into code through storytelling. Learning to code changed my life, and this project is a *love letter to that journey*. It’s for people like me — women who didn’t always see themselves as “technical” or feel like they belonged in the tech world.

When I became a tech educator, I started dreaming about building something of my own — a *coding space for women to learn, grow, and feel like they belong*. I’ve seen firsthand the challenges women face in tech, and I wanted to create an environment where they feel empowered, not intimidated.

The most rewarding part of my work has always been watching my students transform. I’ve seen women walk into class with almost no confidence, saying things like “I’m just not smart enough” or “I feel so stupid”. And every single time, my heart breaks a little because I've been there too. But then, they grow into bold, brilliant developers who know their worth and thrive in their roles. That transformation means everything to me. It proves the power of mentoring and helping others navigate their own tech journeys. So often, it starts just by seeing someone who looks like them in front of the class. Representation *matters*. It’s a quiet but powerful reminder: *you belong here*.

Even now, as someone who’s taught hundreds of students and worked as a software engineer, I still feel imposter syndrome. The truth is, almost every woman I’ve met in tech has felt that same fear, whether they’re two years in or thirty. This project is a small part of a dream I've had since becoming an educator. It's for all of the women I´ve mentored so far, and the ones I've yet to meet. It’s a space built with care, to *support women in tech in a way that feels empowering, human, and real*. Because we all deserve to have our *tech era* 💪

> [!IMPORTANT]
> All the content and information displayed in this project (testimonials, blog posts, mentorship packages...) is real. None of it is placeholder or fabricated. I wanted the project to feel as authentic and concrete as possible, even though it was created specifically for this task. That way, anyone reviewing it can get a clear sense of not just my technical skills, but also the kind of person, educator, and mentor I am 👩‍💻

This app is built with [React](https://react.dev/), [TypeScript](https://www.typescriptlang.org/), [Next.js](https://nextjs.org), [Clerk](https://clerk.dev) for auth and [Tailwind CSS](https://tailwindcss.com/) for styling.

## 📦 Getting Started

### 1. Run the following to install dependencies

  ```bash
  npm install
  ```

### 2. Run the following to start the development server

  ```bash
  npm run dev
  ```

### 3. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result

## 🛠️ Tech Stack

| Category        | Tech Used                                  | Notes                                           |
|-----------------|---------------------------------------------|-------------------------------------------------|
| Framework       | <img src="https://img.shields.io/badge/next%20js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" />   | App routing, server-side rendering              |
| Language        | <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" /> | Strongly typed superset of JavaScript           |
| Library         | <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />                  | UI library for building components              |
| Styling         | <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" />    | Utility-first styling framework                 |
| Auth            | <img src="https://img.shields.io/badge/Clerk-6C47FF.svg?style=for-the-badge&logo=Clerk&logoColor=white" />                   | Authentication and user/session management      |
| Hosting         | <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" />                | Deployment platform optimized for Next.js       |
| Version Control | <img src="https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white" /> <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" /> | Code collaboration and versioning               |

## 🚀 Deployed Version

You can check out the live version of this project here:  
🔗 [In your Tech Era](https://inyourtechera.vercel.app/)

> Hosted on [Vercel](https://vercel.com), optimized for fast deployment and seamless integration with Next.js.

# ✍️ My Project Journey  

## 🤔 How I approached this task

Before jumping into the code, I took some time to understand the requirements and think through how I could approach the task in a way that not only met the brief but also reflected my values as a developer and educator. My goal was to build something functional, polished, and authentic—something that could stand on its own even beyond the scope of this assignment.

## 🧩 Challenges & Learnings

**1. Tailwind CSS setup**

This was my first time using Tailwind CSS to design an app, so there was definitely a bit of a learning curve. After setting up my theme switcher, I tried applying dark mode styles to my UI components using Tailwind — but nothing was showing up. After a lot of trial and error, I discovered my setup was using an outdated Tailwind config (pre-v4). My `globals.css` file was missing key setup for dark mode to work properly, including this crucial line:

  ```css
  @custom-variant dark (&:is(.dark *));
  ```
  Once I updated that, the dark styling finally started working as expected.

**2. Next.js architecture**

Next.js was definitely a bit of a challenge. I’ve used it before, but never to build a full app from the ground up. I wasn’t totally sure how to structure things or what best practices looked like, so I ended up spending a lot of time in the docs figuring things out as I went and had to rethink my project architecture several times.

**3. App Idea & Concept**

Coming up with an idea for the app was another challenge. I wanted something that wasn’t just a tech demo, but actually reflected what I’m passionate about — mentorship, community, and helping women thrive in tech — while also showcasing how Clerk could be integrated in a real-world use case. It took me a while to land on something that felt personal and practical.

**4. Creating the Theme Switcher Guide**

And finally, creating the theme switcher guide came with its own set of challenges. Writing the content wasn’t the issue. I knew what I wanted to share but figuring out how to present it was tricky. I initially tried building it as an MDX file, but I couldn’t get it to render the way I wanted. So, I pivoted back to plain Markdown, and focused on making it look clean, clear, and hopefully a little fun.

**5. Clerk & Dark Mode Integration**

Another issue I ran into was getting the Clerk components to respect dark mode. When I clicked on the Sign in button, the dark theme wouldn’t apply to the Clerk sign-in page — even though the rest of my app was working fine. I went back to the Clerk docs and realised I needed to embed the `<SignIn />` component directly into the app and add the special configuration within my environment variables instead of using a redirect to a new page. That way, the component stays on the same URL and has access to the theme on the client side.

**6. Clerk Organisation Switcher**

When trying to implement the <OrganisationSwitcher /> Clerk component, I hit this error:

  ```
  ClerkRuntimeError: 🔒 Clerk: The <OrganizationSwitcher/> cannot be rendered when the feature is turned off.    Visit 'dashboard.clerk.com' to enable the feature. Since the feature is turned off, this is no-op.
  ```

After checking the Clerk docs, I realized I needed to enable organisations in my Clerk dashboard for the switcher to work properly. Once I did that, the issue was resolved.

##  🌟 Highlights & Achievements  

**1. Building the app**

My favourite part of this project was hands down building the actual app. In my previous job, I didn’t really get the chance to work on full apps from scratch — it was usually smaller features or parts of a bigger system. So getting to build something end-to-end again felt really rewarding. I had honestly forgotten how satisfying it is to bring an idea to life and really spend time on the design and flow. I obviously loved writing the guide too (that’s something I’m super comfortable with), but this reminded me how much I missed getting my hands dirty with the full app-building process.

**2. Exploring new tools**

I also loved getting to try out some new tools and tech along the way. Tailwind CSS, for example, completely blew me away — it’s so powerful and makes styling so much more intuitive and easy. I’m definitely going to keep using it in future projects.

**3. Concept & Design**

One thing I’m especially proud of is the concept and design of the app. This was a passion project I’ve had in the back of my mind for a while — getting to actually do it through this task was an amazing feeling. Being able to finally build a site around something I deeply care about (mentorship, community, women in tech) made this feel really personal. And on the design side, I think I found a good balance between keeping things clean and professional while also injecting bits of my personality. 

**4. Writing the guide**

I’m also really happy with how the guide turned out. I tried to make it super clear and easy to follow, especially for people who might be new to theme switching or Clerk. Writing helpful docs is something I’ve done a lot of in the past few years, so I wanted to make sure it wasn’t just functional, but also friendly and approachable.

**5. Learning on the fly**

And finally — I’m proud of the fact that I pulled this off using some tools I hadn’t worked with before. Being able to learn quickly, adapt, and figure things out on the fly is something I do a lot as a tech educator, and this project really reminded me of how valuable that skill is. It felt amazing to put that into practice and build something I genuinely care about.

## 💡 Lessons & Improvements  

**1. If I could use Clerk's custom MDX components...**

If I could have, I would’ve loved to use Clerk’s custom MDX components throughout this tutorial. In particular, I would have used Clerk’s custom code snippet components — especially the `<CodeBlockTabs />` component for switching between different code variations, and the ability to mark a code block as terminal to clearly indicate commands to be run in a terminal.

The `<Steps />` component would have been an ideal fit for this kind of step-by-step guide. Instead of having numbered headings, I would have implemented this component to mark the different steps in the tutorial. In the Styling section, where I discuss different implementation options depending on whether the user is using Tailwind CSS, I would’ve used the `<Tabs />` component to clearly separate those paths.

At the beginning of the tutorial, I would have implemented the `<TutorialHero />` component to provide links to any prerequisite learning materials or example repositories and would’ve done something similar for laying out the learning objectives.

In the **Apply providers in the root layout** section, I thought the `<Properties />` component would land really well to be able to neatly list and describe the different props required by the `<ThemeProvider>` component.

Finally, at the top of the guide, I included what would have become the file metadata if this tutorial was fully integrated into Clerk’s documentation system — referring to this:

```
---
title: Implement a theme switcher for your Clerk-powered Next.js application
description: Learn how to build a theme switcher that applies across both your application and Clerk components in this step-by-step guide.
---
```

**2. The why behind some of my decisions**

Decisions I made for a reason: Maybe there were certain decisions you made that you want us to know the “why”

**3. What have I learned from this task...**

Overall, I’m proud of what I’ve accomplished and looking forward to applying what I’ve learned to future projects!
