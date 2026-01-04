import type { Schema, Struct } from '@strapi/strapi';

export interface ComponentsInputCheckboxField extends Struct.ComponentSchema {
  collectionName: 'components_components_input_checkbox_fields';
  info: {
    displayName: 'Input Checkbox Field';
  };
  attributes: {
    isRequired: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    Label: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Label'>;
  };
}

export interface ComponentsInputSelectField extends Struct.ComponentSchema {
  collectionName: 'components_components_input_select_fields';
  info: {
    description: '';
    displayName: 'Input Select Field';
  };
  attributes: {
    isRequired: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    Label: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Label'>;
    Options: Schema.Attribute.Component<'components.select-option', true>;
    Placeholder: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Placeholder'>;
  };
}

export interface ComponentsInputTextField extends Struct.ComponentSchema {
  collectionName: 'components_components_input_text_fields';
  info: {
    description: '';
    displayName: 'Input Text Field';
  };
  attributes: {
    isEmail: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    isRequired: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    isTextarea: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    isWebsite: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    Label: Schema.Attribute.String;
    Placeholder: Schema.Attribute.String;
  };
}

export interface ComponentsLink extends Struct.ComponentSchema {
  collectionName: 'components_components_links';
  info: {
    description: 'Reusable link/button component';
    displayName: 'Link';
  };
  attributes: {
    Image: Schema.Attribute.Media<'images'>;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    Text: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Click here'>;
    Url: Schema.Attribute.String & Schema.Attribute.DefaultTo<'/'>;
  };
}

export interface ComponentsLinksColumn extends Struct.ComponentSchema {
  collectionName: 'components_components_links_columns';
  info: {
    description: '';
    displayName: 'Links Column';
  };
  attributes: {
    Links: Schema.Attribute.Component<'components.link', true>;
    Title: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Column title'>;
  };
}

export interface ComponentsSelectOption extends Struct.ComponentSchema {
  collectionName: 'components_components_select_options';
  info: {
    description: 'Individual option for select dropdown';
    displayName: 'Select Option';
  };
  attributes: {
    Label: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Option Label'>;
    Value: Schema.Attribute.String & Schema.Attribute.DefaultTo<'option-value'>;
  };
}

export interface ComponentsSocials extends Struct.ComponentSchema {
  collectionName: 'components_components_socials';
  info: {
    displayName: 'Socials';
  };
  attributes: {
    Socials: Schema.Attribute.Component<'components.link', true>;
  };
}

export interface GreencoreAboutHero extends Struct.ComponentSchema {
  collectionName: 'components_greencore_about_heroes';
  info: {
    description: 'Hero section for About page';
    displayName: 'About Hero';
  };
  attributes: {
    Description: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'Discover the complete Green Coe India story - from garage experiment to 500+ projects and half a million trees saved. Meet our team, tour our factory, and see why smart builders choose honeycomb over wood.'>;
    Title: Schema.Attribute.String & Schema.Attribute.DefaultTo<'About'>;
  };
}

export interface GreencoreAdvantageCard extends Struct.ComponentSchema {
  collectionName: 'components_greencore_advantage_cards';
  info: {
    description: 'Individual advantage card with icon and description';
    displayName: 'Advantage Card';
  };
  attributes: {
    Description: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'GreenCore is made entirely from wood, which grows back. Every tree used for GreenCore is replaced by a new tree.'>;
    Icon: Schema.Attribute.Media<'images'>;
    Title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'100% Wood-Based Panels'>;
  };
}

export interface GreencoreAdvantagesSection extends Struct.ComponentSchema {
  collectionName: 'components_greencore_advantages_sections';
  info: {
    description: 'Section showcasing key advantages';
    displayName: 'Advantages Section';
  };
  attributes: {
    Advantages: Schema.Attribute.Component<'greencore.advantage-card', true>;
    HighlightedTitle: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Advantages'>;
    Title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'4 Game-Changing Advantages That Are Revolutionizing Construction'>;
  };
}

export interface GreencoreApplicationCard extends Struct.ComponentSchema {
  collectionName: 'components_greencore_application_cards';
  info: {
    description: 'Individual application use case';
    displayName: 'Application Card';
  };
  attributes: {
    Description: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'Perfect for modern homes prioritizing sustainability and design.'>;
    Icon: Schema.Attribute.Media<'images'>;
    Title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Residential Homes'>;
  };
}

export interface GreencoreApplicationsSection extends Struct.ComponentSchema {
  collectionName: 'components_greencore_applications_sections';
  info: {
    description: 'Product applications showcase';
    displayName: 'Applications Section';
  };
  attributes: {
    Applications: Schema.Attribute.Component<
      'greencore.application-card',
      true
    >;
    Description: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<"From luxury hotels to municipal housing - our door solution that works everywhere. Here's where our honeycomb doors excels">;
    Title: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Applications'>;
  };
}

export interface GreencoreBenefitCard extends Struct.ComponentSchema {
  collectionName: 'components_greencore_benefit_cards';
  info: {
    description: 'Individual benefit card with icon';
    displayName: 'Benefit Card';
  };
  attributes: {
    Description: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<"We transform recycled paper into revolutionary honeycomb furniture that's stronger than wood.">;
    Icon: Schema.Attribute.Media<'images'>;
    Title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Sustainable Manufacturing'>;
  };
}

export interface GreencoreBenefitItem extends Struct.ComponentSchema {
  collectionName: 'components_greencore_benefit_items';
  info: {
    description: 'Individual benefit with checkmark';
    displayName: 'Benefit Item';
  };
  attributes: {
    Text: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'18 Years in Business, Zero Bankruptcy'>;
  };
}

export interface GreencoreBigProjectSection extends Struct.ComponentSchema {
  collectionName: 'components_greencore_big_project_sections';
  info: {
    description: 'Working on a big project CTA section';
    displayName: 'Big Project Section';
  };
  attributes: {
    Description: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<"If you're ordering 20+ doors for a residential complex, hotel, or commercial building, talk to our project sales team directly.">;
    Image: Schema.Attribute.Media<'images'>;
    Services: Schema.Attribute.Component<'greencore.service-item', true>;
    ServicesTitle: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'We handle:'>;
    Title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Working on a Big Project?'>;
  };
}

export interface GreencoreBlogAuthor extends Struct.ComponentSchema {
  collectionName: 'components_greencore_blog_authors';
  info: {
    description: 'Author information for blog posts';
    displayName: 'Blog Author';
  };
  attributes: {
    Avatar: Schema.Attribute.Media<'images'>;
    Bio: Schema.Attribute.Text;
    Name: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Rohan Patel'>;
  };
}

