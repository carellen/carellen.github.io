(function () {
  document.addEventListener('alpine:init', () => {
    Alpine.store('data', {
      experience: [
        {
          position: 'Ruby on Rails full-stack developer, DevOps',
          company: 'Amptrack Technologies AB',
          period: 'May 2021 - Present',
          project: 'Amped Studio (https://ampedstudio.com/)',
          description: 'Application for music creators.',
          stack: 'Ruby On Rails 6.1.3.1, Vue.js, Hotwire, TailwindCSS, PostgreSQL, Docker, AWS',
          duties: [
            'Site performance optimization using pagespeed.web.dev, Google Search Console (from 50% to 99%)',
            'Frontend refactoring (Vue.js -> Hotwire, Webpack -> Esbuild',
            'Infrastructure optimization (AWS EB -> ECS, Cloudfront, WAF)',
            'File uploading improvements (carrierwave -> shrine)',
            'Payment system integration (Stripe Checkout, Google Pay)',
            'C2C integration using Stripe Connect',
            'Subscription monitoring and management',
            'Setup and support several domains',
            'Discourse forum for community',
            'Affiliate program implementation',
            'Google Merchant integration'
          ]
        },
        {
          position: 'Founder',
          company: 'Self-Employed',
          period: 'Sep 2022 - Oct 2022',
          project: 'Meal Calendar (http://meal-calendar.com/)',
          description: '(STARTUP) Application for scheduling your menu.',
          stack: 'Rails 7, Hotwire, Stimulus, TailwindCSS, AWS.',
          duties: [
            'Setup domain and deployment process',
            'Design and business logic development',
            'Launch, monitoring, and respect from my wife:)'
          ]
        },
        {
          position: 'Ruby on Rails full-stack developer',
          company: 'Elixirator',
          period: 'May 2022 - Jul 2022',
          project: 'Cocoli (https://cocoli.com)',
          description: 'E-commerce web-app for second-hand furniture sales.',
          stack: 'Rails 6, Stimulus, Bootstrap, Heroku.',
          duties: [
            'Site performance improvements(responsive images, template fixes, diagnostic)',
            'Dynamic (editable) content block feature(aka mini CMS)',
            'Email templates painful creation'
          ]
        },
        {
          position: 'Ruby on Rails full-stack developer',
          company: 'UNPOS',
          period: 'Sep 2021 - Feb 2022',
          project: 'Unpos',
          description: 'Drugstore management application.',
          stack: 'Ruby On Rails 6, Stimulus.js, PostgreSQL.',
          duties: [
            'Migration from the old jQuery-like frontend to modern Stimulus+Hotwire stack',
            'Batch management architecture development',
            'Update and refactoring specs'
          ]
        },
        {
          position: 'Ruby on Rails full-stack developer',
          company: 'Yandex Taxi',
          period: 'Apr 2020 - Apr 2021',
          project: 'Yandex Taxi Education',
          description: 'Application for taxi driver`s education and on-boarding',
          stack: 'Ruby On Rails 6.0, Angular4, PostgreSQL, Docker, QLoud',
          duties: [
            'Speed up queries on backend',
            'Adding new features'
          ]
        },
        {
          position: 'Ruby on Rails full-stack developer, co-founder',
          company: 'BluEgg OU',
          period: 'Jul 2019 - May 2020',
          project: 'Insighter (http://team-scanner.com)',
          description: '(STARTUP) Application for team building based on people`s psychological portrait.',
          stack: 'Ruby On Rails 5.2, Stimulus.js, PostgreSQL, MySQL, Docker',
          duties: [
            'Creating application from scratch',
            'IBM Watson API integration',
            'Setup Zoomcharts library',
            'Google, Facebook, LinkedIn, Slack APIs integrations',
            'Create and publish Chrome Extension',
            'Setup O*NET DB as the second database',
            'Setup Stripe payment system',
            'Dockerizing and managing infrastructure'
          ]
        },
        {
          position: 'Ruby on Rails full-stack developer',
          company: 'Rubyroidlabs, Inc',
          period: 'May 2019 - Feb 2020',
          project: 'Sail Croatia (https://www.sail-croatia.com)',
          description: 'CRM for cruise booking management and webapp for customers.',
          stack: 'Ruby On Rails 4.2, Vue.js, TypeScript, PostgreSQL',
          duties: [
            'Brand New customer interface development',
            'Update and refactoring Stripe API logic'
          ]
        },
        {
          position: 'Ruby on Rails full-stack developer',
          company: 'Self-Employed',
          period: 'May 2019 - Jul 2019',
          project: 'IoT',
          description: 'Small application for aggregation data from environmental sensors.',
          stack: 'RoR 6, Node.js, AWS Lambda',
          duties: [
            'Optimize AWS resources consumption',
            'Adding admin interface'
          ]
        },
        {
          position: 'Ruby on Rails full-stack developer',
          company: 'Rubyroidlabs, Inc',
          period: 'Dec 2018 - May 2019',
          project: 'Kokutai',
          description: 'Sports app for creating and maintain different competition events in Japan.',
          stack: 'Ruby On Rails 5.2, Vue.js, MySQL',
          duties: [
            'PDF reports using WickedPDF mostly'
          ]
        },
        {
          position: 'Ruby on Rails full-stack developer',
          company: 'Rubyroidlabs, Inc',
          period: 'Nov 2018 - May 2019',
          project: 'Kobun',
          description: 'Online shop for parents in Japan as part of the big existing trade net.',
          stack: 'Ruby On Rails 5.2, Stimulus.js, PostgreSQL',
          duties: [
            'UI for school goodies store',
            'Some Japan Payment System integration',
            'Backend logic for ordering'
          ]
        },
        {
          position: 'Ruby on Rails full-stack developer',
          company: 'Self-Employed',
          period: 'Aug 2018 - Oct 2018',
          project: 'WMS system',
          description: 'Commercial platform for customers and retailers with orders, batches, WMS, and subscriptions.',
          stack: 'Ruby On Rails, Coffee script, PostgreSQL',
          duties: [
            'Creating new features, nothing special'
          ]
        },
        {
          position: 'Ruby on Rails full-stack developer',
          company: 'ANADEA',
          period: 'Jun 2018 - Jul 2018',
          project: 'Shiphawk',
          description: 'Big application for US delivery company',
          stack: 'Ruby On Rails, React.js, PostgreSQL.',
          duties: [
            'Bug fixing',
            'Specs writing'
          ]
        },
        {
          position: 'Ruby on Rails full-stack developer',
          company: 'ANADEA',
          period: 'Mar 2018 - May 2018',
          project: 'Plei',
          description: 'Soccer field rental app for https://mingleandplei.com/',
          stack: 'Ruby On Rails 5, React.js, PostgreSQL',
          duties: [
            'Implement round robin algorithm for tournaments'
          ]
        },
        {
          position: 'Ruby on Rails developer',
          company: 'ANADEA',
          period: 'Oct 2017 - Feb 2018',
          project: 'Play integration platform (internal).',
          description: 'Service for integration of different platforms for tournaments creation and support.',
          stack: 'Ruby On Rails 5, React.js, PostgreSQL.',
          duties: [
            'Creating DB structure',
            'Implement login system',
            'Design and develop interfaces'
          ]
        },
        {
          position: 'Java developer',
          company: 'TODES',
          period: 'Mar 2017 - Aug 2017',
          project: 'Other',
          description: 'Several apps for the government, mainly for the store and fetch reports.',
          stack: 'Java, Primefaces, Angular2, JavaScript, Eclipse BIRT, Oracle, PostgreSQL.',
          duties: [
            'Creating statistic reports',
            'UI refactoring using Angular2',
            'Bug fixing'
          ]
        }
      ]
    })
  })
})();
