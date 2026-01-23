# Birth & Brodo Landing Page

A beautiful, high-conversion landing page built with Next.js 14, React 19, and Tailwind CSS v4.

## 🎯 Purpose

This is a proof-of-concept landing page designed to validate:
1. Do people understand this instantly?
2. Do they want it badly enough to give their email?
3. Who wants it most (self vs gift vs partner)?

## 🚀 Getting Started

### Run the development server:

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for production:

```bash
npm run build
npm start
```

## 📊 What to Measure

### Primary Metrics:
- **Email conversion rate** (aim: 25-40%)
- **% self vs gift signups**
- **Time on page**
- **Scroll depth**

### Follow-Up Email:
After signup, send a 1-question email:

**"What made you interested in Birth & Brodo?"**

Options:
- I'm currently pregnant
- I'm postpartum
- I'm supporting someone else
- I wish this existed earlier

## 🎨 Design Features

### Color Palette:
- **Warm Cream**: `#fffbf5` (background)
- **Warm Beige**: `#f5ede1` (alternating sections)
- **Warm Brown**: `#8b6f47` (accents)
- **Deep Brown**: `#4a3728` (text, buttons)
- **Terracotta**: `#c97e5a` (icons, highlights)

### Typography:
- **Headers**: Playfair Display (serif)
- **Body**: Inter (sans-serif)

### Sections Structure:
1. ✅ Hero Section - Clear value proposition
2. ✅ Problem Statement - Empathy building
3. ✅ Differentiators - 3 key pillars
4. ✅ How It Works - Simple 3-step process
5. ✅ Target Audience - Self-identification
6. ✅ Credibility - Trust building
7. ✅ Email Capture - Primary conversion goal
8. ✅ Soft Close - Expectation setting

## 📧 Email Capture Component

Located at `app/components/EmailCapture.tsx`

### Features:
- Email validation
- Self/gift checkbox tracking
- Success state
- Loading state
- Smooth animations

### Current Implementation:
The form currently logs data to console. You need to:

1. **Replace the console.log with your API endpoint:**

```typescript
// In app/components/EmailCapture.tsx, line ~20
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setLoading(true);

  // Replace this with your actual API call
  const response = await fetch('/api/signup', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email,
      signupType,
      timestamp: new Date().toISOString()
    })
  });

  setSubmitted(true);
  setLoading(false);
};
```

2. **Create the API endpoint** at `app/api/signup/route.ts`:

```typescript
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json();
  
  // Store in your database or send to email service
  // Examples: Airtable, Google Sheets, Mailchimp, ConvertKit, etc.
  
  return NextResponse.json({ success: true });
}
```

## 🔌 Integration Options

### Recommended Email/Data Collection Services:

1. **ConvertKit** - Email marketing focused on creators
2. **Mailchimp** - Full-featured email platform
3. **Airtable** - Simple database with API
4. **Google Sheets** - Via Google Sheets API
5. **Notion** - Via Notion API

### Analytics:
- Add Google Analytics or Plausible for tracking
- Set up conversion goals
- Track scroll depth
- Monitor time on page

## 🎯 Key Copy Elements

All copy is directly from your specifications:

- **Headline**: "Postpartum recovery, handled."
- **Subheadline**: Recovery-focused meals for the fourth trimester
- **Value Props**: Recovery-Focused, Purpose-Built, Handled
- **Product Names**: Use functional language like "The First 7 Days", "C-Section Recovery Pack"

## 📱 Responsive Design

The page is fully responsive:
- Mobile-first approach
- Breakpoints: `md:` (768px), `lg:` (1024px)
- Touch-friendly buttons and inputs
- Optimized typography scaling

## 🎨 Customization

### Update Colors:
Edit `app/globals.css`:

```css
:root {
  --background: #fffbf5;
  --foreground: #1a1511;
  --warm-cream: #fffbf5;
  --warm-beige: #f5ede1;
  --warm-brown: #8b6f47;
  --deep-brown: #4a3728;
  --accent-terracotta: #c97e5a;
}
```

### Update Copy:
All copy is in `app/page.tsx` - easy to find and edit by section.

### Update Fonts:
Edit `app/layout.tsx` to change from Playfair Display / Inter to your preferred fonts.

## 📈 Optimization Tips

1. **Add Open Graph tags** for social sharing
2. **Add favicon** (replace `app/favicon.ico`)
3. **Compress images** if you add photos
4. **Add schema markup** for SEO
5. **Set up A/B testing** for headlines

## 🚀 Deployment

### Vercel (Recommended):
```bash
npm install -g vercel
vercel
```

### Other platforms:
- Netlify
- Railway
- Digital Ocean
- AWS Amplify

## 📝 Next Steps

1. ✅ Landing page complete
2. ⏳ Set up email collection service
3. ⏳ Add analytics tracking
4. ⏳ Test on multiple devices
5. ⏳ Soft launch to small audience
6. ⏳ Measure and iterate based on data

## 🎉 Launch Checklist

- [ ] Connect email capture to backend
- [ ] Set up analytics
- [ ] Test form submission
- [ ] Test on mobile devices
- [ ] Check page load speed
- [ ] Verify all links work
- [ ] Add Open Graph image
- [ ] Set up custom domain
- [ ] Create follow-up email sequence
- [ ] Prepare launch announcement

---

**Note**: This is a validation tool, not a sales tool. Focus on learning who wants this and why.

