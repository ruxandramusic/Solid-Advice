"use client";

import { useEffect, useState } from "react";

const recommendations = [
  {
    quote: "She is thoughtful in her approach, and asks the right questions to ensure accountability, measurement, and success.",
    author: "Kyle Brigham",
    detail: "LinkedIn recommendation",
  },
  {
    quote: "Ruxandra is a highly-talented marketing professional. She’s an absolute pleasure to work with and her data-driven approach to digital marketing makes her a strong asset to any organization.",
    author: "CJ Bacher",
    detail: "LinkedIn recommendation",
  },
  {
    quote: "Ruxandra is an elite digital marketing talent that’s data-driven and strategic across channels.",
    author: "Matt Gibbs",
    detail: "LinkedIn recommendation",
  },
  {
    quote: "Ruxandra is extremely driven and passionate; she always strives for excellence in delivery for her clients.",
    author: "Jenna Watson",
    detail: "LinkedIn recommendation",
  },
  {
    quote: "She always exceeded all expectations. Her strengths lay in being a data driven professional with a focus on cross channel marketing.",
    author: "Eugene Feygin",
    detail: "LinkedIn recommendation",
  },
  {
    quote: "Ruxandra is a highly motivated, detail oriented, and passionate marketing professional.",
    author: "Jason Witt",
    detail: "LinkedIn recommendation",
  },
  {
    quote: "Ruxandra is a well-trained and experienced marketing professional with strong project coordination, analytical, team and leadership skills.",
    author: "Zafar Iqbal",
    detail: "LinkedIn recommendation",
  },
  {
    quote: "She’s ambitious, smart, hard working and a great team player. She always gives 100% and it shows in her results.",
    author: "Dona Dinescu",
    detail: "LinkedIn recommendation",
  },
  {
    quote: "She has a strong ability to analyze complex data to help improve marketing effectiveness.",
    author: "Geoff Calhoun",
    detail: "LinkedIn recommendation",
  },
  {
    quote: "Her work was very efficient and effective. We were able to use this information to attack new markets and innovate new products.",
    author: "Todd Borchardt",
    detail: "LinkedIn recommendation",
  },
];

const numberLabel = (value: number) => String(value).padStart(2, "0");

export default function RecommendationCarousel() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % recommendations.length);
    }, 8500);

    return () => window.clearInterval(timer);
  }, []);

  const recommendation = recommendations[active];

  return (
    <section className="recommendations" id="work" aria-labelledby="recommendations-title">
      <div className="recommendations-heading">
        <p className="section-kicker">02 / Recommendations</p>
        <h2 id="recommendations-title">Good direction<br /><em>travels.</em></h2>
        <p>Kind words from people who have built alongside us.</p>
      </div>

      <div className="recommendation-stage" aria-roledescription="carousel" aria-label="Client recommendations">
        <p className="review-count">({numberLabel(active + 1)} / {numberLabel(recommendations.length)})</p>
        <blockquote>
          <p>“{recommendation.quote}”</p>
          <footer>
            <strong>{recommendation.author}</strong>
            <span>{recommendation.detail}</span>
          </footer>
        </blockquote>
        <div className="recommendation-controls">
          <button type="button" onClick={() => setActive((active - 1 + recommendations.length) % recommendations.length)} aria-label="Previous recommendation">Previous</button>
          <div className="recommendation-dots" role="group" aria-label="Choose a recommendation">
            {recommendations.map((item, index) => (
              <button
                key={item.author}
                type="button"
                className={index === active ? "is-active" : ""}
                aria-label={`Show recommendation ${index + 1}`}
                aria-pressed={index === active}
                onClick={() => setActive(index)}
              />
            ))}
          </div>
          <button type="button" onClick={() => setActive((active + 1) % recommendations.length)} aria-label="Next recommendation">Next</button>
        </div>
        <a className="review-link" href="https://www.linkedin.com/in/ruxandra-vidican/">More recommendations on LinkedIn <span aria-hidden="true" className="arrow" /></a>
      </div>
    </section>
  );
}
