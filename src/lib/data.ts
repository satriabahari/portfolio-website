import webrpldark from "../../public/images/web-rpl.png"
import webrpllight from "../../public/images/web-rpl-light.png"
import javascript from "../../public/certificates/Belajar_dasar_pemrograman_javascript.png"
import tailwind from "../../public/certificates/Membuat_Halaman_Website_Portofolio_Menggunakan_Tailwind_CSS.jpg"
import software from "../../public/certificates/Memulai_dasar_pemrograman_untuk_menjadi_pengembang_software.png"
import github from "../../public/icons/github.svg"
import instagram from "../../public/icons/instagram.svg"
import gmail from "../../public/icons/gmail.svg"
import linkedin from "../../public/icons/linkedin.svg"
import tiktok from "../../public/icons/tiktok.svg"

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Certificates",
    hash: "#certificates",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Sosmeds",
    hash: "#sosmeds",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const skills = [
  {
    name: "HTML",
    icon: "/icons/html5.svg",
  },
  {
    name: "CSS",
    icon: "/icons/css3.svg",
  },
  {
    name: "Javascript",
    icon: "/icons/javascript.svg",
  },
  {
    name: "NodeJS",
    icon: "/icons/nodejs.svg",
  },
  {
    name: "MySQL",
    icon: "/icons/mysql.svg",
  },
  {
    name: "MongoDB",
    icon: "/icons/mongodb.svg",
  },
  {
    name: "Bootstrap",
    icon: "/icons/bootstrap.svg",
  },
  {
    name: "Tailwind",
    icon: "/icons/tailwindcss.svg",
  },
  {
    name: "ReactJS",
    icon: "/icons/react.svg",
  },
  {
    name: "NextJS",
    icon: "/icons/next-js.svg",
  },
] as const;

export const certificates = [
  {
    title: "Javascript",
    description: "Belajar dasar pemrograman javascript",
    imageUrl: javascript
  },
  {
    title: "Tailwind",
    description: "Membuat Halaman Website Portofolio Menggunakan Tailwind CSS",
    imageUrl: tailwind
  },
  {
    title: "Pengembang Software",
    description: "dasar pemrograman untuk menjadi pengembang software",
    imageUrl: software
  },
]

export const projects = [
  {
    title: "Website Matkul RPL",
    description:
      "I worked as a full-stack developer on this website project. Users can give public feedback to me.",
    tags: ["Typescript", "React", "Next.js", "Tailwind", "Framer"],
    imageUrl: webrpldark,
  },
  {
    title: "Website Matkul RPL",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["Typescript", "React", "Next.js", "Tailwind", "Framer"],
    imageUrl: webrpllight,
  },
] as const;

export const sosmeds = [
  {
    title: "Github",
    icon: github,
    link: "https://github.com/satriabahari",
  },
  {
    title: "Instagram",
    icon: instagram,
    link: "https://www.instagram.com/satriabaharii_/",
  },
  {
    title: "Gmail",
    icon: gmail,
    link: "mailto:satriaabaharii@gmail.com",
  },
  {
    title: "Linkedin",
    icon: linkedin,
    link: "https://www.linkedin.com/in/satria-bahari/",
  },
  {
    title: "Tiktok",
    icon: tiktok,
    link: "https://www.tiktok.com/@satriaabaharii/",
  },
] as const;
