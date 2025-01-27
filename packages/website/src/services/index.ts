export const fetchStrapi = async (
    path: string,
    params?: Record<string, string>,
    noCache = false,
) => {
    const url = new URL(`${process.env.STRAPI_API_URL}/api/${path}`);
    if (params) {
    url.search = new URLSearchParams(params).toString();
    }
    return fetch(url.toString(), {
        headers: {
            'Authorization': `Bearer ${process.env.STRAPI_API_TOKEN}`,
            'Content-Type': 'application/json',
        },
        ...noCache ? {cache: 'no-store'} : {},
    });
}