export interface GreencoreBlogCard extends Struct.ComponentSchema {
  collectionName: 'components_greencore_blog_cards';
  info: {
    description: 'Individual blog post card';
    displayName: 'Blog Card';
  };
  attributes: {
    Date: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Dec 24, 2024'>;
    Excerpt: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'Short description of the blog post'>;
    Image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    Link: Schema.Attribute.Component<'components.link', false>;
    ReadTime: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'5 min read'>;
    Title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Blog Post Title'>;
  };
}

export interface GreencoreBlogHero extends Struct.ComponentSchema {
  collectionName: 'components_greencore_blog_heroes';
  info: {
    description: 'Hero section for blog posts with author info and metadata';
    displayName: 'Blog Hero';
  };
  attributes: {
    Author: Schema.Attribute.Component<'greencore.blog-author', false>;
    Excerpt: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<"Three years ago, a Bangalore developer called us crazy for suggesting honeycomb doors. Last month, they ordered 500 units. Here's what changed their mind\u2014and why you should pay attention before your competitor's do.">;
    FeaturedImage: Schema.Attribute.Media<'images'>;
    PublishDate: Schema.Attribute.Date & Schema.Attribute.Required;
    ReadTime: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'8 Minute read'>;
    Title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<"Why Wood-Free Furniture Is The Future (And Why You're Late)">;
  };
}

export interface GreencoreBlogLandingHero extends Struct.ComponentSchema {
  collectionName: 'components_greencore_blog_landing_heroes';
  info: {
    description: 'Hero section for blog landing page';
    displayName: 'Blog Landing Hero';
  };
  attributes: {
    Description: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'Real-world insights from 500+ projects and 18 years of building with honeycomb. Expert advice on doors for Indian projects - written by our team for homeowners, architects, and builders.'>;
    Title: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Blogs'>;
  };
}

export interface GreencoreBlogSection extends Struct.ComponentSchema {
  collectionName: 'components_greencore_blog_sections';
  info: {
    description: 'Section displaying blog posts';
    displayName: 'Blog Section';
  };
  attributes: {
    Eyebrow: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Blog'>;
    FeaturedPosts: Schema.Attribute.Relation<'manyToMany', 'api::blog.blog'>;
    Title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Sustainability stories and updates'>;
    ViewAllButton: Schema.Attribute.Component<'components.link', false>;
  };
}

export interface GreencoreBlogStatsSection extends Struct.ComponentSchema {
  collectionName: 'components_greencore_blog_stats_sections';
  info: {
    description: 'Statistics display section for blog content';
    displayName: 'Blog Stats Section';
  };
  attributes: {
    Stats: Schema.Attribute.Component<'greencore.stat-item', true>;
  };
}

export interface GreencoreBlogsGridSection extends Struct.ComponentSchema {
  collectionName: 'components_greencore_blogs_grid_sections';
  info: {
    description: 'Blog posts grid display section';
    displayName: 'Blogs Grid Section';
  };
  attributes: {
    FeaturedBlogs: Schema.Attribute.Relation<'oneToMany', 'api::blog.blog'>;
    HighlightedText: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Collections'>;
    Title: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Must-Read'>;
  };
}

export interface GreencoreBrandLogo extends Struct.ComponentSchema {
  collectionName: 'components_greencore_brand_logos';
  info: {
    description: 'Individual brand logo item';
    displayName: 'Brand Logo';
  };
  attributes: {
    BrandName: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Brand Name'>;
    Logo: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    Url: Schema.Attribute.String & Schema.Attribute.DefaultTo<'#'>;
  };
}

export interface GreencoreBrandLogoSection extends Struct.ComponentSchema {
  collectionName: 'components_greencore_brand_logo_sections';
  info: {
    description: 'Section displaying partner/brand logos';
    displayName: 'Brand Logo Section';
  };
  attributes: {
    Logos: Schema.Attribute.Component<'greencore.brand-logo', true>;
    Title: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Trusted By'>;
  };
}

export interface GreencoreContactFormSection extends Struct.ComponentSchema {
  collectionName: 'components_greencore_contact_form_sections';
  info: {
    description: 'Contact form with fields';
    displayName: 'Contact Form Section';
  };
  attributes: {
    Email: Schema.Attribute.Component<'components.input-text-field', false>;
    EstimatedRequirement: Schema.Attribute.Component<
      'components.input-text-field',
      false
    >;
    FirstName: Schema.Attribute.Component<'components.input-text-field', false>;
    LastName: Schema.Attribute.Component<'components.input-text-field', false>;
    ProjectType: Schema.Attribute.Component<
      'components.input-select-field',
      false
    >;
    SideImage: Schema.Attribute.Media<'images'>;
    SubmitButton: Schema.Attribute.Component<'components.link', false>;
    Subtitle: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'Get your custom quote in 24 hours. Join 500+ companies already saving 40% on furniture costs.'>;
    TermsCheckbox: Schema.Attribute.Component<
      'components.input-checkbox-field',
      false
    >;
    Title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Ready to Transform Your Next Project?'>;
  };
}

export interface GreencoreContactHero extends Struct.ComponentSchema {
  collectionName: 'components_greencore_contact_heroes';
  info: {
    description: 'Hero section for contact page';
    displayName: 'Contact Hero';
  };
  attributes: {
    Description: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<"We're here to help with your honeycomb door needs. Reach out through any of the channels below and our team will assist you with product information, quotes, and technical support within 2 hours during business hours.">;
    Title: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Contact Us'>;
  };
}

export interface GreencoreContactInfo extends Struct.ComponentSchema {
  collectionName: 'components_greencore_contact_infos';
  info: {
    description: 'Contact information card (phone, email, address)';
    displayName: 'Contact Info';
  };
  attributes: {
    Address: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'09, Martin Street 8190 Polo Alto, San Francisco'>;
    AddressTitle: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Address info'>;
    EmailAddress: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'info@greencoreindia.com'>;
    PhoneNumber: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'+91 81508 00001'>;
    Title: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Info'>;
  };
}

export interface GreencoreContactInfoSection extends Struct.ComponentSchema {
  collectionName: 'components_greencore_contact_info_sections';
  info: {
    description: 'Contact information section with multiple contact methods';
    displayName: 'Contact Info Section';
  };
  attributes: {
    ContactMethods: Schema.Attribute.Component<
      'greencore.contact-method-item',
      true
    >;
    Description: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'Honeycomb doors are perfect for a variety of applications across industries'>;
    HighlightedText: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Every Space'>;
    Title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Perfect for Every Space'>;
  };
}

