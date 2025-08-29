# Bundle Product Meta Field Instructions

This document explains how to set up metafields for the "Bundle & Save" section in the slide cart.

## Overview

The slide cart's "Bundle & Save" section now supports product-specific bundle recommendations using metafields. This allows merchants to define which products should be displayed in the bundle section for each individual product.

## Setting up the Metafield

1. **Navigate to Metafields in Shopify Admin:**
   - Go to your Shopify Admin Panel
   - Navigate to `Products` > `Metafields` > `Products`

2. **Create a New Metafield Definition:**
   - Click on `Add definition`
   - Fill in the following details:
     - **Name:** `Recommendations for Cart`
     - **Namespace and key:** `custom.recommendations_for_cart`
     - **Description:** `Products to display in the bundle section for this product`
     - **Type:** `List of products`
     - **Storefront API access:** Enabled

3. **Save the Metafield Definition:**
   - Click `Save` to create the metafield definition

## Assigning Bundle Products to Individual Products

1. **Edit a Product:**
   - Go to `Products` in your Shopify Admin
   - Select the product you want to configure

2. **Scroll to the Metafields Section:**
   - Scroll down to the Metafields section
   - Find the "Recommendations for Cart" metafield

3. **Select Products:**
   - Click on the "Recommendations for Cart" field
   - Select the products you want to display in the bundle section when this product is in the cart
   - You can select multiple products

4. **Save the Product:**
   - Click `Save` to apply the changes

## How It Works

When a customer adds a product to their cart, the slide cart will:

1. Check if the product has a metafield defined with namespace `custom` and key `recommendations_for_cart`
2. If the metafield exists and contains products, those products will be displayed in the "Bundle & Save" section
3. If no metafield is defined, the system will fall back to displaying products from the "bundle-products" collection (if it exists) or products from the "all" collection

## Example Use Cases

- **Bags Collection:** When a customer adds a bag to their cart, you can display wallets, totes, and accessories as bundle recommendations
- **Wallets Collection:** When a customer adds a wallet to their cart, you can display bags, cases, and organizers as bundle recommendations
- **Totes Collection:** When a customer adds a tote to their cart, you can display bags, wallets, and accessories as bundle recommendations

## Technical Implementation

The implementation uses the following logic in the slide-cart.liquid file:

```liquid
{% assign bundle_products = cart.items.first.product.metafields.custom.recommendations_for_cart.value %}
{% if bundle_products == blank %}
  {% assign bundle_products = collections['bundle-products'].products | default: collections.all.products | limit: 6 %}
{% else %}
  {% assign bundle_products = bundle_products.products %}
{% endif %}
```

This checks for the metafield and falls back to the default behavior if not found.

## Troubleshooting

1. **Bundle products not showing:**
   - Ensure the metafield is properly defined in the Shopify Admin
   - Verify that the product has the metafield assigned with valid products
   - Check that the products in the metafield are published and available
   - Confirm that the namespace and key in the Liquid code match your metafield definition

2. **Fallback not working:**
   - Ensure you have a collection named "bundle-products" if you want to use the fallback
   - Check that products in the fallback collection are published and available

3. **JavaScript errors:**
   - The bundle navigation is reinitialized when the cart is refreshed
   - If you encounter issues, try refreshing the page