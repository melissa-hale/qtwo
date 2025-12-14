# Supernova Vision & Strategy

Interactive Product Vision & Strategy for Q2 Personalization Platform (Project Supernova).

## Features

- **Hero/Summary Section** - What we're building and why (single page view)
- **Strategic Context** - How SMART enables Q2's platform transformation
- **Personas Grid** - Visual cards showing who we're serving (FI Marketers, Partners)
- **Interactive Roadmap** - Click to expand milestones and quarters with full details

## Structure

```
/public
  /data
    vision.md - Hero section content
    context.md - Strategic context content  
    personas.json - Personas data
    roadmap.json - Full roadmap with quarterly details
/src
  /components
    Hero.js
    StrategicContext.js
    PersonasGrid.js
    InteractiveRoadmap.js
  App.js
  App.css
```

## Running Locally

```bash
npm install
npm start
```

Opens on http://localhost:3000

## Building for Production

```bash
npm run build
```

Creates optimized production build in `/build` directory.

## Deploying to Railway

1. Push this repo to GitHub
2. Connect to Railway
3. Railway will auto-detect React app and deploy

Or use Railway CLI:
```bash
railway up
```

## Editing Content

All content is in `/public/data`:

- **vision.md** - Edit hero section text (markdown)
- **context.md** - Edit strategic context (markdown)
- **personas.json** - Edit persona cards (JSON)
- **roadmap.json** - Edit milestones, quarters, details (JSON)

Changes are immediately reflected after rebuild/refresh.

## Roadmap JSON Structure

```json
{
  "milestones": [
    {
      "id": "unique-id",
      "name": "Milestone Name",
      "description": "What this milestone achieves",
      "timeline": "Q1-Q3 2026",
      "color": "#6B46C1",
      "quarters": [
        {
          "quarter": "Q1 2026",
          "period": "Jan-Mar",
          "focus": "Short focus description",
          "why": "Strategic reasoning for this quarter",
          "shipping": ["Item 1", "Item 2"],
          "partners": ["Partner names"],
          "dependencies": ["Team: What they need to deliver"],
          "outcomes": ["Success criteria"]
        }
      ]
    }
  ]
}
```

## Q2 Brand Colors

Defined in CSS variables:
- Purple: `#6B46C1`
- Blue: `#2C5282`
- Teal: `#38B2AC`
- Orange: `#ED8936`

## Notes

- No animations (clean, professional)
- All data-driven (easy to update)
- Click milestone → expand quarters → see details
- Built for Railway hosting
