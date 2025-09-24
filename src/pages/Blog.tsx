import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, Calendar, Clock, Tag, ArrowRight } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { blogPosts, blogCategories } from '@/data/blogData';
import { BlogFilters } from '@/types/blog';
import { useTranslation } from 'react-i18next';

const Blog = () => {
  const { t } = useTranslation();
  const [filters, setFilters] = useState<BlogFilters>({});

  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesSearch = !filters.search || 
        post.title.toLowerCase().includes(filters.search.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(filters.search.toLowerCase()) ||
        post.content.toLowerCase().includes(filters.search.toLowerCase());

      const matchesCategory = !filters.category || 
        post.category === filters.category;

      const matchesTags = !filters.tags?.length || 
        filters.tags.some(tag => post.tags.includes(tag));

      return matchesSearch && matchesCategory && matchesTags;
    });
  }, [filters]);

  const handleSearchChange = (value: string) => {
    setFilters(prev => ({ ...prev, search: value }));
  };

  const handleCategoryChange = (value: string) => {
    setFilters(prev => ({ 
      ...prev, 
      category: value === 'all' ? undefined : value 
    }));
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            {t('blog.title')}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('blog.subtitle')}
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                type="text"
                placeholder={t('blog.searchPlaceholder')}
                value={filters.search || ''}
                onChange={(e) => handleSearchChange(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Category Filter */}
            <div className="w-full sm:w-48">
              <Select value={filters.category || 'all'} onValueChange={handleCategoryChange}>
                <SelectTrigger>
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">{t('blog.allCategories')}</SelectItem>
                  {blogCategories.map((category) => (
                    <SelectItem key={category.id} value={category.name}>
                      {category.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Featured Posts */}
        {!filters.search && !filters.category && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Featured Articles</h2>
            <div className="grid gap-6">
              {blogPosts
                .filter(post => post.featured)
                .slice(0, 2)
                .map((post) => (
                  <Card key={post.id} className="project-card overflow-hidden">
                    <div className="p-6 md:p-8">
                      <div className="flex flex-col md:flex-row gap-6">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-3">
                            <Badge variant="secondary">{post.category}</Badge>
                            <div className="flex items-center text-sm text-muted-foreground gap-4">
                              <div className="flex items-center gap-1">
                                <Calendar className="h-3 w-3" />
                                {formatDate(post.publishedAt)}
                              </div>
                              <div className="flex items-center gap-1">
                                <Clock className="h-3 w-3" />
                                {t('blog.readingTime', { minutes: post.readingTime })}
                              </div>
                            </div>
                          </div>
                          
                          <Link to={`/blog/${post.slug}`}>
                            <h3 className="text-2xl font-bold mb-3 hover:text-primary transition-colors">
                              {post.title}
                            </h3>
                          </Link>
                          
                          <p className="text-muted-foreground mb-4 leading-relaxed">
                            {post.excerpt}
                          </p>
                          
                          <div className="flex items-center justify-between">
                            <div className="flex flex-wrap gap-1">
                              {post.tags.slice(0, 3).map((tag) => (
                                <Badge key={tag} variant="outline" className="text-xs">
                                  <Tag className="h-2 w-2 mr-1" />
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                            
                            <Link to={`/blog/${post.slug}`}>
                              <Button variant="ghost" size="sm" className="group">
                                {t('blog.readMore')}
                                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                              </Button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
            </div>
          </div>
        )}

        {/* All Posts */}
        <div>
          {!filters.search && !filters.category && (
            <h2 className="text-2xl font-bold mb-6">All Articles</h2>
          )}
          
          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                {t('blog.noResults')}
              </p>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredPosts.map((post) => (
                <Card key={post.id} className="project-card overflow-hidden h-full">
                  <div className="p-6 flex flex-col h-full">
                    <div className="mb-3">
                      <Badge variant="secondary" className="mb-2">
                        {post.category}
                      </Badge>
                      <div className="flex items-center text-sm text-muted-foreground gap-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {formatDate(post.publishedAt)}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {t('blog.readingTime', { minutes: post.readingTime })}
                        </div>
                      </div>
                    </div>
                    
                    <Link to={`/blog/${post.slug}`} className="flex-1">
                      <h3 className="text-xl font-bold mb-3 hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                    </Link>
                    
                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed line-clamp-3 flex-1">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex flex-wrap gap-1 mb-4">
                      {post.tags.slice(0, 2).map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          <Tag className="h-2 w-2 mr-1" />
                          {tag}
                        </Badge>
                      ))}
                      {post.tags.length > 2 && (
                        <Badge variant="outline" className="text-xs">
                          +{post.tags.length - 2}
                        </Badge>
                      )}
                    </div>
                    
                    <Link to={`/blog/${post.slug}`}>
                      <Button variant="ghost" size="sm" className="group w-full justify-between">
                        {t('blog.readMore')}
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Blog;