export interface GreencoreContactMethodItem extends Struct.ComponentSchema {
  collectionName: 'components_greencore_contact_method_items';
  info: {
    description: 'Individual contact method with details';
    displayName: 'Contact Method Item';
  };
  attributes: {
    Line1: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Have delivery with our team'>;
    Line2: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'+91 6355 60000'>;
    Line3: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Mon-Sat, 9 AM - 6 PM'>;
    Title: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Call Us'>;
  };
}

export interface GreencoreCustomerReview extends Struct.ComponentSchema {
  collectionName: 'components_greencore_customer_reviews';
  info: {
    description: 'Individual customer review card';
    displayName: 'Customer Review';
  };
  attributes: {
    CustomerAvatar: Schema.Attribute.Media<'images'>;
    CustomerName: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'John Doe'>;
    Rating: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          max: 5;
          min: 1;
        },
        number
      > &
      Schema.Attribute.DefaultTo<5>;
    ReviewText: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'Installed 100 doors in our Bangalore project. Zero complaints and panels installation was 30 faster than wood.'>;
  };
}

export interface GreencoreCustomerReviewsQuoteSection
  extends Struct.ComponentSchema {
  collectionName: 'components_greencore_customer_reviews_quote_sections';
  info: {
    description: 'Customer reviews section for quote page';
    displayName: 'Customer Reviews Quote Section';
  };
  attributes: {
    HighlightedText: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Reviews'>;
    Reviews: Schema.Attribute.Component<'greencore.customer-review', true>;
    Title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Customer Reviews'>;
  };
}

export interface GreencoreError404Content extends Struct.ComponentSchema {
  collectionName: 'components_greencore_error_404_contents';
  info: {
    description: '404 error page content';
    displayName: 'Error 404 Content';
  };
  attributes: {
    ButtonLink: Schema.Attribute.String & Schema.Attribute.DefaultTo<'/'>;
    ButtonText: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Back To Home'>;
    Heading: Schema.Attribute.String & Schema.Attribute.DefaultTo<'404!'>;
    IllustrationImage: Schema.Attribute.Media<'images'>;
    Message1: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'Looks like this page got lost in our warehouse.'>;
    Message2: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<"Don't worry - everything else is right where it should be.">;
  };
}

export interface GreencoreFaqItem extends Struct.ComponentSchema {
  collectionName: 'components_greencore_faq_items';
  info: {
    description: 'Individual FAQ question and answer';
    displayName: 'FAQ Item';
  };
  attributes: {
    Answer: Schema.Attribute.RichText &
      Schema.Attribute.DefaultTo<'Answer to the question'>;
    Question: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'What is the core difference in a traditional material?'>;
  };
}

export interface GreencoreFaqSection extends Struct.ComponentSchema {
  collectionName: 'components_greencore_faq_sections';
  info: {
    description: 'Frequently asked questions section';
    displayName: 'FAQ Section';
  };
  attributes: {
    Eyebrow: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Our Addressing Heartfelt'>;
    FAQItems: Schema.Attribute.Component<'greencore.faq-item', true>;
    Title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Frequently Asked Question'>;
  };
}

export interface GreencoreFeatureCard extends Struct.ComponentSchema {
  collectionName: 'components_greencore_feature_cards';
  info: {
    description: 'Individual feature/benefit card';
    displayName: 'Feature Card';
  };
  attributes: {
    Description: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'Easy to handle and install due to their low weight.'>;
    Icon: Schema.Attribute.Media<'images'>;
    Title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Lightweight Construction'>;
  };
}

export interface GreencoreFeatureItem extends Struct.ComponentSchema {
  collectionName: 'components_greencore_feature_items';
  info: {
    description: 'Simple feature item with icon and text';
    displayName: 'Feature Item';
  };
  attributes: {
    Icon: Schema.Attribute.String & Schema.Attribute.DefaultTo<'check'>;
    Text: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'24 Hour Response'>;
  };
}

export interface GreencoreFeaturedBlogPost extends Struct.ComponentSchema {
  collectionName: 'components_greencore_featured_blog_posts';
  info: {
    description: 'Highlighted blog post section';
    displayName: 'Featured Blog Post';
  };
  attributes: {
    FeaturedBlog: Schema.Attribute.Relation<'oneToOne', 'api::blog.blog'>;
  };
}

export interface GreencoreFeaturedProductsSection
  extends Struct.ComponentSchema {
  collectionName: 'components_greencore_featured_products_sections';
  info: {
    description: 'Grid of featured product cards';
    displayName: 'Featured Products Section';
  };
  attributes: {
    HighlightedTitle: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Featured Products'>;
    Products: Schema.Attribute.Relation<'manyToMany', 'api::product.product'>;
    Title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Featured Products'>;
  };
}

export interface GreencoreFinishingOption extends Struct.ComponentSchema {
  collectionName: 'components_greencore_finishing_options';
  info: {
    description: 'Product finishing option (Laminate, Veneer, PU Paint, etc.)';
    displayName: 'Finishing Option';
  };
  attributes: {
    Image: Schema.Attribute.Media<'images'>;
    Name: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Laminate'>;
  };
}

export interface GreencoreFutureTab extends Struct.ComponentSchema {
  collectionName: 'components_greencore_future_tabs';
  info: {
    description: 'Tab item for green future section';
    displayName: 'Future Tab';
  };
  attributes: {
    Number: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Physical'>;
    Title: Schema.Attribute.String & Schema.Attribute.DefaultTo<'offices'>;
  };
}

export interface GreencoreGreenFutureSection extends Struct.ComponentSchema {
  collectionName: 'components_greencore_green_future_sections';
  info: {
    description: 'Section with tabs for different categories';
    displayName: 'Green Future Section';
  };
  attributes: {
    Tabs: Schema.Attribute.Component<'greencore.future-tab', true>;
    Title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<"Building India's green future">;
  };
}

export interface GreencoreHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_greencore_hero_sections';
  info: {
    description: 'Main hero section with title and background image';
    displayName: 'Hero Section';
  };
  attributes: {
    BackgroundImage: Schema.Attribute.Media<'images'>;
    BackgroundImageSm: Schema.Attribute.Media<'images'>;
    Title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<"India's First 100% Wood-Free Furniture Revolution">;
  };
}

