# Testimonials Component

A responsive, TypeScript-based testimonials component with CSS Modules and automatic dark mode support.

## Installation

Copy the component files to your project:
- `Testimonials.tsx` → `/src/components/Testimonials.tsx`
- `Testimonials.module.css` → `/src/components/Testimonials.module.css`

## Usage

```tsx
import Testimonials from '@/components/Testimonials';

export default function Page() {
  const testimonials = [
    {
      id: 1,
      text: "Amazing tool! Saved me months of boilerplate and debugging.",
      author: "Cyro",
      role: "Developer"
    },
    {
      id: 2,
      text: "Best investment we made this year!",
      author: "Maria Silva",
      role: "Tech Lead",
      avatar: "/images/maria.jpg" // Optional
    }
  ];

  return <Testimonials testimonials={testimonials} />;
}
```

## Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `title` | `string` | No | "Slynx Testimonials" | Section title |
| `subtitle` | `string` | No | "Developer Approved and production ready." | Section subtitle |
| `testimonials` | `Testimonial[]` | No | `[]` | Array of testimonial objects |

### Testimonial Interface

```typescript
interface Testimonial {
  id: string | number;
  text: string;
  author: string;
  role: string;
  avatar?: string;
}
```

## Features

- Fully typed with TypeScript
- Responsive grid layout
- Automatic dark mode support
- CSS variables integration
- Avatar with fallback (author's initial)
- Hover animations

## CSS Variables

Requires the following CSS variables in your global styles:

```css
--brand-color
--title-color
--foreground
--background
--primary-base-color
--secondary-base-color
```

## Responsive Behavior

- **Desktop**: Auto-fit grid (min 300px columns)
- **Mobile**: Single column (< 768px)