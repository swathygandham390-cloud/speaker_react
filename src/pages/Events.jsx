import React, { useMemo } from "react";
import "./Events.css";

/**
 * EDIT THIS ARRAY with your real speaking engagements.
 * date must be a valid JS date string (ISO recommended: "2026-11-04").
 * The component automatically sorts events into "Upcoming" (spotlighted,
 * above the NOW marker) and "Past" (dimmed, below it) by comparing each
 * event's date to today — no manual status flag needed.
 */
const EVENTS = [
  {
    id: "evt-01",
    date: "2026-11-04",
    title: "The Future of Human-Centered AI",
    type: "Keynote",
    venue: "Global Leadership Summit",
    location: "Austin, TX",
    link: "#",
  },
  {
    id: "evt-02",
    date: "2026-09-22",
    title: "Designing for Trust at Scale",
    type: "Panel",
    venue: "ProductCon",
    location: "San Francisco, CA",
    link: "#",
  },
  {
    id: "evt-03",
    date: "2026-08-30",
    title: "Storytelling for Technical Founders",
    type: "Workshop",
    venue: "Founders Forum",
    location: "New York, NY",
    link: "#",
  },
  {
    id: "evt-04",
    date: "2026-05-14",
    title: "Leading Through Uncertainty",
    type: "Keynote",
    venue: "Women in Business Conference",
    location: "Chicago, IL",
    link: "#",
  },
  {
    id: "evt-05",
    date: "2026-03-02",
    title: "Building Resilient Teams",
    type: "Keynote",
    venue: "TEDx Riverside",
    location: "Riverside, CA",
    link: "#",
  },
  {
    id: "evt-06",
    date: "2025-11-19",
    title: "The Art of the Pivot",
    type: "Fireside Chat",
    venue: "Startup Grind Global",
    location: "Palo Alto, CA",
    link: "#",
  },
];

const MONTHS = [
  "JAN", "FEB", "MAR", "APR", "MAY", "JUN",
  "JUL", "AUG", "SEP", "OCT", "NOV", "DEC",
];

function formatEventDate(dateStr) {
  const d = new Date(dateStr + "T00:00:00");
  return {
    month: MONTHS[d.getMonth()],
    day: String(d.getDate()).padStart(2, "0"),
    year: d.getFullYear(),
    full: d.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    }),
  };
}

export default function Events() {
  const { upcoming, past } = useMemo(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const sorted = [...EVENTS].sort(
      (a, b) => new Date(a.date) - new Date(b.date)
    );

    return {
      upcoming: sorted.filter((e) => new Date(e.date + "T00:00:00") >= today),
      past: sorted
        .filter((e) => new Date(e.date + "T00:00:00") < today)
        .reverse(), // most recent past event first
    };
  }, []);

  return (
    <div className="events-page">
      <header className="events-header">
        <p className="events-eyebrow">Speaking Engagements</p>
        <h1 className="events-title">
          Where I&rsquo;m taking the stage&mdash;and where I&rsquo;ve been.
        </h1>
        <p className="events-subtitle">
          Keynotes, panels, and workshops on leadership, resilience, and
          building things that last. Available for select engagements in
          2026.
        </p>
      </header>

      <div className="events-rail">
        {/* ---------- UPCOMING ---------- */}
        <section className="events-section" aria-label="Upcoming events">
          <h2 className="section-label section-label--upcoming">
            Upcoming
          </h2>

          {upcoming.length === 0 ? (
            <p className="empty-state">
              No engagements scheduled at the moment&mdash;check back soon.
            </p>
          ) : (
            <ul className="event-list event-list--upcoming">
              {upcoming.map((event) => {
                const d = formatEventDate(event.date);
                return (
                  <li key={event.id} className="event-card">
                    <div className="event-date">
                      <span className="event-date__month">{d.month}</span>
                      <span className="event-date__day">{d.day}</span>
                      <span className="event-date__year">{d.year}</span>
                    </div>

                    <div className="event-body">
                      <span className="event-type">{event.type}</span>
                      <h3 className="event-title">{event.title}</h3>
                      <p className="event-meta">
                        {event.venue} &middot; {event.location}
                      </p>
                    </div>

                    
                      <a className="event-link"
                      a href={event.link}
                      aria-label={`Details for ${event.title}`}
                    >
                      Details <span aria-hidden="true">&rarr;</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          )}
        </section>

        {/* ---------- NOW MARKER ---------- */}
        <div className="now-marker" role="separator" aria-label="Today">
          <span className="now-marker__dot" />
          <span className="now-marker__label">Now</span>
        </div>

        {/* ---------- PAST ---------- */}
        <section className="events-section" aria-label="Past events">
          <h2 className="section-label section-label--past">Past</h2>

          {past.length === 0 ? (
            <p className="empty-state">No past engagements yet.</p>
          ) : (
            <ul className="event-list event-list--past">
              {past.map((event) => {
                const d = formatEventDate(event.date);
                return (
                  <li key={event.id} className="event-row">
                    <span className="event-row__date">
                      {d.month} {d.day}, {d.year}
                    </span>
                    <span className="event-row__title">{event.title}</span>
                    <span className="event-row__venue">
                      {event.venue} &middot; {event.location}
                    </span>
                    <span className="event-row__stamp">Delivered</span>
                  </li>
                );
              })}
            </ul>
          )}
        </section>
      </div>
    </div>
  );
}



