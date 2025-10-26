# Pixel-Perfect Landing Page

A responsive, pixel-perfect landing page built from a provided Dribbble mockup.  
The focus was on visual fidelity, smooth animations, and subtle micro-interactions.

### Deployed Live : https://assesment-azure.vercel.app/

---

## Project Summary

- This project replicates a given design mockup as closely as possible using **Tailwind CSS** and **React(Vite)**.
- The goal was to translate a static visual concept into an interactive, production-ready landing page.

### Key Decisions

- **Framework:** React (Vite) for its modular component structure, faster development workflow, and built-in reactivity.

- **Styling:** Tailwind CSS for utility-first responsiveness and rapid design iteration.

- **Animations:** Framer Motion + Tailwind transitions for scroll-based animations and micro interactions like hover effects.

- **Media Optimization:** Hosted looping videos on Cloudinary for optimized delivery and smoother playback as vercel is not good with hosting heavy media.

- **Structure:**
  - `components/` – Reusable UI components.
  - `sections/` – Layout sections of the landing page.
  - `assets/` – Images,videos and icons.
  - `App.tsx / page.tsx` – Page entry with layout composition.

---

## AI Tools Used

| Tool          | Purpose                                                                                                                          |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| ChatGPT       | Used to streamline repetitive setup tasks, refine animation logic, and quickly generate standard Tailwind + React code snippets. |
| Google Gemini | Used Gemini for quick text extraction from the design mockup.                                                                    |

---

## AI Prompts Used

**1. Prompt Given** : Need this React code optimized for phone, tablet, and laptop — basically all major viewports. On mobile and tablet, include a hamburger menu (use an icon from React Icons). The menu should slide in from the right side with a background overlay opacity of around 40–50% <br/>
**AI Output** : Provided a responsive rect code optimized for all viewports using tailwindcss , Need to refine some spacing and opacity tho.

**2. Prompt Given** : I have this bento layout how can I add a looping video to one of the boxes, let’s say the boxes labeled ‘vid1’ and ‘vid2’? <br/>
**AI Output** : Got the exact solution as this was a straightforward prompt that could’ve been solved with a couple of quick Google searches.

**3. Prompt Given** : Can you make the bento layout for mobile a 3-tile grid with ‘vid1’ and ‘vid2’ on the first row, and an image on the next row spanning the full width (col-span-12)? <br/>
**AI Output**: Suffered with this one gpt was not able to give the code instead broke stuff, so did it myself.

**4. Prompt Given** : I’ll send components one by one — I need them animated so each appears sequentially with smooth transitions. The animations should trigger only when the component is inView and should remain visible afterward (no fade-out when scrolled past).<br/>
**AI Output** : Gave the framer motion code for two-three componenets, used that code to implement the animations myself, also some tweaks where required like delay stagger and stuff.

## Final Thoughts

AI can be helpful for completing repetitive tasks and even complex tasks. However, in frontend development, it’s important to provide the basic logic yourself otherwise the AI output may break the structure. If you know what you’re doing and understand the core concepts, you can confidently leverage AI for more complex tasks and refine its output instead of blindly copying and pasting. This became clear while making the code responsive for all viewports. The AI provided some janky but working code—if someone didn’t understand Tailwind responsiveness, blindly pasting it would have caused issues. I didn’t discard the AI’s suggestions entirely; I adapted and redefined the code, which definitely saved me time while preserving correctness.

---

## Setup & Run Instructions

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/project-name.git
cd project-name
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run locally

```bash
npm run dev
```

### 4. Build for production

```bash
npm run build
npm run preview
```
