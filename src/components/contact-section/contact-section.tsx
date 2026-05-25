import { Component, h } from '@stencil/core';
import { profileContent } from '../../data/profile-content';

@Component({
  tag: 'contact-section',
  styleUrl: 'contact-section.css',
})
export class ContactSection {
  render() {
    const { contact } = profileContent;

    return (
      <footer class="contact" id="contact" aria-labelledby="contact-title">
        <div class="container">
          <div class="contact-panel">
            <p class="section-label">{contact.label}</p>
            <h2 id="contact-title">{contact.heading}</h2>
            <p class="contact-description">{contact.description}</p>
            <div class="contact-links">
              {contact.links.map(link => (
                <a
                  key={link.href}
                  class={`button button-${link.variant}`}
                  href={link.href}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noopener noreferrer' : undefined}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          <p class="footer-line">{contact.footer}</p>
        </div>
      </footer>
    );
  }
}
