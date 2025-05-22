import { getAllPosts } from "@/lib/data";


function generateSiteMap(posts : any){
    return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <!-- Add static URLs manually -->
    <url>
    <loc>https://verticalclick.us/</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    </url>
    <url>
    <loc>https://verticalclick.us/about-us</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    </url>
    <url>
    <loc>https://verticalclick.us/contact-us</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    </url>
    <url>
    <loc>https://verticalclick.us/our-work</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    </url>
    <url>
    <loc>https://verticalclick.us/blog</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    </url>
    <url>
    <loc>https://verticalclick.us/website-seo-audit</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    </url>
    <url>
    <loc>https://verticalclick.us/faq</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    </url>
    <url>
    <loc>https://verticalclick.us/our-services</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    </url>

    <url>
    <loc>https://verticalclick.us/our-services/digital-strategy-and-planning</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    </url>
    <url>
    <loc>https://verticalclick.us/our-services/social-media-marketing</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    </url>
    <url>
    <loc>https://verticalclick.us/our-services/creative-strategy-and-web-graphics-design</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    </url>
    <url>
    <loc>https://verticalclick.us/our-services/shopify-website-and-development</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    </url>
    <url>
    <loc>https://verticalclick.us/our-services/software-development</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    </url>
    <url>
    <loc>https://verticalclick.us/our-services/app-development</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    </url>
    <url>
    <loc>https://verticalclick.us/our-services/game-development</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    </url>
    <url>
    <loc>https://verticalclick.us/our-services/online-reputation-management</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    </url>
    <url>
    <loc>https://verticalclick.us/our-services/web-analytics</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    </url>
    <url>
    <loc>https://verticalclick.us/our-services/email-marketing</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    </url>
    <url>
    <loc>https://verticalclick.us/our-services/search-engine-optimization</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    </url>
    <url>
    <loc>https://verticalclick.us/our-services/media-planning-and-buying</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    </url>
    <url>
    <loc>https://verticalclick.us/our-services/videos-gifs-and-content-marketing</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    </url>
    <url>
    <loc>https://verticalclick.us/our-services/website-design-and-development</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    </url>
    <url>
    <loc>https://verticalclick.us/our-services/digital-marketing-services</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    </url>
    <url>
    <loc>https://verticalclick.us/our-services/custom-web-development</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    </url>

     ${posts
       .map(({ node} : {node : any}) => { 
         return `
           <url>
             <loc>${`https://verticalclick.us/blog/${node.slug}`}</loc>
             <lastmod>${new Date(node.date).toISOString()}</lastmod>
           </url>
         `;
       })
       .join('')}
   </urlset>
 `;
}

export async function GET() {
    const postsData = await getAllPosts(); 
    const posts = postsData?.edges || []; 
  
    const sitemap = generateSiteMap(posts);
  
    return new Response(sitemap, {
      headers: {
        'Content-Type': 'text/xml',
      },
    });
  }