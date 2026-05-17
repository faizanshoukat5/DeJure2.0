import React, { useState } from "react";
import { Helmet } from "react-helmet";
import people from "../data/people.json";

const getInitials = (name = "") => {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (!parts.length) return "DJ";
  const first = parts[0][0] || "";
  const last = parts.length > 1 ? parts[parts.length - 1][0] : parts[0][1] || "";
  return `${first}${last}`.toUpperCase();
};

const StylizedPlaceholder = ({ name }) => (
  <div
    className="team-member-placeholder stylized-placeholder"
    role="img"
    aria-label={`${name || "DeJure team member"} portrait placeholder`}
  >
    <span>{getInitials(name)}</span>
  </div>
);

const ImageWithPlaceholder = ({ src, alt, name, className = "" }) => {
  const [loaded, setLoaded] = useState(false);
  const [errored, setErrored] = useState(false);
  const shouldUseStylized = !src || src.includes("LOGO2") || errored;

  return (
    <div className={`team-member-image-wrapper ${className}`}>
      {shouldUseStylized ? (
        <StylizedPlaceholder name={name || alt} />
      ) : (
        <>
          {!loaded && <div className="team-member-placeholder" aria-hidden="true" />}
          <img
            src={src}
            alt={alt}
            className="team-member-image"
            style={{ display: loaded ? "block" : "none" }}
            onLoad={() => {
              setLoaded(true);
              setErrored(false);
            }}
            onError={() => setErrored(true)}
          />
        </>
      )}
    </div>
  );
};

