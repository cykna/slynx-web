'use client';

import { useState } from 'react';
import SlynxHero from './components/slynxHero/slynxHero';

export default function Home() {
  const [selectedFeature, setSelectedFeature] = useState<string>('simple');


  const codeExamples: Record<string, string> = {
    'simple': `fun main() {
  val name = "stranger"
  println("Hi, \${name}!")
  print("Count: ")
  for (i in 0..10) {
    print("\${i} ")
  }
}`,
    'performance': `fun fibonacci(n: Int): Int {
  return when (n) {
    0 -> 0
    1 -> 1
    else -> fibonacci(n-1) + fibonacci(n-2)
  }
}

fun main() {
  val result = fibonacci(10)
  println("Fibonacci(10) = \${result}")
}`,
    'orientado-dados': `data class User(
  val id: Int,
  val name: String,
  val email: String
)

fun main() {
  val users = listOf(
    User(1, "Alice", "alice@email.com"),
    User(2, "Bob", "bob@email.com")
  )
  
  users.forEach { user ->
    println("\${user.name}: \${user.email}")
  }
}`,
    'intuitivo': `fun greet(name: String = "World") {
  println("Hello, \${name}!")
}

fun main() {
  greet()           // Hello, World!
  greet("Alice")    // Hello, Alice!
  
  val numbers = listOf(1, 2, 3, 4, 5)
  val doubled = numbers.map { it * 2 }
  println(doubled)  // [2, 4, 6, 8, 10]
}`
  };

  const handleBadgeSelection = (badgeId: string) => {
    setSelectedFeature(badgeId);
    console.log('Feature ativa:', badgeId);
  };

  return (
    <main>
      <SlynxHero 
        title="Why"
        brandName="Slynx"
        description="Experience syntax that feels natural, a compiler that guides you, and performance that scales with your ambitions."
        badges={[
          { id: 'simple', text: 'Simples', variant: 'secondary' },
          { id: 'performance', text: 'Performance', variant: 'secondary' },
          { id: 'orientado-dados', text: 'Orientado a Dados', variant: 'secondary' },
          { id: 'intuitivo', text: 'Intuitivo', variant: 'secondary' },
        ]}
        codeExample={codeExamples[selectedFeature]}
        fileName="MAIN.SX"
        typingSpeed={20}
        onBadgeSelect={handleBadgeSelection}
      />
    </main>
  );
};