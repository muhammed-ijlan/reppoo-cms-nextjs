import { IconCopy, IconLayoutDashboard, IconLogin } from "@tabler/icons-react";

const Menuitems = [
  {
    navlabel: true,
    subheader: "HOME",
  },

  {
    id: 1,
    title: "Dashboard",
    icon: IconLayoutDashboard,
    href: "/dashboard",
  },
  {
    navlabel: true,
    subheader: "CMS",
  },
  {
    id: 2,
    title: "Hero section",
    icon: IconCopy,
    href: "/dashboard/hero",
  },
  {
    id: 3,
    title: "About section",
    icon: IconCopy,
    href: "/dashboard/about",
  },
  {
    id: 4,
    title: "Testimonials section ",
    icon: IconCopy,
    href: "/dashboard/testimonial",
  },
  {
    id: 5,
    title: "Faq section ",
    icon: IconCopy,
    href: "/dashboard/faq",
  },
  {
    navlabel: true,
    subheader: "AUTH",
  },
  {
    id: 6,
    title: "Login",
    icon: IconLogin,
    href: "/login",
  },
];

export default Menuitems;