const LinkedInIcon = ({ className = "" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.6 0 4.266 2.369 4.266 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM6.986 20.452H3.688V9h3.298v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.727v20.545C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.273V1.727C24 .774 23.2 0 22.222 0z" />
  </svg>
);

const stats = [
  { value: "40+", label: "Years guiding corporate, tax & litigation" },
  { value: "2 cities", label: "Integrated Islamabad & Lahore teams" },
  { value: "11+ forums", label: "From tribunals to Supreme Court" },
  { value: "24/7", label: "Research desk backing every mandate" },
];

const cultureHighlights = [
  "One-team approach between advisory and disputes",
  "Live matter rooms that surface research for every lawyer",
  "Partner-led mentorship for each practice pod",
  "Modern knowledge base spanning regulations & precedents",
];

const heroImage = "/assets/team-lawyers-banner.jpg";

const truncateText = (text = "", limit = 240) => {
  if (!text) return "";
  return text.length > limit ? `${text.slice(0, limit).trim()}…` : text;
};

const OurTeam = () => {
  const [expandedBio, setExpandedBio] = useState(null);
  const [expandedLeadership, setExpandedLeadership] = useState({});
  const leadership = people.slice(0, 3);
  const broaderTeam = people.slice(3);

  const toggleBio = (name) => {
    setExpandedBio(expandedBio === name ? null : name);
  };

  const toggleLeadership = (name) => {
    setExpandedLeadership((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  return (
    <div className="page our-team">
      <Helmet>
        <title>Our Team | DeJure Advocates & Legal Consultants</title>
        <meta
          name="description"
          content="Explore the multidisciplinary lawyers leading DeJure Advocates & Legal Consultants across corporate, tax, restructuring, and dispute mandates."
        />
      </Helmet>

      <section className="team-hero">
        <div
          className="team-hero-backdrop"
          aria-hidden="true"
          style={{
            backgroundImage: `linear-gradient(130deg, rgba(17, 9, 6, 0.9), rgba(17, 9, 6, 0.55)), url(${heroImage})`,
          }}
        ></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-xl-6">
              <div className="team-hero-panel">
                <p className="team-hero-eyebrow text-uppercase mb-3">DeJure Advocates & Legal Consultants</p>
                <h1 className="team-hero-title">A litigation-first firm with boardroom instincts</h1>
                <p className="team-hero-copy">
                  We pair Supreme Court advocates, barristers, and sector specialists to defend your position at every
                  forum. Each matter is supported by a research desk, playbooks, and collaboration rituals so tactical
                  decisions stay aligned with your long-term objectives.
                </p>
                <div className="team-hero-cta">
                  <a href="/contact" className="btn btn-light me-3">
                    Book a strategy call
                  </a>
                </div>
                <div className="team-hero-meta">
                  <span>Trusted by listed companies, banks, and public bodies</span>
                  <span>ISO-like knowledge systems • Confidentiality by design</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="team-stats">
        <div className="container">
          <div className="row row-cols-2 row-cols-md-4 g-3 g-lg-4">
            {stats.map((item) => (
              <div className="col" key={item.label}>
                <div className="team-stat-card">
                  <span className="value">{item.value}</span>
                  <span className="label">{item.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="team-leadership">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow text-uppercase mb-2">Leadership Council</p>
              <h2>Hands-on partners leading every mandate</h2>
            </div>
            <p className="heading-copy">
              Our partners deploy cross-functional teams that blend courtroom experience with sector knowledge,
              ensuring strategic continuity from advisory to enforcement.
            </p>
          </div>
          <div className="row g-4">
            {leadership.map((leader) => {
              const shouldClampBio = leader.bio && leader.bio.length > 260;
              const allowToggle = !!leader.fullBio;
              const isExpanded = !!expandedLeadership[leader.name];
              return (
                <div className="col-12" key={leader.name}>
                  <div className="leadership-feature-card">
                    <ImageWithPlaceholder
                      src={leader.image}
                      alt={leader.name}
                      name={leader.name}
                      className="leadership-feature-image"
                    />
                    <div className="leadership-feature-body">
                      <div className="role-label">{leader.title}</div>
                      <h3>{leader.name}</h3>
                      {leader.positions && leader.positions.length > 0 && (
                        <ul className="team-positions">
                          {leader.positions.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      )}
                      <p className="leadership-snippet mb-3">
                        {shouldClampBio && !isExpanded ? truncateText(leader.bio, 260) : leader.bio}
                      </p>
                      {leader.fullBio && isExpanded && <p className="text-muted">{leader.fullBio}</p>}
                      {(allowToggle || leader.linkedinUrl) && (
                        <div className="team-card-actions">
                          {allowToggle && (
                            <button className="text-link" onClick={() => toggleLeadership(leader.name)}>
                              {isExpanded ? "Show less" : "Read more"}
                            </button>
                          )}
                          {leader.linkedinUrl && (
                            <a
                              className="text-link team-profile-link"
                              href={leader.linkedinUrl}
                              target="_blank"
                              rel="noreferrer"
                              aria-label={`Visit ${leader.name} on LinkedIn`}
                            >
                              <LinkedInIcon className="team-linkedin-icon" />
                              LinkedIn
                            </a>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="team-grid-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow text-uppercase mb-2">Specialists & Counsel</p>
              <h2>Multidisciplinary bench strength</h2>
            </div>
            <p className="heading-copy">
              Tax litigators, restructuring experts, and commercial advisors collaborate inside pods so knowledge flows
              freely and filings remain precise.
            </p>
          </div>
          <div className="row g-4">
            {broaderTeam.map((member) => (
              <div className="col-lg-6" key={member.name}>
                <div className={`team-grid-card ${expandedBio === member.name ? "expanded" : ""}`}>
                  <ImageWithPlaceholder
                    src={member.image}
                    alt={member.name}
                    name={member.name}
                    className="grid-image"
                  />
                  <div className="team-grid-card-body">
                    <div className="role-label">{member.title}</div>
                    <h4>{member.name}</h4>
                    {member.positions && member.positions.length > 0 && (
                      <ul className="team-positions">
                        {member.positions.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    )}
                    <p>{member.bio}</p>
                    {member.fullBio && expandedBio === member.name && (
                      <p className="text-muted small mb-0">{member.fullBio}</p>
                    )}
                    {(member.fullBio || member.linkedinUrl) && (
                      <div className="team-card-actions">
                        {member.fullBio && (
                          <button className="text-link" onClick={() => toggleBio(member.name)}>
                            {expandedBio === member.name ? "Show less" : "Read more"}
                          </button>
                        )}
                        {member.linkedinUrl && (
                          <a
                            className="text-link team-profile-link"
                            href={member.linkedinUrl}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={`Visit ${member.name} on LinkedIn`}
                          >
                            <LinkedInIcon className="team-linkedin-icon" />
                            LinkedIn
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="team-culture">
        <div className="container">
          <div className="team-culture-card">
            <div>
              <p className="eyebrow text-uppercase mb-2">Culture & Delivery</p>
              <h3>We operate like an internal legal department</h3>
              <p className="mb-4">
                Engagements are run on sprints, with digital dashboards and accessible partners. That structure keeps
                multijurisdictional filings synchronized while allowing clients direct access to the lawyers doing the
                thinking.
              </p>
              <ul className="culture-list">
                {cultureHighlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="team-culture-cta">
              <h4>Need a rapid-response team?</h4>
              <p className="mb-4">Email info@dejure.pk or request a call below and we will assemble the right mix of lawyers within hours.</p>
              <a href="/contact" className="btn btn-primary">
                Meet the team →
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurTeam;
