# Hero Section Variant-Specific Content Guide

## Overview
Both **Hero Section** and **Hero Section Two** now support **variant-specific content**, allowing you to display different images, videos, and text for each product variant (like 20L vs 24L Commuter Pack, or Ballistic Fabric variants).

> **Note:** You can use both sections independently with different content for maximum flexibility!

## 🎯 Quick Summary

**Key Point:** Both Product-level और Variant-level metafields की structure **बिल्कुल same** है!

### Hero Section (First/Main Hero)
- **Namespace:** `custom`
- **Key:** `hero_content`  
- **Type:** JSON/List with array of objects
- **Schema:** Same validation schema for both levels

### Hero Section Two (Second/Additional Hero)
- **Namespace:** `custom`
- **Key:** `hero_content_two`  
- **Type:** JSON/List with array of objects
- **Schema:** Same validation schema (identical to hero_content)

Product-level में डालोगे तो सभी variants के लिए same hero दिखेगा।  
Variant-level में डालोगे तो उस specific variant के लिए unique hero दिखेगा।

## 📝 Complete Example with Dummy Data

### Example 1: Product-Level Hero (Shared by all variants)

**Location:** Product → Metafields → `custom.hero_content`

```json
[
  {
    "content_type": "image",
    "desktop_image": "https://cdn.shopify.com/s/files/1/0123/4567/files/commuter-pack-hero-desktop.jpg",
    "mobile_image": "https://cdn.shopify.com/s/files/1/0123/4567/files/commuter-pack-hero-mobile.jpg",
    "heading": "The Ultimate Commuter Pack",
    "text": "Designed for the modern professional who values both style and functionality",
    "btn_text": "Shop Now",
    "btn_url": "/collections/bags",
    "autoplay": true,
    "autoplay_duration": 5,
    "mobile_padding_top": 60
  },
  {
    "content_type": "video",
    "desktop_video": "https://cdn.shopify.com/s/files/1/0123/4567/files/pack-features-video.mp4",
    "mobile_video": "https://cdn.shopify.com/s/files/1/0123/4567/files/pack-features-mobile.mp4",
    "video_poster": "https://cdn.shopify.com/s/files/1/0123/4567/files/video-poster.jpg",
    "video_poster_mobile": "https://cdn.shopify.com/s/files/1/0123/4567/files/video-poster-mobile.jpg",
    "heading": "See It In Action",
    "text": "Watch how our pack adapts to your daily needs",
    "btn_text": "Learn More",
    "btn_url": "/pages/features",
    "autoplay": true,
    "loop": true,
    "muted": true,
    "controls": false,
    "autoplay_duration": 8
  },
  {
    "content_type": "image",
    "desktop_image": "https://cdn.shopify.com/s/files/1/0123/4567/files/lifestyle-shot-desktop.jpg",
    "mobile_image": "https://cdn.shopify.com/s/files/1/0123/4567/files/lifestyle-shot-mobile.jpg",
    "heading": "Built to Last",
    "text": "Premium materials and thoughtful construction for years of reliable use",
    "btn_text": "View Details",
    "btn_url": "/pages/craftsmanship",
    "autoplay": true,
    "autoplay_duration": 6
  }
]
```

### Example 2: Variant-Level Hero for "20L Commuter Pack - Black"

**Location:** Product → Variants → "20L / Black" → Metafields → `custom.hero_content`

```json
[
  {
    "content_type": "image",
    "desktop_image": "https://cdn.shopify.com/s/files/1/0123/4567/files/20L-black-hero-desktop.jpg",
    "mobile_image": "https://cdn.shopify.com/s/files/1/0123/4567/files/20L-black-hero-mobile.jpg",
    "heading": "20L Commuter Pack",
    "text": "Perfect for daily commutes and short weekend trips",
    "btn_text": "Add to Bag",
    "btn_url": "#",
    "autoplay": true,
    "autoplay_duration": 5,
    "mobile_padding_top": 50
  },
  {
    "content_type": "video",
    "desktop_video": "https://cdn.shopify.com/s/files/1/0123/4567/files/20L-capacity-demo.mp4",
    "mobile_video": "https://cdn.shopify.com/s/files/1/0123/4567/files/20L-capacity-demo-mobile.mp4",
    "video_poster": "https://cdn.shopify.com/s/files/1/0123/4567/files/20L-poster.jpg",
    "heading": "20 Liters of Smart Storage",
    "text": "See how much you can fit in this compact powerhouse",
    "autoplay": true,
    "loop": true,
    "muted": true,
    "controls": false,
    "autoplay_duration": 7
  }
]
```

