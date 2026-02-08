# 📸 AYF Tree Service - Image Management Guide

This guide explains exactly how to manage images on your website. **No coding required!**

## 📂 Folder Structure (Where Images Go)

Your images go in the `/public/images/` folder. Here's exactly where each type of image belongs:

```
public/images/
├── 📁 hero/                    # Homepage banner images
│   ├── hero-main.jpg          # Main background image (MUST HAVE)
│   ├── hero-1.jpg             # Optional: for slider
│   ├── hero-2.jpg             # Optional: for slider
│   └── hero-3.jpg             # Optional: for slider
│
├── 📁 services/               # Service page photos
│   ├── 📁 tree-removal/
│   │   ├── main.jpg          # Main service photo (MUST HAVE)
│   │   ├── work-1.jpg        # Work example 1
│   │   ├── work-2.jpg        # Work example 2
│   │   └── work-3.jpg        # Work example 3
│   │
│   ├── 📁 tree-trimming/
│   │   ├── main.jpg
│   │   ├── work-1.jpg
│   │   ├── work-2.jpg
│   │   └── work-3.jpg
│   │
│   ├── 📁 stump-grinding/
│   │   └── (same structure)
│   │
│   └── 📁 storm-cleanup/
│       └── (same structure)
│
├── 📁 gallery/                # Gallery page photos
│   ├── project-1.jpg
│   ├── project-2.jpg
│   ├── project-3.jpg
│   ├── project-4.jpg
│   └── ... (add as many as you want)
│
└── 📁 about/                  # About page photos
    ├── team.jpg              # Main team photo
    ├── equipment-1.jpg       # Equipment photo 1
    ├── equipment-2.jpg       # Equipment photo 2
    ├── equipment-3.jpg       # Equipment photo 3
    └── 📁 team/              # Individual team photos
        ├── john.jpg
        ├── mike.jpg
        └── sarah.jpg
```

## 🖼️ Image Requirements

### Recommended Sizes

| Location | Size | Aspect Ratio | Format |
|----------|------|--------------|--------|
| Hero (main) | 1920x1080px | 16:9 | JPG or WebP |
| Hero (slides) | 1920x1080px | 16:9 | JPG or WebP |
| Services (main) | 800x600px | 4:3 | JPG or WebP |
| Services (gallery) | 600x450px | 4:3 | JPG or WebP |
| Gallery | 1200x800px | 3:2 | JPG or WebP |
| About (team) | 600x600px | 1:1 (square) | JPG or WebP |
| About (equipment) | 800x600px | 4:3 | JPG or WebP |

### File Naming Rules

✅ **GOOD filenames:**
- `hero-main.jpg`
- `tree-removal-1.jpg`
- `team-photo.jpg`
- `equipment-chipper.jpg`

❌ **BAD filenames:**
- `IMG_1234.jpg` (not descriptive)
- `my image.jpg` (has spaces)
- `TreeRemoval.JPG` (uppercase extension)
- `photo.png` (wrong format, use JPG)

**Rule:** Use lowercase letters, numbers, and dashes only. No spaces!

## 📥 How to Add Images

### Method 1: Before Deploying (Recommended)

