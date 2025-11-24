import React from "react";
import "../pages/Blog.css";
import { Link } from "react-router-dom";
import Services from "../components/Services";
import Footer from "../components/footer";

// Import all images explicitly (safer than dynamic require)
import blog1 from "../assets/images/blog_1.jpeg";
import blog2 from "../assets/images/blog_2.jpeg";
import blog3 from "../assets/images/blog_3.jpeg";
import blog4 from "../assets/images/blog_4.jpeg";
import blog5 from "../assets/images/blog_5.jpeg";

import insta1 from "../assets/images/insta1.jpg";
import insta2 from "../assets/images/insta2.jpg";
import insta3 from "../assets/images/insta3.jpg";
import insta4 from "../assets/images/insta4.jpg";
import insta5 from "../assets/images/insta5.jpg";
import insta6 from "../assets/images/insta6.jpg";

import r1 from "../assets/images/r1.jpeg";
import r2 from "../assets/images/r2.jpeg";
import r3 from "../assets/images/r3.jpeg";
import r4 from "../assets/images/r5.jpeg";

const posts = [
  { img: blog1, day: "15", month: "Jan", title: "Google inks pact for new 35-storey office" },
  { img: blog2, day: "15", month: "Jan", title: "Google inks pact for new 35-storey office" },
  { img: blog3, day: "15", month: "Jan", title: "Google inks pact for new 35-storey office" },
  { img: blog4, day: "15", month: "Jan", title: "Google inks pact for new 35-storey office" },
  { img: blog5, day: "15", month: "Jan", title: "Google inks pact for new 35-storey office" },
];

const categories = [
  "Restaurant food(37)",
  "Travel news(10)",
  "Modern technology(03)",
  "Product(11)",
  "Inspiration(21)",
  "Health Care (21)09",
];

const recentPosts = [
  { img: insta1, title: "From life was you fish...", date: "January 12, 2019" },
  { img: insta2, title: "The Amazing Hubble", date: "02 Hours ago" },
  { img: insta3, title: "Astronomy Or Astrology", date: "03 Hours ago" },
  { img: insta4, title: "Asteroids Telescope", date: "01 Hours ago" },
];

export default function Blog() {
  return (
    <>
      {/* BREADCRUMB */}
      <div className="breadcrumb-section">
        <div className="breadcrumb">
          <Link to="/">HOME</Link> <span>&gt;</span> <span>BLOG</span>
        </div>
      </div>

      {/* Main Container with left posts + right sidebar */}
      <main className="bh-main">
        <div className="bh-container">

          {/* LEFT: Posts */}
          <section className="bh-posts">
            {posts.map((p, i) => (
              <article className="post-card" key={i}>
                <div className="post-img">
                  <img src={p.img} alt={p.title} />
                  <div className="date-badge">
                    <strong>{p.day}</strong>
                    <span>{p.month}</span>
                  </div>
                </div>

                <div className="post-body">
                  <h3 className="post-title">{p.title}</h3>
                  <p className="post-excerpt">
                    That dominion stars lights dominion divide years for fourth have don't stars is
                    that he earth it first without heaven in place seed it second morning saying.
                  </p>

                  <div className="post-meta">
                    <span>🕮 Travel, Lifestyle</span>
                    <span> | </span>
                    <span>03 Comments</span>
                  </div>
                </div>
              </article>
            ))}

            {/* Pagination (visual) */}
            <div className="pagination">
              <button className="page-btn">&lt;</button>
              <button className="page-btn active">1</button>
              <button className="page-btn">2</button>
              <button className="page-btn">&gt;</button>
            </div>
          </section>

          {/* RIGHT: Sidebar */}
          <aside className="bh-sidebar">
            {/* Search */}
            <div className="sidebar-block search-block">
              <div className="search-row">
                <input type="text" placeholder="Search Keyword" />
                <button className="search-btn">🔍</button>
              </div>
              <button className="search-big">SEARCH</button>
            </div>


            {/* CATEGORY */}
            <div className="sidebar-block category-block">
              <h3>CATEGORY</h3>
              <ul>
                <li><a href="#">Resaurant food (37)</a></li>
                <li><a href="#">Travel news (10)</a></li>
                <li><a href="#">Modern technology (03)</a></li>
                <li><a href="#">Product (11)</a></li>
                <li><a href="#">Inspiration (21)</a></li>
                <li><a href="#">Health Care (21)09</a></li>
              </ul>
            </div>


            {/* RECENT POSTS  */}
            <div className="sidebar-block recent-post">
              <h4 className="sidebar-title">Recent Post</h4>

              <div className="rp-item">
                <img src={r1} alt="" />
                <div className="rp-text">
                  <a href="#">From life was you fish...</a>
                  <p>January 12, 2019</p>
                </div>
              </div>

              <div className="rp-item">
                <img src={r2} alt="" />
                <div className="rp-text">
                  <a href="#">The Amazing Hubble</a>
                  <p>02 Hours ago</p>
                </div>
              </div>

              <div className="rp-item">
                <img src={r3} alt="" />
                <div className="rp-text">
                  <a href="#">Astronomy or Astrology</a>
                  <p>03 Hours ago</p>
                </div>
              </div>

              <div className="rp-item">
                <img src={r4} alt="" />
                <div className="rp-text">
                  <a href="#">Asteroids telescope</a>
                  <p>01 Hours ago</p>
                </div>
              </div>
            </div>


            {/* 🔖 TAG CLOUDS */}
            <div className="sidebar-block tag-clouds">
              <h3 className="sidebar-title">Tag Clouds</h3>

              <div className="tags">
                <span>project</span>
                <span>love</span>
                <span>technology</span>
                <span>travel</span>
                <span>lifestyle</span>
                <span>design</span>
                <span>development</span>
              </div>
            </div>

            {/* Instagram Feeds */}
            <div className="sidebar-block">
              <h4>Instagram Feeds</h4>
              <div className="instagram-grid">
                {[insta1, insta2, insta3, insta4, insta5, insta6].map((im, i) => (
                  <img src={im} alt={`insta-${i}`} key={i} />
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="sidebar-block">
              <h4>Newsletter</h4>
              <div className="newsletter">
                <input type="email" placeholder="Enter email" />
                <button className="subscribe">SUBSCRIBE</button>
              </div>
            </div>
          </aside>

        </div>
      </main>

      {/* Services + Footer */}
      <Services />
      <Footer />
    </>
  );
}