export interface GreencoreImpactStat extends Struct.ComponentSchema {
  collectionName: 'components_greencore_impact_stats';
  info: {
    description: 'Individual impact statistic';
    displayName: 'Impact Stat';
  };
  attributes: {
    Description: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'Major Projects delivered successfully'>;
    Number: Schema.Attribute.String & Schema.Attribute.DefaultTo<'5 Hundred'>;
  };
}

export interface GreencoreKeyBenefitsSection extends Struct.ComponentSchema {
  collectionName: 'components_greencore_key_benefits_sections';
  info: {
    description: 'Key benefits with icon cards';
    displayName: 'Key Benefits Section';
  };
  attributes: {
    Benefits: Schema.Attribute.Component<'greencore.benefit-card', true>;
    Title: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Key Benefits'>;
  };
}

export interface GreencoreKeyFeaturesSection extends Struct.ComponentSchema {
  collectionName: 'components_greencore_key_features_sections';
  info: {
    description: 'Key features and benefits showcase';
    displayName: 'Key Features Section';
  };
  attributes: {
    Features: Schema.Attribute.Component<'greencore.feature-card', true>;
    Subtitle: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'Why industry leaders choose honeycomb doors over traditional alternatives'>;
    Title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Key Features & Benefits'>;
  };
}

export interface GreencoreLoadCapacityCta extends Struct.ComponentSchema {
  collectionName: 'components_greencore_load_capacity_ctas';
  info: {
    description: 'Questions about load capacity CTA section';
    displayName: 'Load Capacity CTA';
  };
  attributes: {
    CTAButton: Schema.Attribute.Component<'components.link', false>;
    Description: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'Our technical team will review your requirements and recommend the perfect configuration for your project.'>;
    Image: Schema.Attribute.Media<'images'>;
    Title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Questions About Load Capacity or Sizing?'>;
  };
}

export interface GreencoreManufacturingVideoSection
  extends Struct.ComponentSchema {
  collectionName: 'components_greencore_manufacturing_video_sections';
  info: {
    description: 'Manufacturing process video showcase';
    displayName: 'Manufacturing Video Section';
  };
  attributes: {
    CTAButton: Schema.Attribute.Component<'components.link', false>;
    Description: Schema.Attribute.RichText &
      Schema.Attribute.DefaultTo<'Watch this 90-second video shows our facility turning 100% recycled materials into doors that architects trust. Watch live stress testing, see our quality control checkpoints, and understand why builders choose honeycomb.'>;
    Title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'See Our Manufacturing Process'>;
    VideoThumbnail: Schema.Attribute.Media<'images'>;
    VideoUrl: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'https://www.youtube.com/watch?v=...'>;
  };
}

export interface GreencoreMaterialOption extends Struct.ComponentSchema {
  collectionName: 'components_greencore_material_options';
  info: {
    description: 'Core material option (Standard/Premium Honeycomb)';
    displayName: 'Material Option';
  };
  attributes: {
    isDefault: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    Name: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Standard Honeycomb'>;
  };
}

export interface GreencoreMustReadCollectionsSection
  extends Struct.ComponentSchema {
  collectionName: 'components_greencore_must_read_collections_sections';
  info: {
    description: 'Featured blog posts section';
    displayName: 'Must-Read Collections Section';
  };
  attributes: {
    FeaturedBlogs: Schema.Attribute.Relation<'oneToMany', 'api::blog.blog'>;
    HighlightedText: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Collections'>;
    Title: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Must-Read'>;
  };
}

export interface GreencoreOptionItem extends Struct.ComponentSchema {
  collectionName: 'components_greencore_option_items';
  info: {
    description: 'Individual option item (color, material, etc.)';
    displayName: 'Option Item';
  };
  attributes: {
    Image: Schema.Attribute.Media<'image'>;
    Label: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Oak'>;
    ProductImage: Schema.Attribute.Media<'images'>;
    Value: Schema.Attribute.String & Schema.Attribute.DefaultTo<'oak'>;
  };
}

export interface GreencoreOurImpactSection extends Struct.ComponentSchema {
  collectionName: 'components_greencore_our_impact_sections';
  info: {
    description: 'Impact statistics section';
    displayName: 'Our Impact Section';
  };
  attributes: {
    ImpactStats: Schema.Attribute.Component<'greencore.impact-stat', true>;
    Title: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Our Impact'>;
  };
}

export interface GreencoreOurTeamSection extends Struct.ComponentSchema {
  collectionName: 'components_greencore_our_team_sections';
  info: {
    description: 'Team members showcase';
    displayName: 'Our Team Section';
  };
  attributes: {
    TeamMembers: Schema.Attribute.Component<'greencore.team-member', true>;
    Title: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Our Team'>;
  };
}

export interface GreencorePerfectForSpaceSection
  extends Struct.ComponentSchema {
  collectionName: 'components_greencore_perfect_for_space_sections';
  info: {
    description: 'Perfect for every space applications';
    displayName: 'Perfect For Space Section';
  };
  attributes: {
    Description: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'Honeycomb doors are perfect for a variety of applications across industries'>;
    SpaceTypes: Schema.Attribute.Component<'greencore.space-type-card', true>;
    Title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Perfect for Every Space'>;
  };
}

export interface GreencoreProductCard extends Struct.ComponentSchema {
  collectionName: 'components_greencore_product_cards';
  info: {
    description: 'Individual product card with image and title';
    displayName: 'Product Card';
  };
  attributes: {
    Category: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Panels'>;
    Image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    Link: Schema.Attribute.Component<'components.link', false>;
    Title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Functional Acoustic Panels'>;
  };
}

export interface GreencoreProductCategory extends Struct.ComponentSchema {
  collectionName: 'components_greencore_product_categories';
  info: {
    description: 'Product category tab/filter';
    displayName: 'Product Category';
  };
  attributes: {
    FeaturedProducts: Schema.Attribute.Relation<
      'oneToMany',
      'api::product.product'
    >;
    Name: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Ecocel Doors'>;
  };
}

export interface GreencoreProductConfiguratorSection
  extends Struct.ComponentSchema {
  collectionName: 'components_greencore_product_configurator_sections';
  info: {
    description: 'Interactive product configuration section';
    displayName: 'Product Configurator Section';
  };
  attributes: {
    MainProductImage: Schema.Attribute.Media<'images'>;
    ProductOptions: Schema.Attribute.Component<
      'greencore.product-option',
      true
    >;
    Title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Experience these advantages live - configure your perfect solution'>;
  };
}

