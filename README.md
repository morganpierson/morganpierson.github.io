# PEX Tech Challenge
A deployed version of my work can be found [HERE](https://morganpierson.github.io/).
## Overview
The challenge presented to me was to try to replicate the following Spotify playlist design

![example](https://user-images.githubusercontent.com/20409876/98610947-b6fe4f00-22a5-11eb-9a46-6f82757eae55.png)

Below is a screenshot of my design (for a side-by-side comparison)

<img width="1792" alt="Screen Shot 2020-11-09 at 4 09 31 PM" src="https://user-images.githubusercontent.com/20409876/98611052-fd53ae00-22a5-11eb-9736-51c939ae125f.png">

Additionally, the songs that were pulled from the provided google spreadsheet were to be sorted from most to least happy. I chose to use the "danceability" property of the songs as the happiness criteria (I've never seen a sad person dancing).

## Process
Given that the design mockup was already provided, there was no need to create my own using something like Figma or AdobeXD. I did, however, want to create my own logo and icon using these tools. Given the nature of this role, and the fact that it sits between the design and engineering teams, I wanted to show both my coding abilities and my design skills. All the icons, including the Spotify logo at the top left, were custom made by me using AdobeXD. I am also familiar with using Figma, but I chose to use AdobeXD simply because my workflow is a bit faster in it compared to Figma. Below is a screenshot of my XD design system

<img width="1790" alt="Screen Shot 2020-11-09 at 4 16 32 PM" src="https://user-images.githubusercontent.com/20409876/98611539-f7120180-22a6-11eb-88cc-49729c04d8f7.png">

## Challenges
This design presented several challenges from a technical standpoint. There are many elements that need to stay fixed when scrolling, elements that sit beneath other elements, a dynamic table with hidden elements until a certain table cell is hovered over, and more. I found the interaction between the main content elements the biggest challenge, and ultimately it was a combination of utlitizing absolute positioning along with grid + flexbox that did the trick. Also, the Spotify logo is using a custom Adobe font. Initially, I imported it as an SVG and tried to use the object tag with inline css to read the font. After several attempts, the deployed version simply did not want to apply the font, so I ultimately had to import a PNG version of the logo instead.

## Improvements and iterations
This solution is certainly not perfect. I chose to use a table element for the song list simply because I wanted something to display my data fast and easy. I have mixed feelings about HTML tables. They get the job done quick, but come with many drawbacks and restrictions when it comes to custom styling. More and more, I find myself opting for CSS grid and flexbox for 98% of my page layouts, and I would probably refactor the table to use some combination of the two in a future iteration. I would also continue to work with the logo SVG and get the custom font working.

