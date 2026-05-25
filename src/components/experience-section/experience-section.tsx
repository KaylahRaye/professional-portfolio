import { Component, h } from '@stencil/core';
import { profileContent } from '../../data/profile-content';

@Component({
  tag: 'experience-section',
  styleUrl: 'experience-section.css',
})
export class ExperienceSection {
  render() {
    const { experience } = profileContent;

    return (
      <section class="section experience" aria-labelledby="experience-title">
        <div class="container">
          <div class="section-heading">
            <p class="section-label">{experience.label}</p>
            <h2 id="experience-title">{experience.heading}</h2>
            <p>{experience.introduction}</p>
          </div>
          <div class="experience-grid">
            {experience.highlights.map(highlight => (
              <article class="experience-card" key={highlight.title}>
                <p class="detail">{highlight.detail}</p>
                <h3>{highlight.title}</h3>
                <p>{highlight.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    );
  }
}