export interface GreencoreProductHero extends Struct.ComponentSchema {
  collectionName: 'components_greencore_product_heroes';
  info: {
    description: 'Hero section for product pages with all details';
    displayName: 'Product Hero';
  };
  attributes: {
    CoreMaterialLabel: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Core Material :'>;
    CoreMaterialOptions: Schema.Attribute.Component<
      'greencore.material-option',
      true
    >;
    CTAButtons: Schema.Attribute.Component<'components.link', true>;
    Description: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'We manufacture premium doors, panels and furniture using revolutionary honeycomb technology from 100% recycled materials. Stronger than wood, lighter than traditional materials, completely sustainable.'>;
    FinishingOptions: Schema.Attribute.Component<
      'greencore.finishing-option',
      true
    >;
    FinishingOptionsLabel: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Finishing Options:'>;
    MainImage: Schema.Attribute.Media<'images'>;
    ProductName: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'EcoCore Premium Door Panel'>;
    ThumbnailGallery: Schema.Attribute.Media<'images', true>;
  };
}

export interface GreencoreProductOption extends Struct.ComponentSchema {
  collectionName: 'components_greencore_product_options';
  info: {
    description: 'Product configuration option with variants';
    displayName: 'Product Option';
  };
  attributes: {
    MaterialLabel: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Material'>;
    Options: Schema.Attribute.Component<'greencore.option-item', true>;
    SurfaceFinishLabel: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Material'>;
  };
}

export interface GreencoreProductsGridSection extends Struct.ComponentSchema {
  collectionName: 'components_greencore_products_grid_sections';
  info: {
    description: 'Products grid with categories and filters';
    displayName: 'Products Grid Section';
  };
  attributes: {
    Categories: Schema.Attribute.Component<'greencore.product-category', true>;
    Description: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'Premium honeycomb furniture engineered for strength, sustainability, and savings.'>;
    Title: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Our Products'>;
  };
}

export interface GreencoreProductsHero extends Struct.ComponentSchema {
  collectionName: 'components_greencore_products_heroes';
  info: {
    description: 'Hero section for Products page';
    displayName: 'Products Hero';
  };
  attributes: {
    Description: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<"Premium honeycomb furniture engineered for India's toughest conditions. Fire-resistant for safety. Moisture-proof for monsoons. Termite-proof for longevity. 40% cheaper than wood. 3X stronger than MDF, and 100% guilt-free because zero trees were harmed.">;
    Title: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Products'>;
  };
}

export interface GreencoreProjectCategory extends Struct.ComponentSchema {
  collectionName: 'components_greencore_project_categories';
  info: {
    description: 'Category filter for projects with relation to projects';
    displayName: 'Project Category';
  };
  attributes: {
    CategoryName: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'All Projects'>;
    CategorySlug: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'all'>;
    Projects: Schema.Attribute.Relation<'oneToMany', 'api::project.project'>;
  };
}

export interface GreencoreProjectHero extends Struct.ComponentSchema {
  collectionName: 'components_greencore_project_heroes';
  info: {
    description: 'Hero section for project detail pages';
    displayName: 'Project Hero';
  };
  attributes: {
    BackgroundImage: Schema.Attribute.Media<'images'>;
    Description: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'Every project tells a story of precision, craftsmanship, and innovation. Discover how we transform architectural visions into reality through sustainable materials and expert execution.'>;
    Title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Project Details'>;
  };
}

export interface GreencoreProjectInfo extends Struct.ComponentSchema {
  collectionName: 'components_greencore_project_infos';
  info: {
    description: 'Project information card (Client, Type, Location, Year)';
    displayName: 'Project Info';
  };
  attributes: {
    Client: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Aldar Properties, Muscat'>;
    ClientTitle: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Aldar Properties, Muscat'>;
    Description: Schema.Attribute.RichText;
    Gallery: Schema.Attribute.Media<'images' | 'videos', true>;
    Location: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Muscat, Muscat, Oman'>;
    LocationTitle: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Muscat, Muscat, Oman'>;
    ProjectType: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Commercial, High-Rise'>;
    ProjectTypeTitle: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Commercial, High-Rise'>;
    Year: Schema.Attribute.String & Schema.Attribute.DefaultTo<'2023'>;
    YearTitle: Schema.Attribute.String & Schema.Attribute.DefaultTo<'2023'>;
  };
}

export interface GreencoreProjectStory extends Struct.ComponentSchema {
  collectionName: 'components_greencore_project_stories';
  info: {
    description: 'Project story/case study section';
    displayName: 'Project Story';
  };
  attributes: {
    Content: Schema.Attribute.RichText &
      Schema.Attribute.DefaultTo<"This landmark project required 200+ doors across residential towers and retail units. The challenge? Delivering fire-rated solutions that wouldn't compromise the architect's minimalist vision...">;
    Heading: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Building sustainable spaces through innovation, quality, and precision engineering'>;
  };
}

export interface GreencoreProjectsGridSection extends Struct.ComponentSchema {
  collectionName: 'components_greencore_projects_grid_sections';
  info: {
    description: 'All projects section with category filters';
    displayName: 'Projects Grid Section';
  };
  attributes: {
    Description: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'Browse through our portfolio of successfully delivered projects across various sectors.'>;
    RelatedProjects: Schema.Attribute.Relation<
      'oneToMany',
      'api::project.project'
    >;
    Title: Schema.Attribute.String & Schema.Attribute.DefaultTo<'All Projects'>;
  };
}

export interface GreencoreProjectsHero extends Struct.ComponentSchema {
  collectionName: 'components_greencore_projects_heroes';
  info: {
    description: 'Hero section for projects landing page';
    displayName: 'Projects Hero';
  };
  attributes: {
    BackgroundImage: Schema.Attribute.Media<'images'>;
    Description: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'Every project tells a story of precision, craftsmanship, and innovation. Discover how we transform architectural visions into reality through sustainable materials and expert execution.'>;
    Title: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Our Projects'>;
  };
}

