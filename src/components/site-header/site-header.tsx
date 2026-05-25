import { Component, h } from '@stencil/core';
import { profileContent } from '../../data/profile-content';

@Component({
  tag: 'site-header',
  styleUrl: 'site-header.css',
})
export class SiteHeader {
  render() {
    const { brand } = profileContent;

    return (
      <header class="site-header">
        <div class="container header-layout">
          <a class="brand" href="#top" aria-label={brand.homeLabel}>
            <span class="brand-name">{brand.name}</span>
            <span class="brand-role">{brand.descriptor}</span>
          </a>
          <nav aria-label={brand.navigationLabel}>
            <ul>
              {brand.navigation.map(item => (
                <li key={item.href}>
                  <a class={item.highlighted ? 'nav-link nav-contact' : 'nav-link'} href={item.href}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}
