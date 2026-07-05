# Asset Management

## Naming Convention (Best Practices)
All files must follow the kebab-case naming convention:
`[type]-[project]-[description]-[index].[extension]`

**Examples:**
- `img-cs1-hero-01.webp`
- `vid-ds-dataviz-loop.mp4`
- `icon-nav-home.svg`

## Optimization Requirements
- **Images**: WebP or AVIF format. Max width 2560px.
- **Icons**: SVGs must be ran through SVGO to remove metadata.
- **Videos**: H.264/MP4 with no audio track for loops.