export interface GreencoreRequestQuoteForm extends Struct.ComponentSchema {
  collectionName: 'components_greencore_request_quote_forms';
  info: {
    description: 'Form configuration for request a quote';
    displayName: 'Request Quote Form';
  };
  attributes: {
    EmailFieldLabel: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Your Contact Email'>;
    EmailFieldPlaceholder: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Your Contact Email'>;
    FormTitle: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Request a Quote'>;
    NameFieldLabel: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Full Name'>;
    NameFieldPlaceholder: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Full Name'>;
    PhoneFieldLabel: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Contact Number'>;
    PhoneFieldPlaceholder: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Contact Number'>;
    ProductFieldLabel: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'An Interested Product/Project*'>;
    ProductFieldPlaceholder: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Please Select'>;
    ProductOptions: Schema.Attribute.JSON &
      Schema.Attribute.DefaultTo<
        ['Door Panels', 'Acoustic Panels', 'Custom Project']
      >;
    RequirementsFieldLabel: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Product Requirements*'>;
    RequirementsFieldPlaceholder: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Please Select'>;
    SubmitButtonText: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Request Project Quote'>;
  };
}

export interface GreencoreRequestQuoteHero extends Struct.ComponentSchema {
  collectionName: 'components_greencore_request_quote_heroes';
  info: {
    description: 'Hero section for request a quote page';
    displayName: 'Request Quote Hero';
  };
  attributes: {
    Description: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'Get a customized quote for your honeycomb door panel. Fill out the form below with your requirements, and our team will respond with detailed pricing and technical specifications quickly.'>;
    Features: Schema.Attribute.Component<'greencore.feature-item', true>;
    Title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Request a Quote'>;
  };
}

export interface GreencoreRequestQuoteSection extends Struct.ComponentSchema {
  collectionName: 'components_greencore_request_quote_sections';
  info: {
    description: 'Request a quote section with form and contact info';
    displayName: 'Request Quote Section';
  };
  attributes: {
    ButtonText: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Request Project Quote'>;
    ContactInfo: Schema.Attribute.Component<'greencore.contact-info', false>;
    Description: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'Honeycomb doors are perfect for a variety of applications across industries'>;
    EmailFieldLabel: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Email'>;
    FormTitle: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Form'>;
    HighlightedText: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Quote'>;
    MessageFieldLabel: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Message'>;
    NameFieldLabel: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Name'>;
    Title: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Request a'>;
  };
}

export interface GreencoreReviewCard extends Struct.ComponentSchema {
  collectionName: 'components_greencore_review_cards';
  info: {
    description: 'Individual customer review';
    displayName: 'Review Card';
  };
  attributes: {
    Content: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'Great product! Highly recommended.'>;
    CustomerName: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'John Doe'>;
    CustomerPhoto: Schema.Attribute.Media<'images'>;
    CustomerTitle: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Homeowner'>;
    Date: Schema.Attribute.String & Schema.Attribute.DefaultTo<'2 months ago'>;
    Rating: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          max: 5;
          min: 1;
        },
        number
      > &
      Schema.Attribute.DefaultTo<5>;
  };
}

export interface GreencoreReviewsSection extends Struct.ComponentSchema {
  collectionName: 'components_greencore_reviews_sections';
  info: {
    description: 'Customer reviews and testimonials';
    displayName: 'Reviews Section';
  };
  attributes: {
    Reviews: Schema.Attribute.Component<'greencore.review-card', true>;
    Title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Customer Reviews'>;
  };
}

export interface GreencoreServiceItem extends Struct.ComponentSchema {
  collectionName: 'components_greencore_service_items';
  info: {
    description: 'Individual service offering with bullet point';
    displayName: 'Service Item';
  };
  attributes: {
    Text: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Custom door designs (non-standard sizes, special finishes)'>;
  };
}

export interface GreencoreSpaceTypeCard extends Struct.ComponentSchema {
  collectionName: 'components_greencore_space_type_cards';
  info: {
    description: 'Individual space type application card';
    displayName: 'Space Type Card';
  };
  attributes: {
    Description: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'Affordable and easy to install for bedrooms, bathrooms, and kitchens in apartments and villas.'>;
    Icon: Schema.Attribute.Media<'images'>;
    Title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Residential Homes'>;
  };
}

export interface GreencoreSpecificationRow extends Struct.ComponentSchema {
  collectionName: 'components_greencore_specification_rows';
  info: {
    description: 'Individual specification row in table';
    displayName: 'Specification Row';
  };
  attributes: {
    Label: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Core Material'>;
    Value: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Recycled Paper Honeycomb'>;
  };
}

export interface GreencoreStatItem extends Struct.ComponentSchema {
  collectionName: 'components_greencore_stat_items';
  info: {
    description: 'Individual statistic display card';
    displayName: 'Stat Item';
  };
  attributes: {
    Description: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'60% Lighter Than Wood'>;
    Label: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Lighter'>;
    Value: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'60%'>;
  };
}

export interface GreencoreTeamMember extends Struct.ComponentSchema {
  collectionName: 'components_greencore_team_members';
  info: {
    description: 'Individual team member card';
    displayName: 'Team Member';
  };
  attributes: {
    Name: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Ranbir Bhiggaria'>;
    Photo: Schema.Attribute.Media<'images'>;
    Position: Schema.Attribute.String & Schema.Attribute.DefaultTo<'CEO'>;
  };
}

export interface GreencoreTechnicalSpecificationsSection
  extends Struct.ComponentSchema {
  collectionName: 'components_greencore_technical_specifications_sections';
  info: {
    description: 'Technical specifications table';
    displayName: 'Technical Specifications Section';
  };
  attributes: {
    Description: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'Every detail engineered for maximum performance and sustainability. From recycled materials to certified safety standards - transparency you can trust.'>;
    DetailsLabel: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Technical specification'>;
    SpecificationLabel: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Technical specification'>;
    Specifications: Schema.Attribute.Component<
      'greencore.specification-row',
      true
    >;
    Title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Technical specification'>;
  };
}

export interface GreencoreTestimonialCard extends Struct.ComponentSchema {
  collectionName: 'components_greencore_testimonial_cards';
  info: {
    description: 'Individual testimonial with author info';
    displayName: 'Testimonial Card';
  };
  attributes: {
    AuthorImage: Schema.Attribute.Media<'images'>;
    AuthorName: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'John Doe'>;
    AuthorTitle: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'CEO, Company Name'>;
    Content: Schema.Attribute.RichText &
      Schema.Attribute.DefaultTo<'Customer testimonial text'>;
    Rating: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          max: 5;
          min: 1;
        },
        number
      > &
      Schema.Attribute.DefaultTo<5>;
  };
}

export interface GreencoreTestimonialsSection extends Struct.ComponentSchema {
  collectionName: 'components_greencore_testimonials_sections';
  info: {
    description: 'Customer testimonials section';
    displayName: 'Testimonials Section';
  };
  attributes: {
    Testimonials: Schema.Attribute.Component<
      'greencore.testimonial-card',
      true
    >;
    Title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'What Our Customers Are Saying'>;
  };
}

