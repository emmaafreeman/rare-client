import React from "react";
import { Route } from "react-router-dom";
import { CategoryList } from "./categories/CategoryList";
import { CategoryCreate } from "./categories/CategoryCreate";
import { CategoryEditForm } from "./categories/CategoryEditForm";
import { PostList } from "./posts/PostList";
import { PostDetail } from "./posts/PostDetail";
import { PostForm } from "./posts/PostForm";
import { TagList } from "./tags/TagList";
import { TagForm } from "./tags/TagForm";
import { TagDetail } from "./tags/TagDetail";
import { MyPosts } from "./posts/MyPosts";
import { ProfileProvider } from "./auth/AuthProvider";
import { Profile } from "./auth/Profile";
import { RareUserProvider } from "./rareusers/RareUserProvider";
import { RareUserList } from "./rareusers/RareUserList";

export const ApplicationViews = () => {
  return (
    <>
      <main
        style={{
          margin: "5rem 2rem",
          lineHeight: "1.75rem",
        }}
      >
        <ProfileProvider>
          <Route path="/myprofile">
            <Profile />
          </Route>

          <Route path="/myposts">
            <MyPosts />
          </Route>

          <Route path="/posts/:postId(\d+)">
            <PostDetail />
          </Route>

          <RareUserProvider>
            <Route path="/rareusers">
              <RareUserList />
            </Route>
          </RareUserProvider>
        </ProfileProvider>

        <Route exact path="/categories">
          <CategoryList />
        </Route>

        <Route path="/categories/create">
          <CategoryCreate />
        </Route>

        <Route path="/categories/edit/:categoryId(\d+)">
          <CategoryEditForm />
        </Route>

        <Route exact path="/">
          <PostList />
        </Route>

        <Route exact path="/posts/create">
          <PostForm />
        </Route>

        <Route path="/posts/edit/:postId(\d+)">
          <PostForm />
        </Route>

        <Route exact path="/posts">
          <PostList />
        </Route>

        <Route exact path="/tags">
          <TagList />
        </Route>
        <Route path="/tags/create">
          <TagDetail />
        </Route>
        <Route path="/tags/edit/:tagId(\d+)">
          <TagForm />
        </Route>
      </main>
    </>
  );
};
