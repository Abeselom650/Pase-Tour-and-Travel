import React, { useState } from 'react';
import { BLOG_POSTS } from '../data';
import { BlogPost } from '../types';
import { User, Calendar, BookOpen, ArrowRight, X } from 'lucide-react';

export default function Blog() {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  return (
    <section id="blog" className="py-24 bg-white border-t border-black/5 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16">
          <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase inline-flex items-center gap-1.5">
            <BookOpen className="w-3.5 h-3.5" />
            Travel Journal
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold tracking-tight text-black">
            Insights & Travel Blog
          </h2>
          <p className="text-sm md:text-base text-black/60 max-w-xl mx-auto font-light">
            Stay educated, prepared, and inspired. Read expert travel guides, cultural deep-dives, and seasonal recommendations.
          </p>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full mt-4" />
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {BLOG_POSTS.map((post) => (
            <div
              key={post.id}
              id={`blog-card-${post.id}`}
              className="group bg-white rounded-2xl border border-black/5 overflow-hidden shadow-none hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300 flex flex-col md:flex-row"
            >
              {/* Feature Image */}
              <div className="relative w-full md:w-5/12 aspect-[4/3] md:aspect-auto min-h-[190px] bg-white overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90"
                />
                <span className="absolute top-4 left-4 bg-primary text-black text-[9px] font-mono tracking-widest font-bold px-3 py-1 rounded-sm uppercase">
                  {post.category}
                </span>
              </div>

              {/* Information Post */}
              <div className="p-6 md:p-7 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2.5">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-black/50 font-mono">
                    <span className="flex items-center gap-1 text-[11px]">
                      <User className="w-3 h-3 text-black/40" />
                      {post.author}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-white/10 hidden sm:inline" />
                    <span className="flex items-center gap-1 text-[11px]">
                      <Calendar className="w-3 h-3 text-black/40" />
                      {post.date}
                    </span>
                  </div>

                  <h3 className="font-serif text-base sm:text-lg font-bold text-black group-hover:text-primary transition-colors leading-tight line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-xs text-black/70 leading-relaxed font-light line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-2 border-t border-black/5 flex items-center justify-between">
                  <span className="text-[10px] font-semibold text-black/40 uppercase tracking-wider">
                    5 Min Read
                  </span>
                  <button
                    id={`blog-read-${post.id}`}
                    onClick={() => setSelectedPost(post)}
                    className="inline-flex items-center gap-1 text-xs font-bold text-primary hover:text-primary-hover group/btn cursor-pointer uppercase tracking-wider"
                  >
                    Read Article
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Blog Article Detail Modal Lightbox */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 bg-white/90 backdrop-blur-lg flex items-center justify-center p-4">
          <div className="absolute inset-0" onClick={() => setSelectedPost(null)} />
          
          <div className="relative bg-white w-full max-w-2xl rounded-2xl overflow-hidden shadow-2xl border border-black/10 z-10 animate-fade-in flex flex-col max-h-[85vh]">
            {/* Header image */}
            <div className="relative h-56 sm:h-64 bg-white">
              <img
                src={selectedPost.image}
                alt={selectedPost.title}
                className="w-full h-full object-cover filter brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent" />
              <button
                onClick={() => setSelectedPost(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-sm bg-white/95 hover:bg-black/5 text-black flex items-center justify-center border border-black/10 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-6 left-6 right-6 text-black space-y-1">
                <span className="inline-block bg-primary text-[9px] font-mono font-bold tracking-widest px-2.5 py-0.5 rounded-sm uppercase text-black mb-1.5">
                  {selectedPost.category}
                </span>
                <h3 className="font-serif text-lg sm:text-xl font-bold leading-tight">
                  {selectedPost.title}
                </h3>
              </div>
            </div>

            {/* Content Drawer Scrollable */}
            <div className="p-6 sm:p-8 space-y-6 overflow-y-auto">
              {/* Meta tags under heading */}
              <div className="flex items-center justify-between text-xs font-mono text-black/50 border-b border-black/10 playbook-subtle pb-4">
                <span>By Abeselom Beyene Yosef</span>
                <span>{selectedPost.date}</span>
              </div>

              {/* Main content body */}
              <article className="prose prose-sm text-black/80 space-y-4 font-light">
                <p className="font-medium text-black/94 text-sm italic border-l-2 border-primary pl-3">
                  {selectedPost.excerpt}
                </p>
                <p className="text-sm leading-relaxed">
                  {selectedPost.content}
                </p>
                <p className="text-sm leading-relaxed text-black/70">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam elementum, nisl vel vehicula accumsan, massa urna elementum dui, ut lobortis sapien ligula non massa. Fusce id nulla eget mi condimentum placerat id non velit. Vestibulum tristique sapien magna, sit amet eleifend mauris volutpat cursus. Curabitur sed lectus finibus, semper dolor ac, scelerisque leo.
                </p>
                <p className="text-sm leading-relaxed text-black/70">
                  We invite you to reach out directly to <strong>Passe tour and travel</strong> to schedule and coordinate an authentic encounter like this yourself.
                </p>
              </article>

              {/* Simple Close buttons footer */}
              <div className="pt-4 border-t border-black/10 flex justify-end gap-3">
                <button
                  id="blog-modal-close"
                  onClick={() => setSelectedPost(null)}
                  className="px-6 py-2.5 bg-primary hover:bg-primary-hover text-black text-xs font-bold uppercase tracking-tighter rounded-sm cursor-pointer"
                >
                  Done Reading
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}





