# AYF Tree Service Website

A complete, professional website for AYF Tree Service built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Features

- ✅ **Complete Website** - Home, Services, Gallery, About, Service Area, FAQs, Contact
- ✅ **Easy Image Management** - Simple folder structure, no coding needed to change images
- ✅ **Working Contact Form** - Sends emails directly to vadolfo123@gmail.com
- ✅ **Mobile Responsive** - Looks great on all devices
- ✅ **SEO Ready** - Meta tags, semantic HTML, fast loading
- ✅ **Gallery with Lightbox** - Click to enlarge photos with navigation
- ✅ **Emergency Banner** - 24/7 service notice (dismissible)

## 📁 Project Structure

```
ayf-tree-service/
├── app/                          # Next.js App Router
│   ├── (main)/                   # Main pages group
│   │   ├── page.tsx              # Home page
│   │   ├── services/page.tsx     # Services page
│   │   ├── gallery/page.tsx      # Photo gallery
│   │   ├── about/page.tsx        # About us
│   │   ├── service-area/page.tsx # Service areas
│   │   ├── faqs/page.tsx         # FAQs
│   │   └── contact/page.tsx      # Contact form
│   ├── api/contact/route.ts      # Contact form API
│   ├── layout.tsx                # Root layout
│   └── globals.css               # Global styles
├── components/                   # React components
│   ├── navbar.tsx               # Navigation bar
│   ├── footer.tsx               # Footer
│   └── emergency-banner.tsx     # Emergency notice
├── lib/                         # Utilities and data
│   ├── data.ts                  # ALL EDITABLE CONTENT
│   └── utils.ts                 # Helper functions
├── public/                      # Static files
│   └── images/                  # All images go here
│       ├── hero/               # Hero/banner images
│       ├── services/           # Service photos
│       │   ├── tree-removal/
│       │   ├── tree-trimming/
│       │   ├── stump-grinding/
│       │   └── storm-cleanup/
│       ├── gallery/            # Gallery photos
│       └── about/              # About page photos
├── package.json
├── next.config.js
├── tailwind.config.js
└── README.md                    # This file
```

## 🖼️ IMAGE MANAGEMENT GUIDE

### Where to Put Images

All images go in the `/public/images/` folder:

```
public/images/
├── hero/                      # Homepage hero images
│   ├── hero-main.jpg         # Main hero background (REQUIRED)
│   ├── hero-1.jpg            # Optional slider images
│   ├── hero-2.jpg
│   └── hero-3.jpg
├── services/                  # Service page images
│   ├── tree-removal/
│   │   ├── main.jpg          # Main service image (REQUIRED)
│   │   ├── work-1.jpg        # Gallery thumbnails
│   │   ├── work-2.jpg
│   │   └── work-3.jpg
│   ├── tree-trimming/
│   │   ├── main.jpg
│   │   ├── work-1.jpg
│   │   ├── work-2.jpg
│   │   └── work-3.jpg
│   ├── stump-grinding/
│   │   └── ... (same structure)
│   └── storm-cleanup/
│       └── ... (same structure)
├── gallery/                   # Gallery page images
│   ├── project-1.jpg
│   ├── project-2.jpg
│   ├── project-3.jpg
│   └── ... (add as many as you want)
└── about/                     # About page images
    ├── team.jpg              # Main team photo
    ├── equipment-1.jpg       # Equipment photos
    ├── equipment-2.jpg
    ├── equipment-3.jpg
    └── team/                 # Team member photos
        ├── john.jpg
        ├── mike.jpg
        └── sarah.jpg
```

### How to Add Images

#### Step 1: Prepare Your Images
- **Format:** JPG or WebP (WebP is best for web)
- **Size:** 
  - Hero images: 1920x1080px (16:9)
  - Service images: 800x600px (4:3)
  - Gallery images: 1200x800px (3:2)
  - Team photos: 600x600px (1:1 square)