### Example 3: Variant-Level Hero for "24L Commuter Pack - Ballistic Fabric"

**Location:** Product → Variants → "24L / Ballistic Black" → Metafields → `custom.hero_content`

```json
[
  {
    "content_type": "image",
    "desktop_image": "https://cdn.shopify.com/s/files/1/0123/4567/files/24L-ballistic-hero-desktop.jpg",
    "mobile_image": "https://cdn.shopify.com/s/files/1/0123/4567/files/24L-ballistic-hero-mobile.jpg",
    "heading": "24L Ballistic Commuter Pack",
    "text": "Military-grade durability meets everyday elegance",
    "btn_text": "Discover Ballistic",
    "btn_url": "/pages/ballistic-fabric",
    "autoplay": true,
    "autoplay_duration": 6,
    "mobile_padding_top": 70
  },
  {
    "content_type": "video",
    "desktop_video": "https://cdn.shopify.com/s/files/1/0123/4567/files/ballistic-durability-test.mp4",
    "mobile_video": "https://cdn.shopify.com/s/files/1/0123/4567/files/ballistic-test-mobile.mp4",
    "video_poster": "https://cdn.shopify.com/s/files/1/0123/4567/files/ballistic-poster.jpg",
    "heading": "Unmatched Durability",
    "text": "Watch how ballistic fabric stands up to extreme conditions",
    "btn_text": "Watch Video",
    "btn_url": "#",
    "autoplay": true,
    "loop": true,
    "muted": true,
    "controls": true,
    "autoplay_duration": 10
  },
  {
    "content_type": "image",
    "desktop_image": "https://cdn.shopify.com/s/files/1/0123/4567/files/24L-capacity-desktop.jpg",
    "mobile_image": "https://cdn.shopify.com/s/files/1/0123/4567/files/24L-capacity-mobile.jpg",
    "heading": "Extra Space for Extended Trips",
    "text": "24 liters gives you room for everything you need and more",
    "btn_text": "See Inside",
    "btn_url": "/pages/interior",
    "autoplay": false
  }
]
```

### Example 4: Minimal Setup (Only Required Fields)

**Simple image slide with minimal data:**

```json
[
  {
    "content_type": "image",
    "desktop_image": "https://cdn.shopify.com/s/files/1/0123/4567/files/simple-hero.jpg",
    "mobile_image": "https://cdn.shopify.com/s/files/1/0123/4567/files/simple-hero-mobile.jpg"
  }
]
```

### Example 5: Video-Only Hero (No Text Overlay)

```json
[
  {
    "content_type": "video",
    "desktop_video": "https://cdn.shopify.com/s/files/1/0123/4567/files/ambient-video.mp4",
    "mobile_video": "https://cdn.shopify.com/s/files/1/0123/4567/files/ambient-video-mobile.mp4",
    "video_poster": "https://cdn.shopify.com/s/files/1/0123/4567/files/ambient-poster.jpg",
    "autoplay": true,
    "loop": true,
    "muted": true,
    "controls": false
  }
]
```

## 🎬 Real-World Scenario

**Product: Commuter Pack (has 6 variants)**

1. **Variants: "20L / Gray", "20L / Navy"**
   - No variant-level metafield
   - Uses product-level hero (generic lifestyle shots)

2. **Variant: "20L / Black"**
   - Has variant-level metafield
   - Shows 20L-specific capacity demos and size comparisons

3. **Variant: "24L / Black", "24L / Gray"**
   - No variant-level metafield
   - Uses product-level hero

4. **Variant: "24L / Ballistic Black"**
   - Has variant-level metafield
   - Shows ballistic fabric durability tests and premium features

**Result:**
- 4 variants share product-level hero
- 2 variants (20L Black, 24L Ballistic) get unique hero content
- Efficient setup, no duplicate data!

## How It Works

### Three-Tier Fallback System
The hero section uses a smart fallback hierarchy:

1. **Variant-Specific Metafields** (Highest Priority)
   - If a variant has its own `hero_content` metafield, it will be displayed
   
2. **Product-Level Metafields** (Middle Priority)
   - If no variant-specific content exists, falls back to product-level `hero_content`
   - This allows shared content across all variants
   
