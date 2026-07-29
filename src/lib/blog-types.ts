export interface TocHeading {
  id: string;
  text: string;
  level: 2 | 3;
}

export interface BlogPostMeta {
  slug: string;
  title: string;
  description: string;
  category: string;
  author: string;
  publishedAt: string;
  featuredImage: string;
  readingTime: number;
}

export interface BlogPost extends BlogPostMeta {
  content: string;
  headings: TocHeading[];
}
