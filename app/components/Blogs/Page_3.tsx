import React from 'react'
import Image from 'next/image'
import computerSetup from '../../components/assets/blogs/lastBlog.png'
import aiArt1 from '../../components/assets/blogs/blogFeatPost_2.png'
import aiArt2 from '../../components/assets/blogs/blogFeatPost_3.png'
import aiArt3 from '../../components/assets/blogs/blogFeatPost_4.png'

const Page_3 = () => {
  const featuredPost = {
    title: "The Best AI Art Generator Tools For Elevating Your NFT Game",
    date: "December 10, 2022",
    description: "Discover the top AI-powered tools that can revolutionize your NFT art creation process. Learn how these innovative technologies can enhance your digital artwork and boost your presence in the NFT marketplace.",
    image: computerSetup
  }

  const additionalFeaturedPosts = [
    {
      title: "Midjourney: Creating Stunning NFT Collections",
      date: "December 10, 2022",
      description: "Explore how Midjourney's AI can help you generate unique and captivating NFT collections.",
      image: aiArt1
    },
    {
      title: "DALL-E 2: Transforming Text into NFT Art",
      date: "December 10, 2022",
      description: "Learn to leverage DALL-E 2's powerful text-to-image capabilities for creating innovative NFTs.",
      image: aiArt2
    },
    {
      title: "Stable Diffusion: Fine-Tuning AI for NFT Creation",
      date: "December 10, 2022",
      description: "Discover how to use Stable Diffusion to create highly customized and unique NFT artworks.",
      image: aiArt3
    }
  ]

  const trendingPosts = [
    {
      number: "01",
      title: "5 Key Factors in Choosing Your First Blog Topic",
      description: "Learn how to select a compelling and sustainable topic for your first blog post that aligns with your interests and audience needs.",
    },
    {
      number: "02",
      title: "The Rise of AI-Generated Content in Blogging",
      description: "Explore the growing trend of AI-assisted content creation and its impact on the blogging landscape.",
    },
    {
      number: "03",
      title: "Monetizing Your Blog: Strategies for 2023",
      description: "Discover effective methods to turn your blog into a revenue stream, including affiliate marketing, sponsored content, and digital products.",
    },
    {
      number: "04",
      title: "The Best AI Art Generator Tools For Elevating Your NFT Game",
      description: "Discover the top AI-powered tools that can revolutionize your NFT art creation process. Learn how these innovative technologies can enhance your digital artwork and boost your presence in the NFT marketplace.",
    }
  ]

  return (
    <div className="bg-white py-16">
      <div className="container flex justify-between mx-auto px-[5.8vw]">
        <div className="w-2/3 pr-8">
          <h2 className="text-4xl font-bold mb-8">Featured Posts</h2>
          <div className="bg-gray-100 rounded-lg overflow-hidden mb-8">
            <Image src={featuredPost.image} alt="Computer Setup" width={1200} height={600} className="w-full h-64 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">{featuredPost.title}</h3>
              <p className="text-gray-600 text-sm mb-3">{featuredPost.date}</p>
              <p className="text-gray-700">{featuredPost.description}</p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {additionalFeaturedPosts.map((post, index) => (
              <div key={index} className="bg-gray-100 rounded-lg overflow-hidden">
                <Image src={post.image} alt={post.title} width={400} height={200} className="w-full h-32 object-cover" />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
                  <p className="text-gray-600 text-xs mb-2">{post.date}</p>
                  <p className="text-gray-700 text-sm">{post.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-1/3">
          <h2 className="text-4xl font-bold mb-8">Trending</h2>
          <div className="space-y-16">
            {trendingPosts.map((post, index) => (
              <div key={index} className="flex">
                <div className="text-4xl font-bold text-gray-300 mr-6">{post.number}</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                  <p className="text-gray-700">{post.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page_3