1. **Prepare your images**
   - Resize them to the recommended sizes
   - Compress them using [TinyPNG.com](https://tinypng.com)
   - Rename with proper filenames

2. **Copy to folders**
   ```
   Your Computer → project folder → public → images → [correct folder]
   ```

3. **Deploy your site**
   ```bash
   npm run build
   # or push to GitHub for auto-deploy
   ```

### Method 2: After Deploying (For Updates)

If your site is already live:

1. **Add new images to your project folder** (same as Method 1)

2. **Push to GitHub** (if using GitHub deployment):
   ```bash
   git add .
   git commit -m "Added new photos"
   git push
   ```
   Vercel will automatically redeploy!

3. **Or rebuild manually**:
   ```bash
   npm run build
   # Upload the new dist folder to Vercel
   ```

## 🔄 How to Replace an Image

### Option A: Keep Same Filename (Easiest)

1. Delete the old image file
2. Copy the new image with the **exact same filename**
3. Redeploy

**Example:**
```
OLD: hero-main.jpg (delete this)
NEW: hero-main.jpg (your new image)
```

### Option B: Change Filename

1. Copy new image to the folder with a new name
2. Open `lib/data.ts` in a text editor
3. Find the old filename and change it to the new one
4. Save the file
5. Redeploy

**Example:**
```typescript
// In lib/data.ts, change this:
export const heroImages = {
  main: "/images/hero/old-name.jpg",     // OLD
  main: "/images/hero/new-hero-image.jpg", // NEW
};
```

## 🗑️ How to Remove an Image

1. **Delete the image file** from the folder

2. **If the image is listed in `lib/data.ts`:**
   - Open `lib/data.ts`
   - Find and remove that image entry
   - Save the file

3. **Redeploy your site**

**Example:**
```typescript
// REMOVE this from lib/data.ts:
{
  src: "/images/gallery/project-5.jpg",
  alt: "Old project",
  category: "Tree Removal",
  title: "Old Project"
},
```

## 🎨 Image Optimization Tips

### Before Uploading, ALWAYS:

1. **Resize** to recommended dimensions
   - Use: Photoshop, GIMP, or online tools like [PicResize](https://picresize.com)

2. **Compress** to reduce file size
   - Use: [TinyPNG.com](https://tinypng.com) or [Squoosh.app](https://squoosh.app)
   - Aim for: Under 200KB per image
   - Hero images: Can be 300-500KB

3. **Check quality**
   - Open the compressed image
   - Make sure it still looks good
   - If blurry, compress less

### Why Optimize?

- ✅ Faster website loading
- ✅ Better Google ranking
- ✅ Lower hosting costs
- ✅ Happier visitors

## 🆘 Common Problems & Solutions

### Problem: "Image not showing up"

**Check:**
1. Is the image in the correct folder?
2. Is the filename spelled exactly right? (Case-sensitive!)
3. Did you rebuild/redeploy after adding the image?
4. Try refreshing browser with Ctrl+Shift+R (clears cache)

### Problem: "Image looks stretched"

**Solution:**
- Resize image to the correct aspect ratio before uploading
- Hero: 16:9 (1920x1080)
- Services: 4:3 (800x600)
- Gallery: 3:2 (1200x800)

### Problem: "Page loads slowly"

**Solution:**
- Compress your images more
- Use WebP format instead of JPG (better compression)
- Reduce image dimensions if too large

### Problem: "Gallery images look blurry"

**Solution:**
- Use higher resolution images (1200px wide minimum)
- Don't over-compress
- Check original image quality

## 📋 Quick Reference Checklist

When adding new images:

- [ ] Image is in the correct folder
- [ ] Filename is lowercase with dashes (no spaces)
- [ ] Image is JPG or WebP format
- [ ] Image is resized to recommended dimensions
- [ ] Image is compressed (under 200KB if possible)
- [ ] Updated `lib/data.ts` if using a new filename
- [ ] Tested locally before deploying
- [ ] Committed and pushed to GitHub (if using Git)

## 🎯 Pro Tips

1. **Keep originals:** Save your high-res original photos somewhere safe. Only upload optimized versions.

2. **Consistent naming:** Develop a naming system:
   - `tree-removal-[date]-[number].jpg`
   - `trimming-oak-tree-01.jpg`

3. **Backup:** Keep a copy of your `public/images` folder backed up.

4. **Seasonal updates:** Update hero images seasonally (spring, summer, fall, winter) to keep site fresh.

5. **Before/After:** For gallery, take before AND after photos of jobs. Customers love seeing transformations!

## 📞 Need Help?

If you're stuck:
1. Check the main README.md
2. Review Next.js image docs: [nextjs.org/docs/app/building-your-application/optimizing/static-assets](https://nextjs.org/docs/app/building-your-application/optimizing/static-assets)
3. Ask your web developer for assistance

---

**Remember:** You only need to edit code if you change filenames. If you use the same filenames, just replace the files and redeploy!


---

## 🎬 VIDEO MANAGEMENT

### Adding Videos to Your Website

Your website includes a **Videos page** that showcases your work through YouTube or Vimeo videos.

### How to Add a Video

#### Step 1: Upload to YouTube
1. Go to [youtube.com](https://youtube.com) and sign in
2. Click the camera icon → "Upload video"
3. Select your video file
4. Add title, description, and tags
5. Set to "Public" or "Unlisted"
6. Wait for processing to complete

#### Step 2: Get the Video ID
Look at your video URL:
```
https://www.youtube.com/watch?v=dQw4w9WgXcQ
                              └──────────┘
                              This is the Video ID
```

#### Step 3: Add to Your Website

**For Featured Video (Homepage):**

Open `lib/data.ts` and edit:
```typescript
export const videos = {
  featured: {
    id: "dQw4w9WgXcQ",  // ← Paste your Video ID here
    title: "Your Video Title",
    description: "Description of what the video shows",
    platform: "youtube"
  },
  // ...
}
```

**For Video Gallery:**

Add to the `gallery` array:
```typescript
gallery: [
  {
    id: "YOUR_VIDEO_ID",
    title: "Video Title",
    description: "What this video shows",
    category: "Tree Removal",  // Options: Tree Removal, Trimming, Stump Grinding, Storm Cleanup
    platform: "youtube"
  },
  // ... existing videos
]
```

#### Step 4: Redeploy

Push to GitHub or rebuild:
```bash
git add .
git commit -m "Added new videos"
git push
```

### Video Best Practices

✅ **DO:**
- Keep videos under 3 minutes for better engagement
- Show before/after shots
- Include shots of your team working
- Add captions/subtitles
- Use good lighting and stable camera
- Show safety equipment being used

❌ **DON'T:**
- Upload videos with copyrighted music
- Show unsafe practices
- Make videos too long (people lose interest)
- Forget to add your logo/watermark

### Video Ideas for Tree Service

1. **Time-lapse tree removal** - Show the whole process in 60 seconds
2. **Before & After** - Split screen showing transformation
3. **Equipment showcase** - Explain your professional tools
4. **Safety procedures** - Show how you protect property
5. **Customer testimonials** - Happy clients talking about your work
6. **Storm damage emergency** - Show rapid response
7. **Stump grinding process** - Close-up of the machine working
8. **Tree climbing/trimming** - Show skill and precision

### Using Vimeo Instead of YouTube

If you prefer Vimeo:

1. Upload to Vimeo
2. Get video ID from URL: `vimeo.com/123456789`
3. In `lib/data.ts`, set `platform: "vimeo"`
4. Use the numeric ID

```typescript
{
  id: "123456789",
  title: "My Video",
  platform: "vimeo"  // ← Change this
}
```

### Video Thumbnails

YouTube automatically generates thumbnails, but you can upload a custom one:

1. Go to YouTube Studio
2. Select your video
3. Click "Details"
4. Under "Thumbnail", click "Upload thumbnail"
5. Use 1280x720px image
6. Add text overlay with video title

### Homepage Video Section

The homepage includes a video preview section that links to your Videos page. To update the preview image:

1. Open `app/(main)/page.tsx`
2. Find the video section (around line 150)
3. Replace `VIDEO_ID_HERE` with your actual YouTube video ID:

```typescript
<img
  src="https://img.youtube.com/vi/YOUR_VIDEO_ID/maxresdefault.jpg"
  alt="AYF Tree Service Video"
/>
```

---

**Questions?** Check the main README.md or contact your developer.
