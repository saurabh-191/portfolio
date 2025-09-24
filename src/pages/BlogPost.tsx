import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Tag, User, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { blogPosts } from '@/data/blogData';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useTranslation();
  
  const post = blogPosts.find(p => p.slug === slug);
  
  // If post not found, redirect to blog
  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const relatedPosts = blogPosts
    .filter(p => 
      p.id !== post.id && 
      (p.category === post.category || 
       p.tags.some(tag => post.tags.includes(tag)))
    )
    .slice(0, 3);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const shareArticle = async () => {
    const shareData = {
      title: post.title,
      text: post.excerpt,
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
    }
  };

  // Update SEO meta tags
  useEffect(() => {
    document.title = `${post.seo.metaTitle} - Saurabh Singh Portfolio`;
    
    // Meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', post.seo.metaDescription);
    }

    // Meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', post.seo.keywords.join(', '));
    } else {
      const newMetaKeywords = document.createElement('meta');
      newMetaKeywords.name = 'keywords';
      newMetaKeywords.content = post.seo.keywords.join(', ');
      document.head.appendChild(newMetaKeywords);
    }

    // Open Graph tags
    const updateOrCreateMeta = (property: string, content: string) => {
      let metaTag = document.querySelector(`meta[property="${property}"]`);
      if (metaTag) {
        metaTag.setAttribute('content', content);
      } else {
        metaTag = document.createElement('meta');
        metaTag.setAttribute('property', property);
        metaTag.setAttribute('content', content);
        document.head.appendChild(metaTag);
      }
    };

    updateOrCreateMeta('og:title', post.seo.metaTitle);
    updateOrCreateMeta('og:description', post.seo.metaDescription);
    updateOrCreateMeta('og:type', 'article');
    updateOrCreateMeta('og:url', window.location.href);
    updateOrCreateMeta('article:author', post.author);
    updateOrCreateMeta('article:published_time', post.publishedAt);
    updateOrCreateMeta('article:section', post.category);

    // Twitter Card tags
    updateOrCreateMeta('twitter:card', 'summary_large_image');
    updateOrCreateMeta('twitter:title', post.seo.metaTitle);
    updateOrCreateMeta('twitter:description', post.seo.metaDescription);

    // Cleanup function to reset title
    return () => {
      document.title = 'Saurabh Singh Portfolio';
    };
  }, [post]);

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Back to Blog */}
        <div className="mb-8">
          <Link to="/blog">
            <Button variant="ghost" size="sm" className="group">
              <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              {t('blog.backToBlog')}
            </Button>
          </Link>
        </div>

        {/* Article Header */}
        <header className="mb-8">
          <div className="mb-4">
            <Badge variant="secondary" className="mb-2">
              {post.category}
            </Badge>
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <User className="h-3 w-3" />
                {post.author}
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="h-3 w-3" />
                {t('blog.publishedOn')} {formatDate(post.publishedAt)}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                {t('blog.readingTime', { minutes: post.readingTime })}
              </div>
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
            {post.title}
          </h1>

          <p className="text-xl text-muted-foreground leading-relaxed mb-6">
            {post.excerpt}
          </p>

          <div className="flex items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="outline" className="text-sm">
                  <Tag className="h-3 w-3 mr-1" />
                  {tag}
                </Badge>
              ))}
            </div>

            <Button variant="outline" size="sm" onClick={shareArticle} className="gap-2">
              <Share2 className="h-4 w-4" />
              {t('blog.shareArticle')}
            </Button>
          </div>
        </header>

        <Separator className="mb-8" />

        {/* Article Content */}
        <article className="prose prose-lg max-w-none mb-12">
          <div 
            className="article-content"
            dangerouslySetInnerHTML={{ 
              __html: post.content.replace(/\n/g, '<br>').replace(/```([^`]+)```/g, '<pre><code>$1</code></pre>') 
            }}
            style={{
              lineHeight: '1.7',
              fontSize: '1.1rem'
            }}
          />
        </article>

        <Separator className="mb-8" />

        {/* Article Footer */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <p className="text-sm text-muted-foreground mb-1">{t('blog.categories')}</p>
            <Badge variant="secondary">{post.category}</Badge>
          </div>
          
          <div className="text-right">
            <p className="text-sm text-muted-foreground mb-1">{t('blog.tags')}</p>
            <div className="flex flex-wrap gap-1 justify-end">
              {post.tags.slice(0, 3).map((tag) => (
                <Badge key={tag} variant="outline" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold mb-6">{t('blog.relatedPosts')}</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.map((relatedPost) => (
                <Card key={relatedPost.id} className="project-card overflow-hidden">
                  <div className="p-6">
                    <Badge variant="secondary" className="mb-2">
                      {relatedPost.category}
                    </Badge>
                    
                    <Link to={`/blog/${relatedPost.slug}`}>
                      <h3 className="text-lg font-semibold mb-2 hover:text-primary transition-colors line-clamp-2">
                        {relatedPost.title}
                      </h3>
                    </Link>
                    
                    <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                      {relatedPost.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {t('blog.readingTime', { minutes: relatedPost.readingTime })}
                      </div>
                      <Link to={`/blog/${relatedPost.slug}`}>
                        <Button variant="ghost" size="sm">
                          {t('blog.readMore')}
                        </Button>
                      </Link>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default BlogPost;