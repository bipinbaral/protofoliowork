"use client";

import React, { useEffect, useState } from "react";
import { Send, CheckCircle2, MessageSquare } from "lucide-react";

interface Comment {
  id: string;
  name: string;
  email: string;
  message: string;
  createdAt: string;
}

interface CommentSectionProps {
  slug: string;
}

function getStorageKey(slug: string) {
  return `blog-comments-${slug}`;
}

export default function CommentSection({ slug }: CommentSectionProps) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    try {
      const stored = localStorage.getItem(getStorageKey(slug));
      if (stored) setComments(JSON.parse(stored));
    } catch {
      /* ignore */
    }
  }, [slug]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!name.trim() || !email.trim() || !message.trim()) {
      setError("Please fill in all fields.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    const newComment: Comment = {
      id: crypto.randomUUID(),
      name: name.trim(),
      email: email.trim(),
      message: message.trim(),
      createdAt: new Date().toISOString(),
    };

    const updated = [newComment, ...comments];
    setComments(updated);
    localStorage.setItem(getStorageKey(slug), JSON.stringify(updated));

    setName("");
    setEmail("");
    setMessage("");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section
      className="pt-12 border-t border-white/10"
      aria-labelledby="comments-heading"
    >
      <div className="flex items-center gap-3 mb-8">
        <MessageSquare className="w-5 h-5 text-white/50" aria-hidden />
        <h2
          id="comments-heading"
          className="font-satoshi text-2xl font-bold text-white"
        >
          Comments
          {comments.length > 0 && (
            <span className="ml-2 text-base font-normal text-white/40">
              ({comments.length})
            </span>
          )}
        </h2>
      </div>

      <form
        onSubmit={handleSubmit}
        className="mb-10 p-6 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col gap-4"
        noValidate
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="comment-name"
              className="block text-xs font-mono uppercase tracking-widest text-white/50 mb-2"
            >
              Name
            </label>
            <input
              id="comment-name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              autoComplete="name"
              className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-white/25 focus:ring-1 focus:ring-white/10 transition-all"
              placeholder="Your name"
            />
          </div>
          <div>
            <label
              htmlFor="comment-email"
              className="block text-xs font-mono uppercase tracking-widest text-white/50 mb-2"
            >
              Email
            </label>
            <input
              id="comment-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="email"
              className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-white/25 focus:ring-1 focus:ring-white/10 transition-all"
              placeholder="you@example.com"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="comment-message"
            className="block text-xs font-mono uppercase tracking-widest text-white/50 mb-2"
          >
            Comment
          </label>
          <textarea
            id="comment-message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            rows={4}
            className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-white/25 focus:ring-1 focus:ring-white/10 transition-all resize-y min-h-[120px]"
            placeholder="Share your thoughts..."
          />
        </div>

        {error && (
          <p className="text-sm text-red-400" role="alert">
            {error}
          </p>
        )}

        {submitted && (
          <div className="flex items-center gap-2 text-sm text-emerald-400" role="status">
            <CheckCircle2 className="w-4 h-4 shrink-0" />
            Comment posted successfully!
          </div>
        )}

        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 self-start px-6 py-3 rounded-full bg-white text-black font-medium text-sm hover:bg-white/90 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
        >
          Post Comment
          <Send className="w-4 h-4" />
        </button>
      </form>

      {comments.length > 0 ? (
        <ul className="flex flex-col gap-4">
          {comments.map((comment) => (
            <li
              key={comment.id}
              className="p-5 rounded-2xl bg-white/[0.02] border border-white/10"
            >
              <div className="flex items-center justify-between gap-4 mb-2">
                <span className="font-satoshi font-semibold text-white text-sm">
                  {comment.name}
                </span>
                <time
                  dateTime={comment.createdAt}
                  className="text-[10px] font-mono text-white/40"
                >
                  {new Date(comment.createdAt).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </time>
              </div>
              <p className="text-white/70 text-sm leading-relaxed">
                {comment.message}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-white/40 text-sm">
          No comments yet. Be the first to share your thoughts.
        </p>
      )}
    </section>
  );
}
