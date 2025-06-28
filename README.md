# VIP Aroosi

An elite matchmaking landing site built with **Next.js 15**, **TypeScript**, **Tailwind CSS** and a custom purple-accent theme inspired by VIPShaadi.com.

## Features

• Hero section, advantage stats, success stories, FAQ and enquiry form on the landing page (`/`).
• Dedicated **Contact** page at `/contact` with a basic Formspree form (replace `your-form-id`).
• Boldonse headings + Nunito Sans body typography.
• Tailwind theme with purple primary palette.
• Fully typed (`typescript`) & ESLint-ready.

## Getting Started

```bash
# install dependencies
git clone https://github.com/your-org/vip-aroosi.git
cd vip-aroosi
npm install --legacy-peer-deps

# development server
npm run dev
# open http://localhost:3000
```

## Project Scripts

| Script | Description |
| ------ | ----------- |
| `npm run dev` | Start Next.js dev server |
| `npm run build` | Build for production |
| `npm start` | Start the compiled production build |
| `npm run lint` | Run ESLint |

## Customisation

1. Replace **hero background**: add `public/images/hero-bg.jpg` (or update the URL in `src/app/page.tsx`).
2. Change enquiry / contact form provider – update the `action` attribute in the enquiry & contact forms.
3. Provide **Boldonse** web-font files under `public/fonts` if you don't want to rely on Google Fonts.

## Deployment

Ready for Vercel or any Node-compatible host:

```bash
npm run build
npm start
```

## License

MIT 