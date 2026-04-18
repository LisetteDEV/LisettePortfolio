import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  fr: {
    translation: {
      nav: {
        accueil: 'Accueil',
        apropos: 'À propos',
        competences: 'Compétences',
        projets: 'Projets',
        services: 'Services',
        faq: 'FAQ',
        contact: 'Contact',
        cta: 'Me contacter',
      },
      hero: {
        greeting: 'Bonjour, je suis',
        title: 'Développeuse web moderne',
        description: 'Passionnée par la conception d\'expériences numériques modernes et intuitives. Je donne vie à des idées à travers le code.',
        cta_primary: 'Mon GitHub',
        cta_secondary: 'Me contacter',
      },
      about: {
        tag: 'À propos de moi',
        title: 'Passionnée de code et d\'innovation',
        p1: 'Je suis Lisette Obognon, développeuse web fullstack et étudiante en troisième année à l\'Institut Universitaire des Technologies de l\'Université de Parakou, au Bénin. Passionnée par la conception d\'expériences numériques modernes et intuitives, j\'aime donner vie à des idées à travers le code, du design de l\'interface jusqu\'au serveur.',
        p2: 'Avec plus de 2 ans d\'expérience dans le développement web, j\'ai eu l\'occasion de travailler sur des projets variés, alliant esthétique soignée et logique technique rigoureuse. Cette expérience m\'a permis de maîtriser aussi bien le frontend que le backend, en concevant des solutions fiables et performantes.',
        p3: 'Mon objectif est de contribuer à des projets innovants qui ont un impact réel, tout en continuant à évoluer en tant que développeuse. Je suis ouverte aux collaborations, projets et opportunités freelance qui me permettront de repousser mes limites et de créer des solutions qui font la différence.',
        location: 'Parakou, Bénin',
        status: 'Étudiante en IUT , 3ème année',
        disponible: 'Disponible pour projets & Collaborations',
        cta: 'Télécharger mon CV',
      },
    },
  },
  en: {
    translation: {
      nav: {
        accueil: 'Home',
        apropos: 'About',
        competences: 'Skills',
        projets: 'Projects',
        contact: 'Contact',
        cta: 'Contact me',
      },
      hero: {
        greeting: 'Hello, I am',
        title: 'Modern web developer',
        description: 'Passionate about building modern and intuitive digital experiences. I bring ideas to life through code.',
        cta_primary: 'My projects',
        cta_secondary: 'Contact me',
      },
      about: {
        tag: 'About me',
        title: 'Passionate about code and innovation',
        p1: 'I am Lisette Obognon, a fullstack web developer and third-year student at the University Institute of Technology of the University of Parakou, in Benin. Passionate about designing modern and intuitive digital experiences, I love bringing ideas to life through code — from interface design to the server.',
        p2: 'With over 2 years of experience in web development, I have had the opportunity to work on diverse projects, combining refined aesthetics with rigorous technical logic. This experience has allowed me to master both frontend and backend, delivering reliable and performant solutions.',
        p3: 'My goal is to contribute to innovative projects that have a real impact, while continuing to grow as a developer. I am open to collaborations, projects and freelance opportunities that will allow me to push my limits and create solutions that make a difference.',
        location: 'Parakou, Benin',
        status: 'IUT Student , 3rd year',
        disponible: 'Available for projects & internships',
        cta: 'Download my CV',
      },
    },
  },
}

i18n.use(initReactI18next).init({
  resources,
  lng: 'fr',
  fallbackLng: 'fr',
  interpolation: { escapeValue: false },
})

export default i18n