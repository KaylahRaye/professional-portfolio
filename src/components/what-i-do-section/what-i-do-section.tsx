import { Component, h } from '@stencil/core';
import { profileContent } from '../../data/profile-content';

@Component({
  tag: 'what-i-do-section',
  styleUrl: 'what-i-do-section.css',
})
export class WhatIDoSection {
  render() {
    const { whatIDo } = profileContent;

    return (
      <section class="section what-i-do" id="work" aria-labelledby="what-i-do-title">
        <div class="container">
          <div class="section-heading">
            <p class="section-label">{whatIDo.label}</p>
            <h2 id="what-i-do-title">{whatIDo.heading}</h2>
            <p>{whatIDo.introduction}</p>
          </div>
          <div class="service-grid">
            {whatIDo.services.map(service => (
              <article class="card service-card">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    );
  }
}
