# YOT Web Components
I'm tired of rewriting buttons and fields all the time.
This is a playground for trying common components and patterns.

## Tasks
### Testing / Quality
|cmd              |description                |
|-----------------|---------------------------|
|`yarn lint`      |lints the src and storybook|
|`yarn format`    |prettier the code          |
|`yarn test`      |runs component tests       |
|`yarn storybook` |runs the storybook         |
|`yarn build-storybook`  | builds the storybook site for deploying |
|`yarn deploy-storybook` | publishes the storybook site as a github page |

*Note on testing*

The goal is to use the dom testing library due to its strong conventions which help to enforce accessible semantic design. Plus this is a standard in multiple front end libraries, so following the same syntax reduces mental overhead.

That being said, support for web components is early days and the package we're using, while a great start, has some limitations (some of this is likely jsdom issues). 
So far most issues have been pretty minor. Mostly the feedback from failing tests isn't as clear.    

### To demo
WIP, but for now `yarn storybook`. I'll get something deployed soon too.

## Inspiration
- Stumbled across [Duetds](https://www.duetds.com/components/heading/) in a search for different Heading patterns to toy with.

## Palette

Background Colour
Accent Text on Background Colour
Text on Background Colour

Surface Colour
Accent Text on Background Colour
Text on Surface Colour

Accent Colour
Second Accent Colour

Alert Colour
Text On Alert Colour

Disabled Colour
Text On Disabled Colour