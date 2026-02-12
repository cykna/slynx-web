

## 1️⃣ Import

```tsx
import SlynxHero from './components/slynxHero/slynxHero';
```

---

## 2️⃣ Basic

```tsx
<SlynxHero />
```

---

## 3️⃣ Dynamic Code (Recommended)

```tsx
'use client';

import { useState } from 'react';
import SlynxHero from './components/slynxHero/slynxHero';

export default function Home() {
  const [selected, setSelected] = useState('simple');

  const codeExamples = {
    simple: `println("Hello")`,
    performance: `fun sum(a: Int, b: Int) = a + b`
  };

  return (
    <SlynxHero
      badges={[
        { id: 'simple', text: 'Simple', variant: 'secondary' },
        { id: 'performance', text: 'Performance', variant: 'secondary' }
      ]}
      codeExample={codeExamples[selected]}
      onBadgeSelect={setSelected}
    />
  );
}
```

---


