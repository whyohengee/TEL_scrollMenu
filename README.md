# TEL_scrollMenu
On our main site, we have several project categories. Our department wanted a new category to highlight work from the TEL (Technology-Enhanced Learning) team, and I was asked to create these pages from pdf mockups.

## Challenge
The main site was designed and built several years ago, and is using some older frameworks (for example, Django 1.6 and Bootstrap v2). Working with those limitations, especially regarding mobile layouts, was tricky.

One big challenge was that we had a hamburger menu for the site’s main navigation, and we didn’t want to do the same for the TEL subpages’ navigation (no double hamburgers wanted). We weren’t able to do a complete redesign, so I had to find a way to create a navigation without changing much of the existing site.

## Solution
To avoid the double hamburger, I was inspired by the interactive "bubbles" you see using mobile apps like Facebook Messenger or the Brave Link Bubble browser, which provide a sticky toggle that sits above content.

I created a collapsable menu that sticks in one place, but collapses on page scroll (it also collapses automatically after a couple of seconds if you don’t scroll) to provide a way to move through the TEL pages independently of the main navigation.

The mockup here isn’t the complete set of TEL pages (I separated everything from Django’s templates) as I just wanted to highlight the sticky menu functionality.

You can view it [here](https://whyohengee.github.io/TEL_scrollMenu/).