export default ({env}: {env: any}) => ({
    upload: {
        config: {
          provider: 'strapi-provider-upload-oss', // full package name is required
          providerOptions: {
            accessKeyId: env('OSS_ACCESS_KEY_ID'),  // required
            accessKeySecret: env('OSS_ACCESS_KEY_SECRET'), // required
            region: env('OSS_REGION'), // required
            bucket: env('OSS_BUCKET'), // required
          }
        }
      }
});
