"use strict";(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[678],{8771:function(e,t,n){var l=n(7294),a=n(1883);t.Z=()=>{var e;const t=null===(e=(0,a.useStaticQuery)("3257411868").site.siteMetadata)||void 0===e?void 0:e.author;return l.createElement("div",{className:"bio"},(null==t?void 0:t.name)&&l.createElement("p",null,"Written by ",l.createElement("strong",null,t.name)," ",(null==t?void 0:t.summary)||null))}},8678:function(e,t,n){var l=n(7294),a=n(1883);t.Z=e=>{let{location:t,title:n,children:r}=e;const i="/"===t.pathname;let o;return o=i?l.createElement("h1",{className:"main-heading"},l.createElement(a.Link,{to:"/"},n)):l.createElement(a.Link,{className:"header-link-home",to:"/"},n),l.createElement("div",{className:"global-wrapper","data-is-root-path":i},l.createElement("header",{className:"global-header"},o),l.createElement("main",null,r),l.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",l.createElement("a",{href:"https://www.gatsbyjs.com"},"Gatsby")))}},9357:function(e,t,n){var l=n(7294),a=n(1883);t.Z=e=>{var t,n,r;let{description:i,title:o,children:c}=e;const{site:m}=(0,a.useStaticQuery)("2841359383"),s=i||m.siteMetadata.description,u=null===(t=m.siteMetadata)||void 0===t?void 0:t.title;return l.createElement(l.Fragment,null,l.createElement("title",null,u?o+" | "+u:o),l.createElement("meta",{name:"description",content:s}),l.createElement("meta",{property:"og:title",content:o}),l.createElement("meta",{property:"og:description",content:s}),l.createElement("meta",{property:"og:type",content:"website"}),l.createElement("meta",{name:"twitter:card",content:"summary"}),l.createElement("meta",{name:"twitter:creator",content:(null===(n=m.siteMetadata)||void 0===n||null===(r=n.social)||void 0===r?void 0:r.twitter)||""}),l.createElement("meta",{name:"twitter:title",content:o}),l.createElement("meta",{name:"twitter:description",content:s}),c)}},6558:function(e,t,n){n.r(t),n.d(t,{Head:function(){return c}});var l=n(7294),a=n(1883),r=n(8771),i=n(8678),o=n(9357);t.default=e=>{var t;let{data:n,location:o}=e;const c=(null===(t=n.site.siteMetadata)||void 0===t?void 0:t.title)||"Title",m=n.allMarkdownRemark.nodes;return 0===m.length?l.createElement(i.Z,{location:o,title:c},l.createElement(r.Z,null),l.createElement("p",null,'No blog posts found. Add markdown posts to "content/blog" (or the directory you specified for the "gatsby-source-filesystem" plugin in gatsby-config.js).')):l.createElement(i.Z,{location:o,title:c},l.createElement(r.Z,null),l.createElement("ol",{style:{listStyle:"none"}},m.map((e=>{const t=e.frontmatter.title||e.fields.slug;return l.createElement("li",{key:e.fields.slug},l.createElement("article",{className:"post-list-item",itemScope:!0,itemType:"http://schema.org/Article"},l.createElement("header",null,l.createElement("h2",null,l.createElement(a.Link,{to:e.fields.slug,itemProp:"url"},l.createElement("span",{itemProp:"headline"},t))),l.createElement("small",null,e.frontmatter.date)),l.createElement("section",null,l.createElement("p",{dangerouslySetInnerHTML:{__html:e.frontmatter.description||e.excerpt},itemProp:"description"}))))}))))};const c=()=>l.createElement(o.Z,{title:"All posts"})}}]);
//# sourceMappingURL=component---src-pages-index-js-a7c37254eb4c244ca20c.js.map