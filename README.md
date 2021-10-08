# Gatsby Portfolio
 Portfolio and Blog to share Dan Gaylord's thoughts and projects!

 View live @ [Dan Gaylord - Educator | Tinkerer](https://danielgaylord.github.io/gatsby-portfolio)

 By [@danielgaylord](https://github.com/danielgaylord)

## Table of Contents

Every good README has a table of contents, right?

- [TO DO](https://github.com/danielgaylord/gatsby-portfolio#to-do)
- [File Structure](https://github.com/danielgaylord/gatsby-portfolio#file-structure)
- [Changelog](https://github.com/danielgaylord/gatsby-portfolio#changelog)

## TO DO

- [x] Create basic layout and styles
- [x] Add content
- [x] Make projects show description on hover
- [x] Add animations (such as jiggling or zooming)
- [x] Make site responsive to different screen sizes
- [x] Make footer 'stick' to bottom of screen
- [x] Connect site to Sanity backend for something like a blog
- [ ] Add modal functionality for projects
- [ ] Get feedback on looks and content to improve it for 'audience'
- [ ] Try out new things to see how they work and what they'd look like (this'll never be done...)

## File Structure

- _gatsby_
  - All the frontend code using [GatsbyJS](https://gatsbyjs.org)
  - _src_
    - All the website code
    - _assets_
      - Location for images, videos, etc. (assets, duh)
      - There are respective subfolders for each type of asset
    - _components_
      - Location for components that will be reused (eg. Nav, Layout, Footer)
    - _pages_
      - Location for main page of the site (except blog pages)
    - _styles_
      - Location for global styles that are used for more than one page
    - _templates_
      - Location for templates (blog posts for instance)
  - _static_
    - For static files (right now just the favicon)
- _sanity_
  - All the backend code using [Sanity.io](https://www.sanity.io/)
  - _schemas_
    - Location for 'database' format information

## Changelog

### 10/7/21

From [Dan](https://github.com/danielgaylord)

- Updated README to actually be useful
- Updated project page

### 10/6/21

From [Dan](https://github.com/danielgaylord)

- Made page responsive for tablets and phones (as best matches my devices and using chrome dev tools)
- Improved layout so footer sticks to bottom of page regardless of height of screen
- Added blog function to site using sanity back end

### 10/5/21

From [Dan](https://github.com/danielgaylord)

- Updated favicon
- Added content on all pages
- Fixed and updated styles site-wide

### 10/4/21

From [Dan](https://github.com/danielgaylord)

- Updated logo

### 10/3/21

From [Dan](https://github.com/danielgaylord)

- Added logo
- Updated color variables

### 10/2/21

From [Dan](https://github.com/danielgaylord)

- Created basic layout

### 10/1/21

From [Dan](https://github.com/danielgaylord)

- Updated layout and styles (ver 2.0)
- Updated navbar structure

### 9/29/21

From [Dan](https://github.com/danielgaylord)

- Added base styles
- Added jiggle to navbar

### 9/23/21

From [Dan](https://github.com/danielgaylord)

- Created basic layout
- Configured Git Pages
- Updated dependencies and gatsby prowser API
