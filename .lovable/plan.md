

# iPad Repair Before/After Video Section

## Overview
Add a "See Our Work" before/after video section to the iPad repair page, featuring two short looping MP4 videos that autoplay silently like GIFs. The videos will be placed in the `public/` directory for optimal streaming (not bundled by Vite), and the section will be lazy-loaded to protect page load performance.

## Why `public/` instead of `src/assets/`
Video files imported via `src/assets/` get processed by Vite's asset pipeline, which can base64-inline smaller files or add unnecessary hashing overhead. Placing them in `public/videos/` allows the browser to stream them directly with proper caching headers, which is the standard approach for media files.

## Implementation Steps

### 1. Copy video files to `public/videos/`
- `user-uploads://pre-repair_ipad.mp4` --> `public/videos/ipad-pre-repair.mp4`
- `user-uploads://post_repair_ipad.mp4` --> `public/videos/ipad-post-repair.mp4`

### 2. Create `src/components/repair/BeforeAfterVideos.tsx`
A new reusable component containing:
- Section heading with a badge ("Real Repairs") and title ("See the Difference")
- Two-column grid (stacks on mobile) with before/after video cards
- Each card contains:
  - A `<video>` element with `autoPlay`, `muted`, `loop`, `playsInline` attributes (required for mobile autoplay)
  - `preload="metadata"` to only load the first frame initially, keeping initial page load fast
  - A "Before" / "After" badge overlay
  - A short caption underneath
- The component will accept props so it can be reused on other repair pages in the future:
  - `preRepairSrc`, `postRepairSrc` (video URLs)
  - `preRepairCaption`, `postRepairCaption`
  - `deviceName`

### 3. Integrate into iPad repair page
- Import the new `BeforeAfterVideos` component in `iPadRepair.tsx`
- Pass it to the `RepairLandingTemplate` via a new optional `beforeAfterSection` prop (a React node), rendered between the Services grid and Model list
- Alternatively, render it directly in `iPadRepair.tsx` by switching from using `RepairLandingTemplate` as a wrapper to composing the page manually -- however, the cleaner approach is adding the optional slot to the template

### 4. Add optional slot to `RepairLandingTemplate`
- Add an optional `children` or `beforeAfterSection?: React.ReactNode` prop to `RepairLandingTemplate`
- Render it between `ServiceGrid` and `ModelListGrid` (a natural placement -- after showing what you fix, show proof)
- This keeps the template flexible for other device pages to add their own custom sections later

### 5. Update Table of Contents
- Add a "Results" entry to the `TableOfContents` items array so visitors can jump to the video section

## Performance Considerations
- **`preload="metadata"`**: Only loads video dimensions and first frame on page load -- no full video download until playback starts
- **`loading="lazy"` on container**: The section will use Intersection Observer (or native lazy behavior) so videos only begin loading when scrolled near
- **No JavaScript player library**: Pure HTML5 `<video>` element keeps the JS bundle unchanged
- **Public directory**: Videos are served as static files with browser caching, not processed through the bundler

## Technical Details

**Video element attributes:**
```html
<video
  autoPlay
  muted
  loop
  playsInline
  preload="metadata"
  className="aspect-[9/16] w-full object-cover rounded-lg"
>
  <source src="/videos/ipad-pre-repair.mp4" type="video/mp4" />
</video>
```

**Files created/modified:**
- `public/videos/ipad-pre-repair.mp4` (new -- copied from upload)
- `public/videos/ipad-post-repair.mp4` (new -- copied from upload)
- `src/components/repair/BeforeAfterVideos.tsx` (new component)
- `src/components/repair/RepairLandingTemplate.tsx` (add optional slot prop)
- `src/pages/repair/iPadRepair.tsx` (pass video section)
