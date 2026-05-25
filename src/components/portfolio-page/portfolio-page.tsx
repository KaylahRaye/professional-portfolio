import { Component, h } from '@stencil/core';

@Component({
  tag: 'portfolio-page',
  styleUrl: 'portfolio-page.css',
})
export class PortfolioPage {
  render() {
    return (
      <div class="page">
        <site-header></site-header>
        <main>
          <hero-section></hero-section>
          <about-section></about-section>
          <what-i-do-section></what-i-do-section>
          <experience-section></experience-section>
          <featured-projects-section></featured-projects-section>
          <writing-section></writing-section>
          <contact-section></contact-section>
        </main>
      </div>
    );
  }
}
