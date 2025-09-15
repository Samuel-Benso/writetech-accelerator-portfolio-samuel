# Documentation Style Guide

## Headings

### No Consecutive Headings
- Always add text between headings
- Minimum: 1-2 sentences after each heading

### Hierarchy Rules
- Follow order: H2 → H3 → H4
- Never skip levels (e.g., H2 to H4)

## Examples

### Good
```markdown
## Getting Started

Quick start guide for new users.

### Prerequisites

Install these first:
- Node.js 16+
- npm 8+

### Installation

Run this command:
```

### Bad
```markdown
## Getting Started

### Prerequisites  <!-- Missing intro text -->

### Installation    <!-- No content between -->
```

## Why It Matters
- Better readability
- Improved accessibility
- Easier maintenance
- Clearer context

## Quality Control
- Use `markdownlint`
- Review before merging
