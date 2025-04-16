
# In Your Tech Era – Client Portal & Mentorship Dashboard ✨ 

Welcome to the heart of **In Your Tech Era** - a mentorship platform built for women breaking into tech to track progress, access resources, and stay connected between sessions 👩‍💻💫  

## 📝 Project description & main features

This project is a lightweight client portal for my mentorship program, providing each mentee with a personalised dashboard where they can:

| Feature                     | Mentees can                                                                 |
|-------------------------------|------------------------------------------------------------------------------------|
| 📚 Curated learning plan      | View a personalized roadmap based on their tech goals                             |
| 🎯 Goal & progress tracker    | Keep track of goals, completed tasks, and ongoing progress                   |
| 📓 Progress journal           | Reflect on what they’re learning and how they’re feeling along the way            |
| 🔗 Calendly integration        | Book future mentorship sessions, and see and join upcoming sessions directly from their dashboard                    |

> **Bonus feature:** Mentees can choose between light and dark themes using the built-in theme switcher (*more themes coming soon*). If you're interested to see how I ensured the theme applied across the app - including Clerk components - check out this [step-by-step tutorial guide on how I made it happen](https://github.com/SarahSoutoul/clerk-theme-switcher/blob/main/guide.md) 🧑‍🏫 

Whether someone's job hunting, learning to code, or building their portfolio, this platform keeps everything they need in one place. The goal is to make tech mentorship accessible, personalised and empowering, especially for mentees navigating the early stages of their tech journeys. 

Before reaching the dashboard, users land on a simple homepage that shares a bit about me - my background as a former software engineer and experienced tech educator, the technologies I teach, testimonials from past mentees, and details about my mentorship plans and pricing. It's meant to give a quick glimpse into who I am, how I work, and what this program is all about. 

> [!IMPORTANT]
> All the content and information displayed in this project (testimonials, blog posts, mentorship packages) is real. None of it is placeholder or fabricated. I wanted the project to feel as authentic and concrete as possible, even though it was created specifically for this task. That way, anyone reviewing it can get a clear sense of not just my technical skills, but also the kind of person, educator, and mentor I am 👩‍💻

