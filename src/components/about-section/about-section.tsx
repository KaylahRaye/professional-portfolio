import { Component, h } from '@stencil/core';
import { profileContent } from '../../data/profile-content';

@Component({
  tag: 'about-section',
  styleUrl: 'about-section.css',
})
export class AboutSection {
  render() {
    const { about } = profileContent;

    return (
      <section class="section about" id="about" aria-labelledby="about-title">
        <div class="container about-layout">
          <div>
            <p class="section-label">{about.label}</p>
            <h2 id="about-title">{about.heading}</h2>
          </div>
          <div class="about-copy">
            {about.paragraphs.map(paragraph => (
              <p>{paragraph}</p>
            ))}
            <blockquote>{about.statement}</blockquote>
          </div>
        </div>
      </section>
    );
  }
}
