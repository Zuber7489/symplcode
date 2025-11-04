# Sale Text Metafield Setup Guide

This document explains how to set up the custom sale text metafield for displaying sale badges (e.g., "Black Friday Special", "20% Off") on product and collection pages.

## Overview

The sale text feature allows you to display custom text next to sale prices instead of (or in addition to) the automatic savings percentage. This works on both collection pages and product pages.

## Priority Order

The system checks for sale text in this order:
1. **Variant-level metafield** (`variant.metafields.custom.sale_text`) - Only variant-level is supported
2. **Automatic savings percentage** - If no custom text is set, shows "Save X%"

## Setting Up Variant-Level Metafield (Only Variant-Level Supported)

**Note:** Only variant-level metafields are supported. Product-level metafields are not used.

### Step 1: Create the Metafield Definition

1. **Navigate to Shopify Admin:**
   - Go to **Settings** → **Custom data** → **Product variants**

2. **Create a New Metafield Definition:**
   - Click on **Add definition**
   - Fill in the following details:
     - **Name:** `Sale Text` (or `Sale Badge`)
     - **Namespace and key:** `custom.sale_text` (must match exactly)
     - **Description:** `Custom text to display next to sale prices for this variant`
     - **Type:** `Single line text`
     - **Storefront API access:** Enabled (optional, but recommended)

3. **Save the Metafield Definition:**
   - Click **Save** to create the metafield definition

### Step 2: Add Sale Text to Variants

1. **Edit a Product:**
   - Go to **Products** in your Shopify Admin
   - Select the product you want to configure

2. **Select a Variant:**
   - Scroll down to the **Variants** section
   - Click on the variant you want to customize (e.g., "20L / Black")

3. **Add Sale Text:**
   - Scroll to the **Metafields** section for that variant
   - Find the **Sale Text** field
   - Enter your custom sale text

4. **Save the Product:**
   - Click **Save** to apply the changes

## How It Works

### Display Logic

When a product has a sale price (compare_at_price > price), the system will:

1. **Check for variant-level sale text:**
   - If `variant.metafields.custom.sale_text` exists, display it

2. **Calculate and display savings percentage:**
   - If no custom text is set, automatically calculate and display "Save X%"
   - Calculation: `(compare_at_price - sale_price) / compare_at_price * 100`

### Example Display

**With Custom Text:**
```
$19  $29  Black Friday Special
```

**Without Custom Text (Automatic):**
```
$19  $29  Save 34%
```

## Where It Appears

The sale text appears on:

1. **Collection Pages:**
   - Next to product prices in the product grid
   - Shows for all variants (size variants, style variants, or regular products)

2. **Product Pages:**
   - Next to the product price in the title/price row
   - Updates dynamically when variant is changed
   - Appears in all price display locations (desktop and mobile)

## Best Practices

1. **Keep it Short:**
   - Sale text should be concise (5-15 characters recommended)
   - Examples: "Flash Sale", "20% Off", "Limited Time"

2. **Use Variant-Level for All Sales:**
   - Each variant can have its own sale text
   - If all variants have the same sale message, you'll need to add it to each variant

3. **Test Your Display:**
   - Always test on both collection and product pages
   - Check on mobile and desktop views

## Troubleshooting

### Sale Text Not Appearing

1. **Check Metafield Namespace/Key:**
   - Must be exactly `custom.sale_text`
   - Check for typos or extra spaces

2. **Verify Product Has Sale Price:**
   - Product must have `compare_at_price > price` set
   - Go to Products → Pricing → Compare at price

3. **Check Storefront API Access:**
   - Ensure metafield has Storefront API access enabled
   - Go to Settings → Custom data → Check metafield settings

4. **Clear Cache:**
   - Clear browser cache and refresh the page
   - If using a CDN, clear CDN cache

### Metafield Not Showing in Admin

1. **Check Definition:**
   - Ensure metafield definition is created and saved
   - Go to Settings → Custom data → Verify definition exists

2. **Check Product Type:**
   - Ensure you're looking at the correct resource (Product vs Product Variant)
   - Variant metafields appear when editing individual variants

## Quick Setup Checklist

- [ ] Create variant-level metafield definition (`custom.sale_text`)
- [ ] Set compare_at_price on products/variants
- [ ] Add sale text to variants
- [ ] Test on collection page
- [ ] Test on product page
- [ ] Test variant switching
- [ ] Test on mobile view

## Support

If you encounter issues:
1. Verify metafield namespace and key match exactly: `custom.sale_text`
2. Ensure products have compare_at_price set
3. Check that metafields are saved and published
4. Clear cache and test again