This app is built with [React](https://react.dev/), [TypeScript](https://www.typescriptlang.org/), [Next.js](https://nextjs.org), [Clerk](https://clerk.dev) for auth and [Tailwind CSS](https://tailwindcss.com/) for styling.

## 💖 What this project means to me

I didn’t start in tech — I studied journalism and came into code through storytelling. Learning to code changed my life, and this project is a **love letter to that journey**. It’s for people like me — women who didn’t always see themselves as “technical” or feel like they belonged in the tech world.

When I became a tech educator, I started dreaming about building something of my own — **a coding space for women to learn, grow, and feel like they belong**. I’ve seen firsthand the challenges women face in tech, and I wanted to create an environment where they feel empowered, not intimidated.

The most rewarding part of my work has always been watching my students transform. I’ve seen women walk into class with almost no confidence, saying things like “I’m just not smart enough” or “I feel so stupid”. And every single time, my heart breaks a little because I've been there too. But then, they grow into bold, brilliant developers who know their worth and thrive in their roles. That transformation means everything to me. It proves the power of mentoring and helping others navigate their own tech journeys. So often, it starts just by seeing someone who looks like them in front of the class. **Representation matters**. It’s a quiet but powerful reminder: *you belong here*.

Even now, as someone who’s taught hundreds of students and worked as a software engineer, I still feel imposter syndrome. The truth is, almost every woman I’ve met in tech has felt that same fear, whether they’re two years in or thirty. This project is a small part of a dream I've had since becoming an educator. It's for all of the women I've mentored so far, and the ones I've yet to meet. It’s a space built with care, to support women in tech in a way that feels empowering, human, and real. Because we all deserve to have our **tech era** 💪

## 📦 Getting started

### 1. Run the following to install dependencies

  ```sh
  npm install
  ```

### 2. Add the required environment variables to an `.env` file

> [!NOTE]
> **To access your Clerk keys, first create a [Clerk.com](https://clerk.com/) account then open `https://dashboard.clerk.com/`. Create a new Clerk application and copy the keys from Step 2 in the Next.js Quickstart tab.**  

```sh
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL=/
NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL=/
NEXT_PUBLIC_CLERK_SIGN_IN_FORCE_REDIRECT_URL=/dashboard
NEXT_PUBLIC_CLERK_SIGN_UP_FORCE_REDIRECT_URL=/dashboard
NEXT_PUBLIC_CALENDLY_CLIENT_ID=
NEXT_PUBLIC_CALENDLY_REDIRECT_URI=http://localhost:3000/api/calendly/callback
CALENDLY_CLIENT_SECRET=
```

### 3. Run the following to start the development server

  ```sh
  npm run dev
  ```

### 4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result

## 🛠️ Tech stack

| Category        | Tech Used                                  | Notes                                           |
|-----------------|---------------------------------------------|-------------------------------------------------|
| Framework       | <img src="https://img.shields.io/badge/next%20js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" />   | App routing, server-side rendering              |
| Language        | <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" /> | Strongly typed superset of JavaScript           |
| Library         | <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />                  | UI library for building components              |
| Styling         | <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" />    | Utility-first styling framework                 |
| Auth            | <img src="https://img.shields.io/badge/Clerk-6C47FF.svg?style=for-the-badge&logo=Clerk&logoColor=white" />                   | Authentication and user/session management      |
| Hosting         | <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" />                | Deployment platform optimized for Next.js       |
| Version Control | <img src="https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white" /> <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" /> | Code collaboration and versioning               |

## 🚀 Deployed version

You can check out the live version of this project here: [In your Tech Era](https://inyourtechera.vercel.app/) 👩‍💻

> Hosted on [Vercel](https://vercel.com), optimized for fast deployment and seamless integration with Next.js.

## 🏆 My "most proud" feature: Calendly Integration

Out of everything I built, integrating Calendly is the feature I’m most proud of. This is the piece that really made the project feel like a real mentorship platform, not just a dashboard, but a space where users can actually take action. I wanted mentees to be able to book future sessions, see what’s coming up, and even join their sessions, all from the platform itself. Making that happen was super rewarding, but definitely not easy.

There were quite a few challenges along the way. I had to dig into the Calendly developer docs, figure out how to handle authenticated session links, and make sure the flow felt seamless. On top of that, I was working with Clerk's Backend SDK to make sure the right data was connected to the right user, without compromising the structure of the app.

It pushed me to think deeper about architecture, user experience, and how to bring everything together in a way that made sense both technically and visually. Definitely a learning moment, and one I’m really proud of. Here are some screenshots of the feature:

### Before a user links their Calendly account
<img width="572" alt="Screenshot 2025-04-15 at 7 44 12 p m" src="https://github.com/user-attachments/assets/d9a40474-e475-493f-9ca2-1bf57ec5ddb7" />

### After a user links their Calendly account

Once the user links their Calendly account, they can view and manage their upcoming sessions directly from the platform. Here’s how it looks in both dark mode and light mode.

**Dark mode**

<img width="572" alt="Screenshot 2025-04-15 at 7 45 32 p m" src="https://github.com/user-attachments/assets/ee319506-bd8c-41eb-8034-863377cd5b70" />

**Light mode**

<img width="572" alt="Screenshot 2025-04-15 at 7 45 41 p m" src="https://github.com/user-attachments/assets/eba3f9b7-c054-470a-8de5-f7847d892c60" />

## ✍️ My project journey  

### How I approached this task 🤔

Before jumping into the code, I spent some time reading through the brief to understand all the requirements. I wanted to ensure that my work met the brief, but also reflected my values as a software engineer and educator. My goal was to build something functional and polished while staying authentic to who I am. But getting there was challenging - here's how I approached the task:

1. I started things off by building a minimal app to experiment with Clerk integration and get familiar with Next.js architecture and features. This helped me understand the foundations before adding anything more complex.
2. Once I felt more confident, I added the theme switcher to test functionality and styling logic. There were a few challenges along the way, especially figuring out how to make Tailwind CSS work but I eventually got it working.
3. After getting the theme switcher to work, I realized I finally had a clear grasp of the step-by-step process, so I paused app development and shifted my full focus to writing the tutorial guide. I made sure to follow the style guide closely and initially tried to write it in MDX, but after a few struggles (explained later in this README), I reverted to Markdown.
4. Once the guide was drafted, I went through a full review process: reading it from a fresh perspective, following the steps as if I was a new user, and making notes where the flow or code snippets needed refinement. I also noted where Clerk's custom MDX components could be used, so I'd be able to include that in future documentation.
5. Once the guide was in a good place, I returned to the app but was still unsure of the app concept. After thinking it over, I decided to build a mentorship platform based on the services I've been offering on the side. That's when the project really came to life.
6. I started with the homepage, then moved on to the dashboard. As I built, I had to do a lot of refactoring to clean up the architecture and researching into the docs for the tools I was using. During this process, I also started writing my project documentation alongside the build process, and made sure to deploy the app early to set up a simple CI/CD flow.
7. From there, it was all about refining and reviewing, from tweaking the guide to cleaning up the code and making sure everything felt cohesive. I kept going until I felt satisfied with the end result.  
   
### Challenges & Learnings 🧩 

**1. Tailwind CSS setup**

This was my first time using Tailwind CSS to design an app, so there was definitely a bit of a learning curve. After setting up my theme switcher, I tried applying dark mode styles to my UI components using Tailwind — but nothing was showing up. After a lot of trial and error, I discovered my setup was using an outdated Tailwind config (pre-v4). My `globals.css` file was missing key setup for dark mode to work properly, including this crucial line:

  ```css
  @custom-variant dark (&:is(.dark *));
  ```
  Once I updated that, the dark styling finally started working as expected.

**2. Next.js architecture**

Next.js was definitely a bit of a challenge. I’ve used it before, but never to build a full app from the ground up. I wasn’t totally sure how to structure things or what best practices looked like, so I ended up spending a lot of time in the docs figuring things out as I went and had to rethink my project architecture several times.

**3. App idea & concept**

Coming up with an idea for the app was another challenge. I wanted something that wasn’t just a tech demo, but actually reflected what I’m passionate about — mentorship, community, and helping women thrive in tech — while also showcasing how Clerk could be integrated in a real-world use case. It took me a while to land on something that felt personal and practical.

**4. Clerk & dark mode integration**

Another issue I ran into was getting the Clerk components to respect dark mode. When I clicked on the `<SignInButton>`, the dark theme wouldn’t apply to the Clerk sign-in page — even though the rest of my app respected it. I went back to the Clerk docs and realised I needed to embed the `<SignIn />` component directly into the app and add special configuration within my environment variables to prevent being redirected to a new page. That way, the component stays on the same URL and has access to the theme on the client side.

**5. Clerk organisation switcher implementation**

When trying to implement the <OrganisationSwitcher /> Clerk component, I hit this error:

  ```
  ClerkRuntimeError: 🔒 Clerk: The <OrganizationSwitcher/> cannot be rendered when the feature is turned off. Visit 'dashboard.clerk.com' to enable the feature. Since the feature is turned off, this is no-op.
  ```

After checking the Clerk docs, I realized I needed to enable organisations in my Clerk dashboard for the switcher to work properly. Once I did that, the issue was resolved.

**6. Creating the theme switcher guide**

And finally, creating the theme switcher guide came with its own set of challenges. Writing the content wasn’t the issue. I knew what I wanted to share but figuring out how to present it was tricky. I initially tried building it as an MDX file, but I couldn’t get it to render the way I wanted. So, I pivoted back to plain Markdown, and focused on making it look clean, clear, and hopefully a little fun. I did choose to keep my MDX config within the project for you to see the progress there, and where I may have gone wrong - you will find my attempt at creating an MDX page under the `archived` folder. 

### Highlights & Achievements 🌟

**1. Building the app**

My favourite part of this project was hands down building the actual app. In my previous job, I didn’t really get the chance to work on full apps from scratch — it was usually smaller features or parts of a bigger system. So getting to build something end-to-end again felt really rewarding. I had honestly forgotten how satisfying it is to bring an idea to life and really spend time on the design and flow. I obviously loved writing the guide too (that’s something I’m comfortable with), but this reminded me how much I missed getting my hands dirty with the full app-building process.

**2. Exploring new tools**

I also loved getting to try out some new tools and tech along the way. Tailwind CSS, for example, completely blew me away — it’s so powerful and makes styling so much more intuitive and easy. I’m definitely going to keep using it in future projects. Another exploration I really enjoyed was integrating Calendly within the app to give users the ability to book future sessions and see their upcoming sessions. Being able to successfully implement this integration required me to dive deeper into server-side Next.js and Clerk Backend SDK. It took a long time to successfully get to the end result, but I am really happy about how it turned out. 

**3. Concept & design**

One thing I’m especially proud of is the concept and design of the app. This was a passion project I’ve had in the back of my mind for a while — getting to actually do it through this task was an amazing feeling. Being able to finally build a site around something I deeply care about (mentorship, community, women in tech) made this feel really personal. And on the design side, I think I found a good balance between keeping things clean and professional while also injecting bits of my personality. 

**4. Writing the guide**

I’m also really happy with how the guide turned out. I tried to make it super clear and easy to follow, especially for people who might be new to theme switching or Clerk. Writing helpful docs is something I’ve done a lot of in the past few years, so I wanted to make sure it wasn’t just functional, but also friendly and approachable.

**5. Learning on the fly**

And finally, I’m proud of the fact that I pulled this off using some tools I hadn’t worked with before. Being able to learn quickly, adapt, and figure things out on the fly is something I do a lot as a tech educator, and this project really reminded me of how valuable that skill is. It felt amazing to put that into practice and build something I genuinely care about.

### Lessons & Improvements 💡

**1. If I could use Clerk's custom MDX components...**

If I could have, I would’ve loved to use Clerk’s custom MDX components throughout this tutorial. In particular, I would have used Clerk’s custom code snippet components — especially the `<CodeBlockTabs />` component for switching between different code variations (for e.g - TypeScript vs JavaScript or npm vs yarn) and marking a code block as terminal to clearly indicate commands to be run in a terminal. I would have also used the highlighting feature to be able to highlight specific changes in a code block, especially with changes to the `app/layout.tsx` file. 

The `<Steps />` component would have been an ideal fit for this kind of step-by-step guide. Instead of having numbered headings, I would have implemented this component to mark the different steps in the tutorial. In the **Apply styling based on theme across your app** section, where I discuss different implementation options depending on whether the user is using Tailwind CSS, I would’ve used the `<Tabs />` component to clearly separate those paths.

At the beginning of the tutorial, I would have implemented the `<TutorialHero />` component to provide links to any prerequisite learning materials or example repositories and would’ve done something similar for laying out the learning objectives.

In the **Apply providers in the root layout** section, I think the `<Properties />` component would land really well to be able to neatly list and describe the different props required by the `<ThemeProvider>` component.

Finally, at the top of the guide, I included what would have become the file metadata if this tutorial was fully integrated into Clerk’s documentation system — referring to this:

```
---
title: Implement a theme switcher for your Clerk-powered Next.js application
description: Learn how to build a theme switcher that applies across both your application and Clerk components in this step-by-step guide.
---
```

**2. The why behind some of my decisions...**

- **Why I stored the tasks and reflection notes using `localStorage`:** I chose to use `localStorage` to save tasks and reflection notes so that users can keep their data even after refreshing the page or closing the browser. It’s a simple way to persist data directly in the browser without needing a backend or database. However, if I had more time, I would plan to move to a proper database so that the data can be synced across devices and accounts, but for now, `localStorage` helps keep everything lightweight and fast while still giving users a smooth experience.
- **Using Markdown instead of MDX for the guide:** I initially wanted to write the tutorial in MDX to align with Clerk’s style and integrate custom components. But after spending a lot of time trying to troubleshoot the setup (and not getting the visual output I needed), I decided to stick with Markdown. It wasn’t the ideal route, but it allowed me to keep moving and focus on delivering something clear and useful.
- **Building the homepage with real information:** I didn´t want this app to feel like a generic SaaS product. The homepage includes my story, my background and approach to mentorship to give you a clear sense of who I am and how I work. It was a way to inject some personality beyond the chosen design and functionality of the app. I also tend to be more engaged when building a product with a clear purpose and with intention - this felt meaningful because it was based on a real need I've seen in my mentorship work. 
- **Keeping the design minimal:** I didn't want to overcomplicate my design for this app - I usually prefer minimal and functional user interfaces to prevent users from being overwhelmed. In that sense, the design reflects a bit of me too.
- **Writing docs alongside development**: Normally, I choose to save documentation for the end, but this time, I decided to write as I built. This helped me keep my thought process clear and remember the challenges and wins along the way. 
- **Tech choices**: I hadn't worked with Tailwind CSS before, but chose to use it here because of how well it integrates with Next.js, and because I wanted to challenge myself and learn something new. It made the process more challenging, but made the final result even more rewarding. It was also my first time using Vercel for deployment (I usually go with Render), but given it was built by the creators of Next.js, it felt like the natural choice for seamless integration. Also, it was another tool to add to my toolbox and I really enjoyed exploring what it had to offer.

**3. Features I would have built if I had more time...**

While this project was built as part of this task, I'd love to continue developing it into something more robust and functional. Here are a few features I would have liked to include or hope to add in the future:

- **Stripe integration** to allow mentees to purchase mentorship packages directly through the platform.
- **Github integration** so mentees can submit their work and receive feedback within the portal.
- A **curated, searchable library** of tools, templates and guides tailoed to different stages of the tech journey.
- An **in-app instant messaging feature** for easier communications.
- **Gamification elements** integrated within the app to boost motivation of mentees.
- An **admin (mentor) dashboard** for me to manage and track mentee progress, review notes and plan next steps across sessions.
- Additional theming options tied to a mood selector with **Spotify playlists** for a personalized experience.

Beyond adding new features, I would focus on refactoring the existing code to improve readability and maintainability. Additionally, I would enhance the architecture to ensure scalability and flexibility as the project grows. I’d also integrate a robust database solution to securely store and manage mentee information instead of using `localStorage`, providing a better experience for both mentors and mentees. 

**4. What have I learned from this task...**

I've learned so much from this task - like I mentioned earlier, I hadn't built an app from the ground up in a while, so getting back into that process taught me a lot. 

From a technical perspective, I was able to solidify my understanding of Next.js, TypeScript, Tailwind CSS and Clerk's infrastructure. Being able to get more hands-on experience with integrating authentication, designing project structure and architecture, and thinking about the overall flow of the app was extremely valuable. I loved being able to brainstorm the kind of design I wanted for the app - I explored CSS gradients, animations and other cool design tools to bring my vision to life.

From a personal perspective, I learned to be patient with myself and give myself grace when I felt stuck. There were a lot of moments spent experimenting, iterating, and refining, which sometimes led to periods of self-doubt or uncertainty. I also learned the importance of adaptability - for example, when MDX wasn't working the way I'd hoped, I spent a long time trying to make it work because I really wanted to use it. But in the end, I decided to pivot to Markdown - while this wasn't what I wanted, I decided it was more important to make steady progress rather than get hung up on the "perfect" solution. 

Finally, I learned how to manage my time more effectively and juggle multiple tasks at once. From building the app to writing the docs to refining the code, I really enjoyed the process of wearing different hats. That variety kept things engaging and interesting to me - it felt as I was applying different skillsets all at once. 

## 💭 Final thoughts

Thank you for taking the time to review my submission and check out this project! 

Getting to build this application and write the tutorial guide has been a *really* rewarding experience for me. It gave me the chance to combine my passion for tech education and mentorship with my technical skills. It pushed me in ways I hadn't expected and I learned a ton through it all. I hope I was able to convey my personality while also showcasing my technical writing and engineering capabilities. 

Overall, I’m proud of what I’ve accomplished and looking forward to applying what I’ve learned to future projects! 
