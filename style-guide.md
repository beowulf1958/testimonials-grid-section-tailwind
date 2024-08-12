# Front-end Style Guide

## Layout

The designs were created to the following widths:

- Mobile: 375px
- Desktop: 1440px

> 💡 These are just the design sizes. Ensure content is responsive and meets WCAG requirements by testing the full range of screen sizes from 320px to large screens.

## Colors

### Primary

Moderate violet: hsl(263, 55%, 52%)
Very dark grayish blue: hsl(217, 19%, 35%)
Very dark blackish blue: hsl(219, 29%, 14%)
White: hsl(0, 0%, 100%)

### Neutral

Light gray: hsl(0, 0%, 81%)
Light grayish blue: hsl(210, 46%, 95%)

Note for text colors:

1. "Verified Graduate" has the same color as the person's name with 50% opacity
2. Review paragraphs inside the quotations have the same color as well, but are at 70% opacity

## Typography

### Body Copy

- Font size: 13px

### Font

- Family: [Barlow Semi Condensed](https://fonts.google.com/specimen/Barlow+Semi+Condensed)
- Weights: 500, 600

<style>
@import url('https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

:root {
    --violet:        hsl(263, 55%, 52%);
    --darkGrayBlue:  hsl(217, 19%, 35%);
    --blackishBlue:  hsl(219, 29%, 14%);
    --white00:       hsl(0, 0%, 100%);
    --lightGray:     hsl(0, 0%, 81%);
    --lightGrayBlue: hsl(210, 46%, 95%);

    --font-family:  "Barlow Semi Condensed", sans-serif;

    --fs-main:       13px;

    --fw-regular:    500;
    --fw-semibold:   600;
}
</style>

theme: {
extend: {
colors: {
'violet': 'hsl(263, 55%, 52%)',
'darkGrayBlue': 'hsl(217, 19%, 35%)',
'blackishBlue': 'hsl(219, 29%, 14%)',
'lightGray': 'hsl(0, 0%, 81%)',
'lightGrayBlue': 'hsl(210, 46%, 95%)',
},
fontFamily: {
barlow: ['"Barlow Semi Condensed"', 'sans-serif'],
},
fontSize: {
'xsm': '13px',
},
},
}
