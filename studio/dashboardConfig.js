export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '612bbfcf0d73d535a017f21d',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-y1qwrz1k',
                  apiId: '08ae1592-3537-497d-a0b7-faeaa076f9cf'
                },
                {
                  buildHookId: '612bbfcff266622d937b4624',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-tj45kb9m',
                  apiId: '0456fb1a-6409-444c-b0af-54fad948b9ae'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/theprogrammedwords/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-tj45kb9m.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