export interface GreencoreVideoSection extends Struct.ComponentSchema {
  collectionName: 'components_greencore_video_sections';
  info: {
    description: 'Video section with title and description';
    displayName: 'Video Section';
  };
  attributes: {
    CTAButton: Schema.Attribute.Component<'components.link', false>;
    Description: Schema.Attribute.RichText &
      Schema.Attribute.DefaultTo<'Ever wondered how recycled paper becomes stronger than oak? This 90-second factory tour reveals our secret: Watch honeycomb cells being crafted, tested to lifting loads, and transformed into doors that architects specify by name. No fancy editing - just raw manufacturing reality.'>;
    Title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Zero Trees, Maximum Strength'>;
    VideoThumbnail: Schema.Attribute.Media<'images'>;
    VideoUrl: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'https://www.youtube.com/watch?v=...'>;
  };
}

export interface GreencoreVisitFactorySection extends Struct.ComponentSchema {
  collectionName: 'components_greencore_visit_factory_sections';
  info: {
    description: 'Visit our factory section with map and address';
    displayName: 'Visit Factory Section';
  };
  attributes: {
    Address: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'Survey No. 317/1, Site No. 4,3, Near Tadmore Academy, Ramasandra Village, Jigni Hobli, Anekal Taluk, Bangalore- 562106'>;
    HighlightedText: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Factory'>;
    MapButtonLink: Schema.Attribute.String & Schema.Attribute.DefaultTo<'#'>;
    MapButtonText: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'View Large Map'>;
    MapImage: Schema.Attribute.Media<'images'>;
    Title: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Visit Our'>;
  };
}

export interface GreencoreWhatWeDoSection extends Struct.ComponentSchema {
  collectionName: 'components_greencore_what_we_do_sections';
  info: {
    description: 'What We Do section with highlighted text';
    displayName: 'What We Do Section';
  };
  attributes: {
    Description: Schema.Attribute.RichText &
      Schema.Attribute.DefaultTo<'We manufacture premium doors, panels and furniture using revolutionary honeycomb technology. Every product is crafted from 100% recycled materials - stronger than wood, lighter weight, and completely sustainable.'>;
    HighlightText: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'What We Do:'>;
    Image: Schema.Attribute.Media<'images'>;
    SecondaryDescription: Schema.Attribute.RichText &
      Schema.Attribute.DefaultTo<'The Make furniture stronger than wood without cutting trees. We did it: 500+ projects prove recycled paper creates stronger materials. Our mission: Make wood obsolete.'>;
    SecondaryHighlight: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'The crazy idea:'>;
    Title: Schema.Attribute.String & Schema.Attribute.DefaultTo<'What We Do ?'>;
  };
}

export interface GreencoreWhyChooseGreencoreSection
  extends Struct.ComponentSchema {
  collectionName: 'components_greencore_why_choose_greencore_sections';
  info: {
    description: 'Why choose GreenCore India benefits';
    displayName: 'Why Choose Greencore Section';
  };
  attributes: {
    Benefits: Schema.Attribute.Component<'greencore.benefit-item', true>;
    BenefitsLabel: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Why Choose Greencore India ?'>;
    Subtitle: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<"What other suppliers can't commit, we've built our reputation on these commitments.">;
    Title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Why Choose Greencore India ?'>;
  };
}

export interface GreencoreWhyChooseItem extends Struct.ComponentSchema {
  collectionName: 'components_greencore_why_choose_items';
  info: {
    description: 'Individual benefit item for why choose section';
    displayName: 'Why Choose Item';
  };
  attributes: {
    Icon: Schema.Attribute.String & Schema.Attribute.DefaultTo<'check'>;
    Text: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'16 Years in Business - Zero Bankruptcy'>;
  };
}

export interface GreencoreWhyChooseQuoteSection extends Struct.ComponentSchema {
  collectionName: 'components_greencore_why_choose_quote_sections';
  info: {
    description: 'Why choose section for quote page';
    displayName: 'Why Choose Quote Section';
  };
  attributes: {
    Benefits: Schema.Attribute.Component<'greencore.why-choose-item', true>;
    HighlightedText: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Greencore India'>;
    Title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Why Choose Greencore India ?'>;
  };
}

export interface GreencoreWhyChooseSection extends Struct.ComponentSchema {
  collectionName: 'components_greencore_why_choose_sections';
  info: {
    description: 'Section explaining why industry giants choose the product';
    displayName: 'Why Choose Section';
  };
  attributes: {
    Description: Schema.Attribute.RichText &
      Schema.Attribute.DefaultTo<'Engineered with advanced wood fibers and a next-gen bonding technology.'>;
    HighlightedTitle: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'About'>;
    HighlightNumber: Schema.Attribute.String & Schema.Attribute.DefaultTo<'3X'>;
    HighlightText: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'STRONGER'>;
    Title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Why Industry Giants Choose Green Core?'>;
  };
}