3. **Theme Editor Blocks** (Lowest Priority/Fallback)
   - If no metafields exist, uses the blocks configured in the theme editor
   - Useful for non-product pages or as a default

## Setting Up Variant-Specific Hero Content

### Metafield Structure (Same for Product & Variant Level)

Both product-level and variant-level metafields use the **EXACT SAME structure**:

**Metafield Definition:**
- **Namespace:** `custom`
- **Key:** `hero_content`
- **Type:** JSON or List of objects
- **Validation Type:** Array of objects with the schema below

**JSON Schema:**
```json
{
  "type": "array",
  "items": {
    "type": "object",
    "properties": {
      "content_type": {
        "type": "string",
        "enum": ["image", "video"]
      },
      "desktop_image": {
        "type": "string",
        "format": "uri"
      },
      "mobile_image": {
        "type": "string",
        "format": "uri"
      },
      "desktop_video": {
        "type": "string",
        "format": "uri"
      },
      "mobile_video": {
        "type": "string",
        "format": "uri"
      },
      "video_poster": {
        "type": "string",
        "format": "uri"
      },
      "video_poster_mobile": {
        "type": "string",
        "format": "uri"
      },
      "heading": {
        "type": "string"
      },
      "text": {
        "type": "string"
      },
      "btn_text": {
        "type": "string"
      },
      "btn_url": {
        "type": "string",
        "format": "uri"
      },
      "mobile_padding_top": {
        "type": "number"
      },
      "autoplay": {
        "type": "boolean"
      },
      "autoplay_duration": {
        "type": "number",
        "minimum": 1,
        "maximum": 60
      },
      "loop": {
        "type": "boolean"
      },
      "muted": {
        "type": "boolean"
      },
      "controls": {
        "type": "boolean"
      }
    },
    "required": ["content_type"],
    "additionalProperties": false
  }
}
```

### In Shopify Admin:

1. **Navigate to Your Product**
   - Go to Products → Select your product

2. **Select a Variant**
   - Scroll down to the Variants section
   - Click on the variant you want to customize (e.g., "20L / Black")

3. **Add the Hero Content Metafield**
   - In the variant editor, look for "Metafields" section
   - Add a metafield with the same structure as product-level:
     - **Namespace:** `custom`
     - **Key:** `hero_content`
     - **Type:** JSON or List (structured with the schema above)

4. **Enter Your Hero Content JSON**
   ```json
   [
     {
       "content_type": "image",
       "desktop_image": "https://cdn.shopify.com/...",
       "mobile_image": "https://cdn.shopify.com/...",
       "heading": "20L Commuter Pack",
       "text": "Perfect for daily commutes and short trips",
       "btn_text": "Shop Now",
       "btn_url": "/collections/bags",
       "autoplay": true,
       "autoplay_duration": 5,
       "mobile_padding_top": 50
     },
     {
       "content_type": "video",
       "desktop_video": "https://cdn.shopify.com/...",
       "mobile_video": "https://cdn.shopify.com/...",
       "video_poster": "https://cdn.shopify.com/...",
       "heading": "See it in Action",
       "text": "Watch how the 20L adapts to your lifestyle",
       "autoplay": true,
       "loop": true,
       "muted": true,
       "controls": false
     }
   ]
   ```

### JSON Structure Reference:

#### For Images:
```json
{
  "content_type": "image",
  "desktop_image": "URL_to_desktop_image",
  "mobile_image": "URL_to_mobile_image",
  "heading": "Hero Title",
  "text": "Description text",
  "btn_text": "Button Text",
  "btn_url": "/link-url",
  "autoplay": true,
  "autoplay_duration": 5,
  "mobile_padding_top": 50
}
```

#### For Videos:
```json
{
  "content_type": "video",
  "desktop_video": "URL_to_desktop_video.mp4",
  "mobile_video": "URL_to_mobile_video.mp4",
  "video_poster": "URL_to_poster_image",
  "video_poster_mobile": "URL_to_mobile_poster (optional)",
  "heading": "Video Title",
  "text": "Video description",
  "btn_text": "Button Text",
  "btn_url": "/link-url",
  "autoplay": true,
  "loop": true,
  "muted": true,
  "controls": false,
  "autoplay_duration": 5
}
```

