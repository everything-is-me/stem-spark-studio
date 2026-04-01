import { useState, useEffect } from "react";
import hindu from "@/assets/news/hindu.png";
import ndtv from "@/assets/news/ndtv.jpeg";

interface NewsItem {
  title: string;
  excerpt: string;
  link: string;
  source: string;
  logo: string;
  image?: string;
  pubDate?: string;
}

const RSS_FEEDS = {
  hindu: "https://api.rss2json.com/v1/api.json?rss_url=https://www.thehindu.com/sci-tech/science/?service=rss",
  toi: "https://api.rss2json.com/v1/api.json?rss_url=https://timesofindia.indiatimes.com/rssfeeds/-2128672765.cms",
  ndtv: "https://api.rss2json.com/v1/api.json?rss_url=https://news.google.com/rss/search?q=site:ndtv.com+science&hl=en-IN&gl=IN&ceid=IN:en"
};

export default function TrendingNews() {
  const [newsItems, setNewsItems] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const [hinduResponse, toiResponse, ndtvResponse] = await Promise.all([
          fetch(RSS_FEEDS.hindu),
          fetch(RSS_FEEDS.toi),
          fetch(RSS_FEEDS.ndtv)
        ]);

        const [hinduData, toiData, ndtvData] = await Promise.all([
          hinduResponse.json(),
          toiResponse.json(),
          ndtvResponse.json()
        ]);

        console.log('Hindu data:', hinduData);
        console.log('TOI data:', toiData);
        console.log('NDTV data:', ndtvData);

        const extractImage = (item: any) => {
          // Try enclosure first
          if (item.enclosure?.url) return item.enclosure.url;
          if (item.enclosure?.link) return item.enclosure.link;

          // Try media content
          if (item.media?.content?.url) return item.media.content.url;
          if (item.media?.thumbnail?.url) return item.media.thumbnail.url;

          // Extract from description HTML
          const imgMatch = item.description?.match(/<img[^>]+src="([^">]+)"/);
          if (imgMatch) return imgMatch[1];

          return null;
        };

        const hinduItems = (hinduData.items || [])
          .filter((item: any) =>
            item.title?.toLowerCase().includes('science') ||
            item.title?.toLowerCase().includes('space') ||
            item.title?.toLowerCase().includes('tech') ||
            item.title?.toLowerCase().includes('research') ||
            item.title?.toLowerCase().includes('discovery') ||
            item.description?.toLowerCase().includes('science') ||
            item.description?.toLowerCase().includes('space') ||
            item.description?.toLowerCase().includes('tech') ||
            item.description?.toLowerCase().includes('research') ||
            item.description?.toLowerCase().includes('discovery')
          )
          .slice(0, 2)
          .map((item: any) => ({
            title: item.title,
            excerpt: item.description?.replace(/<[^>]*>/g, '').substring(0, 150) + '...',
            link: item.link,
            source: "The Hindu",
            logo: hindu,
            image: extractImage(item),
            pubDate: item.pubDate
          }));

        const toiItems = (toiData.items || [])
          .filter((item: any) =>
            item.title?.toLowerCase().includes('science') ||
            item.title?.toLowerCase().includes('space') ||
            item.title?.toLowerCase().includes('tech') ||
            item.title?.toLowerCase().includes('research') ||
            item.title?.toLowerCase().includes('discovery') ||
            item.description?.toLowerCase().includes('science') ||
            item.description?.toLowerCase().includes('space') ||
            item.description?.toLowerCase().includes('tech') ||
            item.description?.toLowerCase().includes('research') ||
            item.description?.toLowerCase().includes('discovery')
          )
          .slice(0, 2)
          .map((item: any) => ({
            title: item.title,
            excerpt: item.description?.replace(/<[^>]*>/g, '').substring(0, 150) + '...',
            link: item.link,
            source: "Times of India",
            logo: "https://timesofindia.indiatimes.com/photo/507610.cms",
            image: extractImage(item),
            pubDate: item.pubDate
          }));

        const ndtvItems = (ndtvData.items || [])
          .slice(0, 2)
          .map((item: any) => ({
            title: item.title,
            excerpt: item.description?.replace(/<[^>]*>/g, '').substring(0, 150) + '...',
            link: item.link,
            source: "NDTV",
            logo: ndtv,
            image: extractImage(item),
            pubDate: item.pubDate
          }));

        const allItems = [...hinduItems, ...toiItems, ...ndtvItems].sort((a, b) =>
          new Date(b.pubDate || 0).getTime() - new Date(a.pubDate || 0).getTime()
        ).slice(0, 6);

        setNewsItems(allItems);
      } catch (error) {
        console.error('Error fetching news:', error);
        // Fallback to static content if API fails
        setNewsItems([
          {
            title: "India's Aditya-L1 solar mission completes one year in space",
            excerpt: "ISRO's first solar observatory has successfully completed one year in orbit, providing valuable data about the Sun's corona and solar winds.",
            link: "https://www.thehindu.com/sci-tech/science/",
            source: "The Hindu",
            logo: hindu,
            image: null,
          },
          {
            title: "NASA's Artemis II crew announced for Moon mission",
            excerpt: "NASA reveals the four astronauts who will fly around the Moon in 2025, including the first woman and next man to orbit Earth's natural satellite.",
            link: "https://www.ndtv.com/science",
            source: "NDTV",
            logo: ndtv,
            image: null,
          },
          {
            title: "Breakthrough in Alzheimer's drug development",
            excerpt: "New drug shows promising results in clinical trials, potentially slowing cognitive decline in early-stage Alzheimer's patients.",
            link: "https://www.thehindu.com/sci-tech/science/",
            source: "The Hindu",
            logo: hindu,
            image: null,
          },
          {
            title: "James Webb Space Telescope captures stunning images of distant galaxies",
            excerpt: "The telescope reveals unprecedented details of galaxy formation and evolution in the early universe.",
            link: "https://timesofindia.indiatimes.com/science",
            source: "Times of India",
            logo: "https://timesofindia.indiatimes.com/photo/507610.cms",
            image: null,
          },
          {
            title: "ISRO to launch more scientific satellites in 2025",
            excerpt: "Indian Space Research Organisation plans a series of satellite launches focused on space science and planetary exploration.",
            link: "https://www.ndtv.com/science",
            source: "NDTV",
            logo: ndtv,
            image: null,
          },
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) {
    return (
      <section className="py-20 bg-card text-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 pointer-events-none" />
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-4xl sm:text-5xl lg:text-6xl font-heading font-bold mt-4 text-foreground" style={{ textShadow: '2px 2px 0px rgba(80, 20, 100, 0.4)' }}>Trending News</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Stay updated with the latest breakthroughs, discoveries, and innovations—curated from trusted sources.
          </p>
          <div className="mt-12 flex justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-card text-foreground relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 pointer-events-none" />
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-4xl sm:text-5xl lg:text-6xl font-heading font-bold mt-4 text-foreground" style={{ textShadow: '2px 2px 0px rgba(80, 20, 100, 0.4)' }}>Trending News</h2>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          Stay updated with the latest breakthroughs, discoveries, and innovations—curated from trusted sources.
        </p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <div key={index} className="flex flex-col align-center bg-background rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-border">
              {item.image && (
                <div className="mb-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover rounded-lg"
                    onError={(e) => {
                      // Hide image if it fails to load
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                </div>
              )}
              <div className="flex items-center mb-4">
                <img src={item.logo} alt={item.source} className="w-8 h-8 mr-3 rounded" />
                <span className="text-sm text-muted-foreground"> Credits: {item.source}</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">{item.title}</h3>
              <p className="text-muted-foreground mb-4">{item.excerpt}</p>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-primary hover:text-primary/80 font-medium"
              >
                Read more
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
