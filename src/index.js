// creativecommslab.com tek resmi adres.
// - http -> https ve www -> çıplak alan adı: kalıcı (301) yönlendirme
// - workers.dev ve önizleme adresleri: çalışır ama Google'a "dizine ekleme" denir
const CANONICAL_HOST = "creativecommslab.com";

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const host = url.hostname;

    const isOurDomain = host === CANONICAL_HOST || host.endsWith("." + CANONICAL_HOST);
    if (isOurDomain && (host !== CANONICAL_HOST || url.protocol === "http:")) {
      url.protocol = "https:";
      url.hostname = CANONICAL_HOST;
      url.port = "";
      return Response.redirect(url.toString(), 301);
    }

    const response = await env.ASSETS.fetch(request);

    if (host !== CANONICAL_HOST) {
      const r = new Response(response.body, response);
      r.headers.set("X-Robots-Tag", "noindex, nofollow");
      return r;
    }
    return response;
  },
};
