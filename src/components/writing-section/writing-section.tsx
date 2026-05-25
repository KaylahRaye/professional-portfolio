import { Component, h } from '@stencil/core';
import { profileContent } from '../../data/profile-content';

@Component({
  tag: 'writing-section',
  styleUrl: 'writing-section.css',
})
export class WritingSection {
  render() {
    const { writing } = profileContent;

    return (
      <section class="section writing" id="writing" aria-labelledby="writing-title">
        <div class="container writing-card">
          <div>
            <p class="section-label">{writing.label}</p>
            <h2 id="writing-title">{writing.heading}</h2>
            <p class="publication">{writing.publication}</p>
          </div>
          <div class="writing-copy">
            <p>{writing.description}</p>
            <p class="status">{writing.status}</p>
            {writing.link && (
              <a
                class="button button-secondary"
                href={writing.link.href}
                target={writing.link.external ? '_blank' : undefined}
                rel={writing.link.external ? 'noreferrer' : undefined}
              >
                {writing.link.label}
              </a>
            )}
          </div>
        </div>
      </section>
    );
  }
}
