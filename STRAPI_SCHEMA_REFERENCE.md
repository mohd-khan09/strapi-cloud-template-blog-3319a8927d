# Strapi Schema & Component Reference Guide

This document provides a comprehensive guide to creating schemas and components in this Strapi project based on existing patterns.

---

## Table of Contents
1. [Directory Structure](#directory-structure)
2. [Single Type vs Collection Type](#single-type-vs-collection-type)
3. [Content Type Schema Structure](#content-type-schema-structure)
4. [Component Schema Structure](#component-schema-structure)
5. [Common Patterns](#common-patterns)
6. [Examples](#examples)

---

## Directory Structure

### Content Types (API)
```
/src/api/{content-type-name}/
  ├── content-types/
  │   └── {content-type-name}/
  │       └── schema.json
  ├── controllers/
  │   └── {content-type-name}.js
  ├── routes/
  │   └── {content-type-name}.js
  └── services/
      └── {content-type-name}.js
```

**Example:**
```
/src/api/blog/
  ├── content-types/
  │   └── blog/
  │       └── schema.json
  ├── controllers/
  ├── routes/
  └── services/
```

### Components
```
/src/components/{category-name}/
  ├── component1.json
  ├── component2.json
  └── component3.json
```

**Component Categories in this project:**
- `casestudy/` - Case study specific components
- `components/` - General reusable components
- `enterprise/` - Enterprise page components
- `event/` - Event related components
- `home/` - Home page specific components
- `layout/` - Layout and section components
- `shared/` - Shared components (SEO, media, etc.)

---

## Single Type vs Collection Type

### Single Type (`"kind": "singleType"`)
**Use when:** You need only ONE instance of this content type (e.g., Footer, Header, Home Page)

**Characteristics:**
- Only one entry can exist
- Perfect for global/unique pages
- Examples: Footer, Header, Blog Landing Page, Home Page

**Example Schema:**
```json
{
  "kind": "singleType",
  "collectionName": "footers",
  "info": {
    "singularName": "footer",
    "pluralName": "footers",
    "displayName": "Footer",
    "description": ""
  },
  "options": {
    "draftAndPublish": true
  },
  "pluginOptions": {
    "i18n": {
      "localized": true
    }
  },
  "attributes": {
    // ... attributes here
  }
}
```

### Collection Type (`"kind": "collectionType"`)
**Use when:** You need MULTIPLE instances of this content type (e.g., Articles, Events, Authors)

**Characteristics:**
- Can create multiple entries
- Each entry is independent
- Examples: Articles, Events, Case Studies, Authors

**Example Schema:**
```json
{
  "kind": "collectionType",
  "collectionName": "articles",
  "info": {
    "singularName": "article",
    "pluralName": "articles",
    "displayName": "Article",
    "description": "Create your blog content"
  },
  "options": {
    "draftAndPublish": true
  },
  "pluginOptions": {
    "i18n": {
      "localized": true
    }
  },
  "attributes": {
    // ... attributes here
  }
}
```

---

## Content Type Schema Structure

### Basic Template

```json
{
  "kind": "singleType" | "collectionType",
  "collectionName": "table_name_in_database",
  "info": {
    "singularName": "content-type-name",
    "pluralName": "content-type-names",
    "displayName": "Display Name in Admin",
    "description": "Optional description"
  },
  "options": {
    "draftAndPublish": true
  },
  "pluginOptions": {
    "i18n": {
      "localized": true
    }
  },
  "attributes": {
    // Define your fields here
  }
}
```

### Field Types

#### 1. String Field
```json
"Title": {
  "type": "string",
  "default": "Default value",
  "pluginOptions": {
    "i18n": {
      "localized": true
    }
  }
}
```

#### 2. Text Field (Multi-line)
```json
"Description": {
  "type": "text",
  "maxLength": 80,
  "pluginOptions": {
    "i18n": {
      "localized": true
    }
  }
}
```

#### 3. Rich Text Field
```json
"Content": {
  "type": "richtext",
  "pluginOptions": {
    "i18n": {
      "localized": true
    }
  }
}
```

#### 4. Media Field (Images/Files)
```json
"Image": {
  "type": "media",
  "multiple": false,
  "required": false,
  "allowedTypes": ["images"],
  "pluginOptions": {
    "i18n": {
      "localized": true
    }
  }
}
```

Multiple files:
```json
"Gallery": {
  "type": "media",
  "multiple": true,
  "required": false,
  "allowedTypes": ["images", "files", "videos"]
}
```

#### 5. Component Field (Non-repeatable)
```json
"HeroSection": {
  "type": "component",
  "repeatable": false,
  "component": "home.hero",
  "pluginOptions": {
    "i18n": {
      "localized": true
    }
  }
}
```

#### 6. Component Field (Repeatable)
```json
"FAQItems": {
  "type": "component",
  "repeatable": true,
  "component": "components.faq-item",
  "max": 10,
  "pluginOptions": {
    "i18n": {
      "localized": true
    }
  }
}
```

#### 7. Relation Field
```json
"author": {
  "type": "relation",
  "relation": "manyToOne",
  "target": "api::author.author",
  "inversedBy": "articles"
}
```

Relation types:
- `oneToOne`
- `oneToMany`
- `manyToOne`
- `manyToMany`

#### 8. Dynamic Zone
```json
"blocks": {
  "type": "dynamiczone",
  "components": [
    "shared.media",
    "shared.quote",
    "shared.rich-text",
    "shared.slider"
  ],
  "pluginOptions": {
    "i18n": {
      "localized": true
    }
  }
}
```

#### 9. Boolean Field
```json
"isExternal": {
  "type": "boolean",
  "default": false
}
```

#### 10. Integer/Number Field
```json
"Rating": {
  "type": "integer",
  "default": 5,
  "min": 1,
  "max": 5
}
```

---

## Component Schema Structure

### Basic Template

```json
{
  "collectionName": "components_{category}_{component_name}",
  "info": {
    "displayName": "Component Display Name",
    "description": "Optional description"
  },
  "options": {},
  "attributes": {
    // Define your fields here
  }
}
```

### Component Naming Convention

**Collection Name Format:**
```
components_{category}_{component_name}
```

Examples:
- `components_home_hero` → `/src/components/home/hero.json`
- `components_layout_blog_hero_sections` → `/src/components/layout/blog-hero-section.json`
- `components_components_links` → `/src/components/components/link.json`

**Component Reference in Schema:**
```
"{category}.{component-file-name}"
```

Examples:
- `"home.hero"` → `/src/components/home/hero.json`
- `"components.link"` → `/src/components/components/link.json`
- `"shared.seo"` → `/src/components/shared/seo.json`

---

## Common Patterns

### Pattern 1: SEO Component (Shared)
**File:** `/src/components/shared/seo.json`

```json
{
  "collectionName": "components_seo_seos",
  "info": {
    "displayName": "seo",
    "icon": "search",
    "description": ""
  },
  "options": {},
  "attributes": {
    "title": {
      "type": "string",
      "default": "Page Title"
    },
    "description": {
      "type": "text",
      "default": "Page description"
    },
    "keywords": {
      "type": "string"
    },
    "og_image": {
      "type": "media",
      "multiple": false,
      "required": false,
      "allowedTypes": ["images"]
    },
    "twitter_card": {
      "type": "string",
      "default": "summary_large_image"
    }
  }
}
```

**Usage in Content Type:**
```json
"seo": {
  "type": "component",
  "repeatable": false,
  "component": "shared.seo",
  "pluginOptions": {
    "i18n": {
      "localized": true
    }
  }
}
```

### Pattern 2: Link/Button Component
**File:** `/src/components/components/link.json`

```json
{
  "collectionName": "components_components_links",
  "info": {
    "displayName": "Link",
    "description": ""
  },
  "options": {},
  "attributes": {
    "Text": {
      "type": "string",
      "default": "Click here"
    },
    "Url": {
      "type": "string",
      "default": "/"
    },
    "isExternal": {
      "type": "boolean",
      "default": false
    },
    "Image": {
      "type": "media",
      "multiple": false,
      "required": false,
      "allowedTypes": ["images"]
    }
  }
}
```

### Pattern 3: Hero Section Component
**File:** `/src/components/home/hero.json`

```json
{
  "collectionName": "components_home_hero",
  "info": {
    "displayName": "Hero Section",
    "description": ""
  },
  "options": {},
  "attributes": {
    "Title": {
      "type": "string",
      "default": "Main Title"
    },
    "Description": {
      "type": "text",
      "default": "Hero description"
    },
    "CTAButton": {
      "type": "component",
      "repeatable": true,
      "component": "components.link"
    },
    "Image1": {
      "type": "media",
      "multiple": false,
      "required": false,
      "allowedTypes": ["images"]
    }
  }
}
```

### Pattern 4: FAQ Item Component
**File:** `/src/components/components/faq-item.json`

```json
{
  "collectionName": "components_components_faq_items",
  "info": {
    "displayName": "FAQ Item",
    "description": ""
  },
  "options": {},
  "attributes": {
    "Question": {
      "type": "string",
      "default": "Question here?"
    },
    "Answer": {
      "type": "richtext",
      "default": "Answer here"
    }
  }
}
```

### Pattern 5: Testimonial Component
**File:** `/src/components/components/testimonial.json`

```json
{
  "collectionName": "components_components_testimonials",
  "info": {
    "displayName": "Testimonial",
    "description": ""
  },
  "options": {},
  "attributes": {
    "Content": {
      "type": "richtext"
    },
    "AuthorName": {
      "type": "string"
    },
    "AuthorTitle": {
      "type": "string"
    },
    "AuthorImage": {
      "type": "media",
      "multiple": false,
      "required": false,
      "allowedTypes": ["images"]
    }
  }
}
```

---

## Examples

### Example 1: Home Page (Single Type)

**File:** `/src/api/home/content-types/home/schema.json`

```json
{
  "kind": "singleType",
  "collectionName": "home",
  "info": {
    "singularName": "home",
    "pluralName": "homes",
    "displayName": "Home Landing Page",
    "description": ""
  },
  "options": {
    "draftAndPublish": true
  },
  "pluginOptions": {
    "i18n": {
      "localized": true
    }
  },
  "attributes": {
    "seo": {
      "type": "component",
      "repeatable": false,
      "component": "shared.seo",
      "pluginOptions": {
        "i18n": {
          "localized": true
        }
      }
    },
    "Hero": {
      "type": "component",
      "repeatable": false,
      "component": "home.hero",
      "pluginOptions": {
        "i18n": {
          "localized": true
        }
      }
    },
    "Stats": {
      "type": "component",
      "repeatable": false,
      "component": "home.stats",
      "pluginOptions": {
        "i18n": {
          "localized": true
        }
      }
    }
  }
}
```

### Example 2: Article (Collection Type)

**File:** `/src/api/article/content-types/article/schema.json`

```json
{
  "kind": "collectionType",
  "collectionName": "articles",
  "info": {
    "singularName": "article",
    "pluralName": "articles",
    "displayName": "Article",
    "description": "Create your blog content"
  },
  "options": {
    "draftAndPublish": true
  },
  "pluginOptions": {
    "i18n": {
      "localized": true
    }
  },
  "attributes": {
    "title": {
      "type": "string",
      "pluginOptions": {
        "i18n": {
          "localized": true
        }
      }
    },
    "slug": {
      "type": "string",
      "pluginOptions": {
        "i18n": {
          "localized": true
        }
      }
    },
    "cover": {
      "type": "media",
      "multiple": false,
      "required": false,
      "allowedTypes": ["images"],
      "pluginOptions": {
        "i18n": {
          "localized": true
        }
      }
    },
    "author": {
      "type": "relation",
      "relation": "manyToOne",
      "target": "api::author.author",
      "inversedBy": "articles"
    },
    "category": {
      "type": "relation",
      "relation": "manyToOne",
      "target": "api::category.category",
      "inversedBy": "articles"
    }
  }
}
```

### Example 3: Footer (Single Type)

**File:** `/src/api/footer/content-types/footer/schema.json`

```json
{
  "kind": "singleType",
  "collectionName": "footers",
  "info": {
    "singularName": "footer",
    "pluralName": "footers",
    "displayName": "Footer",
    "description": ""
  },
  "options": {
    "draftAndPublish": true
  },
  "pluginOptions": {
    "i18n": {
      "localized": true
    }
  },
  "attributes": {
    "Navigation": {
      "type": "component",
      "repeatable": true,
      "component": "components.links-column",
      "max": 4,
      "pluginOptions": {
        "i18n": {
          "localized": true
        }
      }
    },
    "Copyright": {
      "type": "string",
      "default": "© 2024 Company Name",
      "pluginOptions": {
        "i18n": {
          "localized": true
        }
      }
    }
  }
}
```

---

## Best Practices

### 1. Naming Conventions
- **Content Types:** Use kebab-case (e.g., `home-landing`, `blog-internal`)
- **Components:** Use kebab-case (e.g., `hero-section`, `faq-item`)
- **Attributes:** Use PascalCase for component attributes (e.g., `Title`, `Description`)

### 2. Component Organization
- Group related components in appropriate categories
- Use `shared/` for components used across multiple content types
- Use specific categories (e.g., `home/`, `event/`) for page-specific components

### 3. i18n Configuration
- Always include `pluginOptions.i18n.localized: true` for fields that need translation
- SEO fields should always be localized
- Media fields typically need to be localized for different markets

### 4. Draft & Publish
- Enable for content types that need review before going live
- Typically enabled for all content types in this project

### 5. Default Values
- Provide sensible defaults for string fields
- Helps content editors understand expected format
- Reduces errors and improves content quality

---

## Quick Reference

### Create New Content Type
1. Create directory: `/src/api/{name}/content-types/{name}/`
2. Create `schema.json` with appropriate kind
3. Restart Strapi server
4. Content type appears in admin panel

### Create New Component
1. Create file: `/src/components/{category}/{name}.json`
2. Use proper collectionName format
3. Restart Strapi server
4. Reference in content type as `"{category}.{name}"`

### Common Field Patterns
```json
// String
"FieldName": { "type": "string", "default": "value" }

// Text
"FieldName": { "type": "text" }

// Rich Text
"FieldName": { "type": "richtext" }

// Media (Single)
"FieldName": { "type": "media", "multiple": false, "allowedTypes": ["images"] }

// Media (Multiple)
"FieldName": { "type": "media", "multiple": true, "allowedTypes": ["images", "videos"] }

// Component (Non-repeatable)
"FieldName": { "type": "component", "repeatable": false, "component": "category.name" }

// Component (Repeatable)
"FieldName": { "type": "component", "repeatable": true, "component": "category.name" }

// Relation
"FieldName": { "type": "relation", "relation": "manyToOne", "target": "api::model.model" }
```

---

## Notes

- Always restart Strapi after creating/modifying schemas
- Component names must match file names (without .json extension)
- Collection names must be unique across all content types and components
- Relation targets use format: `"api::content-type.content-type"`
- Component references use format: `"category.component-name"`

---

## Form Components Pattern

### Contact/Lead Form Structure

Forms in Strapi are typically built using a combination of input field components within a form section component.

### Form Section Component Pattern

**File:** `/src/components/greencore/contact-form-section.json`

```json
{
  "collectionName": "components_greencore_contact_form_sections",
  "info": {
    "displayName": "Contact Form Section",
    "description": "Contact form with fields"
  },
  "options": {},
  "attributes": {
    "Title": {
      "type": "string",
      "default": "Get In Touch"
    },
    "Subtitle": {
      "type": "text"
    },
    "FirstName": {
      "type": "component",
      "repeatable": false,
      "component": "components.input-text-field"
    },
    "LastName": {
      "type": "component",
      "repeatable": false,
      "component": "components.input-text-field"
    },
    "Email": {
      "type": "component",
      "repeatable": false,
      "component": "components.input-text-field"
    },
    "ProjectType": {
      "type": "component",
      "repeatable": false,
      "component": "components.input-select-field"
    },
    "Message": {
      "type": "component",
      "repeatable": false,
      "component": "components.input-text-field"
    },
    "TermsCheckbox": {
      "type": "component",
      "repeatable": false,
      "component": "components.input-checkbox-field"
    },
    "SubmitButton": {
      "type": "component",
      "repeatable": false,
      "component": "components.link"
    }
  }
}
```

### Input Field Components

#### 1. Input Text Field

**File:** `/src/components/components/input-text-field.json`

```json
{
  "collectionName": "components_components_input_text_fields",
  "info": {
    "displayName": "Input Text Field",
    "description": ""
  },
  "options": {},
  "attributes": {
    "Label": {
      "type": "string"
    },
    "Placeholder": {
      "type": "string"
    },
    "isRequired": {
      "type": "boolean",
      "default": true
    },
    "isTextarea": {
      "type": "boolean",
      "default": false
    },
    "isEmail": {
      "type": "boolean",
      "default": false
    },
    "isWebsite": {
      "type": "boolean",
      "default": false
    }
  }
}
```

**Usage:**
- For single-line text inputs: `isTextarea: false`
- For multi-line textarea: `isTextarea: true`
- For email validation: `isEmail: true`
- For URL validation: `isWebsite: true`

#### 2. Input Select Field (Dropdown)

**File:** `/src/components/components/input-select-field.json`

```json
{
  "collectionName": "components_components_input_select_fields",
  "info": {
    "displayName": "Input Select Field",
    "description": ""
  },
  "options": {},
  "attributes": {
    "Label": {
      "type": "string",
      "default": "Label"
    },
    "Placeholder": {
      "type": "string",
      "default": "Placeholder"
    },
    "isRequired": {
      "type": "boolean",
      "default": true
    },
    "Options": {
      "type": "component",
      "repeatable": true,
      "component": "components.newsletter"
    }
  }
}
```

**Usage:**
- Dropdown select menus
- Provides predefined options for user selection

#### 3. Input Checkbox Field

**File:** `/src/components/components/input-checkbox-field.json`

```json
{
  "collectionName": "components_components_input_checkbox_fields",
  "info": {
    "displayName": "Input Checkbox Field"
  },
  "options": {},
  "attributes": {
    "Label": {
      "type": "string",
      "default": "Label"
    },
    "isRequired": {
      "type": "boolean",
      "default": true
    }
  }
}
```

**Usage:**
- For agreement checkboxes (Terms & Conditions, Privacy Policy)
- For optional selections

### Complete Form Example

**Contact Page Schema:**

```json
{
  "kind": "singleType",
  "collectionName": "contacts",
  "info": {
    "singularName": "contact",
    "pluralName": "contacts",
    "displayName": "Contact Page"
  },
  "options": {
    "draftAndPublish": true
  },
  "attributes": {
    "seo": {
      "type": "component",
      "repeatable": false,
      "component": "shared.seo"
    },
    "HeroSection": {
      "type": "component",
      "repeatable": false,
      "component": "layout.hero"
    },
    "ContactForm": {
      "type": "component",
      "repeatable": false,
      "component": "greencore.contact-form-section"
    }
  }
}
```

### Form Best Practices

1. **Always include labels** - Each input field should have a clear label
2. **Use appropriate field types** - Email fields should use `isEmail: true`
3. **Mark required fields** - Set `isRequired: true` for mandatory fields
4. **Provide placeholders** - Help users understand expected input format
5. **Include validation** - Use field-specific validation flags
6. **Add success message** - Create a success component for form submission confirmation

### Form Field Naming Convention

```
FirstName      → components.input-text-field
LastName       → components.input-text-field
Email          → components.input-text-field (isEmail: true)
Phone          → components.input-text-field
Company        → components.input-text-field
ProjectType    → components.input-select-field
Message        → components.input-text-field (isTextarea: true)
Terms          → components.input-checkbox-field
SubmitButton   → components.link
```

---
