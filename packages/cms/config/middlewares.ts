export default function ({env}: {env: any}) {
  return [
    'strapi::logger',
    'strapi::errors',
    'strapi::cors',
    'strapi::poweredBy',
    'strapi::query',
    'strapi::body',
    'strapi::session',
    'strapi::favicon',
    'strapi::public',
    {
      name: 'strapi::security',
      config: {
        contentSecurityPolicy: {
          useDefaults: true,
          directives: {
            'img-src': [
              "'self'",
              'data:',
              'blob:',
              '*.oss-cn-beijing.aliyuncs.com',
            ],
          },
        },
      },
    }
  ];
}