### Field Descriptions:

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `content_type` | String | Yes | Either "image" or "video" |
| `desktop_image` | URL | Yes (for images) | Desktop version image URL |
| `mobile_image` | URL | Yes (for images) | Mobile version image URL |
| `desktop_video` | URL | Yes (for videos) | Desktop video file URL (.mp4) |
| `mobile_video` | URL | No | Mobile-specific video (falls back to desktop) |
| `video_poster` | URL | No | Poster image shown before video plays |
| `video_poster_mobile` | URL | No | Mobile poster (falls back to desktop poster) |
| `heading` | String | No | Main headline text |
| `text` | String | No | Description/body text |
| `btn_text` | String | No | Call-to-action button text |
| `btn_url` | URL | No | Button link destination |
| `autoplay` | Boolean | No | Whether slide auto-advances |
| `autoplay_duration` | Number | No | Seconds before auto-advance (e.g., 5) |
| `loop` | Boolean | No | Whether video loops |
| `muted` | Boolean | No | Whether video is muted (required for autoplay) |
| `controls` | Boolean | No | Show video controls |
| `mobile_padding_top` | Number | No | Top padding for mobile text positioning (pixels) |

## Use Cases

### Scenario 1: Different Sizes (20L vs 24L)
- **20L Variant:** Show compact bag fitting in small spaces
- **24L Variant:** Show larger bag with more capacity

### Scenario 2: Different Materials (Standard vs Ballistic)
- **Standard Fabric:** Show lifestyle/everyday usage
- **Ballistic Fabric:** Show durability/rugged use cases

### Scenario 3: Shared Content with Exceptions
- Most variants share the same hero (set at product level)
- Only 1-2 special variants have unique content (set at variant level)

## Best Practices

1. **Image Sizing:**
   - Desktop: 1920 x 1080 pixels minimum
   - Mobile: 768 x 1024 pixels (4:5 aspect ratio)

2. **Video Guidelines:**
   - Format: MP4 (H.264 codec)
   - Desktop: 1920x1080, under 10MB
   - Mobile: 768x1024, under 5MB
   - Always provide poster images
   - Mute videos if autoplaying

3. **Performance:**
   - Limit hero slides to 3-4 per variant
   - Optimize images before uploading
   - Use Shopify CDN URLs from Files section

4. **Content Strategy:**
   - Keep headlines short (5-8 words)
   - Make descriptions scannable
   - Use clear CTAs

## Troubleshooting

### Hero content doesn't change when selecting variant:
1. Verify metafield namespace is `custom` and key is `hero_content`
2. Check JSON formatting is valid
3. Clear browser cache and reload page
4. Verify variant ID in browser console: `console.log(variantHeroContent)`

### Video not playing:
1. Ensure MP4 format
2. Set `muted: true` for autoplay
3. Upload video to Shopify Files, not external host
4. Check browser console for errors

### Images not loading:
1. Use full Shopify CDN URLs
2. Verify images are uploaded to Shopify Files
3. Check image URLs are accessible
4. Use proper image_url filters in JSON

## Technical Details

### Files Modified:
- `sections/dynamic-hero-section.liquid` - Added variant support and JavaScript handler (for `hero_content`)
- `sections/dynamic-hero-section-two.liquid` - Added variant support and JavaScript handler (for `hero_content_two`)
- `templates/product.liquid` - Added `variantHeroContent` and `variantHeroContentTwo` data structures

### Events Dispatched:
- `variant:changed` - Triggered when variant is selected, both hero sections listen for this

### JavaScript Functions:
- `updateHeroContentForVariant(variantId)` - Updates hero section one slides based on variant
- `updateHeroContentTwoForVariant(variantId)` - Updates hero section two slides based on variant
- Event listeners automatically handle variant changes for both sections

## Step-by-Step Setup in Shopify Admin

### Setting Up Product-Level Metafield (Shared across all variants):

1. **Go to Settings → Custom Data → Products**
2. **Click "Add definition"**
3. Fill in the details:
   - **Name:** Hero Content
   - **Namespace and key:** `custom.hero_content`
   - **Type:** Choose "JSON" or "List" → "Mixed reference"
   - **Validation:** Paste the JSON schema shown above
4. **Save the definition**
5. Now go to your product and add content to this metafield

### Setting Up Variant-Level Metafield (Specific to each variant):

1. **Go to Settings → Custom Data → Variants**
2. **Click "Add definition"**
3. Fill in the details:
   - **Name:** Hero Content (Variant)
   - **Namespace and key:** `custom.hero_content` (same as product-level!)
   - **Type:** Choose "JSON" or "List" → "Mixed reference"
   - **Validation:** Paste the SAME JSON schema
