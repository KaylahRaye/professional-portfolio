import { Component, h } from '@stencil/core';
import { profileContent } from '../../data/profile-content';

@Component({
  tag: 'hero-section',
  styleUrl: 'hero-section.css',
})
export class HeroSection {
  render() {
    const { hero } = profileContent;

    return (
      <section class="hero" id="top" aria-labelledby="hero-title">
        <div class="container hero-layout">
          <div class="hero-copy">
            <p class="eyebrow">{hero.eyebrow}</p>
            <p class="hero-name">{hero.name}</p>
            <h1 id="hero-title">{hero.title}</h1>
            <p class="positioning">{hero.positioning}</p>
            <p class="hero-introduction">{hero.introduction}</p>
            <div class="actions">
              <a class="button button-primary" href={hero.primaryAction.href}>
                {hero.primaryAction.label}
              </a>
              <a class="button button-secondary" href={hero.secondaryAction.href}>
                {hero.secondaryAction.label}
              </a>
            </div>
          </div>
          <div class="hero-panels">
            <aside class="focus-card" aria-label={hero.focusLabel}>
              <p class="panel-title">{hero.focusLabel}</p>
              <ul>
                {hero.focusAreas.map(area => (
                  <li>{area}</li>
                ))}
              </ul>
            </aside>
            <aside class="lens-card" aria-label={hero.lensLabel}>
              <p class="panel-title">{hero.lensLabel}</p>
              <ul>
                {hero.lensAreas.map(area => (
                  <li>{area}</li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </section>
    );
  }
}