- **Optimization:** Compress images using [TinyPNG](https://tinypng.com) or similar

#### Step 2: Copy Images to Folders
Simply copy your image files into the appropriate folders. The folder structure tells the website where to use them.

#### Step 3: Update Image References (Optional)
If you use different filenames than the defaults, edit `lib/data.ts`:

```typescript
export const heroImages = {
  main: "/images/hero/your-image-name.jpg",  // Change this
  slides: [
    "/images/hero/slide-1.jpg",
    "/images/hero/slide-2.jpg"
  ]
};
```

### How to Replace Images

**Option 1: Same Filename (Easiest)**
1. Delete the old image file
2. Copy the new image with the SAME filename
3. Redeploy the site

**Option 2: Different Filename**
1. Copy new image to the folder
2. Edit `lib/data.ts` to update the filename
3. Redeploy the site

### How to Remove Images

1. Simply delete the image file from the folder
2. If the image was referenced in `lib/data.ts`, remove that reference
3. Redeploy the site

### Image Best Practices

✅ **DO:**
- Use descriptive filenames (e.g., `oak-tree-removal.jpg` not `IMG_1234.jpg`)
- Compress images before uploading (aim for <200KB each)
- Use consistent aspect ratios within each section
- Add alt text descriptions in `lib/data.ts` for SEO

❌ **DON'T:**
- Use spaces in filenames (use dashes: `my-image.jpg`)
- Upload images larger than 2MB
- Delete the placeholder structure (keep folders even if empty)

## ✏️ EDITING CONTENT

All website content is in **`lib/data.ts`**. Open this file to edit:

### Company Information
```typescript
export const siteConfig = {
  name: "AYF Tree Service",           // Your company name
  phone: "(555) 123-4567",            // Your phone
  email: "info@ayftreeservice.com",   // Your email
  address: "123 Oak Street...",       // Your address
  // ... more settings
};
```

### Services
```typescript
export const services = [
  {
    id: "tree-removal",
    title: "Tree Removal",
    description: "Your description here...",
    // Edit features, images, etc.
  }
];
```

### Service Areas
```typescript
export const serviceAreas = [
  "Springfield",
  "Riverside",
  // Add or remove cities
];
```

### FAQs
```typescript
export const faqs = [
  {
    question: "Your question?",
    answer: "Your answer here."
  }
];
```

## 🚀 DEPLOYMENT INSTRUCTIONS

### Step 1: Install Dependencies

```bash
cd ayf-tree-service
npm install
```

### Step 2: Set Up Environment Variables

Create a file named `.env.local` in the root folder:

```env
RESEND_API_KEY=your_resend_api_key_here
```

**Get your Resend API Key:**
1. Go to [resend.com](https://resend.com)
2. Sign up for a free account
3. Verify your email
4. Go to API Keys → Create API Key
5. Copy the key and paste it in `.env.local`

### Step 3: Add Your Images

Copy your images to the `public/images/` folders following the structure above.

### Step 4: Test Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your site.

### Step 5: Build for Production

```bash
npm run build
```

This creates a `dist` folder with your static website.

### Step 6: Deploy to Vercel

#### Option A: Deploy with Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# Add environment variable
vercel env add RESEND_API_KEY
```

#### Option B: Deploy with GitHub (Recommended)

1. **Create a GitHub repository:**
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOURUSERNAME/ayf-tree-service.git
git push -u origin main
```

2. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "Add New Project"
   - Import your repository
   - Add environment variable: `RESEND_API_KEY`
   - Click "Deploy"

3. **Auto-deploy:**
   - Every time you push to GitHub, Vercel automatically redeploys

#### Option C: Manual Upload

1. Build the project: `npm run build`
2. Go to [vercel.com](https://vercel.com)
3. Drag and drop the `dist` folder

## 📧 CONTACT FORM SETUP

The contact form is already configured to send to: **vadolfo123@gmail.com**

To change the recipient email, edit `app/api/contact/route.ts`:

```typescript
const TO_EMAIL = "your-new-email@example.com";
```

**Note:** With Resend's free plan, you can only send to your own verified email address. To send to any email, upgrade to a paid plan or verify your domain.

## 🔧 CUSTOMIZATION

### Change Colors

Edit `app/globals.css`:

```css
:root {
  --primary: 142 76% 36%;  /* Green - change HSL values */
}
```

### Change Fonts

Edit `app/layout.tsx`:

```typescript
import { Inter } from "next/font/google";
// Change to another Google Font
```

### Add Google Maps

1. Go to [Google Maps](https://maps.google.com)
2. Search your business
3. Click Share → Embed a map
4. Copy the HTML iframe
5. Paste it in `app/(main)/contact/page.tsx` and `app/(main)/service-area/page.tsx`

## 🆘 TROUBLESHOOTING

### Images not showing?
- Check filename matches exactly (case-sensitive)
- Ensure image is in the correct folder
- Try clearing browser cache (Ctrl+Shift+R)

### Contact form not working?
- Check `RESEND_API_KEY` is set correctly
- Verify you're using the correct email in `route.ts`
- Check Vercel function logs for errors

### Build errors?
- Make sure all images referenced in `data.ts` exist
- Check for typos in file paths
- Run `npm install` again

## 📄 License

This project is open source and free to use for your business.

## 🆘 Support

For issues:
- Next.js docs: [nextjs.org/docs](https://nextjs.org/docs)
- Tailwind docs: [tailwindcss.com](https://tailwindcss.com)
- Resend docs: [resend.com/docs](https://resend.com/docs)

---

**Built with ❤️ for AYF Tree Service**
