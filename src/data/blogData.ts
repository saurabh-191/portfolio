import { BlogPost, BlogCategory } from '@/types/blog';

export const blogCategories: BlogCategory[] = [
  {
    id: '1',
    name: 'Web Development',
    slug: 'web-development',
    description: 'Articles about modern web development practices and technologies'
  },
  {
    id: '2',
    name: 'React',
    slug: 'react',
    description: 'Tips, tricks, and tutorials about React.js'
  },
  {
    id: '3',
    name: 'TypeScript',
    slug: 'typescript',
    description: 'Deep dives into TypeScript features and best practices'
  },
  {
    id: '4',
    name: 'UI/UX Design',
    slug: 'ui-ux-design',
    description: 'Design principles, patterns, and user experience insights'
  },
  {
    id: '5',
    name: 'Career',
    slug: 'career',
    description: 'Career advice and professional development tips'
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Building Scalable React Applications with TypeScript',
    slug: 'building-scalable-react-applications-typescript',
    excerpt: 'Learn how to structure and build maintainable React applications using TypeScript, featuring best practices for component architecture and state management.',
    content: `# Building Scalable React Applications with TypeScript

TypeScript has become an essential tool for building robust React applications. In this comprehensive guide, we'll explore the best practices for creating scalable, maintainable applications.

## Why TypeScript with React?

TypeScript brings static typing to JavaScript, catching errors at compile time rather than runtime. When combined with React, it provides:

- **Better Developer Experience**: Enhanced IDE support with autocomplete and refactoring
- **Fewer Bugs**: Catch type errors before they reach production
- **Self-Documenting Code**: Types serve as inline documentation
- **Easier Refactoring**: Confident code changes with type safety

## Project Structure

A well-organized project structure is crucial for scalability:

\`\`\`
src/
├── components/
│   ├── ui/           # Reusable UI components
│   ├── features/     # Feature-specific components
│   └── layouts/      # Layout components
├── hooks/            # Custom React hooks
├── services/         # API calls and external services
├── types/            # TypeScript type definitions
├── utils/            # Utility functions
└── stores/           # State management
\`\`\`

## Component Architecture

### Props Interface Design

Always define clear interfaces for your component props:

\`\`\`typescript
interface UserCardProps {
  user: User;
  onEdit?: (id: string) => void;
  onDelete?: (id: string) => void;
  variant?: 'default' | 'compact';
}

const UserCard: React.FC<UserCardProps> = ({ 
  user, 
  onEdit, 
  onDelete, 
  variant = 'default' 
}) => {
  // Component implementation
};
\`\`\`

### Generic Components

Create reusable components using TypeScript generics:

\`\`\`typescript
interface DataTableProps<T> {
  data: T[];
  columns: Column<T>[];
  onRowClick?: (item: T) => void;
}

function DataTable<T>({ data, columns, onRowClick }: DataTableProps<T>) {
  // Generic table implementation
}
\`\`\`

## State Management

### useState with TypeScript

Be explicit about state types:

\`\`\`typescript
const [user, setUser] = useState<User | null>(null);
const [loading, setLoading] = useState<boolean>(false);
const [errors, setErrors] = useState<Record<string, string>>({});
\`\`\`

### Custom Hooks

Create typed custom hooks for reusable logic:

\`\`\`typescript
interface UseApiReturn<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

function useApi<T>(url: string): UseApiReturn<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const result = await response.json();
      setData(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
    } finally {
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, error, refetch: fetchData };
}
\`\`\`

## Best Practices

### 1. Strict TypeScript Configuration

Configure TypeScript for maximum type safety:

\`\`\`json
{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "noUncheckedIndexedAccess": true
  }
}
\`\`\`

### 2. Use Union Types for Props

Leverage TypeScript's union types for flexible APIs:

\`\`\`typescript
type ButtonVariant = 'primary' | 'secondary' | 'danger';
type ButtonSize = 'small' | 'medium' | 'large';

interface ButtonProps {
  variant: ButtonVariant;
  size: ButtonSize;
  children: React.ReactNode;
  onClick?: () => void;
}
\`\`\`

### 3. Utility Types

Use TypeScript utility types for derived interfaces:

\`\`\`typescript
interface User {
  id: string;
  name: string;
  email: string;
  role: string;
}

// Create a type for user creation (without id)
type CreateUserInput = Omit<User, 'id'>;

// Create a type for partial user updates
type UpdateUserInput = Partial<Pick<User, 'name' | 'email'>>;
\`\`\`

## Testing with TypeScript

Ensure your tests are also type-safe:

\`\`\`typescript
import { render, screen } from '@testing-library/react';
import { User } from '@/types/user';
import UserCard from './UserCard';

const mockUser: User = {
  id: '1',
  name: 'John Doe',
  email: 'john@example.com',
  role: 'Developer'
};

describe('UserCard', () => {
  it('renders user information correctly', () => {
    render(<UserCard user={mockUser} />);
    
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('john@example.com')).toBeInTheDocument();
  });
});
\`\`\`

## Conclusion

Building scalable React applications with TypeScript requires thoughtful planning and consistent patterns. By following these practices, you'll create applications that are easier to maintain, debug, and extend.

The key is to embrace TypeScript's type system fully – don't fight it, but leverage it to build more robust applications. Start with strict type checking and gradually build up your type definitions as your application grows.

Remember: good TypeScript code is not just about adding types to JavaScript – it's about designing better APIs and interfaces that make your code more predictable and maintainable.`,
    author: 'Saurabh Singh',
    publishedAt: '2024-01-15',
    category: 'React',
    tags: ['React', 'TypeScript', 'Best Practices', 'Architecture'],
    readingTime: 12,
    featured: true,
    seo: {
      metaTitle: 'Building Scalable React Applications with TypeScript - Complete Guide',
      metaDescription: 'Learn how to build scalable, maintainable React applications using TypeScript. Includes best practices, component architecture, and state management patterns.',
      keywords: ['React', 'TypeScript', 'Scalable Applications', 'Component Architecture', 'State Management']
    }
  },
  {
    id: '2',
    title: 'Modern CSS Techniques for Better User Interfaces',
    slug: 'modern-css-techniques-better-user-interfaces',
    excerpt: 'Explore the latest CSS features including Grid, Flexbox, custom properties, and container queries to create stunning, responsive user interfaces.',
    content: `# Modern CSS Techniques for Better User Interfaces

CSS has evolved tremendously over the past few years. With new features like CSS Grid, container queries, and enhanced custom properties, we can create more sophisticated and maintainable user interfaces than ever before.

## CSS Grid: Beyond Basic Layouts

CSS Grid has revolutionized how we approach layout design. Here are some advanced techniques:

### Named Grid Lines

\`\`\`css
.grid-container {
  display: grid;
  grid-template-columns: 
    [sidebar-start] 250px 
    [sidebar-end main-start] 1fr 
    [main-end];
  grid-template-rows: 
    [header-start] 60px 
    [header-end content-start] 1fr 
    [content-end];
}

.sidebar {
  grid-column: sidebar-start / sidebar-end;
  grid-row: content-start / content-end;
}
\`\`\`

### Grid Areas for Complex Layouts

\`\`\`css
.layout {
  display: grid;
  grid-template-areas: 
    "header header header"
    "sidebar main aside"
    "footer footer footer";
  grid-template-columns: 250px 1fr 200px;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.aside { grid-area: aside; }
.footer { grid-area: footer; }
\`\`\`

## Container Queries: Responsive Components

Container queries allow components to respond to their container size rather than the viewport:

\`\`\`css
.card-container {
  container-type: inline-size;
}

.card {
  padding: 1rem;
}

@container (min-width: 300px) {
  .card {
    display: flex;
    gap: 1rem;
  }
  
  .card-image {
    flex: 0 0 120px;
  }
}

@container (min-width: 500px) {
  .card {
    padding: 2rem;
  }
  
  .card-title {
    font-size: 1.5rem;
  }
}
\`\`\`

## Advanced Custom Properties

Custom properties (CSS variables) can do much more than simple color theming:

### Responsive Typography

\`\`\`css
:root {
  --fluid-font-size: clamp(1rem, 2.5vw, 1.5rem);
  --line-height-ratio: 1.5;
  --computed-line-height: calc(var(--fluid-font-size) * var(--line-height-ratio));
}

.text {
  font-size: var(--fluid-font-size);
  line-height: var(--computed-line-height);
}
\`\`\`

### Dynamic Spacing System

\`\`\`css
:root {
  --space-unit: 1rem;
  --space-xs: calc(var(--space-unit) * 0.25);
  --space-sm: calc(var(--space-unit) * 0.5);
  --space-md: var(--space-unit);
  --space-lg: calc(var(--space-unit) * 2);
  --space-xl: calc(var(--space-unit) * 4);
}

@media (min-width: 768px) {
  :root {
    --space-unit: 1.25rem;
  }
}
\`\`\`

## Modern Selectors and Pseudo-Classes

### :has() - Parent Selectors

\`\`\`css
/* Style a form that has invalid inputs */
.form:has(input:invalid) {
  border: 2px solid red;
}

/* Style cards that contain images */
.card:has(img) {
  background: var(--image-card-bg);
}

/* Style navigation when it has active links */
.nav:has(.nav-link.active) {
  background: var(--active-nav-bg);
}
\`\`\`

### :is() and :where() for Cleaner Selectors

\`\`\`css
/* Instead of repeating selectors */
.header h1, .header h2, .header h3 {
  margin: 0;
}

/* Use :is() */
.header :is(h1, h2, h3) {
  margin: 0;
}

/* :where() has zero specificity */
:where(h1, h2, h3, h4, h5, h6) {
  line-height: 1.2;
}
\`\`\`

## CSS Layers for Better Organization

Organize your CSS using cascade layers:

\`\`\`css
@layer reset, base, components, utilities;

@layer reset {
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
}

@layer base {
  body {
    font-family: system-ui, sans-serif;
    line-height: 1.5;
  }
}

@layer components {
  .button {
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 0.25rem;
    background: var(--primary-color);
    color: white;
  }
}

@layer utilities {
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
  }
}
\`\`\`

## Scroll-Driven Animations

Create animations that respond to scroll position:

\`\`\`css
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.scroll-animate {
  animation: fade-in linear;
  animation-timeline: view();
  animation-range: entry 0% entry 100%;
}
\`\`\`

## Performance Optimizations

### CSS Containment

\`\`\`css
.card {
  contain: layout style paint;
}

.sidebar {
  contain: layout;
}
\`\`\`

### Content Visibility

\`\`\`css
.off-screen {
  content-visibility: auto;
  contain-intrinsic-size: 0 500px;
}
\`\`\`

## Accessibility Enhancements

### Reduced Motion Preferences

\`\`\`css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
\`\`\`

### High Contrast Mode Support

\`\`\`css
@media (prefers-contrast: high) {
  .card {
    border: 2px solid;
  }
  
  .button {
    border: 2px solid currentColor;
  }
}
\`\`\`

## Conclusion

Modern CSS gives us powerful tools to create beautiful, performant, and accessible user interfaces. By combining these techniques thoughtfully, we can build interfaces that adapt to user needs and preferences while maintaining clean, maintainable code.

The key is to embrace these new features progressively, ensuring fallbacks for older browsers while taking advantage of modern capabilities where supported.`,
    author: 'Saurabh Singh',
    publishedAt: '2024-01-10',
    category: 'Web Development',
    tags: ['CSS', 'Frontend', 'UI Design', 'Performance'],
    readingTime: 8,
    featured: false,
    seo: {
      metaTitle: 'Modern CSS Techniques for Better User Interfaces - 2024 Guide',
      metaDescription: 'Discover advanced CSS techniques including Grid, container queries, custom properties, and modern selectors to create stunning user interfaces.',
      keywords: ['CSS', 'Modern CSS', 'User Interface', 'Web Design', 'Frontend Development']
    }
  },
  {
    id: '3',
    title: 'The Art of Code Reviews: Best Practices for Teams',
    slug: 'art-of-code-reviews-best-practices',
    excerpt: 'Master the art of effective code reviews with proven strategies that improve code quality, team collaboration, and knowledge sharing.',
    content: `# The Art of Code Reviews: Best Practices for Teams

Code reviews are one of the most valuable practices in software development. They not only catch bugs and improve code quality but also facilitate knowledge transfer and team collaboration. Let's explore how to make your code reviews more effective.

## Why Code Reviews Matter

Code reviews provide multiple benefits:

- **Quality Assurance**: Catch bugs and issues before they reach production
- **Knowledge Sharing**: Spread domain knowledge across the team
- **Consistency**: Maintain coding standards and architectural patterns
- **Mentorship**: Provide learning opportunities for junior developers
- **Collaboration**: Foster team communication and shared ownership

## Before You Submit: Self-Review Checklist

Before requesting a review, perform a thorough self-review:

### Code Quality
- [ ] Does the code solve the intended problem?
- [ ] Is the logic clear and easy to follow?
- [ ] Are there any obvious bugs or edge cases?
- [ ] Is error handling appropriate?
- [ ] Are there any performance concerns?

### Style and Standards
- [ ] Does the code follow team conventions?
- [ ] Are variable and function names descriptive?
- [ ] Is the code properly formatted?
- [ ] Are there any linting errors?

### Testing
- [ ] Are there adequate unit tests?
- [ ] Do integration tests cover the new functionality?
- [ ] Are edge cases tested?
- [ ] Do all tests pass?

### Documentation
- [ ] Is the PR description clear and comprehensive?
- [ ] Are complex algorithms documented?
- [ ] Is the README updated if needed?
- [ ] Are breaking changes highlighted?

## Writing Effective PR Descriptions

A good PR description makes reviews faster and more effective:

### Template Structure

\`\`\`markdown
## Summary
Brief description of what this PR accomplishes.

## Changes Made
- Bullet point list of specific changes
- Include both functional and technical changes
- Mention any architectural decisions

## Testing
- [ ] Unit tests added/updated
- [ ] Integration tests pass
- [ ] Manual testing completed
- [ ] Performance testing (if applicable)

## Screenshots/GIFs
(For UI changes, include before/after visuals)

## Breaking Changes
List any breaking changes and migration steps.

## Related Issues
Closes #123, Related to #456
\`\`\`

### Context is Key

Provide context for your decisions:

\`\`\`markdown
## Why This Approach?
I chose to implement caching at the service layer rather than 
the component level because:

1. It reduces duplicate cache logic across components
2. It's easier to invalidate cache entries centrally
3. It provides better separation of concerns

## Alternative Considered
I also considered using React Query, but decided against it 
because our current setup doesn't warrant the additional 
dependency for this specific use case.
\`\`\`

## Reviewing Code: The Reviewer's Perspective

### What to Look For

**Architecture and Design**
- Does the code fit the existing architecture?
- Are design patterns used appropriately?
- Is the solution over-engineered or too simplistic?

**Functionality**
- Does the code meet the requirements?
- Are edge cases handled?
- Is error handling robust?

**Performance**
- Are there any obvious performance bottlenecks?
- Is the solution scalable?
- Are resources used efficiently?

**Security**
- Are inputs validated and sanitized?
- Are authentication and authorization handled correctly?
- Are secrets properly managed?

**Maintainability**
- Is the code readable and well-documented?
- Would a new team member understand this code?
- Is the solution extensible?

### Providing Constructive Feedback

#### Use the Right Tone

**Good Examples:**
\`\`\`
Consider using a Map instead of nested loops here for better 
performance with large datasets.

This logic could be extracted into a utility function to 
improve reusability and testability.

Great job handling the edge case with empty arrays! 
One small suggestion: we could use optional chaining here 
to make it even more robust.
\`\`\`

**Avoid:**
\`\`\`
This is wrong.
Why didn't you use a Map?
This code is confusing.
\`\`\`

#### Be Specific

Instead of: "This needs improvement"
Say: "Consider extracting lines 45-60 into a separate function. This would make the main function easier to test and understand."

#### Explain the Why

\`\`\`
I'd suggest using useCallback here because this function 
is passed as a prop to child components. Without it, 
the child components will re-render unnecessarily on 
every parent render.
\`\`\`

### Comment Categories

Use prefixes to categorize your comments:

- **Nit**: Minor style/preference issues
- **Question**: Ask for clarification
- **Suggestion**: Optional improvements
- **Issue**: Problems that should be addressed
- **Praise**: Highlight good practices

Example:
\`\`\`
Nit: Consider using const instead of let since this 
variable is never reassigned.

Question: Why did we choose to use setTimeout instead 
of requestAnimationFrame here?

Suggestion: We could use the nullish coalescing operator 
(??) here for cleaner code.

Issue: This function doesn't handle the case where 
user.preferences is undefined.

Praise: Excellent use of the factory pattern here! 
This makes the code much more testable.
\`\`\`

## Advanced Review Techniques

### Checklist-Based Reviews

Create team-specific checklists for different types of changes:

**API Changes Checklist:**
- [ ] Backward compatibility maintained?
- [ ] Input validation implemented?
- [ ] Error responses documented?
- [ ] Rate limiting considered?
- [ ] API documentation updated?

**Database Changes Checklist:**
- [ ] Migration scripts included?
- [ ] Indexes added where needed?
- [ ] Performance impact assessed?
- [ ] Rollback plan documented?

### Pair Review Sessions

For complex changes, consider live review sessions:

1. **Screen Sharing**: Walk through the code together
2. **Discussion**: Debate architectural decisions in real-time
3. **Collaborative Problem Solving**: Tackle complex issues together
4. **Knowledge Transfer**: Perfect for onboarding new team members

## Tools and Automation

### Automated Checks

Set up automated tools to handle routine checks:

\`\`\`yaml
# Example GitHub Actions workflow
name: Code Review Automation
on: [pull_request]

jobs:
  automated-checks:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Run linting
        run: npm run lint
      - name: Run tests
        run: npm run test
      - name: Check coverage
        run: npm run test:coverage
      - name: Security scan
        run: npm audit
\`\`\`

### Code Review Tools

Popular tools that enhance the review process:

- **GitHub/GitLab**: Built-in review features
- **Reviewboard**: Dedicated code review platform  
- **Crucible**: Atlassian's code review tool
- **Phabricator**: Facebook's code review system

### Review Metrics

Track metrics to improve your process:

- Average review turnaround time
- Number of iterations per PR
- Defect detection rate
- Review participation rates

## Common Pitfalls and How to Avoid Them

### Reviewer Fatigue

**Problem**: Large PRs that are overwhelming to review.

**Solution**: 
- Limit PR size (aim for <400 lines)
- Break large features into smaller, logical chunks
- Use draft PRs for work-in-progress feedback

### Bikeshedding

**Problem**: Spending too much time on trivial style issues.

**Solution**:
- Use automated formatters (Prettier, ESLint)
- Establish clear style guides
- Focus reviews on logic and architecture

### Review Bottlenecks

**Problem**: Waiting too long for reviews.

**Solution**:
- Set SLA expectations (e.g., 24-hour turnaround)
- Rotate review responsibilities  
- Use async communication effectively
- Consider pairing for urgent changes

### Defensive Authors

**Problem**: Authors taking feedback personally.

**Solution**:
- Focus feedback on the code, not the person
- Provide reasoning for suggestions
- Balance criticism with praise
- Build a culture of continuous learning

## Building a Review Culture

### Team Guidelines

Establish clear expectations:

\`\`\`markdown
## Our Code Review Guidelines

### For Authors:
- Keep PRs small and focused
- Write clear descriptions and comments
- Respond to feedback promptly
- Be open to suggestions

### For Reviewers:  
- Review within 24 hours
- Be constructive and specific
- Ask questions when unclear
- Approve when satisfied

### For Everyone:
- Assume positive intent
- Focus on learning and improvement
- Celebrate good code
- Help each other grow
\`\`\`

### Continuous Improvement

Regularly assess and improve your process:

- **Retrospectives**: Discuss what's working and what isn't
- **Metrics Review**: Look at review effectiveness data
- **Tool Evaluation**: Consider new tools and practices
- **Training**: Invest in review skills development

## Conclusion

Effective code reviews are an investment in your team's long-term success. They require time and effort upfront but pay dividends in code quality, team knowledge, and collaborative culture.

Remember that code reviews are as much about people as they are about code. Foster an environment where feedback is welcomed, learning is encouraged, and everyone contributes to building better software together.

The goal isn't perfect code—it's continuous improvement and shared understanding. When done well, code reviews become one of the most valuable practices your team can adopt.`,
    author: 'Saurabh Singh',
    publishedAt: '2024-01-05',
    category: 'Career',
    tags: ['Code Review', 'Team Collaboration', 'Best Practices', 'Software Development'],
    readingTime: 15,
    featured: false,
    seo: {
      metaTitle: 'The Art of Code Reviews: Best Practices for Teams - Complete Guide',
      metaDescription: 'Learn how to conduct effective code reviews that improve code quality, team collaboration, and knowledge sharing. Includes practical tips and real examples.',
      keywords: ['Code Review', 'Software Development', 'Team Collaboration', 'Best Practices', 'Code Quality']
    }
  }
];