import React from "react";
import "./Services.css";

/**
 * EDIT THESE ARRAYS with your real topics and offerings.
 */
const TOPICS = [
  {
    id: "top-01",
    title: "Leading Through Uncertainty",
    description:
      "Frameworks for making confident decisions when the data is incomplete and the stakes are high.",
    audience: "Executives",
  },
  {
    id: "top-02",
    title: "Building High-Trust Teams",
    description:
      "How psychological safety and clear ownership turn good teams into teams that compound.",
    audience: "Managers",
  },
  {
    id: "top-03",
    title: "The Future of Human-Centered AI",
    description:
      "What changes for leaders, teams, and customers as AI moves from tool to teammate.",
    audience: "Executives",
  },
  {
    id: "top-04",
    title: "Storytelling for Impact",
    description:
      "The narrative structures that make technical ideas land with non-technical rooms.",
    audience: "Founders",
  },
  {
    id: "top-05",
    title: "Resilience & Sustainable Performance",
    description:
      "Practical systems for high output without burnout, built from the inside of a fast-growing company.",
    audience: "Teams",
  },
  {
    id: "top-06",
    title: "From Founder to Leader",
    description:
      "The internal shift required as your job changes from doing the work to building the people who do it.",
    audience: "Founders",
  },
];

const OFFERINGS = [
  {
    id: "off-01",
    format: "Keynote",
    duration: "45–60 min",
    groupSize: "Up to 5,000",
    delivery: "In-person or virtual",
    description:
      "A high-energy main-stage talk built around one clear idea your audience can act on immediately.",
  },
  {
    id: "off-02",
    format: "Workshop",
    duration: "Half-day or full-day",
    groupSize: "20–200",
    delivery: "In-person preferred",
    description:
      "Hands-on, interactive session with exercises, small-group work, and a takeaway framework teams can reuse.",
  },
  {
    id: "off-03",
    format: "Panel / Fireside Chat",
    duration: "30–45 min",
    groupSize: "Any",
    delivery: "In-person or virtual",
    description:
      "Moderated conversation format — great for conferences, podcasts, and internal leadership series.",
  },
  {
    id: "off-04",
    format: "Executive Advisory",
    duration: "Ongoing, monthly",
    groupSize: "1:1 or small group",
    delivery: "Virtual",
    description:
      "Recurring sessions with founders and senior leaders on the specific challenges they're facing right now.",
  },
];

export default function Services() {
  return (
    <div className="services-page">
      <header className="services-header">
        <p className="services-eyebrow">Speaking Topics &amp; Offerings</p>
        <h1 className="services-title">
          Talks and formats built to move a room.
        </h1>
        <p className="services-subtitle">
          Every session is adapted to your audience and goals&mdash;these are
          the starting points. Don&rsquo;t see quite the right fit? Reach out
          and we&rsquo;ll build it together.
        </p>
      </header>

      {/* ---------- TOPICS ---------- */}
      <section className="services-section" aria-label="Speaking topics">
        <h2 className="section-label">Speaking Topics</h2>

        <ul className="topic-grid">
          {TOPICS.map((topic) => (
            <li key={topic.id} className="topic-card">
              <span className="topic-audience">{topic.audience}</span>
              <h3 className="topic-title">{topic.title}</h3>
              <p className="topic-description">{topic.description}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* ---------- OFFERINGS ---------- */}
      <section className="services-section" aria-label="Offerings">
        <h2 className="section-label">Offerings</h2>

        <ul className="offering-list">
          {OFFERINGS.map((offering) => (
            <li key={offering.id} className="offering-card">
              <div className="offering-format">
                <h3 className="offering-format__title">{offering.format}</h3>
                <p className="offering-description">{offering.description}</p>
              </div>

              <dl className="offering-specs">
                <div className="offering-spec">
                  <dt>Duration</dt>
                  <dd>{offering.duration}</dd>
                </div>
                <div className="offering-spec">
                  <dt>Group size</dt>
                  <dd>{offering.groupSize}</dd>
                </div>
                <div className="offering-spec">
                  <dt>Delivery</dt>
                  <dd>{offering.delivery}</dd>
                </div>
              </dl>
            </li>
          ))}
        </ul>
      </section>

      <div className="services-cta">
        <p className="services-cta__text">
          Book for speaking &mdash;let&rsquo;s talk about your event.
        </p>
        <a className="services-cta__link" href="/contact">
          Check availability <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
    </div>
  );
}