export interface GreencoreWhyHoneycombSection extends Struct.ComponentSchema {
  collectionName: 'components_greencore_why_honeycomb_sections';
  info: {
    description: 'Why Honeycomb doors explanation';
    displayName: 'Why Honeycomb Section';
  };
  attributes: {
    Description: Schema.Attribute.RichText &
      Schema.Attribute.DefaultTo<"Honeycomb doors for everything that's wrong with wood. They're lighter but stronger. Cheaper but longer-lasting.">;
    Image: Schema.Attribute.Media<'images'>;
    Title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Why Honeycomb Doors'>;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_seo_seos';
  info: {
    description: '';
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    canonical: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'https://greencoreindia.com/'>;
    description: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'Leading manufacturer of eco-friendly honeycomb doors, sustainable furniture, and building materials in Bangalore. 100% recycled paper products with high load-bearing capacity. Established since 2011.'>;
    keywords: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'greencore india, honeycomb doors, sustainable furniture, eco-friendly doors, paper honeycomb, bangalore, wall partitions, acoustic doors, green building materials'>;
    og_description: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'Leading manufacturer of eco-friendly honeycomb doors, sustainable furniture, and building materials in Bangalore. 100% recycled paper products with high load-bearing capacity.'>;
    og_image: Schema.Attribute.Media<'images'>;
    og_locale: Schema.Attribute.String & Schema.Attribute.DefaultTo<'en_US'>;
    og_sitename: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Greencore India'>;
    og_title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Greencore India | Eco-Friendly Honeycomb Doors & Sustainable Furniture'>;
    og_type: Schema.Attribute.String & Schema.Attribute.DefaultTo<'website'>;
    og_url: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'https://greencoreindia.com/'>;
    title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Greencore India | Eco-Friendly Honeycomb Doors & Sustainable Furniture'>;
    twitter_card: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'summary_large_image'>;
    twitter_creator: Schema.Attribute.String;
    twitter_description: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'Leading manufacturer of eco-friendly honeycomb doors, sustainable furniture, and building materials in Bangalore. 100% recycled paper products with high load-bearing capacity.'>;
    twitter_image: Schema.Attribute.Media<'images'>;
    twitter_site: Schema.Attribute.String;
    twitter_title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Greencore India | Eco-Friendly Honeycomb Doors & Sustainable Furniture'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'components.input-checkbox-field': ComponentsInputCheckboxField;
      'components.input-select-field': ComponentsInputSelectField;
      'components.input-text-field': ComponentsInputTextField;
      'components.link': ComponentsLink;
      'components.links-column': ComponentsLinksColumn;
      'components.select-option': ComponentsSelectOption;
      'components.socials': ComponentsSocials;
      'greencore.about-hero': GreencoreAboutHero;
      'greencore.advantage-card': GreencoreAdvantageCard;
      'greencore.advantages-section': GreencoreAdvantagesSection;
      'greencore.application-card': GreencoreApplicationCard;
      'greencore.applications-section': GreencoreApplicationsSection;
      'greencore.benefit-card': GreencoreBenefitCard;
      'greencore.benefit-item': GreencoreBenefitItem;
      'greencore.big-project-section': GreencoreBigProjectSection;
      'greencore.blog-author': GreencoreBlogAuthor;
      'greencore.blog-card': GreencoreBlogCard;
      'greencore.blog-hero': GreencoreBlogHero;
      'greencore.blog-landing-hero': GreencoreBlogLandingHero;
      'greencore.blog-section': GreencoreBlogSection;
      'greencore.blog-stats-section': GreencoreBlogStatsSection;
      'greencore.blogs-grid-section': GreencoreBlogsGridSection;
      'greencore.brand-logo': GreencoreBrandLogo;
      'greencore.brand-logo-section': GreencoreBrandLogoSection;
      'greencore.contact-form-section': GreencoreContactFormSection;
      'greencore.contact-hero': GreencoreContactHero;
      'greencore.contact-info': GreencoreContactInfo;
      'greencore.contact-info-section': GreencoreContactInfoSection;
      'greencore.contact-method-item': GreencoreContactMethodItem;
      'greencore.customer-review': GreencoreCustomerReview;
      'greencore.customer-reviews-quote-section': GreencoreCustomerReviewsQuoteSection;
      'greencore.error-404-content': GreencoreError404Content;
      'greencore.faq-item': GreencoreFaqItem;
      'greencore.faq-section': GreencoreFaqSection;
      'greencore.feature-card': GreencoreFeatureCard;
      'greencore.feature-item': GreencoreFeatureItem;
      'greencore.featured-blog-post': GreencoreFeaturedBlogPost;
      'greencore.featured-products-section': GreencoreFeaturedProductsSection;
      'greencore.finishing-option': GreencoreFinishingOption;
      'greencore.future-tab': GreencoreFutureTab;
      'greencore.green-future-section': GreencoreGreenFutureSection;
      'greencore.hero-section': GreencoreHeroSection;
      'greencore.impact-stat': GreencoreImpactStat;
      'greencore.key-benefits-section': GreencoreKeyBenefitsSection;
      'greencore.key-features-section': GreencoreKeyFeaturesSection;
      'greencore.load-capacity-cta': GreencoreLoadCapacityCta;
      'greencore.manufacturing-video-section': GreencoreManufacturingVideoSection;
      'greencore.material-option': GreencoreMaterialOption;
      'greencore.must-read-collections-section': GreencoreMustReadCollectionsSection;
      'greencore.option-item': GreencoreOptionItem;
      'greencore.our-impact-section': GreencoreOurImpactSection;
      'greencore.our-team-section': GreencoreOurTeamSection;
      'greencore.perfect-for-space-section': GreencorePerfectForSpaceSection;
      'greencore.product-card': GreencoreProductCard;
      'greencore.product-category': GreencoreProductCategory;
      'greencore.product-configurator-section': GreencoreProductConfiguratorSection;
      'greencore.product-hero': GreencoreProductHero;
      'greencore.product-option': GreencoreProductOption;
      'greencore.products-grid-section': GreencoreProductsGridSection;
      'greencore.products-hero': GreencoreProductsHero;
      'greencore.project-category': GreencoreProjectCategory;
      'greencore.project-hero': GreencoreProjectHero;
      'greencore.project-info': GreencoreProjectInfo;
      'greencore.project-story': GreencoreProjectStory;
      'greencore.projects-grid-section': GreencoreProjectsGridSection;
      'greencore.projects-hero': GreencoreProjectsHero;
      'greencore.request-quote-form': GreencoreRequestQuoteForm;
      'greencore.request-quote-hero': GreencoreRequestQuoteHero;
      'greencore.request-quote-section': GreencoreRequestQuoteSection;
      'greencore.review-card': GreencoreReviewCard;
      'greencore.reviews-section': GreencoreReviewsSection;
      'greencore.service-item': GreencoreServiceItem;
      'greencore.space-type-card': GreencoreSpaceTypeCard;
      'greencore.specification-row': GreencoreSpecificationRow;
      'greencore.stat-item': GreencoreStatItem;
      'greencore.team-member': GreencoreTeamMember;
      'greencore.technical-specifications-section': GreencoreTechnicalSpecificationsSection;
      'greencore.testimonial-card': GreencoreTestimonialCard;
      'greencore.testimonials-section': GreencoreTestimonialsSection;
      'greencore.video-section': GreencoreVideoSection;
      'greencore.visit-factory-section': GreencoreVisitFactorySection;
      'greencore.what-we-do-section': GreencoreWhatWeDoSection;
      'greencore.why-choose-greencore-section': GreencoreWhyChooseGreencoreSection;
      'greencore.why-choose-item': GreencoreWhyChooseItem;
      'greencore.why-choose-quote-section': GreencoreWhyChooseQuoteSection;
      'greencore.why-choose-section': GreencoreWhyChooseSection;
      'greencore.why-honeycomb-section': GreencoreWhyHoneycombSection;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