4. **Save the definition**
5. Now go to your product → Select a variant → Add content to the variant's metafield

### Important Notes:
- ✅ Both metafields must have **identical** namespace and key: `custom.hero_content`
- ✅ Both must use the **same JSON schema** for validation
- ✅ The code automatically checks variant first, then falls back to product level
- ✅ You only need to add variant metafields for variants that need unique content

## 📋 Quick Copy-Paste Templates

### Template 1: Single Image Hero
```json
[
  {
    "content_type": "image",
    "desktop_image": "YOUR_DESKTOP_IMAGE_URL_HERE",
    "mobile_image": "YOUR_MOBILE_IMAGE_URL_HERE",
    "heading": "Your Heading Here",
    "text": "Your description text here",
    "btn_text": "Button Text",
    "btn_url": "/your-link-here",
    "autoplay": true,
    "autoplay_duration": 5
  }
]
```

### Template 2: Single Video Hero
```json
[
  {
    "content_type": "video",
    "desktop_video": "YOUR_DESKTOP_VIDEO_URL.mp4",
    "mobile_video": "YOUR_MOBILE_VIDEO_URL.mp4",
    "video_poster": "YOUR_POSTER_IMAGE_URL",
    "heading": "Your Video Heading",
    "text": "Your video description",
    "autoplay": true,
    "loop": true,
    "muted": true,
    "controls": false,
    "autoplay_duration": 8
  }
]
```

### Template 3: Multi-Slide Hero (Image + Video + Image)
```json
[
  {
    "content_type": "image",
    "desktop_image": "FIRST_DESKTOP_IMAGE_URL",
    "mobile_image": "FIRST_MOBILE_IMAGE_URL",
    "heading": "First Slide Heading",
    "text": "First slide description",
    "btn_text": "Shop Now",
    "btn_url": "/collections/all",
    "autoplay": true,
    "autoplay_duration": 5
  },
  {
    "content_type": "video",
    "desktop_video": "VIDEO_URL.mp4",
    "mobile_video": "MOBILE_VIDEO_URL.mp4",
    "video_poster": "VIDEO_POSTER_URL",
    "heading": "Video Slide Heading",
    "text": "Video description",
    "autoplay": true,
    "loop": true,
    "muted": true,
    "controls": false,
    "autoplay_duration": 8
  },
  {
    "content_type": "image",
    "desktop_image": "THIRD_DESKTOP_IMAGE_URL",
    "mobile_image": "THIRD_MOBILE_IMAGE_URL",
    "heading": "Third Slide Heading",
    "text": "Third slide description",
    "btn_text": "Learn More",
    "btn_url": "/pages/about",
    "autoplay": true,
    "autoplay_duration": 6
  }
]
```

## 💡 Pro Tips

1. **Get Shopify CDN URLs:**
   ```
   Settings → Files → Upload your image/video
   Copy the URL (e.g., https://cdn.shopify.com/s/files/1/.../yourfile.jpg)
   ```

2. **Test Your JSON:**
   - Use [jsonlint.com](https://jsonlint.com) to validate
   - Ensure all quotes are double quotes `"`
   - No trailing commas after last item

3. **Optimization:**
   - Compress images: Use TinyPNG or Shopify's image optimizer
   - Video files: Keep under 10MB for desktop, 5MB for mobile
   - Format: MP4 (H.264) for maximum compatibility

4. **Mobile Considerations:**
   - Use `mobile_padding_top` to adjust text positioning (30-100px typical)
   - Mobile videos should be in portrait/square format
   - Test on actual mobile devices

## 🎨 Using Both Hero Sections Together

You can use **both** hero sections on the same product page with different content:

### Example Use Case:
```
Hero Section (hero_content):
- Shows product lifestyle/beauty shots
- 20L variant: Compact urban lifestyle images
- 24L variant: Travel/adventure images

Hero Section Two (hero_content_two):
- Shows product features/details
- 20L variant: Interior organization features
- 24L variant: Extra storage capacity demos
```

**Setup:**
1. Set up `custom.hero_content` metafields (product & variant level)
2. Set up `custom.hero_content_two` metafields (product & variant level)
3. Both sections will update independently when variant changes

## Support
If you need help setting up variant-specific hero content, refer to this guide or check the inline comments in `dynamic-hero-section.liquid` and `dynamic-hero-section-two.liquid`.

