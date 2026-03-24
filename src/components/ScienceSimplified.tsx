const youtubeChannels = [
  {
    name: "Chitti Tamil",
    description: "Explore fascinating science concepts explained in Tamil through engaging videos and entertaining content.",
    channelUrl: "https://youtube.com/@chitti_tamil?si=xNkFfqYTRbrY45-b",
    subscribers: "1.2M+",
    category: "Science & Entertainment",
    logo: "https://yt3.googleusercontent.com/n5buBylgRIT5zu_Eik8UsCqmV3uCcQlIu0HnW2JPxQxjDt8XTbkzi4bUW64E-JFvtpgyrcXP-g=s160-c-k-c0x00ffffff-no-rj",
    icon: "🎬"
  },
  {
    name: "Dr Binocs Tamil",
    description: "Educational science content in Tamil featuring Dr. Binocs explaining complex scientific phenomena in simple terms.",
    channelUrl: "https://youtube.com/@drbinocsthamil?feature=shared",
    subscribers: "2.5M+",
    category: "Educational Science",
    logo: "https://yt3.ggpht.com/ytc/AKedOLQzUPNpWC-8vGFnVqWH4dFCBNJy-7bKlxCPqg=s88-c-k-c0x00ffffff-no-rj",
    icon: "🧪"
  },
  {
    name: "Science Channel",
    description: "Comprehensive science and education content covering physics, chemistry, biology, and technology topics.",
    channelUrl: "https://www.youtube.com/channel/UCNwcxhfBVDgwx9Lv3CBpu6A",
    subscribers: "800K+",
    category: "STEM Education",
    logo: "https://yt3.ggpht.com/ytc/AKedOLRF2Nd_7q3M6PV9UJZhJ5DQfPfYuYrXqnLx7w=s88-c-k-c0x00ffffff-no-rj",
    icon: "🔬"
  }
];

export default function ScienceSimplified() {
    return (
        <div className="min-h-screen bg-background text-foreground">
          {/* Header Section */}
          <div className="flex flex-col items-center justify-center bg-gradient-to-b from-primary/10 to-background py-20 px-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold mb-6 text-foreground" style={{ textShadow: '3px 3px 0px rgba(80, 20, 100, 0.4)' }}>Science Simplified</h1>
            <p className="text-lg text-muted-foreground max-w-3xl text-center">
              Dive into the world of science with our simplified explanations, engaging visuals, and real-world applications. Whether you're a student, educator, or just curious about how things work, Science Simplified makes complex scientific concepts easy to understand and fun to explore.
            </p>
          </div>

          {/* YouTube Content Section */}
          <div className="py-20 px-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-accent/10 to-primary/10 pointer-events-none" />
            <div className="relative z-10 container mx-auto max-w-6xl">
              <div className="text-center mb-16">
                <h2 className="text-4xl sm:text-5xl font-heading font-bold mb-4 text-foreground">Top YouTube Channels</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Subscribe to these amazing science and education channels for engaging content that makes learning fun and accessible.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {youtubeChannels.map((channel, index) => (
                  <a
                    key={index}
                    href={channel.channelUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-background rounded-lg shadow-lg p-8 hover:shadow-2xl transition-all duration-300 border border-border hover:border-primary/50 hover:scale-105"
                  >
                    {/* Channel Logo */}
                    <div className="mb-6 flex justify-center">
                      <div className="relative">
                        <img 
                          src={channel.logo} 
                          alt={channel.name}
                          className="w-24 h-24 rounded-full border-4 border-primary/30 group-hover:border-primary/80 transition-all duration-300 object-cover group-hover:scale-110"
                          onError={(e) => {
                            // Fallback to emoji if logo fails to load
                            (e.target as HTMLElement).style.display = 'none';
                            const parent = (e.target as HTMLElement).parentElement;
                            if (parent) {
                              parent.innerHTML = `<div class="text-6xl">${channel.icon}</div>`;
                            }
                          }}
                        />
                      </div>
                    </div>

                    {/* YouTube Badge */}
                    <div className="flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-red-600 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                      </svg>
                      <span className="text-sm font-semibold text-muted-foreground">{channel.subscribers} Subscribers</span>
                    </div>

                    {/* Channel Name */}
                    <h3 className="text-2xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                      {channel.name}
                    </h3>

                    {/* Category Badge */}
                    <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
                      {channel.category}
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {channel.description}
                    </p>

                    {/* Visit Channel Button */}
                    <div className="flex items-center text-primary font-semibold group-hover:gap-3 transition-all">
                      <span>Visit Channel</span>
                      <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </div>
                  </a>
                ))}
              </div>

              {/* CTA Section */}
              <div className="mt-16 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg p-8 text-center border border-primary/30">
                <h3 className="text-2xl font-bold mb-4 text-foreground">Subscribe & Stay Updated</h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Click on any channel above to explore amazing science content. Don't forget to subscribe and hit the notification bell to stay updated with the latest videos!
                </p>
              </div>
            </div>
          </div>
        </div>
    );
}