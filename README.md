# Kata Practice Playground

A TypeScript playground for practicing coding katas with Vitest testing framework and Bun runtime.

## Structure

Each kata lives in its own directory under `katas/` with both source code and tests:

```
katas/
  calculator/
    ├── calculator.ts       # Implementation
    └── calculator.test.ts  # Tests
```

## Getting Started

### Install dependencies:
```bash
bun install
```

### Run demo:
```bash
bun run index.ts
```

### Run tests:
```bash
# Run all tests
bun test

# Run tests with UI
bun test:ui

# Run tests once (no watch mode)
bun test:run
```

## Creating a New Kata

1. Create a new directory:
```bash
mkdir katas/[kata-name]
```

2. Create implementation file:
```typescript
// katas/[kata-name]/[kata-name].ts
export function myFunction() {
  // Your implementation
}
```

3. Create test file:
```typescript
// katas/[kata-name]/[kata-name].test.ts
import { describe, it, expect } from 'vitest'
import { myFunction } from './[kata-name]'

describe('[kata-name]', () => {
  it('should work', () => {
    expect(myFunction()).toBe(true)
  })
})
```

4. Run tests to verify:
```bash
bun test
```

## Tech Stack

- **Runtime**: [Bun](https://bun.sh) - Fast JavaScript runtime
- **Language**: TypeScript with strict configuration
- **Testing**: Vitest with UI support
- **Structure**: Self-contained kata directories

## Example Katas

- **Calculator**: Basic arithmetic operations with error handling
