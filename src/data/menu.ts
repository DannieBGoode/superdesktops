export interface Menu {
    label: string;
    href: string;
    external?: boolean;
    badge?: string;
  }
  
const menu: Menu[] = [
    {
        label: "Home",
        href: "/",
    },
    {
        label: "About",
        href: "/about",
    },
    {
        label: "Contact",
        href: "/contact",
    },
    {
        label: "Archive",
        href: "/archive",
    },
    {
        label: "Github",
        href: "https://github.com/web3templates/stablo-astro",
        external: true,
        badge: "new",
    },
    {
        label: "Download",
        href: "https://web3templates.com/templates/stablo-minimal-blog-website-template",
        external: true,
    },
];

export default menu;