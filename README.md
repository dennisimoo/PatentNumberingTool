# Patent Paragraph Numbering Tool

This guide is here to help you set up and use a **Google Docs Script** for numbering paragraphs in your documents for patents. It’s simple to use, looks great, and saves you time when working with paragraphs in patent documents or other structured writing.

---

## Why Use This Script?

When you’re working on documents like patents, keeping paragraphs numbered properly can be a pain. This script makes it easy by:
- Adding a **"Paragraph Tools"** menu to your Google Doc.
- Letting you quickly number paragraphs that follow a specific format.

---

## What Does It Do?

Here’s how it works:

1. **Custom Toolbar Menu**
   - A new menu called **"Paragraph Tools"** appears at the top of your Google Doc.
   - From this menu, you can choose **"Auto Number Paragraphs"** to start numbering.

2. **Smart Paragraph Scanning**
   - The script looks for paragraphs that:
     - Are normal text (not headings or titles).
     - Start with a number inside square brackets, like `[0001]`.

3. **Automatic Formatting**
   - It renumbers paragraphs neatly and makes sure everything looks clean and consistent.

---

## How to Set It Up

### Step 1: Open the Apps Script Editor

1. In your Google Doc, click **Extensions** > **Apps Script**.
2. The Apps Script editor will open in a new tab.
   
   ![Step 1: Apps Script Editor](https://github.com/dennisimoo/PatentNumberingTool/blob/main/image1.png)

### Step 2: Deploy the Script

1. Click **Deploy** > **Test Deployments** in the Apps Script editor.
2. Select **Deploy as add on** and confirm the permissions.
   
   ![Step 2: Deploy Script](https://github.com/dennisimoo/PatentNumberingTool/blob/main/image2.png)

### Step 3: Refresh Your Document

- Go back to your Google Doc and refresh the page.
- You’ll see a new **"Paragraph Tools"** menu at the top of the document.

   ![Step 3: Refresh Document](https://github.com/dennisimoo/PatentNumberingTool/blob/main/image3.png)

---

## How to Use It

### Step 1: Get Your Document Ready

- Format your paragraphs to start with numbers in square brackets, like `[0001]`.

### Step 2: Run the Tool

1. Click on **Paragraph Tools** in the toolbar.
2. Choose **"Auto Number Paragraphs"**.
3. The script will update your document and neatly renumber your paragraphs!

   ![Step 2: Run Tool](https://github.com/dennisimoo/PatentNumberingTool/blob/main/image4.png)

---

## Quick Notes

- **It Only Works with Normal Paragraphs**: Headings and other styles aren’t affected.
- **Resetting Numbers**: If you need to restart numbering, just clear the existing ones and run the tool again.

---
