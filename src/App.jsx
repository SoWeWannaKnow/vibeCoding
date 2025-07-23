import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BrowserRouter as Router, Route, Routes, Link, useParams } from "react-router-dom";

const posts = [
  {
    id: "1",
    title: "為什麼我開始寫部落格",
    summary: "分享我寫部落格的初衷，以及對寫作的看法。",
    content: "這是一篇關於開始寫部落格的文章...",
  },
  {
    id: "2",
    title: "前端學習資源整理",
    summary: "推薦幾個我覺得實用的前端學習資源網站。",
    content: "這篇文章整理了幾個前端學習資源，包括...",
  },
];

const Home = () => (
  <div className="p-6 space-y-6">
    <h1 className="text-3xl font-bold text-red-900">歡迎來到我的部落格</h1>
    <p className="text-gray-600">這裡是我寫下技術筆記、學習心得與生活隨筆的地方。</p>
  </div>
);

const Blog = () => (
  <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
    {posts.map((post) => (
      <Card key={post.id} className="rounded-2xl shadow-sm hover:shadow-md transition">
        <CardContent className="p-4">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">{post.title}</h2>
          <p className="text-gray-500 mb-4">{post.summary}</p>
          <Link to={`/post/${post.id}`}>
            <Button variant="outline" className="rounded-full">閱讀更多</Button>
          </Link>
        </CardContent>
      </Card>
    ))}
  </div>
);

const Post = () => {
  const { id } = useParams();
  const post = posts.find((p) => p.id === id);

  if (!post) return <p className="p-6">找不到文章</p>;

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold text-gray-700">{post.title}</h1>
      <p className="text-gray-600 whitespace-pre-line">{post.content}</p>
    </div>
  );
};

const NavBar = () => (
  <nav className="bg-white p-4 shadow rounded-b-2xl flex justify-between items-center">
    <div className="text-xl font-bold text-teal-600">Xiang Blog</div>
    <div className="space-x-4">
      <Link to="/" className="text-gray-600 hover:text-teal-600">首頁</Link>
      <Link to="/blog" className="text-gray-600 hover:text-teal-600">文章列表</Link>
    </div>
  </nav>
);

const App = () => (
  <Router>
    <div className="max-w-4xl mx-auto bg-teal-50 min-h-screen rounded-2xl overflow-hidden shadow-md">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/post/:id" element={<Post />} />
      </Routes>
    </div>
  </Router>
);

export default App;