import { Component, h } from '@stencil/core';
import { profileContent } from '../../data/profile-content';

@Component({
  tag: 'featured-projects-section',
  styleUrl: 'featured-projects-section.css',
})
export class FeaturedProjectsSection {
  render() {
    const { projects } = profileContent;

    return (
      <section class="section projects" id="projects" aria-labelledby="projects-title">
        <div class="container">
          <div class="section-heading">
            <p class="section-label">{projects.label}</p>
            <h2 id="projects-title">{projects.heading}</h2>
            <p>{projects.introduction}</p>
          </div>
          <div class="project-grid">
            {projects.items.map(project => (
              <article class="card project-card">
                <p class="category">{project.category}</p>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                {project.link && (
                  <a class="text-link" href={project.link.href}>
                    {project.link.label}
                  </a>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>
    );
  }
}
